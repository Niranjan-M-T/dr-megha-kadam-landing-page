import { SITE_URL } from '@/data/site'

// Single-page site plus the privacy policy, which Google Ads policy review
// needs to be able to reach.
export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy/`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
