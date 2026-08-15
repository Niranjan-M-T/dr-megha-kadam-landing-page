import { SITE_URL } from '@/data/site'

export const dynamic = 'force-static'

// AdsBot needs naming. Per Google's crawler docs, for AdsBot-Google and
// AdsBot-Google-Mobile "the global user agent (*) is ignored", so a wildcard
// group neither grants nor denies them anything. They currently crawl only
// because nothing blocks them; these entries make the intent explicit and stop
// a future Disallow under `*` from creating a confusing half-state.
const ADSBOTS = ['AdsBot-Google', 'AdsBot-Google-Mobile']

// Cloudflare Pages sets CF_PAGES_BRANCH at build time. Every branch gets a
// public *.pages.dev preview, and those previews were serving "Allow: /" too,
// which invites Google to crawl stale copies of the site.
//
// Absent variable is treated as production on purpose: a missing env var must
// never be able to deindex the live site.
const branch = process.env.CF_PAGES_BRANCH
const isPreview = Boolean(branch) && branch !== 'main'

export default function robots() {
  if (isPreview) {
    return {
      rules: [
        { userAgent: '*', disallow: '/' },
        ...ADSBOTS.map((userAgent) => ({ userAgent, disallow: '/' })),
      ],
      // no sitemap: nothing here should be discovered or indexed
    }
  }

  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...ADSBOTS.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
