// Service catalogue — drives the home grid, /services, /services/[slug] pages and the sitemap.
// `icon` is a key resolved in src/components/serviceIcons.js (client side).

const services = [
  {
    slug: 'newborn-nicu-care',
    icon: 'baby',
    tint: 'tint-rose',
    name: 'Newborn & NICU Care',
    short:
      'Neonatal resuscitation and critical newborn management — experienced hands for the smallest, most fragile patients.',
    metaTitle: 'Newborn & NICU Care Specialist in RT Nagar, Bangalore',
    metaDescription:
      'Expert newborn and NICU care in RT Nagar, Bangalore by Dr. Megha D Kadam — neonatologist with a Fellowship from St. John\'s and 12+ years of experience in neonatal resuscitation and critical newborn management.',
    h1: 'Newborn & NICU care, from a neonatologist\'s hands',
    lead:
      'The first hours and days of a baby\'s life can be the most delicate. Dr. Megha D Kadam brings over twelve years of neonatology experience — including a Fellowship in Neonatology from St. John\'s Medical College — to every newborn in her care.',
    body: [
      'From advanced neonatal resuscitation in the delivery room to the critical care management of premature and unwell newborns, Dr. Megha has cared for the tiniest patients at Bangalore\'s leading children\'s institutes, including the Indira Gandhi Institute of Child Health, Apollo Hospitals and Aster CMI Hospital.',
      'Just as importantly, she keeps parents informed and supported through every step — explaining what is happening, what to expect and what comes next, in language that makes sense at three in the morning.',
    ],
    helps: [
      'Neonatal resuscitation and stabilisation',
      'Critical care management of unwell newborns',
      'Premature and low-birth-weight baby follow-up',
      'Newborn jaundice, feeding and weight-gain concerns',
      'NICU-graduate follow-up and parent counselling',
    ],
  },
  {
    slug: 'lactation-support',
    icon: 'milk',
    tint: 'tint-sage',
    name: 'Lactation Support (IBCLC)',
    short:
      'IBCLC-certified guidance on latching, supply and pumping, so feeding feels calm and confident — not stressful.',
    metaTitle: 'IBCLC Lactation Consultant in RT Nagar, Bangalore',
    metaDescription:
      'IBCLC-certified lactation consultant in RT Nagar, Bangalore. Dr. Megha D Kadam offers judgment-free breastfeeding support — latching, supply concerns, pumping and back-to-work plans for new mothers.',
    h1: 'Lactation support that meets you where you are',
    lead:
      'Feeding your baby should feel empowering — not exhausting. As an International Board-Certified Lactation Consultant (IBCLC), Dr. Megha offers specialised, judgment-free breastfeeding support through the earliest weeks of motherhood.',
    body: [
      'The IBCLC credential is the highest international certification in lactation care, and Dr. Megha pairs it with something just as valuable: the clinical perspective of a pediatrician and neonatologist who understands both mother and baby.',
      'Whether you are struggling with a painful latch, worried about supply, planning a return to work, or simply want reassurance that things are on track, consultations are unhurried and practical — you leave with a plan, not a lecture.',
    ],
    helps: [
      'Latching and positioning support',
      'Low-supply worries and weight-gain concerns',
      'Painful feeding, engorgement and blocked ducts',
      'Pumping, storage and back-to-work feeding plans',
      'Maternal nutrition and feeding schedules',
    ],
  },
  {
    slug: 'growth-development',
    icon: 'trending',
    tint: 'tint-gold',
    name: 'Growth & Development',
    short:
      'Structured milestone monitoring that makes sure your child is growing, learning and playing right on track.',
    metaTitle: 'Child Growth & Development Monitoring in RT Nagar, Bangalore',
    metaDescription:
      'Child growth and developmental milestone monitoring in RT Nagar, Bangalore. Dr. Megha D Kadam tracks your child\'s physical growth and development with structured assessments and early screening.',
    h1: 'Watching them grow — carefully, scientifically',
    lead:
      'Every child grows at their own pace, but some patterns deserve a closer look. Dr. Megha uses structured growth tracking and developmental assessments to make sure your child is thriving — and to catch concerns early, when they are easiest to address.',
    body: [
      'Regular well-baby visits chart your child\'s height, weight and head circumference against standardised growth curves, while age-appropriate milestone reviews look at movement, speech, social skills and play.',
      'When something needs attention, you will hear it explained clearly — what it means, what it doesn\'t, and exactly what to do next. Most of the time, what parents need most is informed reassurance.',
    ],
    helps: [
      'Growth chart tracking at every visit',
      'Developmental milestone assessments',
      'Early screening for developmental delays',
      'Sleep, behaviour and routine guidance',
      'Structured well-baby visit schedules',
    ],
  },
  {
    slug: 'pediatric-nutrition',
    icon: 'apple',
    tint: 'tint-sage',
    name: 'Pediatric Nutrition',
    short:
      'From fussy eaters to balanced plates — practical, judgment-free advice that actually works at home.',
    metaTitle: 'Pediatric Nutritionist & Child Diet Advice in RT Nagar, Bangalore',
    metaDescription:
      'Practical pediatric nutrition guidance in RT Nagar, Bangalore. Dr. Megha D Kadam helps with fussy eaters, weaning, balanced diets and healthy weight — advice that works in real Indian kitchens.',
    h1: 'Nutrition advice that survives contact with a real toddler',
    lead:
      'Anyone can hand you a diet chart. Dr. Megha\'s nutrition guidance is built for real homes — fussy phases, joint families, tiffin boxes and all — so healthy eating actually happens, without mealtime battles.',
    body: [
      'From starting solids and weaning to building balanced everyday plates, guidance is practical and specific to your child\'s age, growth pattern and family routine.',
      'Concerns about underweight or overweight children, picky eating, or possible deficiencies are assessed clinically first — so dietary changes are grounded in what your child actually needs, not internet trends.',
    ],
    helps: [
      'Starting solids and weaning plans',
      'Fussy and picky eater strategies',
      'Underweight and overweight concerns',
      'Iron, vitamin D and other deficiency reviews',
      'Everyday balanced-plate guidance for Indian homes',
    ],
  },
  {
    slug: 'child-health-consultations',
    icon: 'stethoscope',
    tint: 'tint-rose',
    name: 'Child Health Consultations',
    short:
      'Unhurried, thorough consultations for everyday illnesses and routine care, with diagnoses you can trust.',
    metaTitle: 'Pediatrician Consultation in RT Nagar, Bangalore — Child Specialist',
    metaDescription:
      'Consult an experienced pediatrician in RT Nagar, Bangalore. Dr. Megha D Kadam offers unhurried consultations for fevers, coughs, infections and everyday childhood illnesses with accurate diagnoses.',
    h1: 'Everyday illnesses, taken seriously',
    lead:
      'Fevers, coughs, tummy aches, rashes — childhood comes with a steady stream of worries. Dr. Megha\'s consultations are thorough and unhurried, with a reputation built on accurate diagnoses and calm, clear guidance.',
    body: [
      'Each visit includes a proper history and examination — not a glance and a prescription. Medicines are prescribed when they are needed, and skipped when they are not, with an honest explanation either way.',
      'Parents leave knowing what the diagnosis is, what warning signs to watch for, and when to simply let a child rest and recover. That clarity is often the best medicine for the household.',
    ],
    helps: [
      'Fever, cough, cold and flu assessment',
      'Stomach pain, vomiting and diarrhoea',
      'Skin rashes and allergic concerns',
      'Recurrent infections and immunity worries',
      'Honest guidance on when medicine is — and isn\'t — needed',
    ],
  },
  {
    slug: 'parent-guidance',
    icon: 'messages',
    tint: 'tint-gold',
    name: 'Parent Guidance',
    short:
      'Clear answers without the jargon. Every visit ends with you knowing exactly what to do next — and why.',
    metaTitle: 'New Parent Counselling & Child Care Guidance in Bangalore',
    metaDescription:
      'New parent counselling and child care guidance in RT Nagar, Bangalore. Dr. Megha D Kadam answers your questions in plain language — newborn care basics, routines, and when to worry.',
    h1: 'Someone to actually answer your questions',
    lead:
      'Modern parenting comes with infinite information and very little clarity. Dr. Megha is known for the opposite: straight answers in plain language, so you always know what to do next — and why.',
    body: [
      'Whether it is newborn care basics for first-time parents, sleep and routine troubles, or a second opinion on a diagnosis that worries you, consultations give you the time to actually ask.',
      'Her communication style is consistently what families praise most: warm, specific and free of jargon — guidance you can act on, not just nod along to.',
    ],
    helps: [
      'Newborn care basics for first-time parents',
      'Sleep, routines and settling guidance',
      '“When should I worry?” thresholds, explained',
      'Second opinions, discussed honestly',
      'School readiness and everyday parenting questions',
    ],
  },
]

export default services

export function getService(slug) {
  return services.find((s) => s.slug === slug)
}
