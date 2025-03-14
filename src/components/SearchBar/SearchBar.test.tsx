import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { testA11y } from '../../test-utils/a11yTest'
import { render } from '../../test-utils/customRender'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('displays the current search term', () => {
    const setSearch = vi.fn()
    render(<SearchBar search='france' setSearch={setSearch} />)

    const searchInput = screen.getByRole('textbox', {
      name: /search for a country/i,
    })
    expect(searchInput).toHaveValue('france')
  })

  it('updates search in real-time as user types', async () => {
    const setSearch = vi.fn()
    render(<SearchBar search='' setSearch={setSearch} />)

    const searchInput = screen.getByRole('textbox', {
      name: /search for a country/i,
    })
    await userEvent.type(searchInput, 'france')

    const calls = setSearch.mock.calls.map((call) => call[0])
    expect(calls).toEqual(['f', 'r', 'a', 'n', 'c', 'e'])
  })

  it('has no accessibility violations', async () => {
    await testA11y(<SearchBar search='' setSearch={() => {}} />)
  })
})
