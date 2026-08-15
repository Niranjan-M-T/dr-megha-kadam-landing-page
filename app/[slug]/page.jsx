import { notFound } from 'next/navigation'
import adPages, { getAdPage } from '@/data/adPages'
import { SITE_URL, DOCTOR } from '@/data/site'
import AdPage from '@/components/AdPage'

/**
 * The Google Ads sitelink landing pages.
 *
 * One dynamic segment rather than seven near-identical folders. Under
 * `output: 'export'` only the slugs returned below are ever built, so this is
 * still seven static HTML files and nothing is reachable that is not listed
 * in src/data/adPages.js. /privacy has its own folder, and a static segment
 * always wins over a dynamic one, so it is unaffected.
 */

export const dynamicParams = false

export function generateStaticParams() {
  return adPages.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const page = getAdPage(params.slug)
  if (!page) return {}

  const url = `${SITE_URL}/${page.slug}/`

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}/` },
    openGraph: {
      title: `${page.metaTitle} | ${DOCTOR.name}`,
      description: page.metaDescription,
      url,
    },
  }
}

export default function SitelinkPage({ params }) {
  const page = getAdPage(params.slug)
  if (!page) notFound()

  return <AdPage page={page} />
}
