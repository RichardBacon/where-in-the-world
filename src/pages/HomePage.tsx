import styled from '@emotion/styled'
import { useState } from 'react'
import CountryGrid from '../components/CountryGrid'
import RegionFilter from '../components/RegionFilter'
import SearchBar from '../components/SearchBar'
import useCountries from '../hooks/useCountries'
import useRegions from '../hooks/useRegions'

const Root = styled.div`
  padding: 2rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: 768px) {
    padding: 4rem 8rem;
  }
`

const Filters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const HomePage = () => {
  const [region, setRegion] = useState('all')
  const [search, setSearch] = useState('')

  const {
    regions,
    isLoading: isLoadingRegions,
    error: errorRegions,
  } = useRegions()
  const {
    countries,
    isLoading: isLoadingCountries,
    error: errorCountries,
  } = useCountries({ region, search })

  const isLoading = isLoadingRegions || isLoadingCountries
  const error = errorRegions || errorCountries

  return (
    <Root>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <>
          <Filters>
            <SearchBar search={search} setSearch={setSearch} />
            <RegionFilter setRegion={setRegion} regions={regions} />
          </Filters>
          <CountryGrid countries={countries} />
        </>
      )}
    </Root>
  )
}

export default HomePage
