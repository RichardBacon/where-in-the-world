import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { beforeEach, describe, expect, it } from 'vitest'
import { mockCountries } from '../mocks/handlers'
import { server } from '../mocks/server'
import { testA11y } from '../test-utils/a11yTest'
import { render } from '../test-utils/customRender'
import CountryPage from './CountryPage'

describe('CountryPage', () => {
  beforeEach(() => {
    server.resetHandlers()
  })

  it('displays country details when user visits the page', async () => {
    render(<CountryPage />, { route: '/country/france' })

    expect(screen.getByRole('status', { name: /loading/i })).toBeInTheDocument()
    expect(
      await screen.findByRole('region', { name: /details for france/i }),
    ).toBeInTheDocument()
  })

  it('shows error message when country fails to load', async () => {
    server.use(
      http.get('https://restcountries.com/v3.1/name/:name', () => {
        return new HttpResponse(null, { status: 404 })
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
    let shouldFail = true

    server.use(
      http.get('https://restcountries.com/v3.1/name/france', () => {
        if (shouldFail) {
          return new HttpResponse(null, { status: 404 })
        }
        return HttpResponse.json([mockCountries[0]])
      }),
    )

    render(<CountryPage />, { route: '/country/france' })

    const errorMessage = await screen.findByRole('alert', {
      name: /failed to load/i,
    })

    shouldFail = false

    const retryButton = within(errorMessage).getByRole('button', {
      name: /retry/i,
    })
    await userEvent.click(retryButton)

    await screen.findByRole('region', { name: /details for france/i })
  })

  it('allows user to view border country details', async () => {
    render(<CountryPage />, { route: '/country/france' })

    const borderCountry = await screen.findByRole('button', {
      name: /belgium/i,
    })

    await userEvent.click(borderCountry)

    await screen.findByRole('region', { name: /details for belgium/i })
  })

  it('has no accessibility violations', async () => {
    await testA11y(<CountryPage />, { route: '/country/france' }, () =>
      screen.findByRole('region', { name: /details for france/i }),
    )
  })
})
