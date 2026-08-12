'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const links = [
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/services/lactation-support/', label: 'Lactation' },
  { href: '/contact/', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav-scrolled' : ''}`}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="nav-inner">
        <Link className="nav-brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">M</span>
          <span className="brand-name">
            Dr. Megha <em>Kadam</em>
            <small>Pediatrician &amp; Neonatologist</small>
          </span>
        </Link>

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? 'active' : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              setOpen(false)
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new Event('open_appointment_modal'))
              }
            }}
            data-conversion-name="appointment_modal_open"
            data-conversion-category="navbar_cta"
            data-conversion-location="header"
          >
            Book Consultation
          </button>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </motion.header>
  )
}
