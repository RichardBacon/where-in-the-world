import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { testA11y } from '../test-utils/a11yTest'
import { render } from '../test-utils/customRender'
import RegionFilter from './RegionFilter'

describe('RegionFilter', () => {
  const mockRegions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  it('shows default placeholder', () => {
    render(<RegionFilter setRegion={vi.fn()} regions={mockRegions} />)

    const button = screen.getByRole('button', { name: /select a region/i })
    expect(button).toHaveTextContent('Filter by Region')
  })

  it('allows selecting a region', async () => {
    const setRegion = vi.fn()
    render(<RegionFilter setRegion={setRegion} regions={mockRegions} />)

    const button = screen.getByRole('button', { name: /select a region/i })
    await userEvent.click(button)

    const option = screen.getByRole('option', { name: 'Europe' })
    await userEvent.click(option)

    expect(setRegion).toHaveBeenCalledWith('Europe')
  })

  it('has no accessibility violations', async () => {
    await testA11y(<RegionFilter setRegion={() => {}} regions={mockRegions} />)
  })
})
