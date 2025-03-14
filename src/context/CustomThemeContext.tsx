import { createContext, ReactNode, useState, useEffect } from 'react'

interface ThemeContextType {
  isDarkMode: boolean
  toggleTheme: () => void
}

interface ThemeProviderProps {
  children: ReactNode
}

const getInitialTheme = () => {
  const saved = localStorage.getItem('isDarkMode')
  return saved ? JSON.parse(saved) : false
}

const CustomThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
})

const CustomThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme)

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode((prevMode: boolean) => !prevMode)

  return (
    <CustomThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </CustomThemeContext.Provider>
  )
}

export { CustomThemeContext }
export default CustomThemeProvider
