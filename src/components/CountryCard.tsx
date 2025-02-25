import styled from '@emotion/styled'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
  margin-bottom: 1rem;
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
`

const DetailLabel = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
`

const CountryCard = () => {
  return (
    <Card>
      <img src='https://flagcdn.com/w640/de.png' alt='Germany' />
      <Details>
        <Title>Germany</Title>
        <Detail>
          <DetailLabel>Population:</DetailLabel> 83,019,200
        </Detail>
        <Detail>
          <DetailLabel>Region:</DetailLabel> Europe
        </Detail>
        <Detail>
          <DetailLabel>Capital:</DetailLabel> Berlin
        </Detail>
      </Details>
    </Card>
  )
}

export default CountryCard
