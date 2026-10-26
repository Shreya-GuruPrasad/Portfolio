import type { ReactNode } from 'react'
import { cn, isExternal } from '@/lib/utils'
import { NewTabHint } from './NewTabHint'

interface TextLinkProps {
  href: string
  className?: string
  children: ReactNode
}

/** An inline link with a quiet underline that turns accent on hover. */
export function TextLink({ href, className, children }: TextLinkProps) {
  const external = isExternal(href)
  return (
    <a
      href={href}
      className={cn(
        'underline decoration-faint underline-offset-[5px] transition-colors hover:decoration-accent',
        className,
      )}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
      {external && <NewTabHint />}
    </a>
  )
}
