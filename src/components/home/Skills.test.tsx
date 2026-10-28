import { render, screen, within } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  it('shows four groups', () => {
    render(<Skills />)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4)
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
  })

  it('lists languages in order, each with its level', () => {
    render(<Skills />)
    const languages = within(screen.getByRole('list', { name: 'Languages' }))
      .getAllByRole('listitem')
      .map((item) => item.textContent)
    expect(languages).toEqual([
      'EnglishProfessional',
      'GermanElementary',
      'FrenchElementary',
      'KannadaNative',
      'HindiProfessional',
    ])
  })
})
