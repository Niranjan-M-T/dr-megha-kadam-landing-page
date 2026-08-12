import { SITE_URL } from '@/data/site'

// Single-page site: one canonical URL.
export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
