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
          <button
            className="btn btn-outline-light"
            onClick={() => typeof window !== 'undefined' && window.dispatchEvent(new Event('open_appointment_modal'))}
            data-conversion-name="appointment_modal_open"
            data-conversion-category="clinic_strip"
            data-conversion-location="bottom_strip"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

