import { Button } from '@/components/ui/Button'
import { TagList } from '@/components/ui/TagList'
import { projectsIntro } from '@/data/projects'
import type { Project } from '@/lib/types'
import { isTodo } from '@/lib/utils'
import { HowItWorks } from './HowItWorks'
import { ProjectTitle } from './ProjectTitle'

interface FeaturedProjectProps {
  project: Project
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const { feature } = project
  const github = project.links.github

  return (
    <article className="grid gap-7 rounded-feature border border-faint bg-raise p-[22px] nav:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] nav:gap-10 nav:p-8">
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
        <ProjectTitle
          project={project}
          className="mt-2.5 mb-3.5 text-featured tracking-[-0.01em]"
        />
        <p className="text-soft">{feature?.pitch ?? project.summary}</p>
        {feature && (
          <p className="my-[22px] border-l border-accent pl-4 font-serif text-[1.35rem] leading-[1.3] font-light italic">
            {feature.quote}
          </p>
        )}
        <TagList tags={project.tags} className="mt-1" />
        {github && !isTodo(github) ? (
          <Button href={github} variant="ghost" className="mt-6">
            GitHub
          </Button>
        ) : (
          <p className="mt-[22px] inline-flex rounded-pill border border-dashed border-faint px-3.5 py-[7px] text-[0.86rem] text-soft">
            {projectsIntro.repoComingSoon}
          </p>
        )}
      </div>
      {feature && <HowItWorks steps={feature.steps} note={feature.dataNote} />}
    </article>
  )
}
