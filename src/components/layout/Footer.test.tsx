import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '@/test/render'
import { Footer } from './Footer'

describe('Footer', () => {
  it('links to the home page sections in page order, then contact links', () => {
    renderWithRouter(<Footer />)
    const nav = screen.getByRole('navigation', { name: 'Footer' })
    expect(within(nav).getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects')
    expect(
      within(nav)
        .getAllByRole('listitem')
        .map((item) => item.textContent),
    ).toEqual([
      'Projects',
      'Experience',
      'Education',
      'Skills',
      'Community',
      'About',
      'Email',
      'LinkedIn (opens in new tab)',
    ])
  })

  it('hides GitHub until a URL exists', () => {
    renderWithRouter(<Footer />)
    expect(screen.queryByRole('link', { name: /GitHub/ })).not.toBeInTheDocument()
  })

  it('shows the short copyright line', () => {
    renderWithRouter(<Footer />)
    expect(screen.getByText('© 2026 · Melbourne')).toBeInTheDocument()
  })

  it('copies the email', async () => {
    const user = userEvent.setup()
    renderWithRouter(<Footer />)
    await user.click(screen.getByRole('button', { name: 'Email' }))
    expect(screen.getByRole('status')).toHaveTextContent('Email copied')
  })
})
