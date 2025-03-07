import styled from '@emotion/styled'

const Root = styled.ul<{ isDarkMode: boolean }>`
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

const DropdownListItem = styled.li<{ isDarkMode: boolean; isActive: boolean }>`
  padding: 1rem 2rem;
  cursor: pointer;
  background-color: ${({ theme, isDarkMode, isActive }) =>
    isActive
      ? isDarkMode
        ? theme.colors.dark.hover
        : theme.colors.light.hover
      : 'transparent'};

  &:hover {
    background-color: ${({ theme, isDarkMode }) =>
      isDarkMode ? theme.colors.dark.hover : theme.colors.light.hover};
  }

  font-size: 1.2rem;
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.text : theme.colors.light.text};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`

interface DropdownListProps {
  isDarkMode: boolean
  options: string[]
  activeIndex: number
  selectedValue: string
  onSelect: (option: string) => void
}

const DropdownList = ({
  isDarkMode,
  options,
  activeIndex,
  selectedValue,
  onSelect,
}: DropdownListProps) => (
  <Root
    isDarkMode={isDarkMode}
    role='listbox'
    id='region-list'
    aria-label='Select a region'
  >
    {options.map((option, index) => (
      <DropdownListItem
        key={option}
        onClick={() => onSelect(option)}
        isDarkMode={isDarkMode}
        role='option'
        aria-selected={option === selectedValue}
        tabIndex={-1}
        isActive={index === activeIndex}
      >
        {option}
      </DropdownListItem>
    ))}
  </Root>
)

export default DropdownList
