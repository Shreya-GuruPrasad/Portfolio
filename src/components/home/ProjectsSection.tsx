import { useState } from 'react'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Chip } from '@/components/ui/Chip'
import { projectFilters, projects, projectsIntro } from '@/data/projects'
import type { Project, ProjectCategory } from '@/lib/types'
import { FeaturedProject } from './FeaturedProject'
import { ProjectCard } from './ProjectCard'

type Filter = ProjectCategory | 'all'

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>('all')
  // Only announce after the visitor changes the filter, not on page load.
  const [announcement, setAnnouncement] = useState('')

  const matches = (project: Project) => filter === 'all' || project.category === filter
  const featured = projects.find((project) => project.featured && matches(project))
  const others = projects.filter((project) => !project.featured && matches(project))

  function choose(next: Filter, label: string) {
    setFilter(next)
    const count = projects.filter((p) => next === 'all' || p.category === next).length
    const noun = count === 1 ? 'project' : 'projects'
    setAnnouncement(
      next === 'all' ? `Showing all ${count} ${noun}` : `Showing ${count} ${label} ${noun}`,
    )
  }

  return (
    <Section id="projects" labelledBy="projects-title">
      <SectionHeader
        eyebrow="Projects"
        title={projectsIntro.title}
        titleId="projects-title"
        aside={
          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {projectFilters.map((option) => (
              <Chip
                key={option.value}
                pressed={filter === option.value}
                onClick={() => choose(option.value, option.label)}
              >
                {option.label}
              </Chip>
            ))}
          </div>
        }
      />
      <p role="status" aria-live="polite" className="sr-only">
        {announcement}
      </p>
      <div className="flex flex-col gap-6">
        {featured && <FeaturedProject project={featured} />}
        {others.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2">
            {others.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}
