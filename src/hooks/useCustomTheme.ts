import { useContext } from 'react'
import { CustomThemeContext } from '../context/CustomThemeContext'

interface UseCustomThemeReturn {
  isDarkMode: boolean
  toggleTheme: () => void
}

const useCustomTheme = (): UseCustomThemeReturn => {
  const context = useContext(CustomThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export default useCustomTheme
