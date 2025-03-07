import { CountryCardData } from '../types/Country'
import CountryGrid from './CountryGrid'
import ErrorMessage from './ErrorMessage'
import Loader from './Loader'
import Message from './Message'
interface ContentSectionProps {
  isLoading: boolean
  error: string | null
  countries: CountryCardData[]
}

const ContentSection = ({
  isLoading,
  error,
  countries,
}: ContentSectionProps) => {
  if (isLoading) return <Loader />
  if (error) return <ErrorMessage message={error} />
  if (countries.length === 0) {
    return <Message text='No countries found' />
  }
  return <CountryGrid countries={countries} />
}

export default ContentSection
