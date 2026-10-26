import { cn } from '@/lib/utils'
import { Tag } from './Tag'

interface TagListProps {
  tags: string[]
  label?: string
  className?: string
}

export function TagList({ tags, label = 'Tags', className }: TagListProps) {
  if (tags.length === 0) return null
  return (
    <ul aria-label={label} className={cn('flex flex-wrap gap-1.5', className)}>
      {tags.map((tag) => (
        <li key={tag}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  )
}
