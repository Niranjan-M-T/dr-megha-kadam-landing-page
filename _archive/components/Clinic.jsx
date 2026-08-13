'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react'
import { CLINIC, PRACTO_URL } from '@/data/site'

export default function Clinic({ showMap = false }) {
  return (
    <section className="section clinic" id="clinic">
      <div className="container">
        <motion.div
          className="clinic-card"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
            <p className="clinic-note">
              Dr. Megha also consults at SPARSH Hospital, Hennur Road.
            </p>
          </div>

          <div className="clinic-actions">
            <a
              className="btn btn-primary"
              href={`tel:${CLINIC.phoneHref}`}
              data-conversion-name="phone_call_click"
              data-conversion-category="clinic_cta"
              data-conversion-location="clinic_card"
            >
              <Phone size={18} /> Call the Clinic
            </a>
            <a
              className="btn btn-ghost"
              href="https://wa.me/918867720711?text=Hello%20Dr.%20Megha%2C%20I%20would%20like%20to%20book%20a%20consultation%20%2F%20vaccination%20visit%20for%20my%20child."
              target="_blank"
              rel="noreferrer"
              data-conversion-name="whatsapp_click"
              data-conversion-category="clinic_cta"
              data-conversion-location="clinic_card"
            >
              WhatsApp Consultation
            </a>
            <a
              className="btn btn-ghost"
              href={CLINIC.mapsUrl}
              target="_blank"
              rel="noreferrer"
              data-conversion-name="get_directions_click"
              data-conversion-category="clinic_cta"
              data-conversion-location="clinic_card"
            >
              <MapPin size={18} /> Get Directions
            </a>
            <a
              className="clinic-alt-link"
              href={PRACTO_URL}
              target="_blank"
              rel="noreferrer"
              data-conversion-name="practo_booking_click"
              data-conversion-category="external_booking"
              data-conversion-location="clinic_card"
            >
              Prefer Practo? Book on Practo <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>

        {showMap && (
          <motion.div
            className="clinic-map"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <iframe
              src={CLINIC.mapsEmbed}
              title={`Map showing the location of ${CLINIC.name}`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}
