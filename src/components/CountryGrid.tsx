import styled from '@emotion/styled'
import { Country } from '../types/Country'
import CountryCard from './CountryCard'

const Grid = styled.div`
  padding: 0 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 4rem;

  @media (min-width: 768px) {
    padding: 0;
    gap: 8rem;
  }
`

interface CountryGridProps {
  countries: Country[]
}

const CountryGrid = ({ countries }: CountryGridProps) => {
  return (
    <Grid>
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </Grid>
  )
}

export default CountryGrid
