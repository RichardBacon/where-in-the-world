import styled from '@emotion/styled'
import SearchBar from '../components/SearchBar'

const Root = styled.div`
  padding: 2rem 1.6rem;
`

const HomePage = () => {
  return (
    <Root>
      <SearchBar />
    </Root>
  )
}

export default HomePage
