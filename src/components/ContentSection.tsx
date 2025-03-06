import { Country } from '../types/Country'
import CountryGrid from './CountryGrid'
import ErrorMessage from './ErrorMessage'
import Loader from './Loader'

interface ContentSectionProps {
  isLoading: boolean
  error: string | null
  countries: Country[]
}

const ContentSection = ({
  isLoading,
  error,
  countries,
}: ContentSectionProps) => {
  if (isLoading) return <Loader />
  if (error) return <ErrorMessage message={error} />
  return <CountryGrid countries={countries} />
}

export default ContentSection
