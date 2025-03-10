import { ThemeProvider } from '@emotion/react'
import { render, RenderOptions } from '@testing-library/react'
import { ReactElement, ReactNode } from 'react'
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom'
import CustomThemeProvider from '../context/CustomThemeContext'
import theme from '../styles/theme'

export interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  route?: string
}

const customRender = (
  ui: ReactElement,
  { route, ...options }: CustomRenderOptions = {},
) => {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    if (route) {
      return (
        <MemoryRouter initialEntries={[route]}>
          <CustomThemeProvider>
            <ThemeProvider theme={theme}>
              <Routes>
                <Route path='/' element={children} />
                <Route path='/country/:name' element={children} />
              </Routes>
            </ThemeProvider>
          </CustomThemeProvider>
        </MemoryRouter>
      )
    }

    return (
      <BrowserRouter>
        <CustomThemeProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </CustomThemeProvider>
      </BrowserRouter>
    )
  }

  return render(ui, { wrapper: Wrapper, ...options })
}

export { customRender as render }
