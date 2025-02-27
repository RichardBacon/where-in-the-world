import useFetch from './useFetch'

const useRegions = () => {
  const { data, isLoading, error } = useFetch<{ region: string }[]>({
    url: 'https://restcountries.com/v3.1/all?fields=region',
  })

  const regions = data ? [...new Set(data.map((entry) => entry.region))] : []

  return { regions, isLoading, error }
}

export default useRegions
