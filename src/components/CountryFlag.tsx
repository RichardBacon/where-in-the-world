import styled from '@emotion/styled'

const Flag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

interface CountryFlagProps {
  img: string
  name: string
  isAboveTheFold?: boolean
}

const CountryFlag = ({ img, name, isAboveTheFold }: CountryFlagProps) => {
  return (
    <Flag
      src={img}
      alt={`Flag of ${name}`}
      loading={isAboveTheFold ? 'eager' : 'lazy'}
      fetchPriority={isAboveTheFold ? 'high' : 'low'}
      decoding='async'
    />
  )
}

export default CountryFlag
