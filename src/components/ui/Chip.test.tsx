import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Chip } from './Chip'

describe('Chip', () => {
  it('exposes its pressed state', () => {
    const { rerender } = render(
      <Chip pressed={false} onClick={() => {}}>
        GRC
      </Chip>,
    )
    expect(screen.getByRole('button', { name: 'GRC' })).toHaveAttribute('aria-pressed', 'false')

    rerender(
      <Chip pressed onClick={() => {}}>
        GRC
      </Chip>,
    )
    expect(screen.getByRole('button', { name: 'GRC' })).toHaveAttribute('aria-pressed', 'true')
  })

  it('calls onClick when activated', async () => {
    const onClick = vi.fn()
    render(
      <Chip pressed={false} onClick={onClick}>
        Research
      </Chip>,
    )
    await userEvent.click(screen.getByRole('button', { name: 'Research' }))
    expect(onClick).toHaveBeenCalledOnce()
  })
})
