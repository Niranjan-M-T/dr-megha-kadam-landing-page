'use client'

import { motion } from 'framer-motion'
import {
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Award,
  Stethoscope,
  Clock,
  ArrowUpRight,
  GraduationCap,
  Baby,
  Star,
  CheckCircle2
} from 'lucide-react'
import { SITE_URL, DOCTOR, CLINIC, SPARSH_URL, PRACTO_URL } from '@/data/site'
import { TRACKING_CONFIG, CONVERSION_EVENTS } from '@/data/trackingConfig'
import services from '@/data/services'
import ServiceIcon from './ServiceIcon'

const whatsappUrl = `https://wa.me/${TRACKING_CONFIG.whatsapp.number}?text=${TRACKING_CONFIG.whatsapp.defaultMessage}`

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function AdLandingPage() {
  return (
    <div className="lp-wrapper">
      {/* LP Header */}
      <header className="lp-header">
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
            <Phone size={15} /> <span className="lp-call-text">Call Clinic</span>
          </a>
        </div>
      </header>

      {/* Hero Conversion Section */}
      <section className="lp-hero">
        <div className="container lp-hero-inner">
          <motion.div
            className="lp-hero-copy"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span className="eyebrow" variants={item}>
              Pediatrician &amp; Neonatologist · RT Nagar, Bengaluru
            </motion.span>

            <motion.h1 variants={item}>
              Gentle, expert care for your <em>little one</em>
            </motion.h1>

            <motion.p className="hero-sub" variants={item}>
              I&apos;m Dr. Megha D Kadam. For over 12+ years I&apos;ve walked alongside families —
              with pediatric care, newborn care &amp; child vaccinations delivered with genuine warmth and medical precision.
            </motion.p>

            {/* Main Conversion CTA Cluster */}
            <motion.div className="lp-cta-cluster" variants={item}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp lp-btn-main"
                data-conversion-name={CONVERSION_EVENTS.WHATSAPP_CLICK}
                data-conversion-category="ad_landing_hero"
                data-conversion-location="lp_hero_main"
              >
                <MessageCircle size={22} /> Book Consultation on WhatsApp
              </a>

              <div className="lp-secondary-ctas">
                <a
                  href={`tel:${CLINIC.phoneHref}`}
                  className="btn btn-primary"
                  data-conversion-name={CONVERSION_EVENTS.PHONE_CLICK}
                  data-conversion-category="ad_landing_hero"
                  data-conversion-location="lp_hero_phone"
                >
                  <Phone size={18} /> Call {CLINIC.phoneDisplay}
                </a>

                <a
                  href={CLINIC.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                  data-conversion-name={CONVERSION_EVENTS.DIRECTIONS_CLICK}
                  data-conversion-category="ad_landing_hero"
                  data-conversion-location="lp_hero_maps"
                >
                  <MapPin size={18} /> Get Directions
                </a>
              </div>
            </motion.div>

            {/* Quick Trust Badges */}
            <motion.ul className="hero-trust lp-trust-row" variants={item}>
              <li><ShieldCheck size={17} /> 12+ years experience</li>
              <li><Award size={17} /> Fellowship in Neonatology</li>
              <li><CheckCircle2 size={17} /> IAP Vaccination Protocols</li>
            </motion.ul>
          </motion.div>

          {/* Visual Doctor Portrait */}
          <motion.div
            className="hero-visual lp-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="arch-card">
              <img
                className="arch-photo"
                src="/dr-megha.png"
                alt="Dr. Megha D Kadam - Consultant Pediatrician & Neonatologist in RT Nagar Bangalore"
              />
            </div>

            <span className="float-chip fc-1">
              Newborn &amp; NICU expertise
            </span>
            <span className="float-chip fc-2">
              Painless Child Vaccinations
            </span>
          </motion.div>
        </div>
      </section>

      {/* 1-Tap Mobile Action Bar Cards */}
      <section className="section lp-actions-sec">
        <div className="container">
          <div className="lp-action-grid">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="lp-action-card lp-card-wa"
              data-conversion-name={CONVERSION_EVENTS.WHATSAPP_CLICK}
              data-conversion-category="quick_action_grid"
              data-conversion-location="lp_action_grid"
            >
              <span className="lp-act-icon wa-bg"><MessageCircle size={24} /></span>
              <div>
                <strong>WhatsApp Instant</strong>
                <span>Chat directly with clinic</span>
              </div>
              <ArrowUpRight size={18} className="lp-arrow" />
            </a>

            <a
              href={`tel:${CLINIC.phoneHref}`}
              className="lp-action-card lp-card-call"
              data-conversion-name={CONVERSION_EVENTS.PHONE_CLICK}
              data-conversion-category="quick_action_grid"
              data-conversion-location="lp_action_grid"
            >
              <span className="lp-act-icon call-bg"><Phone size={24} /></span>
              <div>
                <strong>Call Clinic Direct</strong>
                <span>{CLINIC.phoneDisplay}</span>
              </div>
              <ArrowUpRight size={18} className="lp-arrow" />
            </a>

            <a
              href={CLINIC.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="lp-action-card lp-card-maps"
              data-conversion-name={CONVERSION_EVENTS.DIRECTIONS_CLICK}
              data-conversion-category="quick_action_grid"
              data-conversion-location="lp_action_grid"
            >
              <span className="lp-act-icon maps-bg"><MapPin size={24} /></span>
              <div>
                <strong>Google Business Profile</strong>
                <span>RT Nagar Location &amp; Directions</span>
              </div>
              <ArrowUpRight size={18} className="lp-arrow" />
            </a>
          </div>
        </div>
      </section>

      {/* Doctor Experience & Credentials */}
      <section className="section lp-creds-sec">
        <div className="container">
          <div className="section-head text-center">
            <span className="eyebrow">About Dr. Megha</span>
            <h2>A doctor who treats your family <em>like her own</em></h2>
            <p>
              Dr. Megha D Kadam is a Consultant Pediatrician &amp; Neonatologist with 12+ years of experience caring for newborns and children.
              Her clinical background spans leading institutions including Indira Gandhi Institute of Child Health, Apollo Hospitals, Aster CMI Hospital, and SPARSH Hospital.
            </p>
          </div>

          <div className="lp-creds-grid">
            <div className="lp-cred-badge">
              <GraduationCap size={28} />
              <div>
                <strong>MBBS</strong>
                <span>M.S. Ramaiah Medical College</span>
              </div>
            </div>

            <div className="lp-cred-badge">
              <Baby size={28} />
              <div>
                <strong>DNB Pediatrics</strong>
                <span>St. Martha&apos;s Hospital</span>
              </div>
            </div>

            <div className="lp-cred-badge">
              <Award size={28} />
              <div>
                <strong>Fellowship in Neonatology</strong>
                <span>St. John&apos;s Medical College</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pediatric & Vaccination Services Grid */}
      <section className="section lp-services-sec">
        <div className="container">
          <div className="section-head text-center">
            <span className="eyebrow">Services Offered</span>
            <h2>Comprehensive Pediatric &amp; <em>Vaccination Care</em></h2>
            <p>Specialised pediatric and neonatal care for every age and stage.</p>
          </div>

          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.slug}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Location & Clinic Info Section */}
      <section className="section lp-location-sec" id="location">
        <div className="container">
          <div className="section-head text-center">
            <span className="eyebrow">Visit the Clinic</span>
            <h2>Convenient Location in <em>RT Nagar, Bengaluru</em></h2>
          </div>

          <div className="clinic-card">
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
                className="btn btn-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                data-conversion-name={CONVERSION_EVENTS.WHATSAPP_CLICK}
                data-conversion-category="lp_clinic_section"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
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
                <MapPin size={18} /> Google Maps Profile &amp; Directions
              </a>
            </div>
          </div>

          {/* Embedded Google Maps Frame */}
          <div className="clinic-map lp-map-frame">
            <iframe
              src={CLINIC.mapsEmbed}
              title={`Google Map location of ${CLINIC.name}`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
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
