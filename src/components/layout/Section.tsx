import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Container } from './Container'

interface SectionProps {
  id: string
  /** Id of the heading that names this section. */
  labelledBy: string
  /** Drop the top padding when the previous section already provides the space. */
  flushTop?: boolean
  className?: string
  children: ReactNode
}

export function Section({ id, labelledBy, flushTop, className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('py-section', flushTop && 'pt-0', className)}
    >
      <Container>{children}</Container>
    </section>
  )
}
