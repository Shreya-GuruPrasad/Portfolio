import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRef } from 'react'
import { useFocusTrap } from './useFocusTrap'

function Trap({ active }: { active: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  useFocusTrap(ref, active)
  return (
    <>
      <button type="button">Outside</button>
      <div ref={ref}>
        <button type="button">First</button>
        <button type="button">Last</button>
      </div>
    </>
  )
}

describe('useFocusTrap', () => {
  it('wraps focus from the last to the first element and back', async () => {
    const user = userEvent.setup()
    render(<Trap active />)
    screen.getByRole('button', { name: 'Last' }).focus()
    await user.tab()
    expect(screen.getByRole('button', { name: 'First' })).toHaveFocus()
    await user.tab({ shift: true })
    expect(screen.getByRole('button', { name: 'Last' })).toHaveFocus()
  })

  it('does nothing when inactive', async () => {
    const user = userEvent.setup()
    render(<Trap active={false} />)
    screen.getByRole('button', { name: 'Last' }).focus()
    await user.tab()
    expect(screen.getByRole('button', { name: 'Last' })).not.toHaveFocus()
  })
})
