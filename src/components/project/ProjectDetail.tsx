import { Link, useParams } from 'react-router'
import { NotFound } from '@/app/NotFound'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { categoryName, projects, projectsIntro } from '@/data/projects'
import { profile } from '@/data/profile'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { isTodo, projectDate } from '@/lib/utils'
import { DetailSection } from './DetailSection'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  useDocumentTitle(
    project ? `${project.title} | ${profile.name}` : `Page not found | ${profile.name}`,
    project?.summary,
    project ? `projects/${project.slug}` : undefined,
  )

  if (!project) return <NotFound />

  const { feature, links } = project
  const github = links.github && !isTodo(links.github) ? links.github : undefined
  const meta = [
    { term: 'Category', value: categoryName(project.category) },
    { term: 'When', value: projectDate(project) },
    { term: 'Stack', value: project.stack.join(', ') },
  ].filter((item) => item.value)

  return (
    <Container className="pt-[clamp(32px,6vw,72px)] pb-section">
      <Link
        to={{ pathname: '/', hash: 'projects' }}
        className="inline-flex min-h-11 items-center gap-2 text-[0.9rem] text-soft no-underline hover:text-ink"
      >
        <span aria-hidden="true">←</span> Back to projects
      </Link>

      <header className="mt-6 max-w-[48rem]">
        <p className="eyebrow">{project.status ?? project.context ?? project.categoryLabel}</p>
        <h1
          tabIndex={-1}
          className="mt-3 font-serif text-section font-light tracking-[-0.02em] focus:outline-none"
        >
          {project.title}
        </h1>
        <p className="mt-5 max-w-[52ch] text-[1.08rem] text-soft">
          {feature?.tagline ?? project.summary}
        </p>
        <dl className="mt-8 grid gap-4 border-y border-faint py-5 text-[0.92rem] sm:grid-cols-[auto_auto_1fr] sm:gap-10">
          {meta.map((item) => (
            <div key={item.term}>
              <dt className="text-[0.76rem] tracking-[0.14em] text-soft uppercase">{item.term}</dt>
              <dd className="mt-1">{item.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="mt-12 grid max-w-[48rem] gap-12">
        <DetailSection title="The problem" items={project.problem} />
        <DetailSection title="What I did" items={project.whatIDid} list />
        {feature && (
          <DetailSection title="Design principles" items={feature.principles} list>
            <p className="border-l border-accent pl-4 font-serif text-[1.3rem] leading-[1.3] font-light italic">
              {feature.quote}
            </p>
          </DetailSection>
        )}
        <DetailSection title="Outcome" items={project.outcome} />
        <DetailSection title="What I learned" items={project.learned} list />
        {feature && <DetailSection title="Roadmap" items={feature.roadmap} list />}

        {(github || links.paper || links.event) && (
          <DetailSection title="Links">
            <div className="flex flex-wrap gap-3">
              {github && <Button href={github}>View on GitHub</Button>}
              {links.paper && (
                <Button href={links.paper} variant={github ? 'ghost' : 'primary'}>
                  {projectsIntro.paperLink}
                  {project.publisher &&
                    ` on ${project.publisher.name} ${project.publisher.library}`}
                </Button>
              )}
              {links.event && <Button href={links.event}>{projectsIntro.eventLink}</Button>}
            </div>
          </DetailSection>
        )}
      </div>
    </Container>
  )
}
