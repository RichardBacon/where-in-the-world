import styled from '@emotion/styled'
import useCustomTheme from '../hooks/useCustomTheme'

const Root = styled.button<{ isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  background-color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.elements : theme.colors.light.elements};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.text : theme.colors.light.text};
  width: 10rem;
  height: 3.6rem;
`

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
}

const Button = ({ children, onClick }: ButtonProps) => {
  const { isDarkMode } = useCustomTheme()

  return (
    <Root
      isDarkMode={isDarkMode}
      onClick={onClick}
      type='button'
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick()
          e.preventDefault()
        }
      }}
    >
      {children}
    </Root>
  )
}

export default Button
