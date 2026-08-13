'use client'

import { useRef } from 'react'
import { motion, useTransform } from 'framer-motion'
import { ShieldCheck, Syringe } from 'lucide-react'
import useElementProgress from '../hooks/useElementProgress'

const helps = [
  'IAP & WHO recommended vaccination schedules',
  'Birth vaccines, 6/10/14-week & booster doses',
  'Catch-up vaccination plans for missed shots',
  'Pain-minimised injection techniques & post-care',
]

export default function Lactation() {
  const ref = useRef(null)
  const scrollYProgress = useElementProgress(ref, 1, 0)
  const cardY = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section className="lactation" id="vaccination" ref={ref}>
      <div className="container lact-grid">
        <motion.div
          className="lact-copy"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow eyebrow-light">Child Immunization</span>
          <h2>
            Protecting your child, <em>every step of the way.</em>
          </h2>
          <p>
            Vaccinations are your child&apos;s strongest shield against preventable diseases.
            Dr. Megha offers <strong>gentle, pain-minimized immunization procedures</strong> following
            IAP guidelines — ensuring your child stays safe, healthy and protected.
          </p>
          <ul className="check-list">
            {helps.map((h) => (
              <li key={h}>
                <span aria-hidden="true">✓</span> {h}
              </li>
            ))}
          </ul>
          <a
            className="btn btn-light"
            href="https://wa.me/918867720711?text=Hello%20Dr.%20Megha%2C%20I%20would%20like%20to%20schedule%20a%20vaccination%20visit%20for%20my%20child."
            target="_blank"
            rel="noreferrer"
            data-conversion-name="whatsapp_click"
            data-conversion-category="vaccination_section"
            data-conversion-location="vaccination"
          >
            Schedule Vaccination on WhatsApp
          </a>
        </motion.div>

        <motion.div className="lact-visual" style={{ y: cardY }}>
          <div className="lact-card">
            <span className="lact-icon"><ShieldCheck size={36} strokeWidth={1.4} /></span>
            <p>
              “Timely vaccination is the greatest gift of protection we give our children.
              We make sure every shot is as painless and reassuring as possible.”
            </p>
            <cite>— Dr. Megha D Kadam, Pediatric Specialist</cite>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
