import styled from '@emotion/styled'
import ContentSection from '../components/ContentSection'
import FilterSection from '../components/FilterSection'
import useCountryFilters from '../hooks/useCountryFilters'

const Root = styled.main`
  padding: 2rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: 768px) {
    padding: 4rem 8rem;
  }
`

const HomePage = () => {
  const { filters, setters, regions, countries, isLoading, error, retry } =
    useCountryFilters()

  return (
    <Root>
      <FilterSection
        search={filters.search}
        setSearch={setters.setSearch}
        setRegion={setters.setRegion}
        regions={regions}
      />
      <ContentSection
        isLoading={isLoading}
        error={error}
        countries={countries}
        retry={retry}
      />
    </Root>
  )
}

export default HomePage
