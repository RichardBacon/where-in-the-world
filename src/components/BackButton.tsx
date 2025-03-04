import styled from '@emotion/styled'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import useCustomTheme from '../hooks/useCustomTheme'

const Root = styled.button<{ isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
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

const Icon = styled(ArrowLeftIcon)`
  width: 1.6rem;
  height: 1.6rem;
`

const BackButton = () => {
  const { isDarkMode } = useCustomTheme()
  const navigate = useNavigate()

  return (
    <Root isDarkMode={isDarkMode} onClick={() => navigate(-1)}>
      <Icon />
      <span>Back</span>
    </Root>
  )
}

export default BackButton
