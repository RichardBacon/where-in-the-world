import styled from '@emotion/styled'
import useCustomTheme from '../hooks/useCustomTheme'

interface MessageProps {
  text: string
}

const MessageContainer = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.text : theme.colors.light.text};

  @media (min-width: 1024px) {
    font-size: 3.2rem;
  }
`

const Message = ({ text }: MessageProps) => {
  const { isDarkMode } = useCustomTheme()
  return <MessageContainer isDarkMode={isDarkMode}>{text}</MessageContainer>
}

export default Message
