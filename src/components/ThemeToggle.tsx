import styled from '@emotion/styled'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import useCustomTheme from '../hooks/useCustomTheme'

const Button = styled.button<{ isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 0.8rem;
  border-radius: 0.5rem;
`

const Icon = styled.div<{ isDarkMode: boolean }>`
  width: 1.6rem;
  height: 1.6rem;
  @media (min-width: 1024px) {
    width: 2rem;
    height: 2rem;
  }
`

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useCustomTheme()

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleTheme()
    }
  }

  return (
    <Button
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      isDarkMode={isDarkMode}
      role='switch'
      aria-checked={isDarkMode}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <Icon isDarkMode={isDarkMode} aria-hidden='true'>
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </Icon>
      <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
    </Button>
  )
}

export default ThemeToggle
