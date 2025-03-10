import { ReactElement } from 'react'
import { expect } from 'vitest'
import { axe } from 'vitest-axe'
import { render, CustomRenderOptions } from './customRender'

export async function testA11y(
  ui: ReactElement,
  options: CustomRenderOptions = {},
  waitForElement?: () => Promise<HTMLElement>,
) {
  const { container } = render(ui, options)

  if (waitForElement) {
    await waitForElement()
  }

  const results = await axe(container, {
    rules: {
      'color-contrast': { enabled: false }, // JSDOM does not support color-contrast
    },
  })
  expect(results.violations.length).toBe(0)
}
