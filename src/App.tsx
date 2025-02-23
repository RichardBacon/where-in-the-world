import { Global, ThemeProvider } from '@emotion/react'
import Layout from './components/Layout'
import GlobalStyles from './styles/GlobalStyles'
import theme from './styles/Theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Layout />
    </ThemeProvider>
  )
}

export default App
