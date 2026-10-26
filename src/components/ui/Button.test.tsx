import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('renders a link when given an href', () => {
    render(<Button href="#projects">See my work</Button>)
    const link = screen.getByRole('link', { name: 'See my work' })
    expect(link).toHaveAttribute('href', '#projects')
    expect(link).not.toHaveAttribute('target')
  })

  it('opens external links in a new tab and says so', () => {
    render(<Button href="https://example.com">GitHub</Button>)
    const link = screen.getByRole('link', { name: 'GitHub (opens in new tab)' })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders a type="button" button and handles clicks', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Copy email</Button>)
    const button = screen.getByRole('button', { name: 'Copy email' })
    expect(button).toHaveAttribute('type', 'button')
    await userEvent.click(button)
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('applies the ghost variant', () => {
    render(
      <Button href="#contact" variant="ghost">
        Get in touch
      </Button>,
    )
    expect(screen.getByRole('link')).toHaveClass('border-faint')
  })
})
