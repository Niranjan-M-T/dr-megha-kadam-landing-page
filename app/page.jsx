import Landing from '@/components/Landing'
import { SITE_URL, DOCTOR, CLINIC, CLINIC_HOURS } from '@/data/site'
import services from '@/data/services'

const address = {
  '@type': 'PostalAddress',
  streetAddress: CLINIC.streetAddress,
  addressLocality: CLINIC.locality,
  addressRegion: CLINIC.region,
  postalCode: CLINIC.postalCode,
  addressCountry: 'IN',
}

// One graph covering the clinic (local business) and the doctor, so Google can
// link the practice to the practitioner instead of treating them as unrelated.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['MedicalClinic', 'LocalBusiness'],
      '@id': `${SITE_URL}/#clinic`,
      name: CLINIC.name,
      url: SITE_URL,
      telephone: CLINIC.phoneHref,
      address,
      image: `${SITE_URL}/og.jpg`,
      hasMap: CLINIC.mapsUrl,
      // One entry per sitting, not per day: the morning and evening blocks are
      // separate specifications, otherwise the lunch gap reads as open.
      openingHoursSpecification: CLINIC_HOURS.flatMap((h) =>
        h.slots.map(([opens, closes]) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: h.days,
          opens,
          closes,
        }))
      ),
      medicalSpecialty: ['Pediatric', 'Neonatal'],
      areaServed: [
        { '@type': 'Place', name: 'RT Nagar, Bengaluru' },
        { '@type': 'Place', name: 'HMT Layout, Bengaluru' },
        { '@type': 'Place', name: 'Bengaluru' },
      ],
      availableService: services.map((s) => ({
        '@type': 'MedicalProcedure',
        name: s.name,
        description: s.short,
      })),
    },
    {
      '@type': 'Physician',
      '@id': `${SITE_URL}/#physician`,
      name: DOCTOR.name,
      jobTitle: DOCTOR.title,
      url: SITE_URL,
      telephone: CLINIC.phoneHref,
      image: `${SITE_URL}/photos/megha-speaking.jpg`,
      address,
      worksFor: { '@id': `${SITE_URL}/#clinic` },
      medicalSpecialty: ['Pediatric', 'Neonatal'],
      alumniOf: [
        { '@type': 'EducationalOrganization', name: 'M.S. Ramaiah Medical College' },
        { '@type': 'EducationalOrganization', name: "St. Martha's Hospital" },
        { '@type': 'EducationalOrganization', name: "St. John's Medical College" },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Landing />
    </>
  )
}
