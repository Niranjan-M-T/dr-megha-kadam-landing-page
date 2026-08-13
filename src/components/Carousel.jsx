'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const INTERVAL = 4500

/**
 * Auto-advancing single-frame carousel with a crossfade.
 *
 * Deliberately plain: no drag library, no springs. It sits mid-page on a paid
 * landing page, so the cost of the feature has to stay near zero.
 *
 * Behaviour worth knowing:
 * - Auto-advance stops on hover, on keyboard focus, and when the tab is hidden,
 *   so it is not burning through slides while nobody is looking.
 * - Under prefers-reduced-motion it does not advance on its own at all. The
 *   arrows and dots still work, so the content stays reachable.
 * - All slides are in the DOM at once and crossfaded, which keeps the frame
 *   height fixed and avoids any layout shift as slides change.
 */
export default function Carousel({ slides, ariaLabel = 'Photos' }) {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const go = useCallback(
    (n) => setI((prev) => (n + slides.length) % slides.length),
    [slides.length]
  )

  // `i` is a dependency on purpose: every change, manual or automatic, restarts
  // the clock. Without it the interval keeps its original phase and a slide the
  // visitor just chose can be pulled away a moment later.
  useEffect(() => {
    if (paused || reduced || slides.length < 2) return
    const id = setTimeout(() => setI((p) => (p + 1) % slides.length), INTERVAL)
    return () => clearTimeout(id)
  }, [paused, reduced, slides.length, i])

  // Don't advance in a backgrounded tab.
  useEffect(() => {
    const onVis = () => setPaused(document.hidden)
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  const onKey = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(i - 1) }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(i + 1) }
  }

  return (
    <div
      className="carousel"
      ref={rootRef}
      role="group"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget)) setPaused(false)
      }}
      onKeyDown={onKey}
    >
      <div className="carousel-frame">
        {slides.map((s, n) => (
          <figure
            key={s.stem}
            className={`carousel-slide${n === i ? ' is-active' : ''}`}
            aria-hidden={n !== i}
          >
            <img
              src={`/photos/${s.stem}.jpg`}
              srcSet={s.widths.map((w) => `/photos/${s.stem}-${w}.webp ${w}w`).join(', ')}
              sizes="(max-width: 720px) 92vw, 620px"
              width={s.w}
              height={s.h}
              alt={s.alt}
              /* the first slide is what everyone sees, the rest can wait */
              loading={n === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <figcaption>{s.caption}</figcaption>
          </figure>
        ))}

        <button
          type="button"
          className="carousel-arrow carousel-prev"
          onClick={() => go(i - 1)}
          aria-label="Previous photo"
        >
          <ChevronLeft size={20} strokeWidth={2.4} />
        </button>
        <button
          type="button"
          className="carousel-arrow carousel-next"
          onClick={() => go(i + 1)}
          aria-label="Next photo"
        >
          <ChevronRight size={20} strokeWidth={2.4} />
        </button>
      </div>

      <div className="carousel-dots" role="tablist" aria-label="Choose a photo">
        {slides.map((s, n) => (
          <button
            key={s.stem}
            type="button"
            role="tab"
            aria-selected={n === i}
            aria-label={`Photo ${n + 1} of ${slides.length}`}
            className={`carousel-dot${n === i ? ' is-active' : ''}`}
            onClick={() => go(n)}
          />
        ))}
      </div>

      {/* Announces slide changes without moving focus. */}
      <p className="sr-only" aria-live="polite">
        {slides[i].caption}
      </p>
    </div>
  )
}
