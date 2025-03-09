import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { testA11y } from '../test-utils/a11yTest'
import { render } from '../test-utils/customRender'
import CountryPage from './CountryPage'

const mockCountry = [
  {
    name: { common: 'France', nativeName: 'France' },
    flags: { png: 'france-flag.png', alt: 'Flag of France' },
    population: 67391582,
    region: 'Europe',
    capital: ['Paris'],
    subregion: 'Western Europe',
    tld: ['.fr'],
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    languages: { fra: 'French' },
    borders: ['DEU', 'ITA', 'LUX', 'BEL', 'GBR', 'ESP'],
  },
]

describe('CountryPage', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('displays country details when user visits the page', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify(mockCountry), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }),
    )

    render(<CountryPage />, { route: '/country/france' })

    expect(screen.getByRole('status', { name: /loading/i })).toBeInTheDocument()
    expect(
      await screen.findByRole('region', { name: /details for france/i }),
    ).toBeInTheDocument()
  })

  it('shows error message when country fails to load', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ error: 'Country not found' }), {
        status: 404,
        statusText: 'Not Found',
        headers: { 'Content-Type': 'application/json' },
      }),
    )

    render(<CountryPage />, { route: '/country/france' })

    expect(screen.getByRole('status', { name: /loading/i })).toBeInTheDocument()
    const errorMessage = await screen.findByRole('alert', {
      name: /failed to load/i,
    })
    expect(errorMessage).toBeInTheDocument()
  })

  it('allows user to retry loading country details', async () => {
    vi.spyOn(globalThis, 'fetch')
      .mockImplementationOnce(() =>
        Promise.resolve(
          new Response(JSON.stringify({ error: 'Country not found' }), {
            status: 404,
            statusText: 'Not Found',
            headers: { 'Content-Type': 'application/json' },
          }),
        ),
      )
      .mockImplementationOnce(async () => {
        await new Promise((resolve) => setTimeout(resolve, 100)) // Add delay
        return new Response(JSON.stringify(mockCountry), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        })
      })

    render(<CountryPage />, { route: '/country/france' })

    const errorMessage = await screen.findByRole('alert', {
      name: /failed to load/i,
    })

    const retryButton = within(errorMessage).getByRole('button', {
      name: /retry/i,
    })
    await userEvent.click(retryButton)

    expect(screen.getByRole('status', { name: /loading/i })).toBeInTheDocument()

    await screen.findByRole('region', { name: /details for france/i })
  })

  it('has no accessibility violations', async () => {
    await testA11y(<CountryPage />, { route: '/country/france' }, () =>
      screen.findByRole('region', { name: /details for france/i }),
    )
  })
})
