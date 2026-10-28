import { ArrowLink } from '@/components/ui/ArrowLink'
import { TagList } from '@/components/ui/TagList'
import { projectsIntro } from '@/data/projects'
import type { Project } from '@/lib/types'
import { cn, isTodo } from '@/lib/utils'
import { cardClasses } from './cardStyles'
import { ProjectMeta } from './ProjectMeta'
import { ProjectTitle } from './ProjectTitle'

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { github, event } = project.links

  return (
    <article className={cn(cardClasses, 'sm:p-6', className)}>
      <ProjectMeta project={project} />
      <ProjectTitle project={project} className="text-[1.32rem] leading-[1.22]" />
      <p className="text-[0.95rem] text-soft">{project.summary}</p>
      {project.notes.map((note) => (
        <div key={note.label} className="border-t border-dashed border-faint pt-3.5">
          <p className="mb-1 text-[0.72rem] tracking-[0.14em] text-soft uppercase">{note.label}</p>
          <p className="text-[0.93rem]">{note.text}</p>
        </div>
      ))}
      <TagList tags={project.tags} />
      {github && !isTodo(github) && (
        <ArrowLink href={github} className="mt-auto pt-1">
          View on GitHub
        </ArrowLink>
      )}
      {event && (
        <ArrowLink href={event} className="mt-auto pt-1">
          {projectsIntro.eventLink}
        </ArrowLink>
      )}
    </article>
  )
}
