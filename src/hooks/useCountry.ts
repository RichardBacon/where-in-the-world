import { useMemo } from 'react'
import { Country } from '../types/Country'
import useFetch from './useFetch'

interface UseCountryProps {
  name: string
}

const useCountry = ({ name }: UseCountryProps) => {
  const fields = 'name,capital,population,flags,region,subregion'
  const url = `https://restcountries.com/v3.1/name/${name}?fields=${fields}`
  const { data, isLoading, error } = useFetch<Country[]>({ url })
  const country = useMemo(() => data?.[0], [data])

  return { country, isLoading, error }
}

export default useCountry
