import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { projects } from '@/data/projects'
import { renderWithRouter } from '@/test/render'
import { ProjectsSection } from './ProjectsSection'

const titles = () =>
  within(screen.getByRole('region', { name: /built and studied/ }))
    .getAllByRole('heading', { level: 3 })
    .map((heading) => heading.textContent)

const titlesFor = (category: string) =>
  projects.filter((p) => p.category === category).map((p) => p.title)

describe('ProjectsSection', () => {
  it('shows every project by default', () => {
    renderWithRouter(<ProjectsSection />)
    expect(titles()).toHaveLength(projects.length)
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'true')
  })

  it.each([
    ['GRC', 'grc'],
    ['Technical', 'technical'],
    ['Research', 'research'],
  ])('filters to %s projects and announces the count', async (label, category) => {
    const user = userEvent.setup()
    renderWithRouter(<ProjectsSection />)
    await user.click(screen.getByRole('button', { name: label }))

    expect(titles().sort()).toEqual(titlesFor(category).sort())
    expect(screen.getByRole('button', { name: label })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByText(/^Showing/)).toHaveTextContent(
      new RegExp(`Showing ${titlesFor(category).length} ${label}`),
    )
  })

  it('returns to all projects', async () => {
    const user = userEvent.setup()
    renderWithRouter(<ProjectsSection />)
    await user.click(screen.getByRole('button', { name: 'Research' }))
    await user.click(screen.getByRole('button', { name: 'All' }))
    expect(titles()).toHaveLength(projects.length)
  })

  it('links every project to its detail page', () => {
    renderWithRouter(<ProjectsSection />)
    for (const project of projects) {
      const link = screen.getByRole('link', { name: new RegExp(project.title) })
      expect(link.getAttribute('href')).toMatch(new RegExp(`projects/${project.slug}$`))
    }
  })
})
