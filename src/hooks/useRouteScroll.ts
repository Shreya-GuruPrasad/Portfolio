import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

/**
 * Runs when the page (pathname) changes, not on in-page hash jumps:
 * - with a hash, scroll to that section (e.g. arriving at /#contact from a project page);
 * - otherwise start at the top and move focus to the new page's h1 for screen reader users.
 */
export function useRouteScroll() {
  const { pathname, hash } = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    const isFirst = isFirstRender.current
    isFirstRender.current = false

    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
    if (target) {
      target.scrollIntoView()
      return
    }
    if (isFirst) return
    window.scrollTo(0, 0)
    document.querySelector<HTMLElement>('main h1')?.focus({ preventScroll: true })
    // Deliberately keyed on pathname only: hash changes within a page are native anchor jumps.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])
}
