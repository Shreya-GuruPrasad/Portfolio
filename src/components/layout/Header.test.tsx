import { act, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '@/test/render'
import { MockIntersectionObserver } from '@/test/intersectionObserver'
import { Header } from './Header'

function renderHeader() {
  return renderWithRouter(
    <>
      <Header />
      <main>
        <section id="top" />
        <section id="about" />
        <section id="projects" />
      </main>
    </>,
  )
}

describe('Header', () => {
  beforeEach(() => MockIntersectionObserver.install())
  afterEach(() => vi.unstubAllGlobals())

  it('opens the drawer from the menu button and closes it with the Close button', async () => {
    const user = userEvent.setup()
    renderHeader()
    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(menuButton).toHaveAttribute('aria-controls', 'mobile-menu')

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    const drawer = screen.getByRole('dialog', { name: 'Menu' })
    expect(drawer).not.toHaveAttribute('inert')
    expect(within(drawer).getByRole('button', { name: 'Close' })).toHaveFocus()
    expect(document.body.style.overflow).toBe('hidden')

    await user.click(within(drawer).getByRole('button', { name: 'Close' }))
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(menuButton).toHaveFocus()
    expect(document.body.style.overflow).toBe('')
  })

  it('closes on Escape and returns focus to the menu button', async () => {
    const user = userEvent.setup()
    renderHeader()
    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuButton)
    await user.keyboard('{Escape}')
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(menuButton).toHaveFocus()
  })

  it('closes when a drawer link is chosen', async () => {
    const user = userEvent.setup()
    renderHeader()
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(mobileNav).getByRole('link', { name: /Projects/ }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('lists the sections in page order, with the name as the only brand', () => {
    renderHeader()
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    expect(
      within(mainNav)
        .getAllByRole('link')
        .map((link) => link.textContent),
    ).toEqual(['Projects', 'Experience', 'Education', 'Skills', 'Community', 'About'])
    expect(screen.getByRole('link', { name: 'Shreya Guru Prasad' })).toHaveAttribute('href', '#top')
  })

  it('highlights the link for the section in view', () => {
    renderHeader()
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    const about = within(mainNav).getByRole('link', { name: 'About' })
    const projects = within(mainNav).getByRole('link', { name: 'Projects' })

    act(() => MockIntersectionObserver.enter('about'))
    expect(about).toHaveClass('bg-raise2')
    expect(projects).not.toHaveClass('bg-raise2')

    act(() => MockIntersectionObserver.enter('projects'))
    expect(projects).toHaveClass('bg-raise2')
    expect(about).not.toHaveClass('bg-raise2')
  })
})
