import { useMemo } from 'react'
import useFetch from './useFetch'

interface UseRegionsReturn {
  regions: string[]
  isLoading: boolean
  error: string | null
}

const useRegions = (): UseRegionsReturn => {
  const { data, isLoading, error } = useFetch<{ region: string }[]>({
    url: 'https://restcountries.com/v3.1/all?fields=region',
  })

  const regions = useMemo(
    () => (data ? [...new Set(data.map((entry) => entry.region))] : []),
    [data],
  )

  return { regions, isLoading, error }
}

export default useRegions
