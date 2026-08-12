'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Award,
  Clock,
  ArrowUpRight,
  GraduationCap,
  Baby,
  CheckCircle2,
  Sparkles,
  Heart
} from 'lucide-react'
import { DOCTOR, CLINIC } from '@/data/site'
import { TRACKING_CONFIG, CONVERSION_EVENTS } from '@/data/trackingConfig'
import services from '@/data/services'
import ServiceIcon from './ServiceIcon'

const whatsappUrl = `https://wa.me/${TRACKING_CONFIG.whatsapp.number}?text=${TRACKING_CONFIG.whatsapp.defaultMessage}`

/* ─── Animation Variants ─── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function AdLandingPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3])

  return (
    <div className="lp-wrapper">
      {/* ─── Sticky Header ─── */}
      <motion.header
        className="lp-header"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container lp-header-inner">
          <div className="nav-brand">
            <span className="brand-mark" aria-hidden="true">M</span>
            <span className="brand-name">
              Dr. Megha <em>Kadam</em>
              <small>Pediatrician &amp; Neonatologist</small>
            </span>
          </div>
          <a
            href={`tel:${CLINIC.phoneHref}`}
            className="btn btn-primary btn-sm lp-header-call"
            data-conversion-name={CONVERSION_EVENTS.PHONE_CLICK}
            data-conversion-category="ad_landing_header"
            data-conversion-location="lp_header"
          >
            <Phone size={15} /> <span className="lp-call-text">Call Now</span>
          </a>
        </div>
      </motion.header>

      {/* ─── Hero Section ─── */}
      <section className="lp-hero" ref={heroRef}>
        <motion.div className="container lp-hero-inner" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.div
            className="lp-hero-copy"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.span className="eyebrow" variants={fadeUp}>
              <Sparkles size={14} /> Pediatrician &amp; Neonatologist · RT Nagar, Bengaluru
            </motion.span>

            <motion.h1 variants={fadeUp}>
              Gentle, expert care for your <em>little one</em>
            </motion.h1>

            <motion.p className="hero-sub" variants={fadeUp}>
              I&apos;m Dr. Megha D Kadam. For over 12+ years I&apos;ve walked alongside families —
              with pediatric care, newborn care &amp; child vaccinations delivered with genuine warmth and medical precision.
            </motion.p>

            {/* Main CTA */}
            <motion.div className="lp-cta-cluster" variants={fadeUp}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-hero-whatsapp"
                data-conversion-name={CONVERSION_EVENTS.WHATSAPP_CLICK}
                data-conversion-category="ad_landing_hero"
                data-conversion-location="lp_hero_main"
              >
                <MessageCircle size={20} /> Book Consultation on WhatsApp
              </a>

              <div className="lp-secondary-ctas">
                <a
                  href={`tel:${CLINIC.phoneHref}`}
                  className="btn btn-primary"
                  data-conversion-name={CONVERSION_EVENTS.PHONE_CLICK}
                  data-conversion-category="ad_landing_hero"
                >
                  <Phone size={18} /> Call Clinic
                </a>

                <a
                  href={CLINIC.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                  data-conversion-name={CONVERSION_EVENTS.DIRECTIONS_CLICK}
                  data-conversion-category="ad_landing_hero"
                >
                  <MapPin size={18} /> Get Directions
                </a>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.ul className="hero-trust lp-trust-row" variants={fadeUp}>
              <li><ShieldCheck size={17} /> 12+ years experience</li>
              <li><Award size={17} /> Fellowship in Neonatology</li>
              <li><CheckCircle2 size={17} /> IAP Vaccination Protocols</li>
            </motion.ul>
          </motion.div>

          {/* Doctor Portrait */}
          <motion.div
            className="hero-visual lp-visual"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="arch-card">
              <img
                className="arch-photo"
                src="/dr-megha.png"
                alt="Dr. Megha D Kadam - Consultant Pediatrician & Neonatologist in RT Nagar Bangalore"
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
              Painless Child Vaccinations
            </motion.span>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Quick Action Cards ─── */}
      <section className="section lp-actions-sec">
        <div className="container">
          <motion.div
            className="lp-action-grid"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                href: whatsappUrl,
                target: '_blank',
                cls: 'lp-card-wa',
                iconCls: 'wa-bg',
                icon: <MessageCircle size={24} />,
                title: 'WhatsApp Instant',
                sub: 'Chat directly with clinic',
                event: CONVERSION_EVENTS.WHATSAPP_CLICK,
              },
              {
                href: `tel:${CLINIC.phoneHref}`,
                cls: 'lp-card-call',
                iconCls: 'call-bg',
                icon: <Phone size={24} />,
                title: 'Call Clinic Direct',
                sub: CLINIC.phoneDisplay,
                event: CONVERSION_EVENTS.PHONE_CLICK,
              },
              {
                href: CLINIC.mapsUrl,
                target: '_blank',
                cls: 'lp-card-maps',
                iconCls: 'maps-bg',
                icon: <MapPin size={24} />,
                title: 'Google Business Profile',
                sub: 'RT Nagar · Directions',
                event: CONVERSION_EVENTS.DIRECTIONS_CLICK,
              },
            ].map((card) => (
              <motion.a
                key={card.cls}
                href={card.href}
                target={card.target}
                rel={card.target ? 'noreferrer' : undefined}
                className={`lp-action-card ${card.cls}`}
                data-conversion-name={card.event}
                data-conversion-category="quick_action_grid"
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(56,51,74,0.14)' }}
                whileTap={{ scale: 0.97 }}
              >
                <span className={`lp-act-icon ${card.iconCls}`}>{card.icon}</span>
                <div>
                  <strong>{card.title}</strong>
                  <span>{card.sub}</span>
                </div>
                <ArrowUpRight size={18} className="lp-arrow" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Doctor Credentials ─── */}
      <section className="section lp-creds-sec">
        <div className="container">
          <motion.div
            className="section-head text-center"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span className="eyebrow" variants={fadeUp}>
              <Heart size={14} /> About Dr. Megha
            </motion.span>
            <motion.h2 variants={fadeUp}>
              A doctor who treats your family <em>like her own</em>
            </motion.h2>
            <motion.p variants={fadeUp}>
              Dr. Megha D Kadam is a Consultant Pediatrician &amp; Neonatologist with 12+ years of experience caring for newborns and children.
              Her clinical journey spans Indira Gandhi Institute of Child Health, Apollo Hospitals, Aster CMI Hospital, and SPARSH Hospital.
            </motion.p>
          </motion.div>

          <motion.div
            className="lp-creds-grid"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { icon: <GraduationCap size={28} />, title: 'MBBS', sub: 'M.S. Ramaiah Medical College' },
              { icon: <Baby size={28} />, title: 'DNB Pediatrics', sub: "St. Martha's Hospital" },
              { icon: <Award size={28} />, title: 'Fellowship in Neonatology', sub: "St. John's Medical College" },
            ].map((cred) => (
              <motion.div className="lp-cred-badge" key={cred.title} variants={fadeUp}>
                {cred.icon}
                <div>
                  <strong>{cred.title}</strong>
                  <span>{cred.sub}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="section lp-services-sec">
        <div className="container">
          <motion.div
            className="section-head text-center"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span className="eyebrow" variants={fadeUp}>Services Offered</motion.span>
            <motion.h2 variants={fadeUp}>
              Comprehensive Pediatric &amp; <em>Vaccination Care</em>
            </motion.h2>
            <motion.p variants={fadeUp}>
              Specialised pediatric and neonatal care for every age and stage.
            </motion.p>
          </motion.div>

          <motion.div
            className="services-grid"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {services.map((s, i) => (
              <motion.div
                className="service-card"
                key={s.slug}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(56,51,74,0.12)' }}
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="service-card-link"
                  data-conversion-name={CONVERSION_EVENTS.WHATSAPP_CLICK}
                  data-conversion-category="lp_service_card"
                  data-conversion-label={s.name}
                >
                  <span className={`service-icon ${s.tint}`}>
                    <ServiceIcon name={s.icon} size={24} strokeWidth={1.7} />
                  </span>
                  <h3>{s.name}</h3>
                  <p>{s.short}</p>
                  <span className="learn-more">
                    Consult on WhatsApp <ArrowUpRight size={15} />
                  </span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Clinic Location & Map ─── */}
      <section className="section lp-location-sec" id="location">
        <div className="container">
          <motion.div
            className="section-head text-center"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span className="eyebrow" variants={fadeUp}>Visit the Clinic</motion.span>
            <motion.h2 variants={fadeUp}>
              Convenient Location in <em>RT Nagar, Bengaluru</em>
            </motion.h2>
          </motion.div>

          <motion.div
            className="clinic-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={scaleIn}
          >
            <div className="clinic-info">
              <h3>{CLINIC.name}</h3>
              <ul className="clinic-meta">
                <li>
                  <span className="meta-icon"><MapPin size={18} strokeWidth={1.8} /></span>
                  <address>
                    {CLINIC.addressLines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </address>
                </li>
                <li>
                  <span className="meta-icon"><Phone size={18} strokeWidth={1.8} /></span>
                  <a href={`tel:${CLINIC.phoneHref}`}>{CLINIC.phoneDisplay}</a>
                </li>
                <li>
                  <span className="meta-icon"><Clock size={18} strokeWidth={1.8} /></span>
                  {CLINIC.timings}
                </li>
              </ul>
            </div>

            <div className="clinic-actions">
              <a
                className="lp-wa-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                data-conversion-name={CONVERSION_EVENTS.WHATSAPP_CLICK}
                data-conversion-category="lp_clinic_section"
              >
                <span className="lp-wa-icon-ring">
                  <MessageCircle size={20} />
                </span>
                <span className="lp-wa-label">
                  <strong>Chat on WhatsApp</strong>
                  <small>Get instant reply</small>
                </span>
                <ArrowUpRight size={18} className="lp-wa-arrow" />
              </a>
              <a
                className="btn btn-primary"
                href={`tel:${CLINIC.phoneHref}`}
                data-conversion-name={CONVERSION_EVENTS.PHONE_CLICK}
                data-conversion-category="lp_clinic_section"
              >
                <Phone size={18} /> Call {CLINIC.phoneDisplay}
              </a>
              <a
                className="btn btn-ghost"
                href={CLINIC.mapsUrl}
                target="_blank"
                rel="noreferrer"
                data-conversion-name={CONVERSION_EVENTS.DIRECTIONS_CLICK}
                data-conversion-category="lp_clinic_section"
              >
                <MapPin size={18} /> Google Maps &amp; Directions
              </a>
            </div>
          </motion.div>

          <motion.div
            className="clinic-map lp-map-frame"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={scaleIn}
          >
            <iframe
              src={CLINIC.mapsEmbed}
              title={`Google Map location of ${CLINIC.name}`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="footer lp-footer">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} Dr. Megha D Kadam. All rights reserved.</p>
          <p className="footer-disclaimer">
            {CLINIC.name} · {CLINIC.streetAddress}
          </p>
        </div>
      </footer>
    </div>
  )
}
