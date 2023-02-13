import { ThemeProvider } from '@mui/material'
import React from 'react'
import theme from './theme/theme'
import './App.css';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <h1>Welcome!</h1>
      
    </div>
    </ThemeProvider>
  )
}
export default App
  
