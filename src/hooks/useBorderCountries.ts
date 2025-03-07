import { useMemo } from 'react'
import { CountryCardData } from '../types/Country'
import useFetch from './useFetch'

interface UseBorderCountriesProps {
  codes: string[]
}

interface UseBorderCountriesReturn {
  countries: CountryCardData[]
  isLoading: boolean
  error: string | null
}

const useBorderCountries = ({
  codes,
}: UseBorderCountriesProps): UseBorderCountriesReturn => {
  const fields = 'name'
  const codesString = codes.join(',')
  const url = `https://restcountries.com/v3.1/alpha?codes=${codesString}&fields=${fields}`
  const {
    data,
    isLoading,
    error: fetchError,
  } = useFetch<CountryCardData[]>({ url })

  const error = fetchError ? 'Failed to load. Please try again later.' : null

  const countries = useMemo(() => data || [], [data])

  return { countries, isLoading, error }
}

export default useBorderCountries
