import { useState } from 'react'
import styled from '@emotion/styled'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const DropdownContainer = styled.div`
  position: relative;
  width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const DropdownButton = styled.button`
  padding: 1.2rem 2rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.light.elements};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  color: ${({ theme }) => theme.colors.light.text};
  width: 100%;
  text-align: left;
  appearance: none;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.light.elements};
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

const DropdownListItem = styled.li`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.light.text};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  cursor: pointer;
`

const DropdownIcon = styled(ChevronDownIcon)`
  width: 1.2rem;
  height: 1.2rem;
  color: ${({ theme }) => theme.colors.light.text};
`

interface RegionFilterProps {
  setRegion: (region: string) => void
}

const RegionFilter = ({ setRegion }: RegionFilterProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Filter by Region')

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
    setRegion(option)
  }

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {selectedOption}
        <DropdownIcon />
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'].map(
            (option) => (
              <DropdownListItem
                key={option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </DropdownListItem>
            ),
          )}
        </DropdownList>
      )}
    </DropdownContainer>
  )
}

export default RegionFilter
