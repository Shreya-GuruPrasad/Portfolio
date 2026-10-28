import { screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { projects } from '@/data/projects'
import { profile } from '@/data/profile'
import { renderApp } from '@/test/render'

describe('App routes', () => {
  it('renders the home page with landmarks and a single h1', () => {
    renderApp('/')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(within(main).getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(document.title).toBe(profile.seo.title)
  })

  it('offers a skip link to the main content', () => {
    renderApp('/')
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main')
  })

  it('opens a project page from its card', async () => {
    const user = userEvent.setup()
    const project = projects.find((p) => p.slug === 'applied-cryptography')
    if (!project) throw new Error('fixture project missing')
    renderApp('/')
    await user.click(screen.getByRole('link', { name: project.title }))
    expect(
      await screen.findByRole('heading', { level: 1, name: project.title }),
    ).toBeInTheDocument()
    await waitFor(() => expect(document.title).toContain(project.title))
  })

  it('renders each project detail page with a way back', async () => {
    for (const project of projects) {
      const { unmount } = renderApp(`/projects/${project.slug}`)
      expect(
        await screen.findByRole('heading', { level: 1, name: project.title }),
      ).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /Back to projects/ })).toHaveAttribute(
        'href',
        '/#projects',
      )
      expect(screen.queryByText(/TODO/)).not.toBeInTheDocument()
      expect(screen.queryByRole('heading', { name: 'Screenshots' })).not.toBeInTheDocument()
      unmount()
    }
  })

  it('points header links back to home sections from a project page', async () => {
    renderApp('/projects/mediassist')
    await screen.findByRole('heading', { level: 1 })
    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(within(nav).getByRole('link', { name: 'Skills' })).toHaveAttribute('href', '/#skills')
  })

  it('shows the not found page for an unknown project or path', async () => {
    renderApp('/projects/not-a-project')
    expect(await screen.findByRole('heading', { level: 1 })).toHaveTextContent("doesn't exist")
  })

  it('shows the not found page for an unknown path', () => {
    renderApp('/nowhere')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("doesn't exist")
  })
})
