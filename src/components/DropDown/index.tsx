import styled from '@emotion/styled'
import { useEffect, useRef } from 'react'
import useCustomTheme from '../../hooks/useCustomTheme'
import DropdownButton from './DropdownButton'
import DropdownList from './DropdownList'
import useDropdown from './useDropdown'

const DropdownContainer = styled.div`
  position: relative;
  width: 20rem;
`

const DropdownHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const DropdownLabel = styled.label<{ isDarkMode: boolean }>`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.text : theme.colors.light.text};

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`

interface DropdownProps {
  options: string[]
  value: string
  onChange: (value: string) => void
}

const DropDown = ({ options, value, onChange }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { isDarkMode } = useCustomTheme()
  const { isOpen, setIsOpen, activeIndex, handleKeyDown } = useDropdown({
    options,
    value,
    onChange,
  })

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setIsOpen])

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownHeader>
        <DropdownLabel isDarkMode={isDarkMode}>Filter by Region</DropdownLabel>

        <DropdownButton
          isDarkMode={isDarkMode}
          isOpen={isOpen}
          value={value}
          onKeyDown={handleKeyDown}
          onClick={() => setIsOpen(!isOpen)}
        />
      </DropdownHeader>
      {isOpen && (
        <DropdownList
          isDarkMode={isDarkMode}
          options={options}
          activeIndex={activeIndex}
          selectedValue={value}
          onSelect={(option) => {
            onChange(option)
            setIsOpen(false)
          }}
        />
      )}
    </DropdownContainer>
  )
}

export default DropDown
