import styled from '@emotion/styled'
import useCustomTheme from '../hooks/useCustomTheme'
import { Country } from '../types/Country'
import BorderCountries from './BorderCountries'

const Root = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.text : theme.colors.light.text};

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 8rem;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const Flag = styled.img`
  flex-basis: 100%;
  object-fit: cover;

  @media (min-width: 768px) {
    flex-basis: 48rem;
  }
`

const Title = styled.h2`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3.2rem;
    width: 100%;
  }
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 8rem;
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Detail = styled.p`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fonts.weight.light};
`

const DetailLabel = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
`

interface CountryDetailsProps {
  country: Country
}

const CountryDetails = ({ country }: CountryDetailsProps) => {
  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = country
  const { isDarkMode } = useCustomTheme()

  return (
    <Root isDarkMode={isDarkMode}>
      <Flag src={flags.png} alt={`Flag of ${name.common}`} loading='lazy' />
      <ContentContainer>
        <div>
          <Title>{name.common}</Title>
          <DetailsContainer>
            <Details>
              <Detail>
                <DetailLabel>Native Name:</DetailLabel>{' '}
                {name.nativeName?.[Object.keys(name.nativeName)[0]]?.common ||
                  'N/A'}
              </Detail>
              <Detail>
                <DetailLabel>Population:</DetailLabel>{' '}
                {population.toLocaleString()}
              </Detail>
              <Detail>
                <DetailLabel>Region:</DetailLabel> {region}
              </Detail>
              <Detail>
                <DetailLabel>Subregion:</DetailLabel> {subregion}
              </Detail>
              <Detail>
                <DetailLabel>Capital:</DetailLabel>{' '}
                {capital?.join(', ') || 'N/A'}
              </Detail>
            </Details>
            <Details>
              <Detail>
                <DetailLabel>Top Level Domain:</DetailLabel>{' '}
                {tld?.join(', ') || 'N/A'}
              </Detail>
              <Detail>
                <DetailLabel>Currencies:</DetailLabel>{' '}
                {Object.values(currencies)
                  .map((currency) => currency.name)
                  .join(', ') || 'N/A'}
              </Detail>
              <Detail>
                <DetailLabel>Languages:</DetailLabel>{' '}
                {Object.values(languages).join(', ') || 'N/A'}
              </Detail>
            </Details>
          </DetailsContainer>
        </div>
        <BorderCountries borders={borders || []} />
      </ContentContainer>
    </Root>
  )
}

export default CountryDetails
