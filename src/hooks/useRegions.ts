import { useEffect, useState } from 'react'
import { Country } from '../types/Country'

const useRegions = () => {
  const [regions, setRegions] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        setIsLoading(true)
        const res = await fetch('https://restcountries.com/v3.1/all')
        if (!res.ok) throw new Error('Something went wrong')
        const data: Country[] = await res.json()
        const regions = [
          ...new Set(data.map((country: Country) => country.region)),
        ]
        setRegions(regions)
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

    fetchRegions()
  }, [])

  return { regions, isLoading, error }
}

export default useRegions
