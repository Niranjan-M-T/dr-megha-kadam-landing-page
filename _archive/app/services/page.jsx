import ServicesGrid from '@/components/ServicesGrid'
import Lactation from '@/components/Lactation'
import ClinicStrip from '@/components/ClinicStrip'
import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Pediatric Services in RT Nagar, Bangalore',
  description:
    'Pediatric and neonatal services in RT Nagar, Bengaluru — newborn & NICU care, IBCLC lactation support, growth & development monitoring, pediatric nutrition, child health consultations and parent guidance by Dr. Megha D Kadam.',
  alternates: { canonical: '/services/' },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Care for every age & every stage"
        sub="Specialised pediatric and neonatal services, all under one gentle roof — explore each one to see how Dr. Megha can help."
      />
      <ServicesGrid linkCards />
      <Lactation />
      <ClinicStrip />
    </>
  )
}
