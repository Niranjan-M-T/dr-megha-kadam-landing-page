'use client'

import { TRACKING_CONFIG, CONVERSION_EVENTS } from '@/data/trackingConfig'
import { Phone, MessageCircle, MapPin } from 'lucide-react'

export default function FloatingConversionBar() {
  const whatsappUrl = `https://wa.me/${TRACKING_CONFIG.whatsapp.number}?text=${TRACKING_CONFIG.whatsapp.defaultMessage}`

  return (
    <>
      {/* Desktop & Mobile Floating WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp with Dr. Megha's Clinic"
        data-conversion-name={CONVERSION_EVENTS.WHATSAPP_CLICK}
        data-conversion-category="floating_cta"
        data-conversion-location="sticky_widget"
      >
        <MessageCircle size={28} />
        <span className="whatsapp-tooltip">Chat on WhatsApp</span>
      </a>

      {/* Mobile Sticky Action Bar */}
      <div className="sticky-mobile-bar">
        <a
          href={`tel:${TRACKING_CONFIG.phone.href}`}
          className="smb-item smb-call"
          data-conversion-name={CONVERSION_EVENTS.PHONE_CLICK}
          data-conversion-category="mobile_sticky_bar"
          data-conversion-location="bottom_nav"
        >
          <Phone size={18} />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="smb-item smb-book"
          data-conversion-name={CONVERSION_EVENTS.WHATSAPP_CLICK}
          data-conversion-category="mobile_sticky_bar"
          data-conversion-location="bottom_nav"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>

        <a
          href={TRACKING_CONFIG.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="smb-item smb-directions"
          data-conversion-name={CONVERSION_EVENTS.DIRECTIONS_CLICK}
          data-conversion-category="mobile_sticky_bar"
          data-conversion-location="bottom_nav"
        >
          <MapPin size={18} />
          <span>Directions</span>
        </a>
      </div>
    </>
  )
}
