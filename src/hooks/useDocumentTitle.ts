import { useEffect } from 'react'

/** Sets the page title and meta description for the current route. */
export function useDocumentTitle(title: string, description?: string) {
  useEffect(() => {
    document.title = title
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    }
  }, [title, description])
}
