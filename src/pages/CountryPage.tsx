import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import CountryDetails from '../components/CountryDetails'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import useCountry from '../hooks/useCountry'

const Root = styled.div`
  padding: 4rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: 768px) {
    padding: 4rem 8rem;
  }
`

const CountryPage = () => {
  const { name } = useParams<{ name: string }>()
  const {
    country,
    isLoading: isLoadingCountry,
    error: errorCountry,
    retry,
  } = useCountry({ name: name || '' })

  const isLoading = isLoadingCountry
  const error = errorCountry

  return (
    <Root>
      <BackButton />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} retry={retry} />}
      {!isLoading && !error && country && <CountryDetails country={country} />}
    </Root>
  )
}

export default CountryPage
