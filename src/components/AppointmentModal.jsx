'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, Calendar, Send, CheckCircle2, MessageSquare } from 'lucide-react'
import { TRACKING_CONFIG, CONVERSION_EVENTS } from '@/data/trackingConfig'
import { trackConversion } from '@/lib/tracking'

export default function AppointmentModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    concern: 'General Consultation',
    preferredDate: '',
  })

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true)
      setSubmitted(false)
      trackConversion(CONVERSION_EVENTS.APPOINTMENT_MODAL_OPEN, { location: 'user_trigger' })
    }
    window.addEventListener('open_appointment_modal', handleOpen)
    return () => window.removeEventListener('open_appointment_modal', handleOpen)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.phone || !formData.parentName) return

    // Track lead conversion
    trackConversion(CONVERSION_EVENTS.APPOINTMENT_SUBMIT, {
      parent_name: formData.parentName,
      phone_number: formData.phone,
      service_concern: formData.concern,
      preferred_date: formData.preferredDate || 'Flexible',
    })

    setSubmitted(true)
  }

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Dr. Megha, my name is ${formData.parentName || 'Parent'}. I would like to book a consultation for ${formData.concern}. My phone number is ${formData.phone}.`
    )
    trackConversion(CONVERSION_EVENTS.WHATSAPP_CLICK, { location: 'appointment_modal_success' })
    window.open(`https://wa.me/${TRACKING_CONFIG.whatsapp.number}?text=${text}`, '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-backdrop" onClick={() => setIsOpen(false)}>
          <motion.div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <button
              className="modal-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
              data-conversion-name="modal_close_click"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <>
                <div className="modal-header">
                  <span className="modal-badge">
                    <Calendar size={14} /> Quick Consultation Request
                  </span>
                  <h2>Book an Appointment</h2>
                  <p>Leave your details below and our clinic team will confirm your visit time promptly.</p>
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
                  <div className="form-group">
                    <label htmlFor="parentName">Parent / Guardian Name *</label>
                    <input
                      type="text"
                      id="parentName"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="concern">Consultation Type</label>
                      <select
                        id="concern"
                        value={formData.concern}
                        onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                      >
                        <option value="General Consultation">General Pediatric Consultation</option>
                        <option value="Newborn Care">Newborn & Infant Care</option>
                        <option value="Lactation Support">Lactation & Breastfeeding</option>
                        <option value="Vaccination">Vaccination / Immunization</option>
                        <option value="Growth Check">Growth & Nutrition Check</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="preferredDate">Preferred Date</label>
                      <input
                        type="date"
                        id="preferredDate"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary modal-submit-btn"
                    data-conversion-name={CONVERSION_EVENTS.APPOINTMENT_SUBMIT}
                    data-conversion-category="form_submit"
                    data-conversion-location="appointment_modal"
                  >
                    <Send size={16} /> Request Consultation
                  </button>
                </form>
              </>
            ) : (
              <div className="modal-success">
                <CheckCircle2 size={54} className="success-icon" />
                <h3>Request Sent Successfully!</h3>
                <p>Thank you, {formData.parentName}. Dr. Megha&apos;s clinic team will contact you shortly at <strong>{formData.phone}</strong>.</p>
                <div className="modal-success-actions">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="btn btn-whatsapp"
                    data-conversion-name={CONVERSION_EVENTS.WHATSAPP_CLICK}
                    data-conversion-location="modal_success_whatsapp"
                  >
                    <MessageSquare size={18} /> Chat on WhatsApp Instant
                  </button>
                  <a
                    href={`tel:${TRACKING_CONFIG.phone.href}`}
                    className="btn btn-ghost"
                    data-conversion-name={CONVERSION_EVENTS.PHONE_CLICK}
                    data-conversion-location="modal_success_call"
                  >
                    <Phone size={18} /> Call Clinic Directly
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
