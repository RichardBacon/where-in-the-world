import ThemeToggle from './ThemeToggle'
import styled from '@emotion/styled'

const Root = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.colors.light.elements};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 0 8rem;
  }
`

const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.light.text};

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`

const Header = () => {
  return (
    <Root>
      <Title>Where in the world?</Title>
      <ThemeToggle />
    </Root>
  )
}

export default Header
