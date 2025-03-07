import { useState } from 'react'
import { CountryCardData } from '../types/Country'
import useCountries from './useCountries'
import useRegions from './useRegions'

interface CountryFiltersReturn {
  filters: {
    region: string
    search: string
  }
  setters: {
    setRegion: (region: string) => void
    setSearch: (search: string) => void
  }
  regions: string[]
  countries: CountryCardData[]
  isLoading: boolean
  error: string | null
  retry: () => void
}

const useCountryFilters = (): CountryFiltersReturn => {
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
    retry: retryCountries,
  } = useCountries({ region, search })

  return {
    filters: { region, search },
    setters: { setRegion, setSearch },
    regions,
    countries,
    isLoading: isLoadingRegions || isLoadingCountries,
    error: errorRegions || errorCountries,
    retry: retryCountries,
  }
}

export default useCountryFilters
