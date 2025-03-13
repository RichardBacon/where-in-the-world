import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import useCustomTheme from '../hooks/useCustomTheme'
import { CountryCardData } from '../types/Country'
import CountryFlag from './CountryFlag'

const Card = styled(Link)<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 26rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background-color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.elements : theme.colors.light.elements};
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.text : theme.colors.light.text};

  @media (min-width: 1024px) {
    width: 32rem;
  }
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
  margin-bottom: 1rem;

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`

const FlagContainer = styled.div`
  width: 100%;
  height: 16rem;
  overflow: hidden;
  border-radius: 0.5rem;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem 2rem 4rem 2rem;
`

const Detail = styled.p`
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fonts.weight.light};

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`

const DetailLabel = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
`

interface CountryCardProps {
  country: CountryCardData
  isAboveTheFold?: boolean
}

const CountryCard = ({ country, isAboveTheFold }: CountryCardProps) => {
  const { name, flags, population, region, capital } = country
  const { isDarkMode } = useCustomTheme()

  return (
    <Card
      to={`/country/${name.common}`}
      isDarkMode={isDarkMode}
      aria-label={`View details for ${name.common}`}
    >
      <FlagContainer>
        <CountryFlag
          img={flags.png}
          name={name.common}
          isAboveTheFold={isAboveTheFold}
        />
      </FlagContainer>
      <Details>
        <Title>{name.common}</Title>
        <Detail>
          <DetailLabel>Population:</DetailLabel> {population.toLocaleString()}
        </Detail>
        <Detail>
          <DetailLabel>Region:</DetailLabel> {region}
        </Detail>
        <Detail>
          <DetailLabel>Capital:</DetailLabel> {capital?.join(', ') || 'N/A'}
        </Detail>
      </Details>
    </Card>
  )
}

export default CountryCard
