import type { ReactNode } from 'react'
import { PointList } from '@/components/ui/PointList'
import { isTodo } from '@/lib/utils'

interface DetailSectionProps {
  title: string
  /** Paragraphs or points. Placeholders are dropped; with nothing left the section is hidden. */
  items?: string[]
  /** Render the items as a pointed list rather than paragraphs. */
  list?: boolean
  children?: ReactNode
}

export function DetailSection({ title, items = [], list, children }: DetailSectionProps) {
  const content = items.filter((item) => !isTodo(item))
  if (content.length === 0 && !children) return null
  const id = `detail-${title.toLowerCase().replace(/[^a-z]+/g, '-')}`

  return (
    <section aria-labelledby={id} className="grid gap-4">
      <h2 id={id} className="font-serif text-[1.6rem] leading-[1.2] font-light">
        {title}
      </h2>
      {content.length > 0 &&
        (list ? (
          <PointList points={content} />
        ) : (
          <div className="grid gap-4 text-soft">
            {content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ))}
      {children}
    </section>
  )
}
