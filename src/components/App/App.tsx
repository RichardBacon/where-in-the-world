import { Global, ThemeProvider } from '@emotion/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../Layout'
import CustomThemeProvider from '../../context/CustomThemeContext'
import GlobalStyles from '../../styles/GlobalStyles'
import theme from '../../styles/theme'
import HomePage from '../../pages/HomePage/HomePage'
import CountryPage from '../../pages/CountryPage/CountryPage'

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
