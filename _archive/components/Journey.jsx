'use client'

import { useRef } from 'react'
import { motion, useTransform } from 'framer-motion'
import { Baby, Milk, Apple, TrendingUp } from 'lucide-react'
import useElementProgress from '../hooks/useElementProgress'

const stages = [
  {
    icon: Baby,
    age: 'The first hours',
    title: 'Safe arrivals, watched over',
    text: 'Advanced neonatal resuscitation and critical newborn care for babies who need extra attention in their very first hours — with clear, honest communication for the parents living through them.',
  },
  {
    icon: Milk,
    age: 'The first year',
    title: 'Feeding, growing, thriving',
    text: 'Latching, feeding schedules, sleep and weight gain — judgment-free, IBCLC-certified lactation support and careful growth monitoring through the most tender year of all.',
  },
  {
    icon: Apple,
    age: 'The toddler years',
    title: 'Strong little foundations',
    text: 'Practical nutrition for fussy eaters, developmental check-ins that catch things early, and quick answers for every bump, rash and sniffle along the way.',
  },
  {
    icon: TrendingUp,
    age: 'Growing up',
    title: 'A confident childhood',
    text: 'Regular checkups, accurate diagnoses and guidance that leaves you knowing exactly what to do next — and why. Care that grows with your child.',
  },
]

function Stage({ stage, index, total, progress }) {
  const start = index / total
  const end = (index + 1) / total
  const fade = 0.3 / total

  const opacity = useTransform(
    progress,
    index === 0
      ? [0, end - fade, end]
      : index === total - 1
        ? [start, start + fade, 1]
        : [start, start + fade, end - fade, end],
    index === 0 ? [1, 1, 0] : index === total - 1 ? [0, 1, 1] : [0, 1, 1, 0],
  )
  const y = useTransform(
    progress,
    index === 0
      ? [0, end - fade, end]
      : index === total - 1
        ? [start, start + fade, 1]
        : [start, start + fade, end - fade, end],
    index === 0 ? [0, 0, -36] : index === total - 1 ? [36, 0, 0] : [36, 0, 0, -36],
  )

  const Icon = stage.icon
  return (
    <motion.div className="journey-stage" style={{ opacity, y }}>
      <span className="stage-icon"><Icon size={30} strokeWidth={1.5} /></span>
      <span className="stage-age">{stage.age}</span>
      <h3>{stage.title}</h3>
      <p>{stage.text}</p>
    </motion.div>
  )
}

function Dot({ index, total, progress }) {
  const start = index / total
  const end = (index + 1) / total
  const scale = useTransform(progress, [start - 0.02, start + 0.02, end - 0.02, end + 0.02], [1, 1.5, 1.5, 1])
  const opacity = useTransform(progress, [start - 0.02, start + 0.02, end - 0.02, end + 0.02], [0.35, 1, 1, 0.35])
  return <motion.span className="jp-dot" style={{ scale, opacity }} />
}

export default function Journey() {
  const ref = useRef(null)
  const scrollYProgress = useElementProgress(ref, 0, 1)
  const fillScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className="journey" id="care" ref={ref} style={{ height: `${stages.length * 95}vh` }}>
      <div className="journey-sticky">
        <div className="container journey-layout">
          <div className="journey-head">
            <span className="eyebrow">Care through every stage</span>
            <h2>
              From first breath to <em>first day of school</em>
            </h2>
            <p className="journey-hint">Keep scrolling — care that grows with your child.</p>

            <div className="journey-progress" aria-hidden="true">
              <span className="jp-track">
                <motion.span className="jp-fill" style={{ scaleY: fillScale }} />
              </span>
              <div className="jp-dots">
                {stages.map((s, i) => (
                  <Dot key={s.age} index={i} total={stages.length} progress={scrollYProgress} />
                ))}
              </div>
            </div>
          </div>

          <div className="journey-stages">
            {stages.map((s, i) => (
              <Stage key={s.age} stage={s} index={i} total={stages.length} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
