import { render, screen, within } from '@testing-library/react'
import { certifications, education } from '@/data/education'
import { Education } from './Education'

describe('Education', () => {
  it('shows a card for each degree', () => {
    render(<Education />)
    for (const item of education) {
      expect(screen.getByRole('heading', { level: 3, name: item.degree })).toBeInTheDocument()
    }
  })

  it('uses the present-tense title and an ongoing date for RMIT', () => {
    render(<Education />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Studies and certifications',
    )
    expect(screen.getByText('Since Mar 2026')).toBeInTheDocument()
  })

  it('badges only the certified certification', () => {
    render(<Education />)
    const list = screen.getByRole('list', { name: 'Certifications' })
    expect(within(list).getAllByRole('listitem')).toHaveLength(certifications.length)
    const badges = within(list).getAllByText('Certified')
    expect(badges).toHaveLength(1)
    expect(badges[0]?.closest('li')).toHaveTextContent('ISO 27001 Lead Auditor')
  })
})
