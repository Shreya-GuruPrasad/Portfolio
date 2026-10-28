import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { projects } from '@/data/projects'
import type { Project } from '@/lib/types'
import { renderWithRouter } from '@/test/render'
import { ProjectsSection } from './ProjectsSection'

const section = () => screen.getByRole('region', { name: /built and studied/ })

const cardName = (project: Project) => project.cardTitle ?? project.title

/** Names of the links that lead to project detail pages, in page order. */
const shownProjects = () =>
  within(section())
    .getAllByRole('link')
    .filter((link) => link.getAttribute('href')?.includes('/projects/'))
    .map((link) => link.textContent)

const namesFor = (category: string) => projects.filter((p) => p.category === category).map(cardName)

describe('ProjectsSection', () => {
  it('shows every project by default, featured first', () => {
    renderWithRouter(<ProjectsSection />)
    expect(shownProjects()).toHaveLength(projects.length)
    const featured = projects.find((p) => p.tier === 'featured')
    expect(shownProjects()[0]).toBe(featured && cardName(featured))
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'true')
  })

  it('shows the featured steps and the repository note, with no case-study button', () => {
    renderWithRouter(<ProjectsSection />)
    const steps = screen.getByRole('heading', { name: 'How it works' }).nextElementSibling
    expect(within(steps as HTMLElement).getAllByRole('listitem')).toHaveLength(4)
    expect(screen.getByText('GitHub repository coming soon')).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /case study/i })).not.toBeInTheDocument()
  })

  it('labels the team lead card with role and result blocks', () => {
    renderWithRouter(<ProjectsSection />)
    const card = screen.getByRole('link', { name: 'Secure e-voting platform' }).closest('article')
    if (!card) throw new Error('card missing')
    expect(within(card).getByText('My role')).toBeInTheDocument()
    expect(within(card).getByText('Result')).toBeInTheDocument()
  })

  it('links the research card to the paper', () => {
    renderWithRouter(<ProjectsSection />)
    expect(screen.getByRole('link', { name: /Read the paper/ })).toHaveAttribute(
      'href',
      'https://ieeexplore.ieee.org/document/11234501',
    )
  })

  it.each([
    ['GRC', 'grc'],
    ['Technical', 'technical'],
    ['Research', 'research'],
  ])('filters to %s projects and announces the count', async (label, category) => {
    const user = userEvent.setup()
    renderWithRouter(<ProjectsSection />)
    await user.click(screen.getByRole('button', { name: label }))

    expect(shownProjects().sort()).toEqual(namesFor(category).sort())
    expect(screen.getByRole('button', { name: label })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByText(/^Showing/)).toHaveTextContent(
      new RegExp(`Showing ${namesFor(category).length} ${label}`),
    )
  })

  it('hides the coursework list when none of it matches', async () => {
    const user = userEvent.setup()
    renderWithRouter(<ProjectsSection />)
    expect(screen.getByRole('heading', { name: 'More coursework' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Research' }))
    expect(screen.queryByRole('heading', { name: 'More coursework' })).not.toBeInTheDocument()
  })

  it('returns to all projects', async () => {
    const user = userEvent.setup()
    renderWithRouter(<ProjectsSection />)
    await user.click(screen.getByRole('button', { name: 'Research' }))
    await user.click(screen.getByRole('button', { name: 'All' }))
    expect(shownProjects()).toHaveLength(projects.length)
  })

  it('links every project to its detail page', () => {
    renderWithRouter(<ProjectsSection />)
    for (const project of projects) {
      const link = screen.getByRole('link', { name: cardName(project) })
      expect(link.getAttribute('href')).toMatch(new RegExp(`projects/${project.slug}$`))
    }
  })
})
