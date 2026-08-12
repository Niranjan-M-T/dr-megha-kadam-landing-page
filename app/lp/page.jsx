import AdLandingPage from '@/components/AdLandingPage'
import { SITE_URL, DOCTOR, CLINIC } from '@/data/site'

export const metadata = {
  title: 'Dr. Megha D Kadam — Pediatrician & Neonatologist | RT Nagar, Bangalore',
  description:
    'Consultant Pediatrician & Neonatologist in RT Nagar, Bangalore with 12+ years of experience in newborn care, child vaccinations, growth monitoring and pediatric care.',
  alternates: { canonical: '/lp/' },
}

export default function LandingPageRoute() {
  return <AdLandingPage />
}
