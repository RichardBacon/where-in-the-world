import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ThemeToggle from './ThemeToggle'
import CustomThemeProvider from '../context/CustomThemeContext'

describe('ThemeToggle', () => {
  it('renders and toggles theme correctly', async () => {
    render(
      <CustomThemeProvider>
        <ThemeToggle />
      </CustomThemeProvider>,
    )

    const button = screen.getByRole('switch')
    expect(screen.getByText('Dark Mode')).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-checked', 'false')

    await userEvent.click(button)
    await screen.findByText('Light Mode')
    expect(button).toHaveAttribute('aria-checked', 'true')
  })

  it('works with keyboard interaction', async () => {
    render(
      <CustomThemeProvider>
        <ThemeToggle />
      </CustomThemeProvider>,
    )

    const button = screen.getByRole('switch')
    button.focus()

    await userEvent.keyboard('{Enter}')
    await screen.findByText('Light Mode')
  })
})
