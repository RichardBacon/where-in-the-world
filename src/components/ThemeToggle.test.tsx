import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { render } from '../test-utils/customRender'
import ThemeToggle from './ThemeToggle'

describe('ThemeToggle', () => {
  it('renders and toggles theme correctly', async () => {
    render(<ThemeToggle />)

    const button = screen.getByRole('switch')
    expect(screen.getByText('Dark Mode')).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-checked', 'false')

    await userEvent.click(button)
    await screen.findByText('Light Mode')
    expect(button).toHaveAttribute('aria-checked', 'true')
  })

  it('works with keyboard interaction', async () => {
    render(<ThemeToggle />)

    const button = screen.getByRole('switch')
    button.focus()

    await userEvent.keyboard('{Enter}')
    await screen.findByText('Light Mode')
  })
})
