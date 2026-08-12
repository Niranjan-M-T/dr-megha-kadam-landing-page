'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useTransform } from 'framer-motion'
import { Milk } from 'lucide-react'
import useElementProgress from '../hooks/useElementProgress'

const helps = [
  'Latching & positioning support',
  'Feeding schedules & cluster feeding',
  'Pumping, storage & back-to-work plans',
  'Low-supply worries & maternal nutrition',
]

export default function Lactation() {
  const ref = useRef(null)
  const scrollYProgress = useElementProgress(ref, 1, 0)
  const cardY = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section className="lactation" id="lactation" ref={ref}>
      <div className="container lact-grid">
        <motion.div
          className="lact-copy"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow eyebrow-light">For new mothers</span>
          <h2>
            The early days are tender. <em>You deserve real support.</em>
          </h2>
          <p>
            As an <strong>International Board-Certified Lactation Consultant (IBCLC)</strong>,
            Dr. Megha offers specialised, judgment-free support through the earliest weeks of
            motherhood — because feeding your baby should feel empowering, not exhausting.
          </p>
          <ul className="check-list">
            {helps.map((h) => (
              <li key={h}>
                <span aria-hidden="true">✓</span> {h}
              </li>
            ))}
          </ul>
          <button
            className="btn btn-light"
            onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open_appointment_modal'))}
            data-conversion-name="appointment_modal_open"
            data-conversion-category="lactation_section"
            data-conversion-location="lactation"
          >
            Plan a Lactation Visit
          </button>
        </motion.div>

        <motion.div className="lact-visual" style={{ y: cardY }}>
          <div className="lact-card">
            <span className="lact-icon"><Milk size={36} strokeWidth={1.4} /></span>
            <p>
              “The first six weeks are where mothers need the most support — and receive the
              least. That is exactly where I try to be.”
            </p>
            <cite>— Dr. Megha D Kadam, IBCLC</cite>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
