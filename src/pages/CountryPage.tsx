import styled from '@emotion/styled'
import useCountry from '../hooks/useCountry'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import CountryCard from '../components/CountryCard'
import { useParams } from 'react-router-dom'

const Root = styled.div`
  padding: 2rem 1.6rem;
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
  } = useCountry({ name: name || '' })

  const isLoading = isLoadingCountry
  const error = errorCountry

  return (
    <Root>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && country && <CountryCard country={country} />}
    </Root>
  )
}

export default CountryPage
