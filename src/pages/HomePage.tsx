import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import CountryGrid from '../components/CountryGrid'
import RegionFilter from '../components/RegionFilter'
import SearchBar from '../components/SearchBar'
import { Country } from '../types/Country'

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
  const [countries, setCountries] = useState<Country[]>([])
  const [regions, setRegions] = useState<string[]>([])
  const sortedCountries = [...countries].sort((a, b) => {
    return a.name.common.localeCompare(b.name.common)
  })

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all')
        if (!res.ok) throw new Error('Something went wrong')
        const data: Country[] = await res.json()
        const regions = [
          ...new Set(data.map((country: Country) => country.region)),
        ]
        setRegions(regions)
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message)
        } else {
          console.error('An unknown error occurred')
        }
      }
    }

    fetchRegions()
  }, [])

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          region === 'all'
            ? 'https://restcountries.com/v3.1/all'
            : `https://restcountries.com/v3.1/region/${region}`,
        )
        if (!res.ok) throw new Error('Something went wrong')
        const data: Country[] = await res.json()
        setCountries(data)
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message)
        } else {
          console.error('An unknown error occurred')
        }
      }
    }

    fetchCountries()
  }, [region])

  return (
    <Root>
      <Filters>
        <SearchBar search={search} setSearch={setSearch} />
        <RegionFilter setRegion={setRegion} regions={regions} />
      </Filters>
      <CountryGrid countries={sortedCountries} />
    </Root>
  )
}

export default HomePage
