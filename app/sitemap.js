import { SITE_URL } from '@/data/site'
import services from '@/data/services'

export const dynamic = 'force-static'

export default function sitemap() {
  const now = new Date()
  const routes = ['/', '/about/', '/services/', '/contact/', ...services.map((s) => `/services/${s.slug}/`)]
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }))
}
