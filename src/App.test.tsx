import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import App from './App'

describe('App', () => {
  it('renders layout and handles lazy loading', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<App />)
    const results = await axe(container, {
      rules: {
        'color-contrast': { enabled: false },
      },
    })
    expect(results.violations.length).toBe(0)
  })
})
