import { ReactElement } from 'react'
import { expect } from 'vitest'
import { axe } from 'vitest-axe'
import { render } from './customRender'

export async function testA11y(ui: ReactElement) {
  const { container } = render(ui)
  const results = await axe(container)
  expect(results.violations.length).toBe(0)
}
