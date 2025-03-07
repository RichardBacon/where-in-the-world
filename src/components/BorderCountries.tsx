import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import useBorderCountries from '../hooks/useBorderCountries'
import Button from './Button'
import ErrorMessage from './ErrorMessage'
import Loader from './Loader'

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
  margin-bottom: 1rem;
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`

const ListItem = styled.li`
  list-style: none;
`

interface BorderCountriesProps {
  borders: string[]
}

const BorderCountries = ({ borders }: BorderCountriesProps) => {
  const navigate = useNavigate()
  const { countries, isLoading, error, retry } = useBorderCountries({
    codes: borders,
  })

  return (
    <Root aria-label='Border countries'>
      <Title>Border Countries:</Title>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage message={error} retry={retry} />
      ) : borders?.length ? (
        <List>
          {countries.map((country) => (
            <ListItem key={country.name.common}>
              <Button
                onClick={() => navigate(`/country/${country.name.common}`)}
              >
                {country.name.common}
              </Button>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>No border countries</p>
      )}
    </Root>
  )
}

export default BorderCountries
