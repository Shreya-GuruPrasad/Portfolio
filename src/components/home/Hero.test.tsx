import { render, screen, within } from '@testing-library/react'
import { profile } from '@/data/profile'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline as the only h1', () => {
    render(<Hero />)
    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
    expect(headings[0]).toHaveTextContent(profile.hero.headline.emphasis)
  })

  it('links the buttons to the projects and contact sections', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'See my work' })).toHaveAttribute('href', '#projects')
    expect(screen.getByRole('link', { name: 'Get in touch' })).toHaveAttribute('href', '#contact')
  })

  it('shows the availability line', () => {
    render(<Hero />)
    expect(screen.getByText(profile.availability)).toBeInTheDocument()
  })

  it('lists the path newest first, starting with Now', () => {
    render(<Hero />)
    const items = within(screen.getByRole('list', { name: 'My path' })).getAllByRole('listitem')
    expect(items).toHaveLength(profile.path.length)
    expect(items[0]).toHaveTextContent(/^Now/)
  })
})
