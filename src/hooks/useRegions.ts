import useFetch from './useFetch'
import { Country } from '../types/Country'

const useRegions = () => {
  const { data, isLoading, error } = useFetch<Country[]>({
    url: 'https://restcountries.com/v3.1/all',
  })

  const regions = data
    ? [...new Set(data.map((country) => country.region))]
    : []

  return { regions, isLoading, error }
}

export default useRegions
