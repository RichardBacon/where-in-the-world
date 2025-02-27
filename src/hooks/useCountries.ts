import { useEffect, useMemo, useState } from 'react'
import { Country } from '../types/Country'

interface UseCountriesProps {
  region: string
  search: string
}

const useCountries = ({ region, search }: UseCountriesProps) => {
  const [countries, setCountries] = useState<Country[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const sortedCountries = useMemo(() => {
    return countries
      .sort((a, b) => a.name.common.localeCompare(b.name.common))
      .filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase()),
      )
  }, [countries, search])

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setIsLoading(true)
        const res = await fetch(
          region === 'all'
            ? 'https://restcountries.com/v3.1/all'
            : `https://restcountries.com/v3.1/region/${region}`,
        )
        if (!res.ok) throw new Error('Something went wrong')
        const data: Country[] = await res.json()
        setCountries(data)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('An unknown error occurred')
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchCountries()
  }, [region])

  return {
    countries: sortedCountries,
    isLoading,
    error,
  }
}

export default useCountries
