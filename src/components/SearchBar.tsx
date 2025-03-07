import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import styled from '@emotion/styled'
import useCustomTheme from '../hooks/useCustomTheme'

const Root = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 0 2rem;
  border-radius: 0.5rem;
  background-color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.elements : theme.colors.light.elements};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  height: 5rem;
  width: 100%;

  @media (min-width: 768px) {
    width: 48rem;
    padding: 0 4rem;
  }
`

const Icon = styled.div<{ isDarkMode: boolean }>`
  width: 1.6rem;
  height: 1.6rem;
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.input : theme.colors.light.input};

  @media (min-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`

const Input = styled.input<{ isDarkMode: boolean }>`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1.4rem;
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.input : theme.colors.light.input};
  width: 100%;

  &::placeholder {
    color: ${({ theme, isDarkMode }) =>
      isDarkMode
        ? theme.colors.dark.placeholder
        : theme.colors.light.placeholder};
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`

interface SearchBarProps {
  search: string
  setSearch: (search: string) => void
}

const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  const { isDarkMode } = useCustomTheme()

  const handleSearch = (value: string) => {
    setSearch(value)
  }

  return (
    <Root isDarkMode={isDarkMode}>
      <Icon isDarkMode={isDarkMode} aria-hidden='true'>
        <MagnifyingGlassIcon />
      </Icon>
      <Input
        isDarkMode={isDarkMode}
        type='text'
        placeholder='Search for a country...'
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        aria-label='Search for a country'
      />
    </Root>
  )
}

export default SearchBar
