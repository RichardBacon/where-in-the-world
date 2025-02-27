import { useMemo } from 'react'
import { Country } from '../types/Country'
import useFetch from './useFetch'
interface UseCountriesProps {
  region: string
  search: string
}

const useCountries = ({ region, search }: UseCountriesProps) => {
  const fields = 'name,capital,population,flags,region,subregion'
  const url =
    region === 'all'
      ? `https://restcountries.com/v3.1/all?fields=${fields}`
      : `https://restcountries.com/v3.1/region/${region}?fields=${fields}`

  const { data, isLoading, error } = useFetch<Country[]>({ url })

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

  return { countries: sortedCountries, isLoading, error }
}

export default useCountries
