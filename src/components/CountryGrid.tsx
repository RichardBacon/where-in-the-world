import styled from '@emotion/styled'
import { CountryCardData } from '../types/Country'
import CountryCard from './CountryCard'

const Grid = styled.section`
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  justify-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  }
`

const CountryGrid = ({ countries }: { countries: CountryCardData[] }) => {
  return (
    <Grid aria-label='Countries'>
      {countries.map((country, index) => (
        <CountryCard
          key={country.name.common}
          country={country}
          isAboveTheFold={index < 8}
        />
      ))}
    </Grid>
  )
}

export default CountryGrid
