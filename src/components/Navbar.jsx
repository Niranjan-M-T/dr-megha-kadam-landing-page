'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const links = [
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/services/vaccinations-immunization/', label: 'Vaccinations' },
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
          <a
            className="btn btn-primary btn-sm"
            href="https://wa.me/918867720711?text=Hello%20Dr.%20Megha%2C%20I%20would%20like%20to%20book%20a%20consultation%20%2F%20vaccination%20visit%20for%20my%20child."
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            data-conversion-name="whatsapp_click"
            data-conversion-category="navbar_cta"
            data-conversion-location="header"
          >
            Book Consultation
          </a>
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
