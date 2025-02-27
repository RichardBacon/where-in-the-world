import styled from '@emotion/styled'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useEffect, useRef, useState } from 'react'
import useCustomTheme from '../hooks/useCustomTheme'

const DropdownContainer = styled.div`
  position: relative;
  width: 20rem;
`

const DropdownButton = styled.button<{ isDarkMode: boolean }>`
  padding: 1.2rem 2rem;
  border-radius: 0.5rem;
  background-color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.elements : theme.colors.light.elements};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.text : theme.colors.light.text};
  width: 100%;
  text-align: left;
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`

const DropdownList = styled.ul<{ isDarkMode: boolean }>`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  background-color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.elements : theme.colors.light.elements};
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 2rem;
  list-style: none;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const DropdownListItem = styled.li<{ isDarkMode: boolean }>`
  font-size: 1.2rem;
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.text : theme.colors.light.text};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`

const DropdownIcon = styled(ChevronDownIcon)<{ isDarkMode: boolean }>`
  width: 1.2rem;
  height: 1.2rem;
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.text : theme.colors.light.text};

  @media (min-width: 768px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`

interface RegionFilterProps {
  setRegion: (region: string) => void
  regions: string[]
}

const RegionFilter = ({ setRegion, regions }: RegionFilterProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Filter by Region')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { isDarkMode } = useCustomTheme()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
    setRegion(option)
  }

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown} isDarkMode={isDarkMode}>
        {selectedOption}
        <DropdownIcon isDarkMode={isDarkMode} />
      </DropdownButton>
      {isOpen && (
        <DropdownList isDarkMode={isDarkMode}>
          {Array.from(regions).map((option) => (
            <DropdownListItem
              key={option}
              onClick={() => handleOptionClick(option)}
              isDarkMode={isDarkMode}
            >
              {option}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  )
}

export default RegionFilter
