'use client'

import { MapPin, Phone } from 'lucide-react'
import { CLINIC } from '@/data/site'

export default function ClinicStrip() {
  return (
    <section className="clinic-strip">
      <div className="container clinic-strip-inner">
        <div>
          <h2>Ready when you are</h2>
          <p>
            <MapPin size={15} aria-hidden="true" /> {CLINIC.name} · {CLINIC.shortLocality}
          </p>
        </div>
        <div className="clinic-strip-actions">
          <a
            className="btn btn-light"
            href={`tel:${CLINIC.phoneHref}`}
            data-conversion-name="phone_call_click"
            data-conversion-category="clinic_strip"
            data-conversion-location="bottom_strip"
          >
            <Phone size={17} /> {CLINIC.phoneDisplay}
          </a>
          <a
            className="btn btn-outline-light"
            href="https://wa.me/918867720711?text=Hello%20Dr.%20Megha%2C%20I%20would%20like%20to%20book%20a%20consultation%20%2F%20vaccination%20visit%20for%20my%20child."
            target="_blank"
            rel="noreferrer"
            data-conversion-name="whatsapp_click"
            data-conversion-category="clinic_strip"
            data-conversion-location="bottom_strip"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

