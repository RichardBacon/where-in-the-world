import styled from '@emotion/styled'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const Root = styled.button<{ isDarkMode: boolean }>`
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

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`

const DropdownIcon = styled.div<{ isDarkMode: boolean }>`
  width: 1.2rem;
  height: 1.2rem;
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.text : theme.colors.light.text};

  @media (min-width: 1024px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`

interface DropdownButtonProps {
  isDarkMode: boolean
  isOpen: boolean
  value: string
  onKeyDown: (e: React.KeyboardEvent) => void
  onClick: () => void
}

const DropdownButton = ({
  isDarkMode,
  isOpen,
  value,
  onKeyDown,
  onClick,
}: DropdownButtonProps) => (
  <Root
    onClick={onClick}
    onKeyDown={onKeyDown}
    isDarkMode={isDarkMode}
    aria-haspopup='listbox'
    aria-expanded={isOpen}
    aria-controls='region-list'
    aria-label='Select a region'
  >
    {value}
    <DropdownIcon isDarkMode={isDarkMode} aria-hidden='true'>
      <ChevronDownIcon />
    </DropdownIcon>
  </Root>
)

export default DropdownButton
