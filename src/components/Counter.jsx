'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start
    let raf
    const duration = 1300
    const tick = (t) => {
      if (start === undefined) start = t
      const p = Math.min(1, (t - start) / duration)
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  )
}
