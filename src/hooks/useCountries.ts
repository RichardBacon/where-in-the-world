import { useMemo } from 'react'
import { CountryCardData } from '../types/Country'
import useFetch from './useFetch'

interface UseCountriesProps {
  region: string
  search: string
}

interface UseCountriesReturn {
  countries: CountryCardData[]
  isLoading: boolean
  error: string | null
  retry: () => void
}

const useCountries = ({
  region,
  search,
}: UseCountriesProps): UseCountriesReturn => {
  const fields = 'name,capital,population,flags,region,subregion'
  const url =
    region === 'all'
      ? `https://restcountries.com/v3.1/all?fields=${fields}`
      : `https://restcountries.com/v3.1/region/${region}?fields=${fields}`

  const {
    data,
    isLoading,
    error: fetchError,
    retry,
  } = useFetch<CountryCardData[]>({
    url,
  })

  const error = fetchError ? 'Failed to load. Please try again later.' : null

  const sortedCountries = useMemo(
    () =>
      data
        ? data
            .filter((country) =>
              country.name.common.toLowerCase().includes(search.toLowerCase()),
            )
            .sort((a, b) => a.name.common.localeCompare(b.name.common))
        : [],
    [data, search],
  )

  return { countries: sortedCountries, isLoading, error, retry }
}

export default useCountries
