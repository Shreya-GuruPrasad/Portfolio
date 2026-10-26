import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ChipProps {
  pressed: boolean
  onClick: () => void
  children: ReactNode
}

/** A toggle pill, e.g. a filter. Announces its state with aria-pressed. */
export function Chip({ pressed, onClick, children }: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={cn(
        'min-h-11 cursor-pointer rounded-pill border px-[15px] py-[7px] text-[0.86rem] transition-colors duration-200 sm:min-h-0',
        pressed
          ? 'border-ink bg-ink text-bg'
          : 'border-faint bg-transparent text-soft hover:text-ink',
      )}
    >
      {children}
    </button>
  )
}
