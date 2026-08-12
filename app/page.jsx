import AdLandingPage from '@/components/AdLandingPage'
import { SITE_URL, DOCTOR, CLINIC, SPARSH_URL } from '@/data/site'

export const metadata = {
  alternates: { canonical: '/' },
}

const physicianJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: DOCTOR.name,
  url: SITE_URL,
  image: `${SITE_URL}/icon.svg`,
  medicalSpecialty: ['Pediatric', 'Neonatology'],
  description:
    'Consultant Pediatrician and Neonatologist in RT Nagar, Bengaluru with 12+ years of experience in newborn care, child vaccinations, growth monitoring and pediatric nutrition.',
  telephone: `+${CLINIC.phoneHref.slice(1)}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CLINIC.streetAddress,
    addressLocality: CLINIC.locality,
    addressRegion: CLINIC.region,
    postalCode: CLINIC.postalCode,
    addressCountry: 'IN',
  },
  worksFor: {
    '@type': 'MedicalClinic',
    name: CLINIC.name,
    telephone: `+${CLINIC.phoneHref.slice(1)}`,
    hasMap: CLINIC.mapsUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CLINIC.streetAddress,
      addressLocality: CLINIC.locality,
      addressRegion: CLINIC.region,
      postalCode: CLINIC.postalCode,
      addressCountry: 'IN',
    },
  },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'M.S. Ramaiah Medical College' },
    { '@type': 'CollegeOrUniversity', name: "St. Martha's Hospital" },
    { '@type': 'CollegeOrUniversity', name: "St. John's Medical College" },
  ],
  sameAs: [SPARSH_URL],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
      />
      <AdLandingPage />
    </>
  )
}
