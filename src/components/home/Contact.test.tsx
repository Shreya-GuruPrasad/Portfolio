import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ToastProvider } from '@/components/ui/ToastProvider'
import { profile } from '@/data/profile'
import { Contact } from './Contact'

function renderContact() {
  return render(
    <ToastProvider>
      <Contact />
    </ToastProvider>,
  )
}

describe('Contact', () => {
  it('opens straight with the heading and offers LinkedIn', () => {
    renderContact()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Have a role, or a conversation, in mind?',
    )
    expect(screen.getByRole('link', { name: /LinkedIn/ })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/shreya-g-prasad',
    )
  })

  it('shows the email address as text', () => {
    renderContact()
    expect(screen.getByText(profile.email)).toBeInTheDocument()
  })

  it('copies the email and shows a toast', async () => {
    const user = userEvent.setup()
    const writeText = vi.spyOn(navigator.clipboard, 'writeText')
    renderContact()
    await user.click(screen.getByRole('button', { name: 'Copy email' }))
    expect(writeText).toHaveBeenCalledWith(profile.email)
    expect(screen.getByRole('status')).toHaveTextContent('Email copied')
  })
})
