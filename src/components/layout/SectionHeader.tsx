import type { ReactNode } from 'react'

interface SectionHeaderProps {
  eyebrow: string
  title: ReactNode
  /** Id for the h2, referenced by the section's aria-labelledby. */
  titleId: string
  /** Optional content on the right: a short paragraph or controls such as filter chips. */
  aside?: ReactNode
}

export function SectionHeader({ eyebrow, title, titleId, aside }: SectionHeaderProps) {
  return (
    <div className="mb-11 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId} className="mt-2.5 font-serif text-section font-light tracking-[-0.02em]">
          {title}
        </h2>
      </div>
      {typeof aside === 'string' ? <p className="max-w-[48ch] text-soft">{aside}</p> : aside}
    </div>
  )
}
