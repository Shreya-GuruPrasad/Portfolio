import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { NewTabHint } from './NewTabHint'

interface ArrowLinkProps {
  href: string
  className?: string
  children: ReactNode
}

/** An accent link to another site, marked with a north-east arrow. Opens in a new tab. */
export function ArrowLink({ href, className, children }: ArrowLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'text-[0.9rem] text-accent no-underline underline-offset-4 hover:underline',
        className,
      )}
    >
      {children} <span aria-hidden="true">↗</span>
      <NewTabHint />
    </a>
  )
}
