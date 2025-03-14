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

const DropdownLabel = styled.span<{ isDarkMode: boolean }>`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.text : theme.colors.light.text};

  @media (min-width: 1024px) {
    font-size: 1.6rem;
  }
`

interface DropdownProps {
  id: string
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
}

const DropDown = ({ id, label, options, value, onChange }: DropdownProps) => {
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
    <DropdownContainer
      ref={dropdownRef}
      role='combobox'
      aria-expanded={isOpen}
      aria-controls={id}
      aria-labelledby={`${id}-label`}
    >
      <DropdownHeader>
        <DropdownLabel id={`${id}-label`} isDarkMode={isDarkMode}>
          {label}
        </DropdownLabel>

        <DropdownButton
          id={id}
          label={label}
          isDarkMode={isDarkMode}
          isOpen={isOpen}
          value={value}
          onKeyDown={handleKeyDown}
          onClick={() => setIsOpen(!isOpen)}
        />
      </DropdownHeader>
      {isOpen && (
        <DropdownList
          id={id}
          label={label}
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
