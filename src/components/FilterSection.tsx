import styled from '@emotion/styled'
import RegionFilter from './RegionFilter'
import SearchBar from './SearchBar'

const Filters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`

interface FilterSectionProps {
  search: string
  setSearch: (search: string) => void
  setRegion: (region: string) => void
  regions: string[]
}

const FilterSection = ({
  search,
  setSearch,
  setRegion,
  regions,
}: FilterSectionProps) => (
  <Filters aria-label='Filter controls'>
    <SearchBar search={search} setSearch={setSearch} />
    <RegionFilter setRegion={setRegion} regions={regions} />
  </Filters>
)

export default FilterSection
