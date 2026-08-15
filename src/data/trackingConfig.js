// Tracking / ads configuration.
//
// IMPORTANT: this is a static export, so every NEXT_PUBLIC_* value is inlined
// at BUILD time, not read in the browser. Setting a variable in Cloudflare
// Pages only takes effect on the next build; changing it requires a redeploy.

export const TRACKING_CONFIG = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-5P3JLG2Q',
  gaId: process.env.NEXT_PUBLIC_GA_ID || '',
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || '',

  // Google Ads.
  //
  // The id alone installs the Google tag: enough for Ads to verify the tag,
  // for auto-tagging and for remarketing audiences. It does NOT record a
  // conversion, because a conversion action is identified by id + label.
  //
  // Add the label to start counting calls and WhatsApp taps as conversions —
  // but only if the conversion is NOT already built inside GTM, or the same
  // click is counted twice.
  //   id    -> "AW-1234567890"
  //   label -> the conversion label from the Ads conversion action
  googleAdsConversionId: process.env.NEXT_PUBLIC_GADS_CONVERSION_ID || 'AW-18340384473',
  googleAdsConversionLabel: process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL || '',

  phone: {
    display: '+91 88677 20711',
    href: '+918867720711',
    cleanNumber: '918867720711',
  },
  whatsapp: {
    number: '918867720711',
    defaultMessage: encodeURIComponent(
      'Hello Dr. Megha, I would like to book a consultation for my child.'
    ),
  },
  practoUrl: 'https://www.practo.com/bangalore/doctor/dr-megha-d-kadam-pediatrician',
  mapsUrl: 'https://share.google/Jses5UYmWJx5zFeGO',
}

export const CONVERSION_EVENTS = {
  PHONE_CLICK: 'phone_call_click',
  WHATSAPP_CLICK: 'whatsapp_click',
  APPOINTMENT_MODAL_OPEN: 'appointment_modal_open',
  APPOINTMENT_SUBMIT: 'appointment_lead_submitted',
  DIRECTIONS_CLICK: 'get_directions_click',
  PRACTO_CLICK: 'practo_booking_click',
  CTA_CLICK: 'cta_click',
  SERVICE_VIEW: 'service_detail_click',
}

// The events that count as a lead. These are what an Ads conversion action
// should be built on; everything else is engagement, not a conversion.
export const PRIMARY_CONVERSIONS = [
  CONVERSION_EVENTS.PHONE_CLICK,
  CONVERSION_EVENTS.WHATSAPP_CLICK,
  CONVERSION_EVENTS.APPOINTMENT_SUBMIT,
]

// The Google tag is installed. True on the id alone — this is what decides
// whether gtag.js loads and whether the privacy policy has to disclose Google
// advertising, since the tag sets cookies whether or not a conversion is
// ever counted.
export const adsTagConfigured = () => Boolean(TRACKING_CONFIG.googleAdsConversionId)

// A conversion ACTION is fireable. Needs the label too: `send_to` without one
// has no conversion action to attribute the click to.
export const adsConfigured = () =>
  Boolean(TRACKING_CONFIG.googleAdsConversionId && TRACKING_CONFIG.googleAdsConversionLabel)

// gtag is needed for GA4 and/or the Google Ads tag.
export const needsGtag = () => Boolean(TRACKING_CONFIG.gaId) || adsTagConfigured()
