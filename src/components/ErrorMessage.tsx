import styled from '@emotion/styled'
import useCustomTheme from '../hooks/useCustomTheme'

const ErrorMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ErrorMessageText = styled.p<{ isDarkMode: boolean }>`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.text : theme.colors.light.text};
`

interface ErrorMessageProps {
  message: string
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  const { isDarkMode } = useCustomTheme()

  return (
    <ErrorMessageContainer role='alert' aria-live='assertive'>
      <ErrorMessageText isDarkMode={isDarkMode}>{message}</ErrorMessageText>
    </ErrorMessageContainer>
  )
}

export default ErrorMessage
