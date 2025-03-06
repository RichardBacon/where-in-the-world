import { useState, useEffect } from 'react'

interface UseFetchProps<T> {
  url: string
  initialData?: T
}

interface UseFetchReturn<T> {
  data: T | null
  isLoading: boolean
  error: string | null
}

const useFetch = <T>({
  url,
  initialData,
}: UseFetchProps<T>): UseFetchReturn<T> => {
  const [data, setData] = useState<T | null>(initialData || null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(url)
        if (!response.ok)
          throw new Error(`Failed to fetch: ${response.statusText}`)
        const result = await response.json()
        setData(result)
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

    fetchData()
  }, [url])

  return { data, isLoading, error }
}

export default useFetch
