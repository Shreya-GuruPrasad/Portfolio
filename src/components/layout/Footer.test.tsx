import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ToastProvider } from '@/components/ui/ToastProvider'
import { Footer } from './Footer'

describe('Footer', () => {
  it('links to the home page sections', () => {
    render(
      <ToastProvider>
        <Footer />
      </ToastProvider>,
    )
    const explore = screen.getByRole('navigation', { name: 'Explore' })
    expect(within(explore).getByRole('link', { name: 'Projects' })).toHaveAttribute(
      'href',
      '#projects',
    )
  })

  it('copies the email from the Connect column', async () => {
    const user = userEvent.setup()
    render(
      <ToastProvider>
        <Footer />
      </ToastProvider>,
    )
    await user.click(screen.getByRole('button', { name: 'Email' }))
    expect(screen.getByRole('status')).toHaveTextContent('Email copied')
  })
})
