import styled from '@emotion/styled'
import useCustomTheme from '../hooks/useCustomTheme'
import Button from './Button'

const ErrorMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`

const ErrorMessageText = styled.p<{ isDarkMode: boolean }>`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.text : theme.colors.light.text};
`

interface ErrorMessageProps {
  message: string
  retry: () => void
}

const ErrorMessage = ({ message, retry }: ErrorMessageProps) => {
  const { isDarkMode } = useCustomTheme()

  return (
    <ErrorMessageContainer role='alert' aria-live='assertive'>
      <ErrorMessageText isDarkMode={isDarkMode}>{message}</ErrorMessageText>
      <Button onClick={retry}>Retry</Button>
    </ErrorMessageContainer>
  )
}

export default ErrorMessage
