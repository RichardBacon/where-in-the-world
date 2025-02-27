import styled from '@emotion/styled'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import useCustomTheme from '../hooks/useCustomTheme'

const Button = styled.button<{ isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.2rem;
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.text : theme.colors.light.text};

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`

const Icon = styled.div<{ isDarkMode: boolean }>`
  width: 1.6rem;
  height: 1.6rem;
  @media (min-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useCustomTheme()

  return (
    <Button onClick={toggleTheme} isDarkMode={isDarkMode}>
      <Icon isDarkMode={isDarkMode}>
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </Icon>
      <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
    </Button>
  )
}

export default ThemeToggle
