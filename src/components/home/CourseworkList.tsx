import { Link } from 'react-router'
import { categoryName, projectsIntro } from '@/data/projects'
import type { Project } from '@/lib/types'
import { projectPath } from '@/lib/utils'

interface CourseworkListProps {
  projects: Project[]
}

/** A compact list of smaller coursework projects: title, one line, category. */
export function CourseworkList({ projects }: CourseworkListProps) {
  return (
    <div>
      <h3
        id="coursework-title"
        className="mb-1 text-[0.78rem] font-medium tracking-[0.14em] text-soft uppercase"
      >
        {projectsIntro.courseworkTitle}
      </h3>
      <ul aria-labelledby="coursework-title">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="flex flex-col gap-1.5 border-b border-faint py-[18px] last:border-b-0 min-[560px]:flex-row min-[560px]:items-baseline min-[560px]:justify-between min-[560px]:gap-5"
          >
            <div className="min-w-0">
              <Link
                to={projectPath(project.slug)}
                className="font-medium no-underline decoration-accent underline-offset-4 hover:underline"
              >
                {project.title}
              </Link>
              <p className="mt-0.5 text-[0.92rem] text-soft">
                {project.oneLiner ?? project.summary}
              </p>
            </div>
            <span className="text-[0.72rem] tracking-[0.12em] whitespace-nowrap text-accent uppercase">
              {categoryName(project.category)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
