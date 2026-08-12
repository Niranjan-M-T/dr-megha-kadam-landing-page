import Clinic from '@/components/Clinic'
import PageHero from '@/components/PageHero'
import { SITE_URL, CLINIC } from '@/data/site'

export const metadata = {
  title: "Visit Dr. Megha's Baby & Child Care — RT Nagar, Bangalore",
  description:
    "Visit Dr. Megha's Baby & Child Care at No. 646, First Floor, CBI Main Road, HMT Layout, RT Nagar, Bengaluru 560032. Call +91 88677 20711 to book a pediatric or lactation consultation with Dr. Megha D Kadam.",
  alternates: { canonical: '/contact/' },
}

const clinicJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: CLINIC.name,
  url: `${SITE_URL}/contact/`,
  telephone: `+${CLINIC.phoneHref.slice(1)}`,
  hasMap: CLINIC.mapsUrl,
  medicalSpecialty: ['Pediatric', 'Neonatology'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: CLINIC.streetAddress,
    addressLocality: CLINIC.locality,
    addressRegion: CLINIC.region,
    postalCode: CLINIC.postalCode,
    addressCountry: 'IN',
  },
  physician: {
    '@type': 'Physician',
    name: 'Dr. Megha D Kadam',
    medicalSpecialty: ['Pediatric', 'Neonatology'],
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }}
      />
      <PageHero
        eyebrow="Visit the clinic"
        title="Come say hello"
        sub="Personal, unhurried consultations in RT Nagar — away from the bustle of a big hospital."
      />
      <Clinic showMap />
    </>
  )
}
