import styled from 'styled-components'
import { darkTheme } from './utils/Themes'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
  return <ThemeProvider 
  theme={darkTheme}>
      <BrowserRouter>
          <Navbar/>  
      </BrowserRouter>
  </ThemeProvider>
}

export default App
