import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the name inside the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('main')).toHaveTextContent('Shreya Guru Prasad')
  })
})
