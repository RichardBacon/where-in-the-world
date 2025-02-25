import { Global, ThemeProvider } from '@emotion/react'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import GlobalStyles from './styles/GlobalStyles'
import theme from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Layout>
        <HomePage />
      </Layout>
    </ThemeProvider>
  )
}

export default App
