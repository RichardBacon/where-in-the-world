import styled from '@emotion/styled'

const ErrorMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ErrorMessageText = styled.p`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fonts.weight.semiBold};
  color: ${({ theme }) => theme.colors.light.text};
`

interface ErrorMessageProps {
  message: string
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <ErrorMessageContainer role='alert' aria-live='assertive'>
      <ErrorMessageText>{message}</ErrorMessageText>
    </ErrorMessageContainer>
  )
}

export default ErrorMessage
