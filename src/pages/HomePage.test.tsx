import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render } from '../test-utils/customRender'
import HomePage from './HomePage'

const mockCountries = [
  {
    name: { common: 'France' },
    flags: { png: 'france-flag.png', alt: 'Flag of France' },
    population: 67391582,
    region: 'Europe',
    capital: ['Paris'],
  },
  {
    name: { common: 'Brazil' },
    flags: { png: 'brazil-flag.png', alt: 'Flag of Brazil' },
    population: 214893366,
    region: 'Americas',
    capital: ['Brasília'],
  },
]

const mockFetch = vi.fn()
vi.stubGlobal('fetch', mockFetch)

describe('HomePage', () => {
  beforeEach(() => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockCountries),
    })
  })

  it('shows countries after initial loading', async () => {
    render(<HomePage />)

    // User sees loading state
    expect(screen.getByRole('status')).toBeInTheDocument()

    // User sees countries
    expect(await screen.findByText('France')).toBeInTheDocument()
    expect(screen.getByText('Brazil')).toBeInTheDocument()
  })

  it('allows users to search for specific countries', async () => {
    render(<HomePage />)

    // Wait for content to load
    await screen.findByText('France')

    // User searches
    const searchInput = screen.getByRole('textbox', {
      name: /search for a country/i,
    })
    await userEvent.type(searchInput, 'fra')

    // User sees filtered results
    expect(screen.getByText('France')).toBeInTheDocument()
    expect(screen.queryByText('Brazil')).not.toBeInTheDocument()
  })

  it('shows error message when countries fail to load', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Not Found',
    })

    render(<HomePage />)

    // User sees error and can retry
    const errorMessage = await screen.findByText(
      'Failed to load. Please try again later.',
    )
    expect(errorMessage).toBeInTheDocument()

    // Could add: Test retry functionality
    // const retryButton = screen.getByRole('button', { name: /retry/i })
    // await userEvent.click(retryButton)
  })
})
