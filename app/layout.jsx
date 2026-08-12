import { SITE_URL, DOCTOR, CLINIC } from '@/data/site'
import MotionProvider from '@/components/MotionProvider'
import ConversionAnalytics from '@/components/ConversionAnalytics'
import FloatingConversionBar from '@/components/FloatingConversionBar'
import AppointmentModal from '@/components/AppointmentModal'
import { TRACKING_CONFIG } from '@/data/trackingConfig'
import './globals.css'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${DOCTOR.name} | Pediatrician & Neonatologist in RT Nagar, Bangalore`,
    template: `%s | ${DOCTOR.name}`,
  },
  description: `${DOCTOR.name} is a Consultant Pediatrician & Neonatologist with 12+ years of experience. Visit ${CLINIC.name} in RT Nagar, Bengaluru for newborn care, child vaccinations, growth monitoring, pediatric nutrition and general child care.`,
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
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  const gtmId = TRACKING_CONFIG.gtmId

  return (
    <html lang="en">
      <body>
        {/* Google Tag Manager (noscript) */}
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
        <MotionProvider>
          <main>{children}</main>
          <FloatingConversionBar />
          <AppointmentModal />
        </MotionProvider>
      </body>
    </html>
  )
}
