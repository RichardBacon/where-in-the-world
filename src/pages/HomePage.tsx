import styled from '@emotion/styled'
import { useState } from 'react'
import CountryGrid from '../components/CountryGrid'
import RegionFilter from '../components/RegionFilter'
import SearchBar from '../components/SearchBar'

const countryData = [
  {
    name: { common: 'Germany', official: 'Federal Republic of Germany' },
    flags: { png: 'https://flagcdn.com/w640/de.png' },
    population: 83019200,
    region: 'Europe',
    capital: ['Berlin'],
  },
  {
    name: { common: 'France', official: 'French Republic' },
    flags: { png: 'https://flagcdn.com/w640/fr.png' },
    population: 67022000,
    region: 'Europe',
    capital: ['Paris'],
  },
  {
    name: { common: 'United States', official: 'United States of America' },
    flags: { png: 'https://flagcdn.com/w640/us.png' },
    population: 331002651,
    region: 'America',
    capital: ['Washington, D.C.'],
  },
  {
    name: { common: 'Brazil', official: 'Federative Republic of Brazil' },
    flags: { png: 'https://flagcdn.com/w640/br.png' },
    population: 213993437,
    region: 'America',
    capital: ['Brasília'],
  },
  {
    name: { common: 'Canada', official: 'Canada' },
    flags: { png: 'https://flagcdn.com/w640/ca.png' },
    population: 38005238,
    region: 'America',
    capital: ['Ottawa'],
  },
  {
    name: { common: 'Australia', official: 'Commonwealth of Australia' },
    flags: { png: 'https://flagcdn.com/w640/au.png' },
    population: 25785400,
    region: 'Oceania',
    capital: ['Canberra'],
  },
  {
    name: { common: 'Japan', official: 'Japan' },
    flags: { png: 'https://flagcdn.com/w640/jp.png' },
    population: 126476461,
    region: 'Asia',
    capital: ['Tokyo'],
  },
  {
    name: { common: 'India', official: 'Republic of India' },
    flags: { png: 'https://flagcdn.com/w640/in.png' },
    population: 1393409038,
    region: 'Asia',
    capital: ['New Delhi'],
  },
  {
    name: { common: 'China', official: "People's Republic of China" },
    flags: { png: 'https://flagcdn.com/w640/cn.png' },
    population: 1412600000,
    region: 'Asia',
    capital: ['Beijing'],
  },
  {
    name: { common: 'Russia', official: 'Russian Federation' },
    flags: { png: 'https://flagcdn.com/w640/ru.png' },
    population: 145912025,
    region: 'Europe',
    capital: ['Moscow'],
  },
  {
    name: { common: 'South Africa', official: 'Republic of South Africa' },
    flags: { png: 'https://flagcdn.com/w640/za.png' },
    population: 60041996,
    region: 'Africa',
    capital: ['Pretoria'],
  },
  {
    name: { common: 'Argentina', official: 'Argentine Republic' },
    flags: { png: 'https://flagcdn.com/w640/ar.png' },
    population: 45605072,
    region: 'America',
    capital: ['Buenos Aires'],
  },
]

const Root = styled.div`
  padding: 2rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const HomePage = () => {
  const [region, setRegion] = useState('All')

  const filteredCountries = countryData.filter((country) => {
    if (region === 'All') return true
    return country.region === region
  })

  return (
    <Root>
      <SearchBar />
      <RegionFilter setRegion={setRegion} />
      <CountryGrid countries={filteredCountries} />
    </Root>
  )
}

export default HomePage
