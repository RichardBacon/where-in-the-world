import { useState, useEffect } from 'react'

interface UseFetchProps<T> {
  url: string
  initialData?: T
}

interface UseFetchReturn<T> {
  data: T | null
  isLoading: boolean
  error: string | null
  retry: () => void
}

const useFetch = <T>({
  url,
  initialData,
}: UseFetchProps<T>): UseFetchReturn<T> => {
  const [data, setData] = useState<T | null>(initialData || null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

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
  }, [url, retryCount])

  const retry = () => {
    setRetryCount((prev) => prev + 1)
  }

  return { data, isLoading, error, retry }
}

export default useFetch
