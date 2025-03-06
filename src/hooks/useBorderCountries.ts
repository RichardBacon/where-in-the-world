import { useMemo } from 'react'
import { Country } from '../types/Country'
import useFetch from './useFetch'

interface UseBorderCountriesProps {
  codes: string[]
}

const useBorderCountries = ({ codes }: UseBorderCountriesProps) => {
  const fields = 'name'
  const codesString = codes.join(',')
  const url = `https://restcountries.com/v3.1/alpha?codes=${codesString}&fields=${fields}`
  const { data, isLoading, error } = useFetch<Country[]>({ url })
  const countries = useMemo(() => data || [], [data])

  return { countries, isLoading, error }
}

export default useBorderCountries
