import { render, screen } from '@testing-library/react'
import { profile } from '@/data/profile'
import { About } from './About'

describe('About', () => {
  it('renders a labelled section with its heading', () => {
    render(<About />)
    expect(
      screen.getByRole('region', { name: 'Learning to protect what I used to build.' }),
    ).toBeInTheDocument()
  })

  it('shows the four paragraphs as plain text', () => {
    render(<About />)
    for (const paragraph of profile.about.paragraphs) {
      expect(screen.getByText(paragraph).tagName).toBe('P')
    }
    expect(screen.getByRole('region').querySelector('strong, b')).toBeNull()
  })

  it('shows the photo with explicit size, lazily loaded', () => {
    render(<About />)
    const photo = screen.getByRole('img', { name: 'Portrait of Shreya Guru Prasad' })
    expect(photo).toHaveAttribute('width', '300')
    expect(photo).toHaveAttribute('height', '375')
    expect(photo).toHaveAttribute('loading', 'lazy')
  })
})
