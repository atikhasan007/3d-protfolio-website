import styled from 'styled-components'
import { darkTheme } from './utils/Themes'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Hero from './components/sections/Hero'
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;

  overflow-x: hidden;
  position: relative;
`;

const App = () => {
  return <ThemeProvider 
  theme={darkTheme}>
      <BrowserRouter>
          <Navbar/>  
          <Body>
            <Hero/>

          </Body>
      </BrowserRouter>
  </ThemeProvider>
}

export default App
