import { cn } from '@/lib/utils'

export type ButtonVariant = 'primary' | 'ghost'
export type ButtonSize = 'md' | 'sm'

const base =
  'inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-pill border font-medium whitespace-nowrap no-underline transition-colors duration-200'

const variants: Record<ButtonVariant, string> = {
  primary: 'border-ink bg-ink text-bg hover:border-accent hover:bg-accent',
  ghost: 'border-faint bg-transparent text-ink hover:border-ink',
}

const sizes: Record<ButtonSize, string> = {
  md: 'px-5 py-3 text-[0.92rem]',
  sm: 'px-4 py-[9px] text-[0.86rem]',
}

/** Class names for the pill button look, shared by Button and router links. */
export function buttonClasses(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  className?: string,
) {
  return cn(base, variants[variant], sizes[size], className)
}
