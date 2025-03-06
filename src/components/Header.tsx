import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import useCustomTheme from '../hooks/useCustomTheme'
import ThemeToggle from './ThemeToggle'

const Root = styled.header<{ isDarkMode: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  padding: 0 2rem;
  background-color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.elements : theme.colors.light.elements};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 0 8rem;
  }
`

const Title = styled.h1<{ isDarkMode: boolean }>`
  font-size: 1.6rem;
  font-weight: 800;
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.text : theme.colors.light.text};

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`

const Header = () => {
  const { isDarkMode } = useCustomTheme()

  return (
    <Root isDarkMode={isDarkMode}>
      <Link to='/'>
        <Title isDarkMode={isDarkMode}>Where in the world?</Title>
      </Link>
      <ThemeToggle />
    </Root>
  )
}

export default Header
