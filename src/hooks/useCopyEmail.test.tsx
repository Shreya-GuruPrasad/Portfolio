import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ToastProvider } from '@/components/ui/ToastProvider'
import { profile } from '@/data/profile'
import { useCopyEmail } from './useCopyEmail'

function CopyButton() {
  const copyEmail = useCopyEmail()
  return (
    <button type="button" onClick={() => void copyEmail()}>
      Copy email
    </button>
  )
}

function renderWithToast() {
  return render(
    <ToastProvider>
      <CopyButton />
    </ToastProvider>,
  )
}

describe('useCopyEmail', () => {
  it('copies the email and announces it', async () => {
    const user = userEvent.setup()
    const writeText = vi.spyOn(navigator.clipboard, 'writeText')
    renderWithToast()
    await user.click(screen.getByRole('button', { name: 'Copy email' }))
    expect(writeText).toHaveBeenCalledWith(profile.email)
    expect(screen.getByRole('status')).toHaveTextContent('Email copied')
  })

  it('shows the address when the clipboard is unavailable', async () => {
    const user = userEvent.setup()
    vi.spyOn(navigator.clipboard, 'writeText').mockRejectedValueOnce(new Error('denied'))
    renderWithToast()
    await user.click(screen.getByRole('button', { name: 'Copy email' }))
    expect(screen.getByRole('status')).toHaveTextContent(profile.email)
  })

  it('hides the toast after a short delay', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    renderWithToast()
    await user.click(screen.getByRole('button', { name: 'Copy email' }))
    expect(screen.getByRole('status')).toHaveTextContent('Email copied')
    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByRole('status')).toBeEmptyDOMElement()
    vi.useRealTimers()
  })
})
