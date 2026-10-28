import { render, screen, within } from '@testing-library/react'
import { community } from '@/data/community'
import { Community } from './Community'

describe('Community', () => {
  it('shows one flat list with no group headings', () => {
    render(<Community />)
    expect(screen.getAllByRole('list')).toHaveLength(1)
    expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument()
  })

  it('lists the roles in order, each leading with the role then the organisation', () => {
    render(<Community />)
    const items = within(screen.getByRole('list')).getAllByRole('listitem')
    expect(items.map((item) => item.firstElementChild?.textContent)).toEqual([
      'Customer service team member',
      'Health education mentor',
      'Part of the Group Mentoring Program',
      'Treasurer',
      'Regular event volunteer',
    ])
    community.forEach((entry, index) => {
      expect(items[index]?.children[1]).toHaveTextContent(entry.org.name)
    })
  })

  it('links organisations that have a site, in a new tab', () => {
    render(<Community />)
    expect(screen.getByRole('link', { name: /CHASE Program/ })).toHaveAttribute(
      'href',
      'https://chaseprogram.org.au/the-chase-program/',
    )
    expect(screen.getByRole('link', { name: /CHASE Program/ })).toHaveAttribute('target', '_blank')
  })
})
