import { useState } from 'react'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { Chip } from '@/components/ui/Chip'
import { projectFilters, projects, projectsIntro } from '@/data/projects'
import type { Project, ProjectCategory, ProjectTier } from '@/lib/types'
import { CourseworkList } from './CourseworkList'
import { FeaturedProject } from './FeaturedProject'
import { ProjectCard } from './ProjectCard'
import { ResearchCard } from './ResearchCard'

type Filter = ProjectCategory | 'all'

const inFilter = (filter: Filter) => (project: Project) =>
  filter === 'all' || project.category === filter

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>('all')
  // Only announce after the visitor changes the filter, not on page load.
  const [announcement, setAnnouncement] = useState('')

  const visible = projects.filter(inFilter(filter))
  const byTier = (tier: ProjectTier) => visible.filter((project) => project.tier === tier)
  const featured = byTier('featured')
  const highlights = byTier('highlight')
  const research = byTier('research')
  const coursework = byTier('coursework')

  function choose(next: Filter, label: string) {
    setFilter(next)
    const count = projects.filter(inFilter(next)).length
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
        {featured.map((project) => (
          <FeaturedProject key={project.slug} project={project} />
        ))}
        {highlights.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                // Two columns between tablet and desktop: an odd card out spans the full row.
                className={
                  index === highlights.length - 1 && index % 2 === 0
                    ? 'sm:max-lg:col-span-full'
                    : undefined
                }
              />
            ))}
          </div>
        )}
        {research.map((project) => (
          <ResearchCard key={project.slug} project={project} />
        ))}
      </div>
      {coursework.length > 0 && (
        <div className={visible.length > coursework.length ? 'mt-8' : undefined}>
          <CourseworkList projects={coursework} />
        </div>
      )}
    </Section>
  )
}
