import { ArrowLink } from '@/components/ui/ArrowLink'
import { projectsIntro } from '@/data/projects'
import type { Project } from '@/lib/types'
import { cn } from '@/lib/utils'
import { cardClasses } from './cardStyles'
import { ProjectMeta } from './ProjectMeta'
import { ProjectTitle } from './ProjectTitle'

interface ResearchCardProps {
  project: Project
}

/** A full-width card for published research, with the paper link set apart on the right. */
export function ResearchCard({ project }: ResearchCardProps) {
  const { paper } = project.links

  return (
    <article className={cn(cardClasses, 'sm:flex-row sm:items-center sm:gap-10 sm:p-[26px]')}>
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <ProjectMeta project={project} />
        <ProjectTitle project={project} className="text-[1.45rem] leading-[1.22]" />
        <p className="text-[0.95rem] text-soft">{project.summary}</p>
      </div>
      {paper && (
        <div className="flex flex-none flex-col gap-1.5 border-t border-faint pt-4 sm:items-end sm:border-t-0 sm:border-l sm:pt-0 sm:pl-10 sm:text-right">
          {project.publisher && (
            <p className="font-serif text-[2.2rem] leading-none tracking-[-0.01em]">
              {project.publisher.name}
              <span className="mt-1.5 block font-sans text-[0.78rem] tracking-[0.14em] text-soft uppercase">
                {project.publisher.library}
              </span>
            </p>
          )}
          <ArrowLink href={paper}>{projectsIntro.paperLink}</ArrowLink>
        </div>
      )}
    </article>
  )
}
