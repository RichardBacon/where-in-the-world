import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import styled from '@emotion/styled'

const Root = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 0 2rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.light.elements};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
  height: 5rem;
`

const Icon = styled(MagnifyingGlassIcon)`
  width: 1.6rem;
  height: 1.6rem;
  color: ${({ theme }) => theme.colors.light.input};
`

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.light.input};
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.light.placeholder};
  }
`

interface SearchBarProps {
  search: string
  setSearch: (search: string) => void
}

const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  const handleSearch = (value: string) => {
    setSearch(value)
  }

  return (
    <Root>
      <Icon />
      <Input
        type='text'
        placeholder='Search for a country...'
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </Root>
  )
}

export default SearchBar
