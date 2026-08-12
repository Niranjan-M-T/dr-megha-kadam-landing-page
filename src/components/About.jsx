'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Baby, Milk } from 'lucide-react'
import useElementProgress from '../hooks/useElementProgress'
import Counter from './Counter'

const education = [
  { icon: GraduationCap, degree: 'MBBS', place: 'M.S. Ramaiah Medical College' },
  { icon: Baby, degree: 'DNB Pediatrics', place: "St. Martha's Hospital" },
  { icon: Award, degree: 'Fellowship in Neonatology', place: "St. John's Medical College" },
  { icon: Milk, degree: 'IBCLC', place: 'International Board-Certified Lactation Consultant' },
]

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  const credsRef = useRef(null)
  const scrollYProgress = useElementProgress(credsRef, 0.8, 0.55)

  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <motion.span className="eyebrow" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            About Dr. Megha
          </motion.span>
          <motion.h2 variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            A doctor who treats your family <em>like her own</em>
          </motion.h2>
          <motion.p variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            Dr. Megha D Kadam is a Consultant Pediatrician and Neonatologist with more than twelve
            years of experience caring for newborns and children. Mothers across Bangalore know her
            for an approach that is calm and reassuring — medical precision, delivered with genuine
            warmth and time to listen.
          </motion.p>
          <motion.p variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            Her clinical journey spans the Indira Gandhi Institute of Child Health, Apollo Hospitals
            and Aster CMI Hospital, alongside her consultancy at SPARSH Hospital, Hennur Road. At
            her private practice, <strong>Dr. Megha&apos;s Baby &amp; Child Care</strong> in RT
            Nagar, she offers families the same expertise in a quieter, more personal setting.
          </motion.p>
          <motion.p variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            As an International Board-Certified Lactation Consultant, she also walks beside new
            mothers through the beautiful — and sometimes overwhelming — early days of parenthood,
            with support that is practical, specific and entirely free of judgment.
          </motion.p>

          <motion.div className="about-stats" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="astat">
              <span className="astat-num"><Counter to={12} suffix="+" /></span>
              <span className="astat-label">Years of experience</span>
            </div>
            <div className="astat">
              <span className="astat-num"><Counter to={5} /></span>
              <span className="astat-label">Leading institutions</span>
            </div>
            <div className="astat">
              <span className="astat-num"><Counter to={2} /></span>
              <span className="astat-label">Specialities</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="creds-card"
          ref={credsRef}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3>Education &amp; Certifications</h3>
          <div className="creds-list">
            <span className="cred-line-track" aria-hidden="true">
              <motion.span className="cred-line" style={{ scaleY: scrollYProgress }} />
            </span>
            {education.map((e) => (
              <motion.div
                className="cred-item"
                key={e.degree}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <span className="cred-icon"><e.icon size={20} strokeWidth={1.8} /></span>
                <div>
                  <strong>{e.degree}</strong>
                  <span>{e.place}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
