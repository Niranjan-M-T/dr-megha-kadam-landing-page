import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  TriangleAlert,
} from 'lucide-react'
import { SITE_URL, DOCTOR, CLINIC } from '@/data/site'
import { TRACKING_CONFIG, CONVERSION_EVENTS } from '@/data/trackingConfig'
import { relatedPages } from '@/data/adPages'

/**
 * The shared shell for the seven ad landing pages.
 *
 * A server component with no client island of its own. Everything that moves
 * on the main landing page — scroll reveals, the counter, the carousel, the
 * bar that hides on scroll — is deliberately absent. Paid clicks arrive cold
 * on a phone, so these pages are HTML and CSS and nothing else. Conversion
 * tracking still works: ConversionAnalytics listens on the document from the
 * root layout, so the data-conversion-* attributes below are picked up
 * without this page shipping a byte of JS.
 */

const telUrl = `tel:${CLINIC.phoneHref}`

function waUrl(message) {
  const text = message ? encodeURIComponent(message) : TRACKING_CONFIG.whatsapp.defaultMessage
  return `https://wa.me/${TRACKING_CONFIG.whatsapp.number}?text=${text}`
}

/** Plain responsive <img>. No next/image: the export is unoptimized anyway. */
function Shot({ stem, widths, w, h, alt, sizes }) {
  return (
    <img
      src={`/photos/${stem}.jpg`}
      srcSet={widths.map((n) => `/photos/${stem}-${n}.webp ${n}w`).join(', ')}
      sizes={sizes}
      width={w}
      height={h}
      alt={alt}
      loading="lazy"
      decoding="async"
    />
  )
}

export default function AdPage({ page }) {
  const wa = waUrl(page.waMessage)
  const related = relatedPages(page.slug)
  const loc = `ad_${page.slug.replace(/-/g, '_')}`

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      {
        '@type': 'ListItem',
        position: 2,
        name: page.navLabel,
        item: `${SITE_URL}/${page.slug}/`,
      },
    ],
  }

  return (
    <div className="ad">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <header className="ad-head">
        <div className="wrap ad-head-in">
          <Link className="brand" href="/">
            <span className="brand-mark" aria-hidden="true">M</span>
            <span className="brand-txt">
              Dr. Megha Kadam
              <small>Pediatrician &amp; Neonatologist</small>
            </span>
          </Link>
          <a
            className="btn btn-call btn-sm ad-head-cta"
            href={telUrl}
            data-conversion-name={CONVERSION_EVENTS.PHONE_CLICK}
            data-conversion-location={`${loc}_header`}
          >
            <Phone size={16} strokeWidth={2.3} />
            <span>Call</span>
          </a>
        </div>
      </header>

      <main>
        {/* ---------- hero ---------- */}
        <section className="ad-hero">
          <div className={`wrap ad-hero-in${page.photo ? '' : ' is-solo'}`}>
            <div className="ad-hero-copy">
              <nav className="ad-crumbs" aria-label="Breadcrumb">
                <Link href="/">
                  <ArrowLeft size={14} strokeWidth={2.4} />
                  <span>Home</span>
                </Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{page.navLabel}</span>
              </nav>

              <p className="eyebrow">{page.eyebrow}</p>
              <h1>{page.h1}</h1>
              <p className="lede">{page.lead}</p>

              <div className="ad-cta">
                <a
                  className="btn btn-wa btn-lg"
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  data-conversion-name={CONVERSION_EVENTS.WHATSAPP_CLICK}
                  data-conversion-location={`${loc}_hero`}
                  data-conversion-label={page.navLabel}
                >
                  <MessageCircle size={19} strokeWidth={2.2} />
                  {page.ctaLabel}
                </a>
                <a
                  className="btn btn-call btn-lg"
                  href={telUrl}
                  data-conversion-name={CONVERSION_EVENTS.PHONE_CLICK}
                  data-conversion-location={`${loc}_hero`}
                  data-conversion-label={page.navLabel}
                >
                  <Phone size={18} strokeWidth={2.2} />
                  {CLINIC.phoneDisplay}
                </a>
              </div>

              <ul className="ad-facts">
                <li>
                  <MapPin size={15} strokeWidth={2.1} />
                  {CLINIC.shortLocality}
                </li>
                <li>
                  <Clock size={15} strokeWidth={2.1} />
                  By appointment
                </li>
              </ul>
            </div>

            {page.photo && (
              <figure className="ad-shot">
                <Shot {...page.photo} sizes="(max-width: 720px) 92vw, 420px" />
                <figcaption>{page.photo.caption}</figcaption>
              </figure>
            )}
          </div>
        </section>

        {/* ---------- body ---------- */}
        <section className="wrap ad-body">
          {page.body.map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}

          {page.urgentNote && (
            <p className="ad-urgent">
              <TriangleAlert size={18} strokeWidth={2.2} aria-hidden="true" />
              <span>{page.urgentNote}</span>
            </p>
          )}

          <h2>{page.listTitle}</h2>
          <ul className="ad-list">
            {page.helps.map((h) => (
              <li key={h}>
                <Check size={15} strokeWidth={3} aria-hidden="true" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- clinic ---------- */}
        <section className="ad-clinic">
          <div className="wrap">
            <h2>{page.showMap ? 'Getting there' : 'Where to find her'}</h2>

            <div className="loc-card">
              <h3>{CLINIC.name}</h3>
              <ul className="loc-meta">
                <li>
                  <span className="mi"><MapPin size={17} strokeWidth={1.9} /></span>
                  <address>
                    {CLINIC.addressLines.map((l) => <span key={l}>{l}</span>)}
                  </address>
                </li>
                <li>
                  <span className="mi"><Phone size={17} strokeWidth={1.9} /></span>
                  <a
                    href={telUrl}
                    data-conversion-name={CONVERSION_EVENTS.PHONE_CLICK}
                    data-conversion-location={`${loc}_clinic_card`}
                  >
                    {CLINIC.phoneDisplay}
                  </a>
                </li>
                <li>
                  <span className="mi"><Clock size={17} strokeWidth={1.9} /></span>
                  <span>{CLINIC.timings}</span>
                </li>
              </ul>

              <div className="loc-btns">
                <a
                  className="btn btn-wa btn-lg"
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  data-conversion-name={CONVERSION_EVENTS.WHATSAPP_CLICK}
                  data-conversion-location={`${loc}_clinic_card`}
                >
                  <MessageCircle size={18} strokeWidth={2.2} /> WhatsApp
                </a>
                <a
                  className="btn btn-ghost btn-lg"
                  href={CLINIC.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-conversion-name={CONVERSION_EVENTS.DIRECTIONS_CLICK}
                  data-conversion-location={`${loc}_clinic_card`}
                >
                  <MapPin size={18} strokeWidth={2.2} /> Directions
                </a>
              </div>
            </div>

            {/* Only the location page carries the embed. Elsewhere it is a third
                of a megabyte of Google iframe for a detail nobody scrolled for. */}
            {page.showMap && (
              <div className="loc-map">
                <a
                  className="loc-map-fallback"
                  href={CLINIC.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-conversion-name={CONVERSION_EVENTS.DIRECTIONS_CLICK}
                  data-conversion-location={`${loc}_map_fallback`}
                >
                  <MapPin size={20} strokeWidth={1.9} />
                  <span>Open in Google Maps</span>
                </a>
                <iframe
                  src={CLINIC.mapsEmbed}
                  title={`Map showing ${CLINIC.name} in RT Nagar, Bengaluru`}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            )}
          </div>
        </section>

        {/* ---------- siblings ---------- */}
        <section className="ad-more">
          <div className="wrap">
            <h2>Also at the clinic</h2>
            <ul className="ad-more-grid">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/${r.slug}/`}>
                    <span>
                      <strong>{r.navLabel}</strong>
                      <small>{r.sitelink.desc1}</small>
                    </span>
                    <ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <p className="foot-name">{DOCTOR.name}</p>
          <p className="foot-sub">{DOCTOR.title}</p>
          <address className="foot-addr">
            {CLINIC.name}, {CLINIC.streetAddress}, {CLINIC.locality} {CLINIC.postalCode}
          </address>
          <a
            className="foot-tel"
            href={telUrl}
            data-conversion-name={CONVERSION_EVENTS.PHONE_CLICK}
            data-conversion-location={`${loc}_footer`}
          >
            {CLINIC.phoneDisplay}
          </a>
          <p className="foot-legal">
            This page is general information, not medical advice. If your child needs urgent help, go
            to the nearest hospital.
          </p>
          <p className="foot-links">
            <Link href="/">Home</Link>
            <span aria-hidden="true">·</span>
            <Link href="/privacy/">Privacy Policy</Link>
          </p>
        </div>
      </footer>

      {/* Always visible on phones. No scroll listener, so no JS and no chance
          of it arriving late on a slow ad click. */}
      <div className="ad-bar">
        <a
          className="bar-btn bar-call"
          href={telUrl}
          data-conversion-name={CONVERSION_EVENTS.PHONE_CLICK}
          data-conversion-location={`${loc}_sticky_bar`}
        >
          <Phone size={18} strokeWidth={2.3} /> Call
        </a>
        <a
          className="bar-btn bar-wa"
          href={wa}
          target="_blank"
          rel="noreferrer"
          data-conversion-name={CONVERSION_EVENTS.WHATSAPP_CLICK}
          data-conversion-location={`${loc}_sticky_bar`}
        >
          <MessageCircle size={18} strokeWidth={2.3} /> WhatsApp
        </a>
        <a
          className="bar-btn bar-map"
          href={CLINIC.mapsUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Get directions"
          data-conversion-name={CONVERSION_EVENTS.DIRECTIONS_CLICK}
          data-conversion-location={`${loc}_sticky_bar`}
        >
          <MapPin size={18} strokeWidth={2.3} />
        </a>
      </div>
    </div>
  )
}
