import type { Project } from '@/lib/types'
import { projectDate } from '@/lib/utils'

interface ProjectMetaProps {
  project: Project
}

/** The row above a card title: category label on the left, place and date on the right. */
export function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <p className="flex justify-between gap-3 text-[0.8rem] text-soft">
      <span className="text-[0.72rem] tracking-[0.1em] text-accent uppercase">
        {project.categoryLabel}
      </span>
      <span className="text-right">{projectDate(project)}</span>
    </p>
  )
}
