import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ThemeContext, ThemeToggleProvider } from './context/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeToggleProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ThemeToggleProvider>
)
