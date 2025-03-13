import { Global, ThemeProvider } from '@emotion/react'
import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import CustomThemeProvider from './context/CustomThemeContext'
import GlobalStyles from './styles/GlobalStyles'
import theme from './styles/theme'

const HomePage = lazy(() => import('./pages/HomePage'))
const CountryPage = lazy(() => import('./pages/CountryPage'))

const App = () => {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyles} />

          <Layout>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/country/:name' element={<CountryPage />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  )
}

export default App
