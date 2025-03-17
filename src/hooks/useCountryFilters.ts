import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
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
  const [searchParams, setSearchParams] = useSearchParams()
  const [region, setRegion] = useState(searchParams.get('region') || 'All')
  const [search, setSearch] = useState(searchParams.get('search') || '')

  const handleRegionChange = (newRegion: string) => {
    setRegion(newRegion)
    setSearchParams(
      (params) => {
        const newParams = new URLSearchParams(params)
        if (newRegion === 'All') {
          newParams.delete('region')
        } else {
          newParams.set('region', newRegion)
        }
        return newParams
      },
      { replace: true },
    )
  }

  const handleSearchChange = (newSearch: string) => {
    setSearch(newSearch)
    setSearchParams(
      (params) => {
        const newParams = new URLSearchParams(params)
        if (!newSearch) {
          newParams.delete('search')
        } else {
          newParams.set('search', newSearch)
        }
        return newParams
      },
      { replace: true },
    )
  }

  useEffect(() => {
    const urlRegion = searchParams.get('region')
    const urlSearch = searchParams.get('search')

    setRegion(urlRegion || 'All')
    setSearch(urlSearch || '')
  }, [searchParams])

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
    setters: {
      setRegion: handleRegionChange,
      setSearch: handleSearchChange,
    },
    regions: ['All', ...regions],
    countries,
    isLoading: isLoadingRegions || isLoadingCountries,
    error: errorRegions || errorCountries,
    retry: retryCountries,
  }
}

export default useCountryFilters
