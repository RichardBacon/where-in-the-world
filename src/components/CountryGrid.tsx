import styled from '@emotion/styled'
import CountryCard from './CountryCard'

const Grid = styled.div`
  padding: 0 4rem;
`

const CountryGrid = () => {
  return (
    <Grid>
      <CountryCard />
    </Grid>
  )
}

export default CountryGrid
