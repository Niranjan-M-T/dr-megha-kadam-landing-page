import Link from 'next/link'
import { CLINIC, SPARSH_URL, PRACTO_URL } from '@/data/site'
import services from '@/data/services'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="brand-mark brand-mark-light" aria-hidden="true">M</span>
          <h3>Dr. Megha D Kadam</h3>
          <p>
            Consultant Pediatrician &amp; Neonatologist
            <br />
            {CLINIC.name}
          </p>
          <address className="footer-address">
            {CLINIC.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <a className="footer-phone" href={`tel:${CLINIC.phoneHref}`}>
            {CLINIC.phoneDisplay}
          </a>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <Link href="/">Home</Link>
          <Link href="/about/">About</Link>
          <Link href="/services/">Services</Link>
          <Link href="/contact/">Visit the Clinic</Link>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}/`}>
              {s.name}
            </Link>
          ))}
        </div>

        <div className="footer-creds">
          <h4>Credentials</h4>
          <span>MBBS · M.S. Ramaiah Medical College</span>
          <span>DNB Pediatrics · St. Martha&apos;s Hospital</span>
          <span>Fellowship in Neonatology · St. John&apos;s</span>
          <span>IBCLC Certified</span>
          <div className="footer-ext">
            <a href={SPARSH_URL} target="_blank" rel="noreferrer">SPARSH profile</a>
            <a href={PRACTO_URL} target="_blank" rel="noreferrer">Practo</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dr. Megha D Kadam. All rights reserved.</p>
        <p className="footer-disclaimer">
          This website is for general information only and is not a substitute for professional
          medical advice. In an emergency, please visit the nearest hospital immediately.
        </p>
      </div>
    </footer>
  )
}
