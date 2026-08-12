import Link from 'next/link'
import { notFound } from 'next/navigation'
import services, { getService } from '@/data/services'
import { CLINIC } from '@/data/site'
import ServiceIcon from '@/components/ServiceIcon'
import ClinicStrip from '@/components/ClinicStrip'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }) {
  const service = getService(params.slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}/` },
  }
}

export default function ServicePage({ params }) {
  const service = getService(params.slug)
  if (!service) notFound()

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <article className="section service-article">
        <div className="container service-article-inner">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services/">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{service.name}</span>
          </nav>

          <div className="service-head">
            <span className={`service-icon service-icon-lg ${service.tint}`}>
              <ServiceIcon name={service.icon} size={30} strokeWidth={1.6} />
            </span>
            <span className="eyebrow">{service.name}</span>
            <h1>{service.h1}</h1>
            <p className="service-lead">{service.lead}</p>
          </div>

          <div className="service-body">
            {service.body.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}

            <h2 className="service-helps-title">How Dr. Megha helps</h2>
            <ul className="service-helps">
              {service.helps.map((h) => (
                <li key={h}>
                  <span aria-hidden="true">✓</span> {h}
                </li>
              ))}
            </ul>

            <div className="service-cta-card">
              <div>
                <h3>Worried about something specific?</h3>
                <p>
                  Visit {CLINIC.name} in {CLINIC.shortLocality}, or call{' '}
                  <a
                    href={`tel:${CLINIC.phoneHref}`}
                    data-conversion-name="phone_call_click"
                    data-conversion-category="service_detail"
                    data-conversion-location="service_cta_card"
                  >
                    {CLINIC.phoneDisplay}
                  </a>{' '}
                  to plan a consultation.
                </p>
              </div>
              <Link
                className="btn btn-primary"
                href="/contact/"
                data-conversion-name="appointment_modal_open"
                data-conversion-category="service_detail"
                data-conversion-location="service_cta_card"
              >
                Book Consultation
              </Link>
            </div>
          </div>

          <aside className="related">
            <h2>Other ways she can help</h2>
            <div className="related-grid">
              {related.map((r) => (
                <Link className="related-card" href={`/services/${r.slug}/`} key={r.slug}>
                  <span className={`service-icon ${r.tint}`}>
                    <ServiceIcon name={r.icon} size={22} strokeWidth={1.7} />
                  </span>
                  <strong>{r.name}</strong>
                  <p>{r.short}</p>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </article>
      <ClinicStrip />
    </>
  )
}
