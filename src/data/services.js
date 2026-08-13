// Service catalogue. `short` is what appears on the landing-page cards.
// `icon` is a key resolved in src/components/serviceIcons.js (client side).
// The longer metaTitle/lead/body fields feed the archived detail pages in
// _archive/app/services and are kept so those routes can be restored as-is.

const services = [
  {
    slug: 'newborn-nicu-care',
    icon: 'baby',
    tint: 'tint-rose',
    name: 'Newborn & NICU care',
    short:
      'Prematurity, jaundice, feeding and weight worries in the first weeks.',
    metaTitle: 'Newborn & NICU Care Specialist in RT Nagar, Bangalore',
    metaDescription:
      "Newborn and NICU care in RT Nagar, Bangalore by Dr. Megha D Kadam, a neonatologist with a Fellowship from St. John's and 12 years of experience in neonatal resuscitation and critical newborn care.",
    h1: "Newborn and NICU care, from a neonatologist",
    lead:
      "The first few days can be the most delicate. Dr. Megha Kadam has twelve years of neonatology behind her, including a Fellowship in Neonatology from St. John's Medical College.",
    body: [
      'She has handled resuscitation in the delivery room and critical care for premature and unwell newborns as a Neonatologist at Apollo Hospitals Bannerghatta Road, Aster CMI Hebbal and SPARSH Hennur.',
      'She will also tell you what is happening and what to expect next, in language that still makes sense at three in the morning.',
    ],
    helps: [
      'Neonatal resuscitation and stabilisation',
      'Critical care for unwell newborns',
      'Premature and low-birth-weight follow-up',
      'Jaundice, feeding and weight gain',
      'NICU-graduate follow-up',
    ],
  },
  {
    slug: 'vaccinations-immunization',
    icon: 'shield',
    tint: 'tint-sage',
    name: 'Vaccinations',
    short:
      'IAP schedules, catch-up doses, and a technique that hurts less.',
    metaTitle: 'Child Vaccination & Immunization in RT Nagar, Bangalore',
    metaDescription:
      'Child vaccination and immunization in RT Nagar, Bangalore. Dr. Megha D Kadam follows IAP schedules, offers catch-up plans for missed doses and pain-minimised technique.',
    h1: 'Vaccinations, on time and with less crying',
    lead:
      "Dr. Megha follows the Indian Academy of Pediatrics schedule, adjusted for your child's age and health history.",
    body: [
      'Birth doses, the 6, 10 and 14 week rounds, boosters, annual flu shots and the optional vaccines are all available at the clinic.',
      'If you have missed doses or moved cities mid-schedule, she will work out a catch-up plan rather than starting over.',
    ],
    helps: [
      'IAP and WHO vaccination schedules',
      'Birth to adolescent immunization',
      'Catch-up plans for missed doses',
      'Pain-minimised injection technique',
      'Annual flu shots',
    ],
  },
  {
    slug: 'growth-development',
    icon: 'trending',
    tint: 'tint-gold',
    name: 'Growth & development',
    short:
      'Height, weight and milestones tracked at every single visit.',
    metaTitle: 'Child Growth & Development Monitoring in RT Nagar, Bangalore',
    metaDescription:
      "Growth and developmental milestone monitoring in RT Nagar, Bangalore. Dr. Megha D Kadam tracks your child's growth with structured assessments and early screening.",
    h1: 'Watching them grow, properly',
    lead:
      'Children grow at their own pace, but some patterns are worth a closer look. Structured tracking catches the ones that matter early, when they are easiest to sort out.',
    body: [
      'Every well-baby visit charts height, weight and head circumference against standard curves. Milestone reviews cover movement, speech, social behaviour and play.',
      'If something needs attention you will hear what it means and what it does not. Most of the time parents leave reassured, which is also a result.',
    ],
    helps: [
      'Growth charts at every visit',
      'Developmental milestone checks',
      'Early screening for delays',
      'Sleep and behaviour guidance',
      'Well-baby visit schedules',
    ],
  },
  {
    slug: 'pediatric-nutrition',
    icon: 'apple',
    tint: 'tint-sage',
    name: 'Nutrition & feeding',
    short:
      'Weaning, fussy eating, and advice that works in a real Indian kitchen.',
    metaTitle: 'Pediatric Nutrition & Child Diet Advice in RT Nagar, Bangalore',
    metaDescription:
      'Pediatric nutrition guidance in RT Nagar, Bangalore. Dr. Megha D Kadam helps with weaning, fussy eaters, deficiencies and healthy weight.',
    h1: 'Nutrition advice that survives contact with a real toddler',
    lead:
      'Anyone can hand you a diet chart. This is built around your kitchen, your routine and the child who refuses everything green.',
    body: [
      "Starting solids, weaning, and building everyday plates, all specific to your child's age and growth pattern.",
      'Underweight, overweight, picky eating and suspected deficiencies get assessed clinically first, so any change is based on what your child actually needs.',
    ],
    helps: [
      'Starting solids and weaning',
      'Fussy eater strategies',
      'Underweight and overweight',
      'Iron and vitamin D reviews',
      'Everyday plates for Indian homes',
    ],
  },
  {
    slug: 'child-health-consultations',
    icon: 'stethoscope',
    tint: 'tint-rose',
    name: 'Everyday illness',
    short:
      'Fevers, coughs, rashes and stomach bugs, examined properly.',
    metaTitle: 'Pediatrician Consultation in RT Nagar, Bangalore',
    metaDescription:
      'Consult an experienced pediatrician in RT Nagar, Bangalore. Dr. Megha D Kadam sees fevers, coughs, infections and everyday childhood illness.',
    h1: 'Everyday illness, taken seriously',
    lead:
      'Childhood comes with a steady stream of fevers, coughs and rashes. Each one gets a real history and a real examination.',
    body: [
      'Not a glance and a prescription. Medicines are prescribed when your child needs them and skipped when they do not, with the reasoning either way.',
      'You leave knowing the diagnosis, the warning signs to watch for, and when it is fine to let a child rest it off.',
    ],
    helps: [
      'Fever, cough, cold and flu',
      'Stomach pain, vomiting, diarrhoea',
      'Rashes and allergies',
      'Recurrent infections',
      'Honest advice on when medicine is needed',
    ],
  },
  {
    slug: 'parent-guidance',
    icon: 'messages',
    tint: 'tint-gold',
    name: 'Parent questions',
    short:
      'The things you did not get to ask last time. No jargon.',
    metaTitle: 'New Parent Counselling & Child Care Guidance in Bangalore',
    metaDescription:
      'New parent counselling in RT Nagar, Bangalore. Dr. Megha D Kadam answers questions in plain language: newborn basics, routines and when to worry.',
    h1: 'Someone who will actually answer the question',
    lead:
      'Modern parenting comes with endless information and very little clarity. The alternative is a straight answer you can act on.',
    body: [
      'Newborn basics for first-time parents, sleep and routine trouble, or a second opinion on something that has been worrying you.',
      'Consultations are long enough that you get to ask the third and fourth question, not just the first.',
    ],
    helps: [
      'Newborn basics for first-time parents',
      'Sleep and routines',
      '"When should I worry?" thresholds',
      'Second opinions',
      'School readiness questions',
    ],
  },
]

export default services

export function getService(slug) {
  return services.find((s) => s.slug === slug)
}
