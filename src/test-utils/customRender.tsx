import { ThemeProvider } from '@emotion/react'
import { render, RenderOptions } from '@testing-library/react'
import { ReactElement, ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import CustomThemeProvider from '../context/CustomThemeContext'
import theme from '../styles/theme'

interface CustomRenderProps {
  children: ReactNode
}

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders = ({ children }: CustomRenderProps) => {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export { customRender as render }
