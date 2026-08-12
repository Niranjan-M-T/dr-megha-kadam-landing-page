'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Counter from './Counter'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function AboutIntro() {
  return (
    <section className="section about-intro" id="meet">
      <motion.div
        className="container about-intro-inner"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.span className="eyebrow" variants={reveal}>
          Meet Dr. Megha
        </motion.span>
        <motion.h2 variants={reveal}>
          A doctor who treats your family <em>like her own</em>
        </motion.h2>
        <motion.p variants={reveal}>
          Dr. Megha D Kadam is a Consultant Pediatrician and Neonatologist whose clinical journey
          spans the Indira Gandhi Institute of Child Health, Apollo Hospitals, Aster CMI Hospital
          and SPARSH Hospital. At her private practice in RT Nagar,{' '}
          <strong>Dr. Megha&apos;s Baby &amp; Child Care</strong>, she offers families that same
          expertise in a quieter, more personal setting.
        </motion.p>

        <motion.div className="about-stats" variants={reveal}>
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

        <motion.div variants={reveal}>
          <Link className="text-link" href="/about/">
            More about Dr. Megha <ArrowRight size={16} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
