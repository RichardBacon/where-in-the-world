import styled from '@emotion/styled'
import { MoonIcon } from '@heroicons/react/24/outline'

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.light.text};

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`

const Icon = styled(MoonIcon)`
  width: 1.6rem;
  height: 1.6rem;

  @media (min-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`

const ThemeToggle = () => {
  return (
    <Button>
      <Icon />
      <span>Dark Mode</span>
    </Button>
  )
}

export default ThemeToggle
