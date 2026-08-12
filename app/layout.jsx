import { Fraunces, Nunito_Sans } from 'next/font/google'
import { SITE_URL, DOCTOR, CLINIC } from '@/data/site'
import MotionProvider from '@/components/MotionProvider'
import ConversionAnalytics from '@/components/ConversionAnalytics'
import { TRACKING_CONFIG } from '@/data/trackingConfig'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
  adjustFontFallback: false,
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#faf7f2',
}

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${DOCTOR.name} | Pediatrician & Neonatologist in RT Nagar, Bangalore`,
  description: `${DOCTOR.name} is a Consultant Pediatrician and Neonatologist with 12 years of experience. ${CLINIC.name} in RT Nagar, Bengaluru: newborn and NICU care, child vaccinations, growth monitoring and everyday child health.`,
  alternates: { canonical: '/' },
  keywords: [
    'pediatrician RT Nagar',
    'pediatrician Bangalore',
    'child specialist RT Nagar',
    'neonatologist Bangalore',
    'child vaccination Bangalore',
    'pediatric immunization RT Nagar',
    'baby doctor RT Nagar',
    'Dr Megha Kadam',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: CLINIC.name,
    title: `${DOCTOR.name} | Pediatrician & Neonatologist, RT Nagar`,
    description: `Newborn and NICU care, vaccinations and everyday child health at ${CLINIC.name}, RT Nagar, Bengaluru.`,
    images: [{ url: '/photos/megha-clinic.jpg', width: 680, height: 850, alt: DOCTOR.name }],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  const gtmId = TRACKING_CONFIG.gtmId

  return (
    <html lang="en" className={`${fraunces.variable} ${nunitoSans.variable}`}>
      <body>
        {/* framer-motion serialises opacity:0 onto every whileInView element in
            the static export. With scripting off nothing would ever reveal, so
            most of the page would render blank. Unhide it. */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '[style*="opacity:0"]{opacity:1!important;transform:none!important}' +
                '.bar{transform:none!important}',
            }}
          />
        </noscript>
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <ConversionAnalytics />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
