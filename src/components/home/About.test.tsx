import { render, screen, within } from '@testing-library/react'
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

  it('lists every step on the path in order', () => {
    render(<About />)
    const items = within(screen.getByRole('list', { name: 'My path' })).getAllByRole('listitem')
    expect(items).toHaveLength(profile.about.path.length)
    expect(items.at(-1)).toHaveTextContent('Now')
  })
})
