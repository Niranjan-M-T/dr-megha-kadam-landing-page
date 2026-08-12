'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ShieldCheck, Award, Milk, Stethoscope } from 'lucide-react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const { scrollY } = useScroll()
  const blobA = useTransform(scrollY, [0, 800], [0, 150])
  const blobB = useTransform(scrollY, [0, 800], [0, -120])
  const copyY = useTransform(scrollY, [0, 500], [0, 70])
  const copyFade = useTransform(scrollY, [0, 450], [1, 0])
  const cardY = useTransform(scrollY, [0, 800], [0, 90])

  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <motion.span className="blob blob-rose" style={{ y: blobA }} />
        <motion.span className="blob blob-sage" style={{ y: blobB }} />
        <motion.span className="blob blob-gold" style={{ y: blobA }} />
      </div>

      <div className="container hero-inner">
        <motion.div
          className="hero-copy"
          variants={container}
          initial="hidden"
          animate="show"
          style={{ y: copyY, opacity: copyFade }}
        >
          <motion.span className="eyebrow" variants={item}>
            Pediatrician &amp; Neonatologist · RT Nagar, Bengaluru
          </motion.span>

          <motion.h1 variants={item}>
            Gentle, expert care for your <em>little one</em>
          </motion.h1>

          <motion.p className="hero-sub" variants={item}>
            I&apos;m Dr. Megha D Kadam. For over twelve years I&apos;ve walked alongside mothers —
            through first latches, first fevers and first steps — with care that is as warm as it
            is precise.
          </motion.p>

          <motion.div className="hero-ctas" variants={item}>
            <button
              className="btn btn-primary"
              onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open_appointment_modal'))}
              data-conversion-name="appointment_modal_open"
              data-conversion-category="hero_cta"
              data-conversion-location="hero_main"
            >
              Book Consultation
            </button>
            <Link
              className="btn btn-ghost"
              href="/contact/"
              data-conversion-name="visit_clinic_click"
              data-conversion-category="hero_cta"
              data-conversion-location="hero_secondary"
            >
              Visit the Clinic
            </Link>
          </motion.div>

          <motion.ul className="hero-trust" variants={item}>
            <li><ShieldCheck size={17} /> 12+ years of experience</li>
            <li><Award size={17} /> Fellowship in Neonatology</li>
            <li><ShieldCheck size={17} /> IAP &amp; WHO Vaccination Schedules</li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: cardY }}
        >
          {/* Replace this placeholder with a portrait of Dr. Megha:
              <img className="arch-photo" src="/dr-megha.jpg" alt="Dr. Megha D Kadam" /> */}
          <div className="arch-card">
            <div className="arch-inner">
              <Stethoscope size={56} strokeWidth={1.4} />
              <span className="arch-name">Dr. Megha D Kadam</span>
              <span className="arch-creds">MBBS · DNB Pediatrics · Fellowship in Neonatology</span>
            </div>
          </div>

          <motion.span
            className="float-chip fc-1"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            Newborn &amp; NICU expertise
          </motion.span>
          <motion.span
            className="float-chip fc-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            Complete Child Vaccinations
          </motion.span>
        </motion.div>
      </div>

      <motion.a
        href="#meet"
        className="scroll-cue"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{ opacity: copyFade }}
      >
        <span className="scroll-cue-dot" />
      </motion.a>
    </section>
  )
}
