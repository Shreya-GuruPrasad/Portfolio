import { Link } from 'react-router'
import type { Project } from '@/lib/types'
import { cn, projectPath } from '@/lib/utils'

interface ProjectTitleProps {
  project: Project
  className?: string
}

/** A card's h3, linking to the project's detail page. */
export function ProjectTitle({ project, className }: ProjectTitleProps) {
  return (
    <h3 className={cn('font-serif', className)}>
      <Link
        to={projectPath(project.slug)}
        className="no-underline decoration-accent decoration-1 underline-offset-4 hover:underline"
      >
        {project.cardTitle ?? project.title}
      </Link>
    </h3>
  )
}
