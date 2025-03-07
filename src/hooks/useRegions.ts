import { useMemo } from 'react'
import useFetch from './useFetch'

interface UseRegionsReturn {
  regions: string[]
  isLoading: boolean
  error: string | null
}

const useRegions = (): UseRegionsReturn => {
  const {
    data,
    isLoading,
    error: fetchError,
  } = useFetch<{ region: string }[]>({
    url: 'https://restcountries.com/v3.1/all?fields=region',
  })

  const error = fetchError ? 'Failed to load. Please try again later.' : null

  const regions = useMemo(
    () => (data ? [...new Set(data.map((entry) => entry.region))] : []),
    [data],
  )

  return { regions, isLoading, error }
}

export default useRegions
