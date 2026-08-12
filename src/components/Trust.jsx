'use client'

import { motion } from 'framer-motion'
import { HeartHandshake, MessagesSquare, ShieldCheck, Heart, Quote } from 'lucide-react'

const reasons = [
  {
    icon: HeartHandshake,
    title: 'Warm & approachable',
    text: 'Little patients — and anxious parents — are put at ease from the very first hello.',
  },
  {
    icon: MessagesSquare,
    title: 'Clear communication',
    text: 'No jargon, no rushed answers. You leave every visit understanding the plan.',
  },
  {
    icon: ShieldCheck,
    title: 'Accurate diagnoses',
    text: 'A reputation built on getting it right — calmly, carefully and early.',
  },
  {
    icon: Heart,
    title: 'Families first',
    text: 'Care decisions are made with you, never just handed to you.',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Trust() {
  return (
    <section className="section trust">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why mothers choose Dr. Megha</span>
          <h2>
            Trusted by families across <em>Bangalore</em>
          </h2>
        </div>

        <motion.div
          className="trust-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {reasons.map((r) => (
            <motion.div className="trust-card" key={r.title} variants={reveal}>
              <span className="trust-icon"><r.icon size={24} strokeWidth={1.7} /></span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.blockquote
          className="trust-quote"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="quote-icon" aria-hidden="true"><Quote size={26} strokeWidth={1.6} /></span>
          <p>
            Admired for her compassionate and patient-centered approach that blends medical
            expertise with genuine care for families.
          </p>
          <cite>— SPARSH Hospital, Hennur Road</cite>
        </motion.blockquote>
      </div>
    </section>
  )
}
