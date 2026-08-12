import About from '@/components/About'
import Trust from '@/components/Trust'
import Marquee from '@/components/Marquee'
import ClinicStrip from '@/components/ClinicStrip'
import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'About — 12+ Years in Pediatrics & Neonatology',
  description:
    'Meet Dr. Megha D Kadam — Consultant Pediatrician & Neonatologist in RT Nagar, Bengaluru. MBBS (M.S. Ramaiah), DNB Pediatrics (St. Martha\'s), Fellowship in Neonatology (St. John\'s) and IBCLC-certified lactation consultant.',
  alternates: { canonical: '/about/' },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Dr. Megha"
        title="The doctor behind the door"
        sub="Twelve years, five leading institutions, two specialities — and one very simple philosophy: treat every family like her own."
      />
      <About />
      <Marquee />
      <Trust />
      <ClinicStrip />
    </>
  )
}
