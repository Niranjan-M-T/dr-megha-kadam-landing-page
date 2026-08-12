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
            <a
              className="btn btn-primary"
              href="https://wa.me/918867720711?text=Hello%20Dr.%20Megha%2C%20I%20would%20like%20to%20book%20a%20consultation%20%2F%20vaccination%20visit%20for%20my%20child."
              target="_blank"
              rel="noreferrer"
              data-conversion-name="whatsapp_click"
              data-conversion-category="hero_cta"
              data-conversion-location="hero_main"
            >
              Book Consultation on WhatsApp
            </a>
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
            <img
              className="arch-photo"
              src="/dr-megha.png"
              alt="Dr. Megha D Kadam - Consultant Pediatrician & Neonatologist"
            />
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
