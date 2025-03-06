import { useState } from 'react'
import useRegions from './useRegions'
import useCountries from './useCountries'

const useCountryFilters = () => {
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

  return {
    filters: { region, search },
    setters: { setRegion, setSearch },
    regions,
    countries,
    isLoading: isLoadingRegions || isLoadingCountries,
    error: errorRegions || errorCountries,
  }
}

export default useCountryFilters
