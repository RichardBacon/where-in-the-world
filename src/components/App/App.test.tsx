import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import App from './App'

describe('App', () => {
  describe('Layout', () => {
    it('renders header and main content', async () => {
      render(<App />)

      expect(await screen.findByRole('banner')).toBeInTheDocument()
      expect(await screen.findByRole('main')).toBeInTheDocument()
    })

    it('has no accessibility violations', async () => {
      const { container } = render(<App />)

      await waitFor(async () => {
        const results = await axe(container, {
          rules: {
            'color-contrast': { enabled: false },
          },
        })
        expect(results.violations.length).toBe(0)
      })
    })
  })

  describe('Theme', () => {
    beforeEach(() => {
      localStorage.clear()
    })

    it('starts in light mode and persists dark mode preference', async () => {
      render(<App />)

      const toggle = screen.getByRole('switch', { name: /dark mode/i })
      expect(toggle).toHaveAttribute('aria-checked', 'false')
      expect(toggle).toHaveTextContent('Dark Mode')

      await userEvent.click(toggle)
      expect(toggle).toHaveAttribute('aria-checked', 'true')
      expect(toggle).toHaveTextContent('Light Mode')

      const savedPreference = localStorage.getItem('isDarkMode')
      expect(savedPreference).toBe('true')
    })

    it('remembers theme preference across page reloads', async () => {
      localStorage.setItem('isDarkMode', 'true')
      render(<App />)

      const toggle = screen.getByRole('switch', { name: /light mode/i })
      expect(toggle).toHaveAttribute('aria-checked', 'true')
      expect(toggle).toHaveTextContent('Light Mode')
    })
  })
})
