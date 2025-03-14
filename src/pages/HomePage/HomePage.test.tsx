import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { describe, expect, it } from 'vitest'
import { server } from '../../mocks/server'
import { testA11y } from '../../test-utils/a11yTest'
import { render } from '../../test-utils/customRender'
import HomePage from './HomePage'

describe('HomePage', () => {
  it('shows countries after initial loading', async () => {
    render(<HomePage />, { route: '/' })

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(await screen.findByText('France')).toBeInTheDocument()
    expect(screen.getByText('Brazil')).toBeInTheDocument()
  })

  it('allows users to search for specific countries', async () => {
    render(<HomePage />, { route: '/' })

    await screen.findByText('France')

    const searchInput = screen.getByRole('textbox', {
      name: /search for a country/i,
    })
    await userEvent.type(searchInput, 'fra')

    expect(screen.getByText('France')).toBeInTheDocument()
    expect(screen.queryByText('Brazil')).not.toBeInTheDocument()
  })

  it('shows no countries found when no countries match the search', async () => {
    render(<HomePage />, { route: '/' })

    await screen.findByText('France')

    const searchInput = screen.getByRole('textbox', {
      name: /search for a country/i,
    })
    await userEvent.type(searchInput, 'zzz')

    expect(screen.getByText('No countries found')).toBeInTheDocument()
  })

  it('allows users to filter countries by region', async () => {
    render(<HomePage />, { route: '/' })
    await screen.findByText('France')

    await userEvent.click(
      screen.getByRole('button', { name: /filter by region/i }),
    )
    const dropdownList = screen.getByRole('listbox')
    await userEvent.click(within(dropdownList).getByText('Europe'))

    expect(await screen.findByText('France')).toBeInTheDocument()
    expect(screen.queryByText('Brazil')).not.toBeInTheDocument()
  })

  it('shows error message when countries fail to load', async () => {
    server.use(
      http.get('https://restcountries.com/v3.1/all', () => {
        return new HttpResponse(null, { status: 404 })
      }),
    )

    render(<HomePage />, { route: '/' })

    expect(
      await screen.findByText('Failed to load. Please try again later.'),
    ).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    await testA11y(<HomePage />, { route: '/' }, () =>
      screen.findByText('France'),
    )
  })
})
