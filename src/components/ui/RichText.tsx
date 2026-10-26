import type { RichText as RichTextValue } from '@/lib/types'

interface RichTextProps {
  value: RichTextValue
}

/** Renders text runs, with emphasised phrases in bold ink. */
export function RichText({ value }: RichTextProps) {
  return value.map((part, index) =>
    typeof part === 'string' ? (
      part
    ) : (
      <strong key={index} className="font-medium text-ink">
        {part.strong}
      </strong>
    ),
  )
}
