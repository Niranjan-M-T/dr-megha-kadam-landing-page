import { useEffect } from 'react'
import { useMotionValue } from 'framer-motion'

/**
 * Scroll progress of an element through the viewport, computed manually —
 * framer-motion's target-based useScroll silently fails in some browsers
 * (broken native ScrollTimeline detection), so we track it ourselves.
 *
 * 0 when the element's top reaches `startFrac` × viewport height,
 * 1 when the element's bottom reaches `endFrac` × viewport height.
 * e.g. (0, 1) ≡ useScroll offset ['start start', 'end end'] (pinned sections),
 *      (1, 0) ≡ ['start end', 'end start'] (full traversal parallax).
 */
export default function useElementProgress(ref, startFrac, endFrac) {
  const progress = useMotionValue(0)

  useEffect(() => {
    const update = () => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const denom = r.height + (startFrac - endFrac) * vh
      const p = denom > 0 ? (startFrac * vh - r.top) / denom : 1
      progress.set(Math.min(1, Math.max(0, p)))
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ref, startFrac, endFrac, progress])

  return progress
}
