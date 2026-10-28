import { useEffect } from 'react'
import { profile } from '@/data/profile'

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute('content', content)
}

/**
 * Sets the page title, meta description and canonical URL for the current route.
 * `path` is relative to the site root, e.g. "projects/applied-cryptography".
 */
export function useDocumentTitle(title: string, description?: string, path = '') {
  useEffect(() => {
    document.title = title
    setMeta('meta[property="og:title"]', title)
    setMeta('meta[name="twitter:title"]', title)
    if (description) {
      setMeta('meta[name="description"]', description)
      setMeta('meta[property="og:description"]', description)
      setMeta('meta[name="twitter:description"]', description)
    }
    const url = new URL(path, profile.siteUrl).href
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url)
    setMeta('meta[property="og:url"]', url)
  }, [title, description, path])
}
