import { Link } from 'react-router'
import { Button } from '@/components/ui/Button'
import { buttonClasses } from '@/components/ui/buttonStyles'
import { TagList } from '@/components/ui/TagList'
import type { Project } from '@/lib/types'
import { isTodo, projectPath } from '@/lib/utils'
import { ProjectThumb } from './ProjectThumb'

interface FeaturedProjectProps {
  project: Project
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const github = project.links.github

  return (
    <article className="grid items-center gap-6 rounded-feature border border-faint bg-raise p-[18px] md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:gap-12 md:p-7">
      <ProjectThumb image={project.image} />
      <div>
        {project.status && (
          <p className="flex items-center gap-[9px] text-[0.82rem] text-accent">
            <span
              aria-hidden="true"
              className="size-[7px] rounded-full bg-accent animate-[status-pulse_2.4s_ease-in-out_infinite]"
            />
            {project.status}
          </p>
        )}
        <h3 className="mt-2.5 mb-3.5 font-serif text-featured tracking-[-0.01em]">
          {project.title}
        </h3>
        <p className="text-soft">{project.feature?.pitch ?? project.summary}</p>
        {project.feature && (
          <>
            <p className="my-5 border-l border-accent pl-4 font-serif text-[1.3rem] leading-[1.3] font-light italic">
              {project.feature.quote}
            </p>
            <p className="text-soft">{project.feature.quoteDetail}</p>
          </>
        )}
        <TagList tags={project.tags} className="mt-4" />
        <div className="mt-[22px] flex flex-wrap gap-2.5">
          <Link to={projectPath(project.slug)} className={buttonClasses()}>
            Read case study<span className="sr-only">: {project.title}</span>
          </Link>
          {!isTodo(github) && github && (
            <Button href={github} variant="ghost">
              GitHub
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}
