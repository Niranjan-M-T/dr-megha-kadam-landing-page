/**
 * The seven landing pages behind the Google Ads sitelink assets.
 *
 * Each entry is one page. The `sitelink` block is the exact asset text that
 * points at it, kept here on purpose: if a page's wording changes, the asset
 * it promises is sitting three lines above it. Google's limits are 25
 * characters for the sitelink text and 35 for each description line, and the
 * strings below are within them.
 *
 * These are server-rendered and carry no client component of their own, so
 * apart from the shared analytics listener they ship no JavaScript. Paid
 * traffic lands here first and mostly on a phone.
 */

import { CLINIC } from './site'

const adPages = [
  {
    slug: 'newborn-care',
    navLabel: 'Newborn & NICU care',
    sitelink: {
      text: 'Newborn & NICU Care',
      desc1: 'Prematurity, jaundice, feeding',
      desc2: 'Fellowship-trained neonatologist',
    },
    metaTitle: 'Newborn & NICU Care in RT Nagar, Bangalore',
    metaDescription:
      "Newborn and NICU care in RT Nagar, Bangalore. Dr. Megha D Kadam is a neonatologist with a Fellowship from St. John's and 12 years with newborns.",
    eyebrow: 'Newborn & NICU care',
    h1: 'Newborn and NICU care, from a neonatologist',
    lead:
      "The first few days can be the most delicate. Dr. Megha Kadam has twelve years of neonatology behind her, including a Fellowship in Neonatology from St. John's Medical College.",
    body: [
      'She has handled resuscitation in the delivery room and critical care for premature and unwell newborns as a Neonatologist at Apollo Hospitals Bannerghatta Road, Aster CMI Hebbal and SPARSH Hennur.',
      'If your baby was premature, spent time in NICU, or is not feeding or gaining weight the way you expected, that is worth a proper look rather than a wait and watch.',
      'She will also tell you what is happening and what to expect next, in language that still makes sense at three in the morning.',
    ],
    listTitle: 'What this covers',
    helps: [
      'Neonatal resuscitation and stabilisation',
      'Critical care for unwell newborns',
      'Premature and low-birth-weight follow-up',
      'Jaundice, feeding and weight gain',
      'NICU-graduate follow-up',
    ],
    ctaLabel: 'Ask about your baby',
    waMessage: "Hi Dr. Megha, I'd like to ask about newborn care for my baby.",
    photo: {
      stem: 'megha-nicu',
      widths: [480, 720],
      w: 720,
      h: 900,
      alt: 'Dr. Megha Kadam holding a newborn beside a NICU heat warmer',
      caption: 'With a newborn in the neonatal unit',
    },
  },

  {
    slug: 'vaccinations',
    navLabel: 'Vaccinations',
    sitelink: {
      text: 'Child Vaccinations',
      desc1: 'IAP schedule & catch-up doses',
      desc2: 'A technique that hurts less',
    },
    metaTitle: 'Child Vaccination & Immunisation in RT Nagar, Bangalore',
    metaDescription:
      'Child vaccination and immunisation in RT Nagar, Bangalore. Dr. Megha D Kadam follows the IAP schedule, with catch-up plans for missed doses.',
    eyebrow: 'Vaccinations & immunisation',
    h1: 'Vaccinations, on time and with less crying',
    lead:
      "Dr. Megha follows the Indian Academy of Pediatrics immunisation schedule, adjusted for your child's age and health history.",
    body: [
      'Birth doses, the 6, 10 and 14 week rounds, boosters, annual flu shots and the optional vaccines are all given at the clinic in RT Nagar.',
      'If you have missed doses or moved cities mid-schedule, she will work out a catch-up plan rather than starting over. Bring whatever immunisation record you have, even a photo of it on your phone.',
      'Injections are given with a technique that keeps the crying short, and you will be told what each vaccine is for and what to expect over the next day or two.',
    ],
    listTitle: 'What this covers',
    helps: [
      'IAP and WHO immunisation schedules',
      'Birth to adolescent vaccinations',
      'Catch-up plans for missed doses',
      'Pain-minimised injection technique',
      'Annual flu shots',
    ],
    ctaLabel: 'Book a vaccination',
    waMessage: "Hi Dr. Megha, I'd like to book a vaccination for my child.",
    photo: {
      stem: 'megha-newborn',
      widths: [640, 1080],
      w: 960,
      h: 720,
      alt: 'A newborn baby swaddled in a green cloth shortly after delivery',
      caption: 'Birth doses start in the first days',
    },
  },

  {
    slug: 'growth',
    navLabel: 'Growth & development',
    sitelink: {
      text: 'Growth & Development',
      desc1: 'Height, weight and milestones',
      desc2: 'Checked at every single visit',
    },
    metaTitle: 'Child Growth & Development Checks in RT Nagar, Bangalore',
    metaDescription:
      'Growth and milestone monitoring in RT Nagar, Bangalore. Dr. Megha D Kadam charts height, weight and development at every visit, with early screening.',
    eyebrow: 'Growth & development',
    h1: 'Watching them grow, properly',
    lead:
      'Children grow at their own pace, but some patterns are worth a closer look. Structured tracking catches the ones that matter early, when they are easiest to sort out.',
    body: [
      'Every well-baby visit charts height, weight and head circumference against standard curves. Milestone reviews cover movement, speech, social behaviour and play.',
      'If something needs attention you will hear what it means and what it does not. Most of the time parents leave reassured, which is also a result.',
      'Bring the old growth chart if you have one. A second point on a curve says far more than a single reading.',
    ],
    listTitle: 'What this covers',
    helps: [
      'Growth charts at every visit',
      'Developmental milestone checks',
      'Early screening for delays',
      'Sleep and behaviour guidance',
      'Well-baby visit schedules',
    ],
    ctaLabel: 'Book a growth check',
    waMessage: "Hi Dr. Megha, I'd like to book a growth and development check.",
    photo: {
      stem: 'megha-echo',
      widths: [640, 1080],
      w: 1600,
      h: 1200,
      alt: 'Dr. Megha Kadam assessing a baby at the bedside',
      caption: 'Assessing a baby at the bedside',
    },
  },

  {
    slug: 'about',
    navLabel: 'About Dr. Megha',
    sitelink: {
      text: 'About Dr. Megha',
      desc1: 'MBBS, DNB Paediatrics, Neonatology',
      desc2: '12 years with Bangalore children',
    },
    metaTitle: 'Child Specialist & Neonatologist in RT Nagar | Dr. Megha',
    metaDescription:
      'Dr. Megha D Kadam is a child specialist and neonatologist in RT Nagar, Bengaluru. MBBS, DNB Pediatrics, Fellowship in Neonatology, 12 years.',
    eyebrow: 'About',
    h1: 'Dr. Megha D Kadam',
    lead:
      'A child specialist in RT Nagar, Bengaluru. Twelve years in pediatrics and neonatology, a good part of it with babies who were very small or very unwell.',
    body: [
      "She did her MBBS at M.S. Ramaiah Medical College, her DNB in Pediatrics at St. Martha's Hospital, and a Fellowship in Neonatology at St. John's Medical College.",
      'Before opening her own clinic she worked as a Neonatologist at Apollo Hospitals Bannerghatta Road, Aster CMI Hebbal and SPARSH Hennur. She also teaches neonatal resuscitation to other doctors.',
      'Consultations are long enough to get to the second and third question, not just the first. In her words, most of the job is answering those properly and making sure nothing gets missed.',
    ],
    listTitle: 'Qualifications and experience',
    helps: [
      'MBBS — M.S. Ramaiah Medical College',
      "DNB Pediatrics — St. Martha's Hospital",
      "Fellowship in Neonatology — St. John's Medical College",
      'Neonatologist at Apollo Bannerghatta Road, Aster CMI Hebbal and SPARSH Hennur',
      'Teaches neonatal resuscitation to clinical staff',
    ],
    ctaLabel: 'Book a consultation',
    waMessage: "Hi Dr. Megha, I'd like to book a consultation.",
    photo: {
      stem: 'megha-speaking',
      widths: [480, 720],
      w: 720,
      h: 900,
      alt: 'Dr. Megha Kadam speaking at a SPARSH Hospital event',
      caption: 'Speaking at a hospital event',
    },
  },

  {
    slug: 'visit',
    navLabel: 'Clinic location & hours',
    sitelink: {
      text: 'Clinic Location & Hours',
      desc1: 'HMT Layout, RT Nagar 560032',
      desc2: 'By appointment. Call to confirm.',
    },
    metaTitle: 'Clinic Location & Hours in RT Nagar, Bengaluru 560032',
    metaDescription: `${CLINIC.name}, CBI Main Road, HMT Layout, RT Nagar, Bengaluru 560032. By appointment. Call ${CLINIC.phoneDisplay} to confirm timings.`,
    eyebrow: 'Visit the clinic',
    h1: 'Where to find the clinic',
    lead:
      "Dr. Megha's Baby & Child Care is on the first floor of the Lenskart building on CBI Main Road, HMT Layout, RT Nagar.",
    body: [
      "Visits are by appointment. Call or send a WhatsApp message before you come and the clinic will confirm the day's timings, so you are not sitting in a waiting room with an unwell child for longer than you need to.",
      'It is a short drive from Ganganagar, Sultanpalya, Kaval Byrasandra, Dinnur and Hebbal.',
      'For a first visit, bring any previous prescriptions along with the immunisation card and growth chart if you have them.',
    ],
    listTitle: 'Good to know',
    helps: [
      'By appointment: call to confirm the day’s timings',
      'First floor, Lenskart building, CBI Main Road',
      'HMT Layout, RT Nagar, Bengaluru 560032',
      'Bring previous prescriptions and the immunisation card',
      'The directions button opens straight into Google Maps',
    ],
    ctaLabel: 'Ask for an appointment',
    waMessage: "Hi Dr. Megha, I'd like to know the clinic timings and book a slot.",
    showMap: true,
  },

  {
    slug: 'everyday-illness',
    navLabel: 'Everyday illness',
    sitelink: {
      text: 'Fevers, Coughs & Rashes',
      desc1: 'Examined properly, not rushed',
      desc2: "Call to check today's timings",
    },
    metaTitle: 'Child Fevers, Coughs & Rashes in RT Nagar, Bangalore',
    metaDescription:
      'See a child specialist in RT Nagar, Bangalore for fevers, coughs, rashes, stomach bugs and recurrent infections. A real history and a real examination.',
    eyebrow: 'Everyday illness',
    h1: 'Fevers, coughs and rashes, taken seriously',
    lead:
      'Childhood comes with a steady stream of fevers, coughs and rashes. Each one gets a real history and a real examination.',
    body: [
      'Not a glance and a prescription. Medicines are prescribed when your child needs them and skipped when they do not, with the reasoning either way.',
      'You leave knowing the diagnosis, the warning signs to watch for, and when it is fine to let a child rest it off.',
      "Call the clinic to check today's timings before you come.",
    ],
    listTitle: 'What this covers',
    helps: [
      'Fever, cough, cold and flu',
      'Stomach pain, vomiting, diarrhoea',
      'Rashes and allergies',
      'Recurrent infections',
      'Honest advice on when medicine is needed',
    ],
    // Shown only on this page: it is the one most likely to be opened by a
    // worried parent at speed, and an ad landing page must not read as a
    // substitute for an emergency department.
    urgentNote:
      'If your child is struggling to breathe, unresponsive, having a fit or badly dehydrated, go straight to the nearest hospital rather than waiting for an appointment.',
    ctaLabel: 'Call the clinic',
    waMessage: "Hi Dr. Megha, my child is unwell and I'd like an appointment.",
    photo: {
      stem: 'megha-clinic',
      widths: [480, 680],
      w: 680,
      h: 850,
      alt: 'Dr. Megha Kadam with a young patient during a consultation at her RT Nagar clinic',
      caption: 'Consultations at the RT Nagar clinic',
    },
  },

  {
    slug: 'nutrition',
    navLabel: 'Nutrition & feeding',
    sitelink: {
      text: 'Nutrition & Feeding',
      desc1: 'Weaning and fussy eating help',
      desc2: 'Advice for a real Indian kitchen',
    },
    metaTitle: 'Child Nutrition & Feeding Advice in RT Nagar, Bangalore',
    metaDescription:
      'Pediatric nutrition guidance in RT Nagar, Bangalore. Dr. Megha D Kadam helps with starting solids, weaning, fussy eaters, deficiencies and healthy weight.',
    eyebrow: 'Nutrition & feeding',
    h1: 'Nutrition advice that survives contact with a real toddler',
    lead:
      'Anyone can hand you a diet chart. This is built around your kitchen, your routine and the child who refuses everything green.',
    body: [
      "Starting solids, weaning, and building everyday plates, all specific to your child's age and growth pattern.",
      'Underweight, overweight, picky eating and suspected deficiencies get assessed clinically first, so any change is based on what your child actually needs.',
      'The advice is for an Indian kitchen, built around the food already being cooked at home.',
    ],
    listTitle: 'What this covers',
    helps: [
      'Starting solids and weaning',
      'Fussy eater strategies',
      'Underweight and overweight',
      'Iron and vitamin D reviews',
      'Everyday plates for Indian homes',
    ],
    ctaLabel: 'Ask about feeding',
    waMessage: "Hi Dr. Megha, I'd like advice on my child's feeding and nutrition.",
  },
]

export default adPages

export function getAdPage(slug) {
  return adPages.find((p) => p.slug === slug)
}

/** The three pages shown in the "Also at the clinic" block, wrapping the list. */
export function relatedPages(slug, count = 3) {
  const i = adPages.findIndex((p) => p.slug === slug)
  if (i < 0) return adPages.slice(0, count)
  return Array.from({ length: count }, (_, n) => adPages[(i + n + 1) % adPages.length])
}
