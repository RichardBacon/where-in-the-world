import { useMemo } from 'react'
import { CountryDetailData } from '../types/Country'
import useFetch from './useFetch'

interface UseCountryProps {
  name: string
}

interface UseCountryReturn {
  country: CountryDetailData | undefined
  isLoading: boolean
  error: string | null
  retry: () => void
}

const useCountry = ({ name }: UseCountryProps): UseCountryReturn => {
  const fields =
    'name,nativeName,capital,population,flags,region,subregion,tld,currencies,languages,borders'
  const url = `https://restcountries.com/v3.1/name/${name}?fields=${fields}`
  const {
    data,
    isLoading,
    error: fetchError,
    retry,
  } = useFetch<CountryDetailData[]>({ url })

  const error = fetchError ? 'Failed to load. Please try again later.' : null

  const country = useMemo(() => data?.[0], [data])

  return { country, isLoading, error, retry }
}

export default useCountry
