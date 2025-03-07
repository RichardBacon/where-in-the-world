import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { render } from '../test-utils/customRender'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('renders with initial value', () => {
    const setSearch = vi.fn()
    render(<SearchBar search='initial' setSearch={setSearch} />)

    const input = screen.getByRole('textbox', { name: /search for a country/i })
    expect(input).toHaveValue('initial')
  })

  it('calls setSearch when user types', async () => {
    const setSearch = vi.fn()
    render(<SearchBar search='' setSearch={setSearch} />)

    const input = screen.getByRole('textbox', { name: /search for a country/i })
    await userEvent.type(input, 'france')

    const calls = setSearch.mock.calls.map((call) => call[0])
    expect(calls).toEqual(['f', 'r', 'a', 'n', 'c', 'e'])
  })
})
