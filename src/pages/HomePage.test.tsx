import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { testA11y } from '../test-utils/a11yTest'
import { render } from '../test-utils/customRender'
import HomePage from './HomePage'
import { within } from '@testing-library/react'

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

describe('HomePage', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('shows countries after initial loading', async () => {
    vi.spyOn(globalThis, 'fetch').mockImplementation(() =>
      Promise.resolve(
        new Response(JSON.stringify(mockCountries), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }),
      ),
    )

    render(<HomePage />)

    expect(screen.getByRole('status')).toBeInTheDocument()

    expect(await screen.findByText('France')).toBeInTheDocument()
    expect(screen.getByText('Brazil')).toBeInTheDocument()
  })

  it('allows users to search for specific countries', async () => {
    vi.spyOn(globalThis, 'fetch').mockImplementation(() =>
      Promise.resolve(
        new Response(JSON.stringify(mockCountries), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }),
      ),
    )

    render(<HomePage />)

    await screen.findByText('France')

    const searchInput = screen.getByRole('textbox', {
      name: /search for a country/i,
    })
    await userEvent.type(searchInput, 'fra')

    expect(screen.getByText('France')).toBeInTheDocument()
    expect(screen.queryByText('Brazil')).not.toBeInTheDocument()
  })

  it('filters countries by region', async () => {
    vi.spyOn(globalThis, 'fetch').mockImplementation(() =>
      Promise.resolve(
        new Response(
          JSON.stringify(
            mockCountries.filter((country) => country.region === 'Europe'),
          ),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          },
        ),
      ),
    )

    render(<HomePage />)
    await screen.findByText('France')

    await userEvent.click(
      screen.getByRole('button', { name: /select a region/i }),
    )
    const dropdownList = screen.getByRole('listbox')
    await userEvent.click(within(dropdownList).getByText('Europe'))

    expect(await screen.findByText('France')).toBeInTheDocument()
    expect(screen.queryByText('Brazil')).not.toBeInTheDocument()
  })

  it('shows error message when countries fail to load', async () => {
    vi.spyOn(globalThis, 'fetch').mockImplementation(() =>
      Promise.resolve(
        new Response(JSON.stringify({ error: 'Not Found' }), {
          status: 404,
          statusText: 'Not Found',
          headers: { 'Content-Type': 'application/json' },
        }),
      ),
    )

    render(<HomePage />)

    const errorMessage = await screen.findByText(
      'Failed to load. Please try again later.',
    )
    expect(errorMessage).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    vi.spyOn(globalThis, 'fetch').mockImplementation(() =>
      Promise.resolve(
        new Response(JSON.stringify(mockCountries), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }),
      ),
    )

    await testA11y(<HomePage />, {}, () => screen.findByText('France'))
  })
})
