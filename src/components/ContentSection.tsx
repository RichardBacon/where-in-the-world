import { CountryCardData } from '../types/Country'
import CountryGrid from './CountryGrid'
import ErrorMessage from './ErrorMessage'
import Loader from './Loader'
import Message from './Message'

interface ContentSectionProps {
  isLoading: boolean
  error: string | null
  countries: CountryCardData[]
  retry: () => void
}

const ContentSection = ({
  isLoading,
  error,
  countries,
  retry,
}: ContentSectionProps) => {
  if (isLoading) return <Loader />
  if (error) return <ErrorMessage message={error} retry={retry} />
  if (countries.length === 0) {
    return <Message text='No countries found' />
  }
  return <CountryGrid countries={countries} />
}

export default ContentSection
