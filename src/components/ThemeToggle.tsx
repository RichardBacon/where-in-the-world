import styled from '@emotion/styled'
import { MoonIcon } from '@heroicons/react/24/outline'

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.light.text};
`

const Icon = styled(MoonIcon)`
  width: 1.6rem;
  height: 1.6rem;
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
