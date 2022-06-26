import { useState, useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from '@/components/navBar/NavBar'
import Home from '@/pages/home'
import Task from './pages/task'
import { ThemeProvider } from 'styled-components'
import { base, light, dark } from '@/theme'
import { ThemeContext } from './context/theme'


const App = () => {

  const { theme, changeTheme } = useContext(ThemeContext);
  const themeMap = {
    light,
    dark
  }

  const currentTheme = { ...base, colors: themeMap[theme] || dark }

  // 偵測系統 color theme，並設定為預設
  useEffect(() => {
    const isInitalLightTheme = window.matchMedia('(prefers-color-scheme: light)').matches
    changeTheme(isInitalLightTheme ? 'light' : 'dark')
  }, [])

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="task" element={<Task />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>

  )
}

export default App
