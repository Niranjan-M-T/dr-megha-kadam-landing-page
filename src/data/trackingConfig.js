// Tracking and Ads Conversion Configuration

export const TRACKING_CONFIG = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-5P3JLG2Q',
  gaId: process.env.NEXT_PUBLIC_GA_ID || '',
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || '',
  googleAdsConversionId: process.env.NEXT_PUBLIC_GADS_CONVERSION_ID || '',
  googleAdsConversionLabel: process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL || '',
  phone: {
    display: '+91 88677 20711',
    href: '+918867720711',
    cleanNumber: '918867720711',
  },
  whatsapp: {
    number: '918867720711',
    defaultMessage: encodeURIComponent("Hello Dr. Megha, I would like to book a consultation for my child."),
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
