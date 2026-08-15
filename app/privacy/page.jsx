import Link from 'next/link'
import { ArrowLeft, Phone } from 'lucide-react'
import { SITE_URL, DOCTOR, CLINIC } from '@/data/site'
import { TRACKING_CONFIG, adsTagConfigured, adsConfigured } from '@/data/trackingConfig'

// Bumped by hand whenever the wording changes, so the page never claims to be
// fresher than it is.
const LAST_UPDATED = '13 August 2026'

export const metadata = {
  title: 'Privacy Policy',
  description: `How ${CLINIC.name} handles information collected through this website, including cookies and advertising measurement.`,
  alternates: { canonical: '/privacy/' },
  openGraph: { title: `Privacy Policy | ${DOCTOR.name}`, url: `${SITE_URL}/privacy/` },
}

export default function PrivacyPage() {
  // Rendered from the live tracking config so the disclosures cannot drift out
  // of step with what the site actually loads.
  const usesGtm = Boolean(TRACKING_CONFIG.gtmId)
  const usesGa = Boolean(TRACKING_CONFIG.gaId)
  // The tag being present is what matters here, not whether a conversion
  // action is wired up: the Google Ads tag sets cookies either way, so the
  // disclosure is owed from the moment it loads.
  const usesAds = adsTagConfigured()
  const countsConversions = adsConfigured()
  const usesMeta = Boolean(TRACKING_CONFIG.metaPixelId)

  return (
    <div className="legal">
      <header className="legal-head">
        <div className="wrap legal-head-in">
          <Link className="brand" href="/">
            <span className="brand-mark" aria-hidden="true">M</span>
            <span className="brand-txt">
              Dr. Megha Kadam
              <small>Pediatrician &amp; Neonatologist</small>
            </span>
          </Link>
          <Link className="legal-back" href="/">
            <ArrowLeft size={16} strokeWidth={2.4} />
            <span>Back to site</span>
          </Link>
        </div>
      </header>

      <main className="wrap legal-body">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy Policy</h1>
        <p className="legal-meta">Last updated {LAST_UPDATED}</p>

        <p className="lede">
          This policy explains what happens to information collected through this website. It is
          written in plain language on purpose. If anything here is unclear, please call the clinic
          and ask.
        </p>

        <h2>What this policy covers</h2>
        <p>
          This policy covers <strong>this website only</strong>. Medical records and anything you
          discuss during a consultation are handled separately, under the confidentiality obligations
          that apply to medical practice in India. Booking an appointment or being treated at the
          clinic is not governed by this page.
        </p>

        <h2>Information you give us</h2>
        <p>
          Nothing. There is no contact form, no sign-up and no payment on this site. Every button
          either opens your phone dialler, opens WhatsApp, or opens Google Maps. We do not receive
          anything you type.
        </p>
        <p>
          When you call or message, that conversation happens on your phone network or on WhatsApp,
          not on this website. WhatsApp messages are covered by WhatsApp&apos;s own privacy policy.
          Please do not send medical details, photographs or reports over WhatsApp unless the clinic
          has asked you to.
        </p>

        <h2>Information collected automatically</h2>
        <p>
          Like most websites, this one records basic technical information when you visit: your IP
          address, rough location based on that address, device and browser type, which pages you
          opened, how long you stayed and which links you tapped. This is used to understand whether
          the site is working and whether our advertising is reaching the right people.
        </p>
        <p>
          If you arrive from an advertisement, the click identifier and campaign labels in the link
          (for example <code>gclid</code> and <code>utm_source</code>) are stored in your
          browser&apos;s session storage. This lets us see which advertisement led to a phone call
          without knowing who you are. Session storage is cleared automatically when you close the
          tab.
        </p>

        <h2>Cookies and similar technologies</h2>
        <p>These services run on the site and may set cookies:</p>
        <ul className="legal-list">
          {usesGtm && (
            <li>
              <strong>Google Tag Manager</strong> loads the measurement tools used on the site. It
              does not itself collect information about you, but it is a container: the clinic can
              add or remove tools inside it without changing this website, so it may load
              measurement tools beyond those named here.
            </li>
          )}
          {usesGa && (
            <li>
              <strong>Google Analytics</strong> produces aggregate statistics about how the site is
              used.
            </li>
          )}
          {usesAds && (
            <li>
              <strong>Google Ads</strong>{' '}
              {countsConversions
                ? 'records that a call or WhatsApp button was tapped after an advertisement was clicked, so we can tell which advertisements work.'
                : 'is loaded so that visits arriving from an advertisement can be measured, and sets cookies for that purpose.'}
            </li>
          )}
          {usesMeta && (
            <li>
              <strong>Meta Pixel</strong> measures the performance of advertising run on Facebook and
              Instagram.
            </li>
          )}
          <li>
            <strong>Google Maps</strong> is embedded to show the clinic location. Google receives
            your IP address when that map loads, under Google&apos;s own privacy policy.
          </li>
          <li>
            <strong>Cloudflare</strong> hosts and delivers the site, and keeps short-lived security
            and performance logs.
          </li>
        </ul>
        <p>
          We do not sell your information, and we do not share it with anyone beyond the service
          providers named above.
        </p>

        <h2>Children</h2>
        <p>
          This is a paediatric clinic, so it is worth being clear: this website is written for
          parents and carers, not for children. We do not knowingly collect information from
          children, and nothing on the site asks a child for details about themselves.
        </p>

        <h2>How to opt out</h2>
        <p>
          You can block or delete cookies in your browser settings, and most browsers offer a private
          window that discards them when you close it. To control advertising specifically, use
          Google&apos;s{' '}
          <a href="https://myadcenter.google.com/" target="_blank" rel="noreferrer noopener">
            My Ad Center
          </a>{' '}
          or install Google&apos;s{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noreferrer noopener"
          >
            Analytics opt-out add-on
          </a>
          . Blocking these will not stop you from using the site or contacting the clinic.
        </p>

        <h2>How long information is kept</h2>
        <p>
          Session storage disappears as soon as you close the tab. Hosting and security logs are
          short-lived.
        </p>
        {(usesGa || usesAds || usesMeta) && (
          <p>
            Anything collected by the measurement tools above is held by those providers under the
            retention period configured for each account, not by this website. Google and Meta each
            publish their own retention settings and privacy terms.
          </p>
        )}
        <p>
          This website has no database of its own. There is nowhere on it for your information to be
          stored.
        </p>

        <h2>Your rights</h2>
        <p>
          Under India&apos;s Digital Personal Data Protection Act, 2023, you may ask what personal
          data is held about you, ask for it to be corrected or erased, withdraw consent you have
          previously given, and nominate someone to exercise these rights on your behalf. To make a
          request, contact the clinic using the details below and allow a reasonable period for a
          reply.
        </p>

        <h2>Changes</h2>
        <p>
          If the tools used on this site change, this page is updated and the date at the top
          changes with it.
        </p>

        <h2>Contact</h2>
        <address className="legal-contact">
          <strong>{CLINIC.name}</strong>
          {CLINIC.addressLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
          <a className="legal-tel" href={`tel:${CLINIC.phoneHref}`}>
            <Phone size={16} strokeWidth={2.4} /> {CLINIC.phoneDisplay}
          </a>
        </address>

        <p className="legal-disclaimer">
          This website provides general information and is not medical advice. If your child needs
          urgent help, go to the nearest hospital.
        </p>

        <Link className="btn btn-call legal-cta" href="/">
          Back to the main page
        </Link>
      </main>
    </div>
  )
}
