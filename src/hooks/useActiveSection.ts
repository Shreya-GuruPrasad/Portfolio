import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently crossing the middle band of the viewport.
 * Pass a stable (module-level) array of ids.
 */
export function useActiveSection(
  ids: readonly string[],
  /** Change this (e.g. to the pathname) to re-scan for sections after a page change. */
  watchKey?: string,
  rootMargin = '-45% 0px -50% 0px',
): string | null {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, rootMargin, watchKey])

  return active
}
