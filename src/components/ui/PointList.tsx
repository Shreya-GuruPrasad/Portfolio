import { cn } from '@/lib/utils'

interface PointListProps {
  points: string[]
  className?: string
}

/** A list with small accent triangles as markers, as used for roles and degrees. */
export function PointList({ points, className }: PointListProps) {
  return (
    <ul className={cn('grid gap-3 text-soft', className)}>
      {points.map((point) => (
        <li key={point} className="grid grid-cols-[20px_1fr]">
          <span aria-hidden="true" className="text-accent">
            ▹
          </span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  )
}
