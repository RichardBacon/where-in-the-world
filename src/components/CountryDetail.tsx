import styled from '@emotion/styled'

const Detail = styled.p`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 1.6rem;
`

const DetailLabel = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
`

const DetailValue = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
`

interface CountryDetailProps {
  label: string
  value: string
}

const CountryDetail = ({ label, value }: CountryDetailProps) => {
  return (
    <Detail>
      <DetailLabel>{label}:</DetailLabel>
      <DetailValue>{value}</DetailValue>
    </Detail>
  )
}

export default CountryDetail
