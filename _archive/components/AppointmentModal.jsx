'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, MapPin, MessageSquare, Stethoscope, Clock } from 'lucide-react'
import { TRACKING_CONFIG, CONVERSION_EVENTS } from '@/data/trackingConfig'
import { trackConversion } from '@/lib/tracking'

export default function AppointmentModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // 5-second automatic Contact Us popup for visitors
    const timer = setTimeout(() => {
      const dismissed = typeof window !== 'undefined' ? sessionStorage.getItem('contact_popup_dismissed') : null
      if (!dismissed) {
        setIsOpen(true)
        trackConversion('contact_popup_auto_opened', { delay: '5s' })
      }
    }, 5000)

    const handleOpen = () => {
      setIsOpen(true)
      trackConversion('contact_popup_manual_opened', { location: 'user_click' })
    }

    window.addEventListener('open_appointment_modal', handleOpen)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('open_appointment_modal', handleOpen)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('contact_popup_dismissed', '1')
    }
  }

  const handleWhatsApp = () => {
    trackConversion(CONVERSION_EVENTS.WHATSAPP_CLICK, { location: 'contact_popup' })
    const url = `https://wa.me/${TRACKING_CONFIG.whatsapp.number}?text=${TRACKING_CONFIG.whatsapp.defaultMessage}`
    window.open(url, '_blank')
    handleClose()
  }

  const handleCall = () => {
    trackConversion(CONVERSION_EVENTS.PHONE_CLICK, { location: 'contact_popup' })
    window.location.href = `tel:${TRACKING_CONFIG.phone.href}`
  }

  const handleDirections = () => {
    trackConversion(CONVERSION_EVENTS.DIRECTIONS_CLICK, { location: 'contact_popup' })
    window.open(TRACKING_CONFIG.mapsUrl, '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-backdrop" onClick={handleClose}>
          <motion.div
            className="modal-container contact-popup-container"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              className="modal-close"
              onClick={handleClose}
              aria-label="Close modal"
              data-conversion-name="contact_popup_close"
            >
              <X size={20} />
            </button>

            <div className="modal-header text-center">
              <span className="modal-badge">
                <Stethoscope size={14} /> Dr. Megha&apos;s Baby &amp; Child Care
              </span>
              <h2>Need Care For Your Child?</h2>
              <p>Consultant Pediatrician &amp; Neonatologist in RT Nagar, Bengaluru. Get quick assistance on WhatsApp or call us directly.</p>
            </div>

            <div className="popup-clinic-info">
              <div>
                <MapPin size={16} className="pop-icon" />
                <span>No. 646, CBI Main Road, RT Nagar, Bengaluru</span>
              </div>
              <div>
                <Clock size={16} className="pop-icon" />
                <span>Consultations by Appointment</span>
              </div>
            </div>

            <div className="contact-popup-actions">
              <button
                onClick={handleWhatsApp}
                className="btn btn-whatsapp popup-btn"
                data-conversion-name={CONVERSION_EVENTS.WHATSAPP_CLICK}
                data-conversion-location="contact_popup_main"
              >
                <MessageSquare size={20} /> Chat on WhatsApp Instant
              </button>

              <button
                onClick={handleCall}
                className="btn btn-primary popup-btn"
                data-conversion-name={CONVERSION_EVENTS.PHONE_CLICK}
                data-conversion-location="contact_popup_call"
              >
                <Phone size={18} /> Call {TRACKING_CONFIG.phone.display}
              </button>

              <button
                onClick={handleDirections}
                className="btn btn-ghost popup-btn"
                data-conversion-name={CONVERSION_EVENTS.DIRECTIONS_CLICK}
                data-conversion-location="contact_popup_maps"
              >
                <MapPin size={18} /> Get Clinic Directions
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
