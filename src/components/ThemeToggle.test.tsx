import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { render } from '../test-utils/customRender'
import ThemeToggle from './ThemeToggle'

describe('ThemeToggle', () => {
  it('allows users to switch between light and dark modes', async () => {
    render(<ThemeToggle />)

    // Initial state
    const toggle = screen.getByRole('switch', { name: /dark mode/i })
    expect(toggle).toHaveAttribute('aria-checked', 'false')
    expect(screen.getByText('Dark Mode')).toBeInTheDocument()

    // User toggles theme
    await userEvent.click(toggle)
    expect(await screen.findByText('Light Mode')).toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-checked', 'true')

    // User toggles back
    await userEvent.click(toggle)
    expect(await screen.findByText('Dark Mode')).toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-checked', 'false')
  })

  it('supports keyboard navigation', async () => {
    render(<ThemeToggle />)

    const toggle = screen.getByRole('switch', { name: /dark mode/i })

    // User navigates with keyboard
    toggle.focus()
    expect(toggle).toHaveFocus()

    // User activates with keyboard
    await userEvent.keyboard('{Enter}')
    expect(await screen.findByText('Light Mode')).toBeInTheDocument()
  })
})
