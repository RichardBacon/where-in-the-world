import { ThemeProvider } from '@emotion/react'
import { render, RenderOptions } from '@testing-library/react'
import { ReactNode } from 'react'
import CustomThemeProvider from '../context/CustomThemeContext'
import theme from '../styles/theme'

interface CustomRenderProps {
  children: ReactNode
}

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders = ({ children }: CustomRenderProps) => {
  return (
    <CustomThemeProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeProvider>
  )
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export { customRender as render }
