import { Global } from '@emotion/react'
import GlobalStyles from './styles/GlobalStyles'

const App = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <h1>Where in the World?</h1>
    </>
  )
}

export default App
