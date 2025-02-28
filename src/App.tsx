import { Global, ThemeProvider } from '@emotion/react'
import Layout from './components/Layout'
import CustomThemeProvider from './context/CustomThemeContext'
import HomePage from './pages/HomePage'
import GlobalStyles from './styles/GlobalStyles'
import theme from './styles/theme'
import CountryPage from './pages/CountryPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
