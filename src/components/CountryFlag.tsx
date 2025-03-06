import styled from '@emotion/styled'

const Flag = styled.img`
  width: 100%;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 48rem;
  }
`

interface CountryFlagProps {
  img: string
  name: string
}

const CountryFlag = ({ img, name }: CountryFlagProps) => {
  return <Flag src={img} alt={`Flag of ${name}`} loading='lazy' />
}

export default CountryFlag
