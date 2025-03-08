import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { testA11y } from '../test-utils/a11yTest'
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

    expect(screen.getByRole('status')).toBeInTheDocument()

    expect(await screen.findByText('France')).toBeInTheDocument()
    expect(screen.getByText('Brazil')).toBeInTheDocument()
  })

  it('allows users to search for specific countries', async () => {
    render(<HomePage />)

    await screen.findByText('France')

    const searchInput = screen.getByRole('textbox', {
      name: /search for a country/i,
    })
    await userEvent.type(searchInput, 'fra')

    expect(screen.getByText('France')).toBeInTheDocument()
    expect(screen.queryByText('Brazil')).not.toBeInTheDocument()
  })

  it('shows error message when countries fail to load', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Not Found',
    })

    render(<HomePage />)

    const errorMessage = await screen.findByText(
      'Failed to load. Please try again later.',
    )
    expect(errorMessage).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    await testA11y(<HomePage />)
  })
})
