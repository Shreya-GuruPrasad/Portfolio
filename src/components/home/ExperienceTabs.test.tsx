import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { experience } from '@/data/experience'
import { ExperienceTabs } from './ExperienceTabs'

const [first = '', second = '', third = ''] = experience.map((role) => role.tabLabel)

describe('ExperienceTabs', () => {
  it('selects the first tab and shows only its panel', () => {
    render(<ExperienceTabs />)
    const tab = screen.getByRole('tab', { name: first })
    expect(tab).toHaveAttribute('aria-selected', 'true')
    expect(tab).toHaveAttribute('tabindex', '0')
    expect(screen.getByRole('tab', { name: second })).toHaveAttribute('tabindex', '-1')
    expect(screen.getAllByRole('tabpanel')).toHaveLength(1)
    expect(screen.getByRole('tabpanel', { name: first })).toBeVisible()
  })

  it('moves selection with the arrow keys and wraps around', async () => {
    const user = userEvent.setup()
    render(<ExperienceTabs />)
    await user.click(screen.getByRole('tab', { name: first }))

    await user.keyboard('{ArrowDown}')
    expect(screen.getByRole('tab', { name: second })).toHaveFocus()
    expect(screen.getByRole('tab', { name: second })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel', { name: second })).toBeVisible()

    await user.keyboard('{ArrowRight}')
    expect(screen.getByRole('tab', { name: third })).toHaveFocus()

    await user.keyboard('{ArrowDown}')
    expect(screen.getByRole('tab', { name: first })).toHaveFocus()

    await user.keyboard('{ArrowUp}')
    expect(screen.getByRole('tab', { name: third })).toHaveFocus()
  })

  it('jumps to the first and last tab with Home and End', async () => {
    const user = userEvent.setup()
    render(<ExperienceTabs />)
    await user.click(screen.getByRole('tab', { name: first }))
    await user.keyboard('{End}')
    expect(screen.getByRole('tab', { name: third })).toHaveAttribute('aria-selected', 'true')
    await user.keyboard('{Home}')
    expect(screen.getByRole('tab', { name: first })).toHaveAttribute('aria-selected', 'true')
  })

  it('leaves the tab list with a single Tab press', async () => {
    const user = userEvent.setup()
    render(<ExperienceTabs />)
    await user.click(screen.getByRole('tab', { name: first }))
    await user.tab()
    expect(screen.getByRole('tabpanel')).toHaveFocus()
  })
})
