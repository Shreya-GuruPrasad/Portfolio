import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '@/test/render'
import { Footer } from './Footer'

describe('Footer', () => {
  it('links to the home page sections', () => {
    renderWithRouter(<Footer />)
    const explore = screen.getByRole('navigation', { name: 'Explore' })
    expect(within(explore).getByRole('link', { name: 'Projects' })).toHaveAttribute(
      'href',
      '#projects',
    )
  })

  it('copies the email from the Connect column', async () => {
    const user = userEvent.setup()
    renderWithRouter(<Footer />)
    await user.click(screen.getByRole('button', { name: 'Email' }))
    expect(screen.getByRole('status')).toHaveTextContent('Email copied')
  })
})
