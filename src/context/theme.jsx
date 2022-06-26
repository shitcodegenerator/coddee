import { createContext, useState } from 'react'

export const ThemeContext = createContext({
  theme: '',
  changeTheme: () => { },
})

export const ThemeToggleProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const changeTheme = (val) => {
    console.log(val)
    setTheme(() => val)
  }

  const value = {
    theme,
    changeTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
