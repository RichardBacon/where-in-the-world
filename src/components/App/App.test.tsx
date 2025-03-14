import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import App from './App'

describe('App', () => {
  it('renders layout', async () => {
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
