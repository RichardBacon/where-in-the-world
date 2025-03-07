import styled from '@emotion/styled'
import useCustomTheme from '../hooks/useCustomTheme'

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Spinner = styled.div<{ isDarkMode: boolean }>`
  border: 4px solid
    ${({ theme, isDarkMode }) =>
      isDarkMode ? theme.colors.dark.elements : theme.colors.light.elements};
  border-left-color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.dark.text : theme.colors.light.text};
  border-radius: 50%;
  width: 8rem;
  height: 8rem;

  @media (min-width: 768px) {
    border-width: 8px;
    width: 16rem;
    height: 16rem;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: spin 1s linear infinite;
  }
`

const Loader = () => {
  const { isDarkMode } = useCustomTheme()

  return (
    <LoaderContainer>
      <Spinner isDarkMode={isDarkMode} role='status' aria-label='Loading' />
    </LoaderContainer>
  )
}

export default Loader
