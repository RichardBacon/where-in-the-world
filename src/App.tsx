import { Global, ThemeProvider } from '@emotion/react'
import Layout from './components/Layout'
import CustomThemeProvider from './context/CustomThemeContext'
import HomePage from './pages/HomePage'
import GlobalStyles from './styles/GlobalStyles'
import theme from './styles/theme'

const App = () => {
  return (
    <CustomThemeProvider>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <Layout>
          <HomePage />
        </Layout>
      </ThemeProvider>
    </CustomThemeProvider>
  )
}

export default App
