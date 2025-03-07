import { createContext, ReactNode, useState } from 'react'

interface ThemeContextType {
  isDarkMode: boolean
  toggleTheme: () => void
}

interface ThemeProviderProps {
  children: ReactNode
}

const CustomThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
})

const CustomThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => setIsDarkMode((prevMode: boolean) => !prevMode)

  return (
    <CustomThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </CustomThemeContext.Provider>
  )
}

export { CustomThemeContext }
export default CustomThemeProvider
