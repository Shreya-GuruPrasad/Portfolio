import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Container } from './Container'

interface SectionProps {
  id: string
  /** Id of the heading that names this section. */
  labelledBy: string
  /** Sit on the slightly lighter band background, to separate neighbouring sections. */
  band?: boolean
  className?: string
  children: ReactNode
}

export function Section({ id, labelledBy, band, className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('border-t border-faint py-section', band && 'bg-band', className)}
    >
      <Container>{children}</Container>
    </section>
  )
}
