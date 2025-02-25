import styled from '@emotion/styled'
import CountryGrid from '../components/CountryGrid'
import RegionFilter from '../components/RegionFilter'
import SearchBar from '../components/SearchBar'

const Root = styled.div`
  padding: 2rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const HomePage = () => {
  return (
    <Root>
      <SearchBar />
      <RegionFilter />
      <CountryGrid />
    </Root>
  )
}

export default HomePage
