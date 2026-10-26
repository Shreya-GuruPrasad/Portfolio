import { Link } from 'react-router'
import { TagList } from '@/components/ui/TagList'
import type { Project } from '@/lib/types'
import { projectPath } from '@/lib/utils'
import { ProjectThumb } from './ProjectThumb'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col gap-3.5 rounded-card border border-faint bg-raise p-[18px] transition duration-200 hover:border-[color-mix(in_srgb,var(--color-accent)_45%,var(--color-faint))] motion-safe:hover:-translate-y-0.5">
      <ProjectThumb image={project.image} />
      <div className="flex justify-between gap-3 text-[0.8rem] text-soft">
        <span>{project.categoryLabel}</span>
        <span>
          {project.place} · {project.year}
        </span>
      </div>
      <h3 className="font-serif text-card">{project.title}</h3>
      <p className="text-[0.95rem] text-soft">{project.summary}</p>
      <TagList tags={project.tags} />
      <Link
        to={projectPath(project.slug)}
        className="mt-auto self-start pt-1 text-[0.9rem] text-accent no-underline underline-offset-4 hover:underline"
      >
        Read more<span className="sr-only"> about {project.title}</span>{' '}
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}
