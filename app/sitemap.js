import { SITE_URL } from '@/data/site'
import adPages from '@/data/adPages'

// The home page, the seven ad sitelink landing pages, and the privacy policy,
// which Google Ads policy review needs to be able to reach.
export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...adPages.map((p) => ({
      url: `${SITE_URL}/${p.slug}/`,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/privacy/`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
