// Universal Conversion Tracking Utility Engine

import {
  CONVERSION_EVENTS,
  TRACKING_CONFIG,
  PRIMARY_CONVERSIONS,
  adsConfigured,
} from '@/data/trackingConfig'

// Helper to store & retrieve ad attribution parameters (UTM, GCLID, FBCLID)
export function getAdParams() {
  if (typeof window === 'undefined') return {}
  
  try {
    const urlParams = new URLSearchParams(window.location.search)
    const trackedKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid']
    let params = {}

    // Check if new params exist in URL
    let foundNew = false
    trackedKeys.forEach((key) => {
      const val = urlParams.get(key)
      if (val) {
        params[key] = val
        foundNew = true
      }
    })

    if (foundNew) {
      sessionStorage.setItem('ad_attribution_params', JSON.stringify(params))
    } else {
      const stored = sessionStorage.getItem('ad_attribution_params')
      if (stored) {
        params = JSON.parse(stored)
      }
    }
    return params
  } catch (e) {
    return {}
  }
}

/**
 * Universal track conversion function.
 * Dispatches events to:
 * - Google Tag Manager (window.dataLayer)
 * - Google Analytics / Google Ads (window.gtag)
 * - Meta / Facebook Pixel (window.fbq)
 * - Custom DOM event for extensions/debuggers
 */
export function trackConversion(eventName, customParams = {}) {
  if (typeof window === 'undefined') return

  const adParams = getAdParams()
  const payload = {
    event: eventName,
    page_path: window.location.pathname,
    page_location: window.location.href,
    page_title: document.title,
    page_referrer: document.referrer || undefined,
    is_primary_conversion: PRIMARY_CONVERSIONS.includes(eventName),
    timestamp: new Date().toISOString(),
    ...adParams,
    ...customParams,
  }

  // 1. Google Tag Manager Data Layer Push
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)

  // 2. Google Analytics / Google Ads (gtag)
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload)

    // Google Ads conversion. Only fires when the Ads id AND label are both
    // configured; if the conversion is built inside GTM instead, leave them
    // unset so the click is not counted twice.
    if (adsConfigured() && PRIMARY_CONVERSIONS.includes(eventName)) {
      window.gtag('event', 'conversion', {
        send_to: `${TRACKING_CONFIG.googleAdsConversionId}/${TRACKING_CONFIG.googleAdsConversionLabel}`,
        value: 0,
        currency: 'INR',
        transaction_id: `${eventName}-${Date.now()}`,
      })
    }
  }

  // 3. Meta Pixel (fbq)
  if (typeof window.fbq === 'function') {
    if (eventName === CONVERSION_EVENTS.PHONE_CLICK || eventName === CONVERSION_EVENTS.WHATSAPP_CLICK) {
      window.fbq('track', 'Contact', payload)
    } else if (eventName === CONVERSION_EVENTS.APPOINTMENT_SUBMIT) {
      window.fbq('track', 'Lead', payload)
    } else {
      window.fbq('trackCustom', eventName, payload)
    }
  }

  // 4. Custom Window Event for real-time tracking listeners
  try {
    window.dispatchEvent(new CustomEvent('conversion_tracked', { detail: payload }))
  } catch (e) {
    // Ignore iframe/event errors
  }

  // 5. Console Debug Logger
  const isDebug = new URLSearchParams(window.location.search).get('debug_conversion') === '1' || process.env.NODE_ENV === 'development'
  if (isDebug) {
    console.log(
      `%c🎯 [CONVERSION TRACKED]: ${eventName}`,
      'background: #38334a; color: #f8eae7; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
      payload
    )
  }
}

/**
 * Global Event Delegation for ALL clickable buttons & links across every page.
 */
export function initAutoButtonTracking() {
  if (typeof window === 'undefined' || window.__conversionTrackerInitialized) return
  window.__conversionTrackerInitialized = true

  // Save UTM params immediately on initial page load
  getAdParams()

  document.addEventListener('click', (e) => {
    const target = e.target.closest('a, button, [role="button"], input[type="submit"]')
    if (!target) return

    const tagName = target.tagName.toLowerCase()
    const href = target.getAttribute('href') || ''
    const buttonText = (target.textContent || target.getAttribute('aria-label') || target.getAttribute('value') || '').trim().replace(/\s+/g, ' ')
    
    // Explicit conversion metadata attributes override generic detection
    const customEventName = target.getAttribute('data-conversion-name')
    const category = target.getAttribute('data-conversion-category') || (tagName === 'a' ? 'link' : 'button')
    const label = target.getAttribute('data-conversion-label') || buttonText
    const location = target.getAttribute('data-conversion-location') || 'page_body'

    let determinedEvent = customEventName || CONVERSION_EVENTS.CTA_CLICK

    if (!customEventName) {
      if (href.startsWith('tel:')) {
        determinedEvent = CONVERSION_EVENTS.PHONE_CLICK
      } else if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        determinedEvent = CONVERSION_EVENTS.WHATSAPP_CLICK
      } else if (href.includes('google.com/maps') || href.includes('maps.app') || href.includes('share.google')) {
        determinedEvent = CONVERSION_EVENTS.DIRECTIONS_CLICK
      } else if (href.includes('practo.com')) {
        determinedEvent = CONVERSION_EVENTS.PRACTO_CLICK
      } else if (href.includes('/services/')) {
        determinedEvent = CONVERSION_EVENTS.SERVICE_VIEW
      }
    }

    trackConversion(determinedEvent, {
      cta_text: buttonText.slice(0, 120),
      cta_target: href,
      cta_category: category,
      cta_label: label.slice(0, 120),
      cta_location: location,
      element_id: target.id || undefined,
      // className is an SVGAnimatedString on SVG nodes and framer-motion class
      // lists get long, so coerce and cap it before it reaches the dataLayer.
      element_class: (typeof target.className === 'string' ? target.className : '').slice(0, 120) || undefined,
    })
  }, true)
}
