// Single source of truth for contact / SEO details.

// Live origin. Drives the canonical tag, sitemap.xml, robots.txt, the Open
// Graph image URLs and the JSON-LD @ids, so it must match the domain the site
// is actually served from. A canonical pointing at a domain that does not
// resolve can keep the page out of Google's index entirely.
//
// If a custom domain is added later, change this and redeploy: it is baked in
// at build time by the static export.
export const SITE_URL = 'https://dr-meghas-child-care-clinic.pages.dev'

export const DOCTOR = {
  name: 'Dr. Megha D Kadam',
  title: 'Consultant Pediatrician & Neonatologist',
  experienceYears: '12+',
}

export const CLINIC = {
  name: "Dr. Megha's Baby & Child Care",
  addressLines: [
    'Lenskart Building, No. 646, First Floor',
    '3rd Cross, 7th Main, CBI Main Road',
    'HMT Layout, RT Nagar, Bengaluru, Karnataka 560032',
  ],
  streetAddress:
    'Lenskart Building, No. 646, First Floor, 3rd Cross, 7th Main, CBI Main Road, HMT Layout, RT Nagar',
  locality: 'Bengaluru',
  region: 'Karnataka',
  postalCode: '560032',
  shortLocality: 'RT Nagar, Bengaluru',
  phoneDisplay: '+91 88677 20711',
  phoneHref: '+918867720711',
  mapsUrl: 'https://share.google/Jses5UYmWJx5zFeGO',
  mapsEmbed:
    "https://maps.google.com/maps?q=Dr.%20Megha's%20Baby%20%26%20Child%20Care%2C%20No.%20646%2C%20CBI%20Main%20Road%2C%20HMT%20Layout%2C%20RT%20Nagar%2C%20Bengaluru%20560032&z=16&output=embed",
}

/**
 * Consulting hours. Two sittings Monday to Saturday, one on Sunday.
 *
 * Times are 24-hour so they can go straight into schema.org's
 * openingHoursSpecification. Everything on the site that mentions hours is
 * derived from this array — the location cards, the /visit/ page and the
 * structured data — so a change here reaches all of them at once and they
 * cannot end up contradicting each other.
 */
export const CLINIC_HOURS = [
  {
    label: 'Monday to Saturday',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    slots: [['09:00', '12:00'], ['17:00', '20:00']],
  },
  {
    label: 'Sunday',
    days: ['Sunday'],
    slots: [['10:30', '13:00']],
  },
]

/** "09:00" -> "9 am", "10:30" -> "10:30 am", "17:00" -> "5 pm". */
function clock(t) {
  const [h, m] = t.split(':').map(Number)
  const suffix = h < 12 ? 'am' : 'pm'
  const hour = h % 12 || 12
  return m ? `${hour}:${String(m).padStart(2, '0')} ${suffix}` : `${hour} ${suffix}`
}

/** "9 am–12 pm, 5–8 pm" — drops the repeated suffix inside a same-half range. */
export function formatSlots(slots) {
  return slots
    .map(([a, b]) => {
      const [from, to] = [clock(a), clock(b)]
      const sameHalf = from.slice(-2) === to.slice(-2)
      return `${sameHalf ? from.slice(0, -3) : from}–${to}`
    })
    .join(', ')
}

/** One-line summary, for anywhere a two-row table would be too much. */
export const HOURS_SUMMARY = CLINIC_HOURS.map(
  (h) => `${h.label}: ${formatSlots(h.slots)}`
).join('. ')

export const SPARSH_URL = 'https://www.sparshhospital.com/doctors/dr-megha-d-kadam/'
export const PRACTO_URL = 'https://www.practo.com/bangalore/doctor/dr-megha-d-kadam-pediatrician'
