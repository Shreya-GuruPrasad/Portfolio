import { render, screen } from '@testing-library/react'
import { profile } from '@/data/profile'
import { About } from './About'

describe('About', () => {
  it('renders a labelled section with its heading', () => {
    render(<About />)
    expect(screen.getByRole('region', { name: profile.about.title })).toBeInTheDocument()
  })

  it('emphasises the key phrases', () => {
    render(<About />)
    expect(screen.getByText('Bosch').tagName).toBe('STRONG')
  })
})
