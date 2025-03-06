import styled from '@emotion/styled'
import useCustomTheme from '../hooks/useCustomTheme'
import { CountryDetailData } from '../types/Country'
import BorderCountries from './BorderCountries'
import CountryFlag from './CountryFlag'
import CountryDetail from './CountryDetail'

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

const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

interface CountryDetailsProps {
  country: CountryDetailData
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
      <CountryFlag img={flags.png} name={name.common} />
      <ContentContainer>
        <div>
          <Title>{name.common}</Title>
          <DetailsContainer>
            <DetailSection>
              <CountryDetail
                label='Native Name'
                value={
                  name.nativeName?.[Object.keys(name.nativeName)[0]]?.common ||
                  'N/A'
                }
              />
              <CountryDetail
                label='Population'
                value={population.toLocaleString()}
              />
              <CountryDetail label='Region' value={region} />
              <CountryDetail label='Subregion' value={subregion} />
              <CountryDetail
                label='Capital'
                value={capital?.join(', ') || 'N/A'}
              />
            </DetailSection>
            <DetailSection>
              <CountryDetail
                label='Top Level Domain'
                value={tld?.join(', ') || 'N/A'}
              />
              <CountryDetail
                label='Currencies'
                value={
                  Object.values(currencies)
                    .map((currency) => currency.name)
                    .join(', ') || 'N/A'
                }
              />
              <CountryDetail
                label='Languages'
                value={Object.values(languages).join(', ') || 'N/A'}
              />
            </DetailSection>
          </DetailsContainer>
        </div>
        <BorderCountries borders={borders || []} />
      </ContentContainer>
    </Root>
  )
}

export default CountryDetails
