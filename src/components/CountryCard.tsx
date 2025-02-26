import styled from '@emotion/styled'
import { Country } from '../types/Country'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 26rem;
  height: 32rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    height: 36rem;
  }
`

const Image = styled.img`
  width: 100%;
  height: 17.6rem;
  object-fit: cover;
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
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

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`

const DetailLabel = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
`

interface CountryCardProps {
  country: Country
}

const CountryCard = ({ country }: CountryCardProps) => {
  const { name, flags, population, region, capital } = country

  return (
    <Card>
      <Image src={flags.png} alt={name.common} />
      <Details>
        <Title>{name.common}</Title>
        <Detail>
          <DetailLabel>Population:</DetailLabel> {population}
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
