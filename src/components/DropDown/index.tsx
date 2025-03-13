import styled from '@emotion/styled'
import { useRef } from 'react'
import useCustomTheme from '../../hooks/useCustomTheme'
import DropdownButton from './DropdownButton'
import DropdownList from './DropdownList'
import useDropdown from './useDropdown'

const DropdownContainer = styled.div`
  position: relative;
  width: 20rem;
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

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton
        isDarkMode={isDarkMode}
        isOpen={isOpen}
        value={value}
        onKeyDown={handleKeyDown}
        onClick={() => setIsOpen(!isOpen)}
      />
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
