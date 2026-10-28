import { render, screen } from '@testing-library/react'
import { FactStrip } from './FactStrip'

describe('FactStrip', () => {
  it('shows the three facts in order', () => {
    render(<FactStrip />)
    expect(screen.getAllByRole('listitem').map((item) => item.firstChild?.textContent)).toEqual([
      'RMIT University',
      'ISO 27001',
      'Building now',
    ])
  })
})
