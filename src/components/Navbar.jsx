import React, { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import { Bio } from '../data/constants';
import {  MenuRounded } from '@mui/icons-material';
import Logo from '../images/logo.png';


const Nav = styled.div`
 background-color: ${({ theme }) => theme.bg};
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  font-size:1rem;
  top: 0;
  z-index: 10;
  color:white;
`;


const NavbarContainer = styled.div`
  width: 100%;
  max-width: 850px;
  padding:0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:14px;
  
`;

const NavLogo = styled(LinkR)`
 padding:0 6px;
 text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
 color:inherit;
 width: 80%;

`;


const NavItems = styled.ul`
   width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap:30px;
    padding : 0 5px;
    list-style:none;
    @media screen and (max-width: 768px) {
display:none;
}
`;


const NavLink = styled.a`
color: ${({ theme})=> theme.text_primary};
font-weight: 500;
cursor: pointer;
text-decoration:none;
transition: all 0.2s ease-in-out;
&:hover {
  color: ${({ theme }) => theme.primary};
  transform: scale(1.1);
}

`;  


const ButtonContainer = styled.div`
width: 80%;
height: 100%;
display:flex;
justify-content:end;
align-items:center;
padding:0 6px;
@media screen and (max-width: 768px) {
display:none;

}
`;

const GithubButton = styled.a`
 border: 1px solid ${({ theme }) => theme.primary};
 justify-content: center;
 display: flex;
  align-items: center;
  padding:  10px 20px;
  border-radius: 20px;
  text-decoration: none;
  list-style:none;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  transition: all 0.6s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color:  ${({ theme }) => theme.text_primary};
    }
`;


const MobileIcon = styled.div`
height: 100%;
display:flex;
align-items: center;
color: ${({ theme }) => theme.text_primary};
display: none;
@media screen and (max-width: 768px) {
  display:block
  }

`;

const MobileMenu = styled.ul`
 
  width: 100%; /* Full viewport width */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  gap: 16px;
  padding: 0 6px;
  padding: 12px 40px 24px 40px;
  background-color: ${({ theme }) => theme.card_light + '99'};
  position: absolute;
  top: 70px;
  left: 0; /* ensure it starts from left edge */
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => isOpen ? '100%' : '0'};
  z-index: ${({ isOpen }) => isOpen ? '1000' : '-1000'};
  overflow: hidden; /* prevents scroll bar */

   @media screen and (min-width: 769px) {
    display: none;
}
`;


const Img = styled.img`
width:40px;
height:40px;
background-color: ${({ theme }) => theme.bg};
border-radius: 50%;
display:flex;
algin-items:center;
justify-content:center;

`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();


  // Close the mobile menu when the screen is resized to desktop size
  useEffect(()=>{
    const handleResize = () => {
      if (window.innerWidth > 768 ){
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);

  },[]);

  return (
    <Nav>
      <NavbarContainer>
      <NavLogo to='/'><Img src={Logo}/></NavLogo>
      
      <MobileIcon onClick={() => setIsOpen(!isOpen)}>
        <MenuRounded  style={{
          color:'inherit',
        }} />
      </MobileIcon>

      <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
      </NavItems>

        
        {isOpen && (
         <MobileMenu isOpen={isOpen}>
          
         
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
          <GithubButton href={Bio.github} target='_blank' 
          style={{
            backgroundColor: theme.primary,
            color: theme.text_primary,

          }}
          >
          Github Profile
         </GithubButton>
          
         </MobileMenu>
        )}

    
      <ButtonContainer>
         <GithubButton href={Bio.github} target='_blank'>
          Github Profile
         </GithubButton>
      </ButtonContainer>
    </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
