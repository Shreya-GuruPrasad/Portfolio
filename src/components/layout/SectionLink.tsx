import type { AnchorHTMLAttributes } from 'react'
import { Link, useLocation } from 'react-router'

interface SectionLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  sectionId: string
}

/**
 * Links to a home page section. On the home page it is a plain in-page anchor, so the browser
 * handles scrolling; elsewhere it navigates home and the route scroll manager finds the section.
 */
export function SectionLink({ sectionId, children, ...rest }: SectionLinkProps) {
  const { pathname } = useLocation()
  if (pathname === '/') {
    return (
      <a href={`#${sectionId}`} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <Link to={{ pathname: '/', hash: sectionId }} {...rest}>
      {children}
    </Link>
  )
}
