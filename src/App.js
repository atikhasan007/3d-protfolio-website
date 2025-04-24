import styled from 'styled-components'
import { darkTheme } from './utils/Themes'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const App = () => {
  return <ThemeProvider 
  theme={darkTheme}>
      
      <Navbar />

  </ThemeProvider>
}

export default App
