'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { TRACKING_CONFIG, adsConfigured, needsGtag } from '@/data/trackingConfig'
import { initAutoButtonTracking } from '@/lib/tracking'

export default function ConversionAnalytics() {
  const [debugLog, setDebugLog] = useState(null)
  const gtmId = TRACKING_CONFIG.gtmId
  const gaId = TRACKING_CONFIG.gaId
  const metaPixelId = TRACKING_CONFIG.metaPixelId
  const adsId = TRACKING_CONFIG.googleAdsConversionId
  // gtag is required for GA4 and for firing Ads conversions without GTM.
  const loadGtag = needsGtag()
  const gtagSrcId = gaId || adsId

  useEffect(() => {
    // Initialize global auto-tracking on all buttons and links
    initAutoButtonTracking()

    // Debug listener for visual on-screen feedback when ?debug_conversion=1
    const isDebug = new URLSearchParams(window.location.search).get('debug_conversion') === '1'
    if (isDebug) {
      const handleConversion = (e) => {
        setDebugLog(e.detail)
        setTimeout(() => setDebugLog(null), 4000)
      }
      window.addEventListener('conversion_tracked', handleConversion)
      return () => window.removeEventListener('conversion_tracked', handleConversion)
    }
  }, [])

  return (
    <>
      {/* Google Tag Manager Script */}
      {gtmId && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      )}

      {/* gtag.js — loaded for GA4 and/or direct Google Ads conversions.
          Previously this only loaded when gaId was set, which meant the Ads
          conversion id could never fire because window.gtag never existed. */}
      {loadGtag && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gtagSrcId}`}
            strategy="afterInteractive"
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                ${gaId ? `gtag('config', '${gaId}');` : ''}
                ${adsConfigured() ? `gtag('config', '${adsId}');` : ''}
              `,
            }}
          />
        </>
      )}

      {/* Meta / Facebook Pixel Script (Optional direct fallback) */}
      {metaPixelId && (
        <Script
          id="meta-pixel-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `,
          }}
        />
      )}

      {/* Real-time Visual Debugger Toast when ?debug_conversion=1 */}
      {debugLog && (
        <div className="conversion-debug-toast" role="status">
          <div className="toast-header">
            <span>🎯 Conversion Tracked</span>
            <code>{debugLog.event}</code>
          </div>
          <div className="toast-body">
            <div><strong>CTA:</strong> {debugLog.cta_text || 'Action'}</div>
            {debugLog.cta_target && <div><strong>Target:</strong> {debugLog.cta_target}</div>}
            <div><strong>Page:</strong> {debugLog.page_path}</div>
          </div>
        </div>
      )}
    </>
  )
}
