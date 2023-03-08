import { ThemeProvider } from '@mui/material'
import React from 'react'
import theme from './theme/theme'
import './App.css';
import Footer from './components/molecules/Footer';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <h1>Welcome!</h1>
      <Footer />
    </div>
    </ThemeProvider>
  )
}
export default App
  
