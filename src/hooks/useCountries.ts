import useFetch from './useFetch'
import { Country } from '../types/Country'

interface UseCountriesProps {
  region: string
  search: string
}

const useCountries = ({ region, search }: UseCountriesProps) => {
  const url =
    region === 'all'
      ? 'https://restcountries.com/v3.1/all'
      : `https://restcountries.com/v3.1/region/${region}`

  const { data, isLoading, error } = useFetch<Country[]>({ url })

  const sortedCountries = data
    ? data
        .sort((a, b) => a.name.common.localeCompare(b.name.common))
        .filter((country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase()),
        )
    : []

  return { countries: sortedCountries, isLoading, error }
}

export default useCountries
