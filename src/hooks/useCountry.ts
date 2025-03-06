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
}

const useCountry = ({ name }: UseCountryProps): UseCountryReturn => {
  const fields =
    'name,nativeName,capital,population,flags,region,subregion,tld,currencies,languages,borders'
  const url = `https://restcountries.com/v3.1/name/${name}?fields=${fields}`
  const { data, isLoading, error } = useFetch<CountryDetailData[]>({ url })
  const country = useMemo(() => data?.[0], [data])

  return { country, isLoading, error }
}

export default useCountry
