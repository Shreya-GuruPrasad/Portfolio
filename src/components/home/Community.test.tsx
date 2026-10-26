import { render, screen, within } from '@testing-library/react'
import { community } from '@/data/community'
import { Community } from './Community'

describe('Community', () => {
  it('lists each group with role-first entries', () => {
    render(<Community />)
    for (const group of community) {
      const list = screen.getByRole('list', { name: group.title })
      const items = within(list).getAllByRole('listitem')
      expect(items).toHaveLength(group.roles.length)
      expect(items[0]?.firstElementChild).toHaveTextContent(group.roles[0]?.role ?? '')
    }
  })

  it('never shows placeholder text', () => {
    render(<Community />)
    expect(screen.queryByText(/TODO/)).not.toBeInTheDocument()
  })
})
