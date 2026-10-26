import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  className?: string
  children: ReactNode
}

export function Container({ className, children }: ContainerProps) {
  return <div className={cn('mx-auto w-full max-w-content px-gutter', className)}>{children}</div>
}
