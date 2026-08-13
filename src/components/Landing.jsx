'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
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
  Stethoscope,
  ChevronDown,
} from 'lucide-react'
import { DOCTOR, CLINIC } from '@/data/site'
import { TRACKING_CONFIG, CONVERSION_EVENTS } from '@/data/trackingConfig'
import services from '@/data/services'
import ServiceIcon from './ServiceIcon'

const waUrl = `https://wa.me/${TRACKING_CONFIG.whatsapp.number}?text=${TRACKING_CONFIG.whatsapp.defaultMessage}`
const telUrl = `tel:${CLINIC.phoneHref}`

/* ---------------- motion primitives ---------------- */

const EASE = [0.22, 1, 0.36, 1]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

/** Scroll-reveal wrapper. Children animate in once, on entry. */
function Reveal({ children, className, amount = 0.2, ...rest }) {
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/** Counts up to `to` when scrolled into view. */
function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setN(to)
      return
    }
    let raf
    const dur = 1100
    const t0 = performance.now()
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur)
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

/** Pre-generated responsive photo. width/height set to avoid layout shift.
 *  `fallback` is the src for browsers that ignore srcSet. The cut-out portrait
 *  has no JPEG twin (it needs alpha), so it points at its largest WebP. */
function Photo({ stem, widths, w, h, alt, sizes, className, priority = false, fallback }) {
  const srcSet = widths.map((x) => `/photos/${stem}-${x}.webp ${x}w`).join(', ')
  return (
    <img
      className={className}
      src={fallback || `/photos/${stem}.jpg`}
      srcSet={srcSet}
      sizes={sizes}
      width={w}
      height={h}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  )
}

/* ---------------- page ---------------- */

export default function Landing() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  // Sticky bar appears once the hero CTA has scrolled away.
  const [barVisible, setBarVisible] = useState(false)
  useEffect(() => {
    const el = document.getElementById('hero-cta')
    if (!el) return
    const io = new IntersectionObserver(([e]) => setBarVisible(!e.isIntersecting), {
      rootMargin: '-80px 0px 0px 0px',
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Thin scroll-progress line in the header.
  const { scrollYProgress: pageProgress } = useScroll()
  const progress = useSpring(pageProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <div className="lp">
      {/* ---------- header ---------- */}
      <header className="lp-head">
        <div className="wrap lp-head-in">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">M</span>
            <span className="brand-txt">
              Dr. Megha Kadam
              <small>Pediatrician &amp; Neonatologist</small>
            </span>
          </a>

          {/* Section links. Hidden on phones, where the thumb bar carries
              navigation and the header only needs the call button. */}
          <nav className="lp-nav" aria-label="Sections">
            <a href="#help">What she treats</a>
            <a href="#about">About</a>
            <a href="#visit">Visit</a>
          </nav>

          <div className="lp-head-cta">
            <a
              className="lp-head-tel"
              href={telUrl}
              data-conversion-name={CONVERSION_EVENTS.PHONE_CLICK}
              data-conversion-location="header_number"
            >
              {CLINIC.phoneDisplay}
            </a>
            <a
              href={telUrl}
              className="btn btn-call btn-sm"
              data-conversion-name={CONVERSION_EVENTS.PHONE_CLICK}
              data-conversion-location="header"
            >
              <Phone size={16} strokeWidth={2.4} />
              <span>Call</span>
            </a>
          </div>
        </div>
        <motion.div className="lp-progress" style={{ scaleX: progress }} aria-hidden="true" />
      </header>

      <main id="top">
        {/* ---------- hero ---------- */}
        <section className="hero" ref={heroRef}>
          <motion.div className="hero-glow" style={{ y: glowY }} aria-hidden="true" />

          <div className="wrap hero-in">
            <motion.div className="hero-photo-wrap" style={{ y: photoY }}>
              <div className="hero-portrait rise-photo">
                <Photo
                  stem="megha-portrait"
                  widths={[400, 580]}
                  w={580}
                  h={996}
                  priority
                  fallback="/photos/megha-portrait-580.webp"
                  sizes="(max-width: 720px) 62vw, 380px"
                  alt="Dr. Megha Kadam, Consultant Pediatrician and Neonatologist, RT Nagar, Bengaluru"
                />
              </div>

              <span className="chip chip-a rise rise-5">
                <Baby size={13} /> NICU &amp; newborn care
              </span>
              <span className="chip chip-b rise rise-6">
                <ShieldCheck size={13} /> Vaccinations that hurt less
              </span>
            </motion.div>

            {/* Above the fold: CSS-driven entrance, never opacity:0 in the static
                HTML. The headline must paint before the JS bundle arrives, or LCP
                on mobile ad traffic falls off a cliff. */}
            <div className="hero-copy">
              <p className="eyebrow rise rise-1">RT Nagar, Bengaluru</p>

              <h1 className="rise rise-2">
                A pediatrician who <em>takes her time</em>
              </h1>

              <p className="lede rise rise-3">
                I&apos;m Dr. Megha Kadam. Twelve years with newborns and children in Bangalore,
                including the very small and very sick ones in NICU.
              </p>

              <div className="hero-cta rise rise-4" id="hero-cta">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-wa btn-lg"
                  data-conversion-name={CONVERSION_EVENTS.WHATSAPP_CLICK}
                  data-conversion-location="hero"
                >
                  <MessageCircle size={19} strokeWidth={2.2} />
                  Message on WhatsApp
                </a>
                <a
                  href={telUrl}
                  className="btn btn-call btn-lg"
                  data-conversion-name={CONVERSION_EVENTS.PHONE_CLICK}
                  data-conversion-location="hero"
                >
                  <Phone size={18} strokeWidth={2.2} />
                  {CLINIC.phoneDisplay}
                </a>
              </div>

              {/* Her title, from the single source in data/site.js so it stays in
                  step with the header, the OG card and the JSON-LD. */}
              <p className="hero-title-line rise rise-5">
                <Stethoscope size={16} strokeWidth={2} />
                {DOCTOR.title}
              </p>
            </div>
          </div>

          <a className="scroll-hint" href="#help" aria-label="See what she treats">
            <ChevronDown size={18} />
          </a>
        </section>

        {/* ---------- quick actions ---------- */}
        <section className="acts">
          <Reveal className="wrap acts-grid" amount={0.3}>
            {[
              {
                k: 'wa',
                href: waUrl, ext: true,
                icon: <MessageCircle size={21} strokeWidth={2.1} />,
                t: 'WhatsApp', s: 'Send a message',
                ev: CONVERSION_EVENTS.WHATSAPP_CLICK,
              },
              {
                k: 'call',
                href: telUrl,
                icon: <Phone size={21} strokeWidth={2.1} />,
                t: 'Call the clinic', s: CLINIC.phoneDisplay,
                ev: CONVERSION_EVENTS.PHONE_CLICK,
              },
              {
                k: 'map',
                href: CLINIC.mapsUrl, ext: true,
                icon: <MapPin size={21} strokeWidth={2.1} />,
                t: 'Directions', s: 'HMT Layout, RT Nagar',
                ev: CONVERSION_EVENTS.DIRECTIONS_CLICK,
              },
            ].map((a) => (
              <motion.a
                key={a.k}
                className={`act act-${a.k}`}
                href={a.href}
                target={a.ext ? '_blank' : undefined}
                rel={a.ext ? 'noreferrer' : undefined}
                variants={fadeUp}
                whileTap={{ scale: 0.975 }}
                data-conversion-name={a.ev}
                data-conversion-location="quick_actions"
              >
                <span className="act-ico">{a.icon}</span>
                <span className="act-txt">
                  <strong>{a.t}</strong>
                  <small>{a.s}</small>
                </span>
                <ArrowUpRight size={17} className="act-arw" />
              </motion.a>
            ))}
          </Reveal>
        </section>

        {/* ---------- stats ---------- */}
        <section className="stats">
          <Reveal className="wrap stats-grid" amount={0.4}>
            {[
              { n: 12, s: '', l: 'Years in pediatrics' },
              { n: 4, s: '', l: 'Bangalore hospitals' },
              { n: 3, s: '', l: 'Postgraduate qualifications' },
            ].map((x) => (
              <motion.div className="stat" key={x.l} variants={fadeUp}>
                <b><Counter to={x.n} suffix={x.s} /></b>
                <span>{x.l}</span>
              </motion.div>
            ))}
          </Reveal>
        </section>

        {/* ---------- services ---------- */}
        <section className="sec" id="help">
          <Reveal className="wrap" amount={0.15}>
            <motion.p className="eyebrow" variants={fadeUp}>What she treats</motion.p>
            <motion.h2 variants={fadeUp}>
              Newborns through the <em>school years</em>
            </motion.h2>

            <div className="svc-grid">
              {services.map((s) => (
                <motion.a
                  key={s.slug}
                  className="svc"
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  variants={fadeUp}
                  whileTap={{ scale: 0.985 }}
                  data-conversion-name={CONVERSION_EVENTS.WHATSAPP_CLICK}
                  data-conversion-location="service_card"
                  data-conversion-label={s.name}
                >
                  <span className={`svc-ico ${s.tint}`}>
                    <ServiceIcon name={s.icon} size={20} strokeWidth={1.9} />
                  </span>
                  <h3>{s.name}</h3>
                  <p>{s.short}</p>
                </motion.a>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ---------- neonatology band ---------- */}
        <section className="band">
          <Reveal className="wrap band-in" amount={0.25}>
            <motion.div className="band-photo" variants={fadeUp}>
              <Photo
                stem="megha-nicu"
                widths={[480, 720]}
                w={720}
                h={900}
                sizes="(max-width: 720px) 88vw, 420px"
                alt="Dr. Megha Kadam holding a newborn beside a NICU heat warmer"
              />
            </motion.div>
            <div className="band-copy">
              <motion.p className="eyebrow" variants={fadeUp}>Neonatology</motion.p>
              <motion.h2 variants={fadeUp}>
                The first few weeks are <em>the ones that matter</em>
              </motion.h2>
              <motion.p variants={fadeUp}>
                Dr. Megha holds a Fellowship in Neonatology from St. John&apos;s Medical College and has
                worked in the NICUs of Indira Gandhi Institute of Child Health, Apollo, Aster CMI and
                SPARSH. She also teaches neonatal resuscitation to other doctors.
              </motion.p>
              <motion.p variants={fadeUp}>
                If your baby was premature, spent time in NICU, or is not feeding or gaining weight the
                way you expected, that is worth a proper look rather than a wait and watch.
              </motion.p>
              <motion.a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-wa"
                variants={fadeUp}
                data-conversion-name={CONVERSION_EVENTS.WHATSAPP_CLICK}
                data-conversion-location="neonatology_band"
              >
                <MessageCircle size={18} strokeWidth={2.2} /> Ask about your baby
              </motion.a>
            </div>
          </Reveal>
        </section>

        {/* ---------- about ---------- */}
        <section className="sec about" id="about">
          <Reveal className="wrap about-in" amount={0.2}>
            <motion.div className="about-photo" variants={fadeUp}>
              <Photo
                stem="megha-speaking"
                widths={[480, 720]}
                w={720}
                h={900}
                sizes="(max-width: 720px) 68vw, 360px"
                alt="Dr. Megha Kadam speaking at a SPARSH Hospital event"
              />
            </motion.div>

            <div className="about-copy">
              <motion.p className="eyebrow" variants={fadeUp}>About Dr. Megha</motion.p>
              <motion.h2 variants={fadeUp}>
                Twelve years, mostly with <em>very small patients</em>
              </motion.h2>
              <motion.p variants={fadeUp}>
                She did her MBBS at M.S. Ramaiah Medical College, her DNB in Pediatrics at St.
                Martha&apos;s Hospital, and a Fellowship in Neonatology at St. John&apos;s. Before opening
                her own clinic in RT Nagar she worked across four Bangalore hospitals.
              </motion.p>

              <motion.blockquote className="quote" variants={fadeUp}>
                Most of my job is answering your questions properly and making sure nothing gets
                missed.
              </motion.blockquote>

              <motion.ul className="creds" variants={stagger}>
                {[
                  { i: <GraduationCap size={17} />, t: 'MBBS', s: 'M.S. Ramaiah Medical College' },
                  { i: <Stethoscope size={17} />, t: 'DNB Pediatrics', s: "St. Martha's Hospital" },
                  { i: <Award size={17} />, t: 'Fellowship in Neonatology', s: "St. John's Medical College" },
                ].map((c) => (
                  <motion.li key={c.t} variants={fadeUp}>
                    <span className="cred-ico">{c.i}</span>
                    <span><strong>{c.t}</strong><small>{c.s}</small></span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Reveal>
        </section>

        {/* ---------- location ---------- */}
        <section className="sec loc" id="visit">
          <Reveal className="wrap" amount={0.15}>
            <motion.p className="eyebrow" variants={fadeUp}>Visit</motion.p>
            <motion.h2 variants={fadeUp}>
              Where to <em>find her</em>
            </motion.h2>

            <motion.div className="loc-card" variants={fadeUp}>
              <h3>{CLINIC.name}</h3>
              <ul className="loc-meta">
                <li>
                  <span className="mi"><MapPin size={17} strokeWidth={1.9} /></span>
                  <address>
                    {CLINIC.addressLines.map((l) => <span key={l}>{l}</span>)}
                  </address>
                </li>
                <li>
                  <span className="mi"><Phone size={17} strokeWidth={1.9} /></span>
                  <a href={telUrl} data-conversion-name={CONVERSION_EVENTS.PHONE_CLICK} data-conversion-location="location_card">
                    {CLINIC.phoneDisplay}
                  </a>
                </li>
                <li>
                  <span className="mi"><Clock size={17} strokeWidth={1.9} /></span>
                  <span>{CLINIC.timings}</span>
                </li>
              </ul>

              <div className="loc-btns">
                <a
                  href={waUrl} target="_blank" rel="noreferrer"
                  className="btn btn-wa btn-lg"
                  data-conversion-name={CONVERSION_EVENTS.WHATSAPP_CLICK}
                  data-conversion-location="location_card"
                >
                  <MessageCircle size={18} strokeWidth={2.2} /> WhatsApp
                </a>
                <a
                  href={CLINIC.mapsUrl} target="_blank" rel="noreferrer"
                  className="btn btn-ghost btn-lg"
                  data-conversion-name={CONVERSION_EVENTS.DIRECTIONS_CLICK}
                  data-conversion-location="location_card"
                >
                  <MapPin size={18} strokeWidth={2.2} /> Directions
                </a>
              </div>
            </motion.div>

            {/* The embed sits on a link, so a blocked or slow Google iframe still
                leaves a usable way to get directions rather than a blank box. */}
            <motion.div className="loc-map" variants={fadeUp}>
              <a
                className="loc-map-fallback"
                href={CLINIC.mapsUrl}
                target="_blank"
                rel="noreferrer"
                data-conversion-name={CONVERSION_EVENTS.DIRECTIONS_CLICK}
                data-conversion-location="map_fallback"
              >
                <MapPin size={20} strokeWidth={1.9} />
                <span>Open in Google Maps</span>
              </a>
              <iframe
                src={CLINIC.mapsEmbed}
                title={`Map showing ${CLINIC.name} in RT Nagar, Bengaluru`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </Reveal>
        </section>
      </main>

      {/* ---------- footer ---------- */}
      <footer className="foot">
        <div className="wrap">
          <p className="foot-name">{DOCTOR.name}</p>
          <p className="foot-sub">{DOCTOR.title}</p>
          <address className="foot-addr">
            {CLINIC.name}, {CLINIC.streetAddress}, {CLINIC.locality} {CLINIC.postalCode}
          </address>
          <a className="foot-tel" href={telUrl}>{CLINIC.phoneDisplay}</a>
          <p className="foot-legal">
            © {new Date().getFullYear()} {DOCTOR.name}. This site is general information, not medical
            advice. If your child needs urgent help, go to the nearest hospital.
          </p>
          <p className="foot-links">
            <Link href="/privacy/">Privacy Policy</Link>
            <span aria-hidden="true">·</span>
            <a href={CLINIC.mapsUrl} target="_blank" rel="noreferrer">Find us on Google</a>
          </p>
        </div>
      </footer>

      {/* ---------- sticky mobile bar ---------- */}
      <motion.div
        className="bar"
        initial={false}
        animate={{ y: barVisible ? 0 : 120 }}
        transition={{ duration: 0.32, ease: EASE }}
        aria-hidden={!barVisible}
      >
        <a
          href={telUrl}
          className="bar-btn bar-call"
          tabIndex={barVisible ? 0 : -1}
          data-conversion-name={CONVERSION_EVENTS.PHONE_CLICK}
          data-conversion-location="sticky_bar"
        >
          <Phone size={18} strokeWidth={2.3} /> Call
        </a>
        <a
          href={waUrl}
          target="_blank"
          rel="noreferrer"
          className="bar-btn bar-wa"
          tabIndex={barVisible ? 0 : -1}
          data-conversion-name={CONVERSION_EVENTS.WHATSAPP_CLICK}
          data-conversion-location="sticky_bar"
        >
          <MessageCircle size={18} strokeWidth={2.3} /> WhatsApp
        </a>
        <a
          href={CLINIC.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="bar-btn bar-map"
          tabIndex={barVisible ? 0 : -1}
          aria-label="Get directions"
          data-conversion-name={CONVERSION_EVENTS.DIRECTIONS_CLICK}
          data-conversion-location="sticky_bar"
        >
          <MapPin size={18} strokeWidth={2.3} />
        </a>
      </motion.div>
    </div>
  )
}
