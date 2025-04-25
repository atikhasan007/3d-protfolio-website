import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants';
import Typewriter from 'typewriter-effect'
import HeroImg from '../../images/myPic.jpg'
import HeroBgAnimation from '../HeroBgAnimation';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion'
import { headContainerAnimation, headContentAnimation, headTextAnimation} from '../../utils/motion'

const HeroContainer = styled.div`
   
  display: flex;
  justify-content: center;
  
  position: relative;
  padding: 0 30px;
  padding-bottom:80px;
  padding-top:40px;
  
  z-index: 1;
 overflow:hidden;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  gap:20px;
  max-width: 800px;
  padding:4px 5px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  overflow:hidden;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;
const HeroRightContainer = styled.div`
  width: 80%;
  height: auto ;
  order: 2;
  display: flex;
  justify-content: center;
  align-items:center;
  overflow:visible;

  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
    margin-top:12px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
    
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 25px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 30px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 1px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 20px;
  display: flex;
  gap: 8px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 30px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 20px;
    line-height: 40px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 15px;
    line-height: 25px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 55%;
  margin-left:1px;
  max-width: 300px;
  text-align: center;
  padding: 10px 0;

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

     &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 10px 0;
        font-size: 18px;
    } 
    color: white;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 250px;
  height:250px;
  overflow:hidden;
  
  max-width: 400px;
  max-height: 400px;
  border: 5px solid ${({ theme }) => theme.primary};
  
   @media (max-width: 960px) {
  
    max-width: 280px;
    max-height: 280px;
  }


   @media (max-width: 760px) {
  
    max-width: 200px;
    max-height: 200px;
  }
    @media (max-width: 640px) {
  
    max-width: 190px;
    max-height: 190px;
  }


  @media (max-width: 540px) {
  
    max-width: 150px;
    max-height: 150px;
  }
 
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  width: 100%;
  height: 100%;
  
  right: 0;
  bottom: 0;
  left: 0;
 
  max-width: 1360px;
  overflow: visible;
  padding: 0 30px;
  top: 50%;
  left: 50%;

  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;





const Hero = () => {
  return (
    <div id="about">
       <HeroContainer>
       <HeroBg>
               <HeroBgAnimation/>
       </HeroBg>

       <motion.div {...headContainerAnimation} style={{overflow:'hidden'}}>
       <HeroInnerContainer>
              <HeroLeftContainer>
                <motion.div {...headTextAnimation}>
                <Title>
                        Hi, I am <br/> {Bio.name}
                     </Title>

                     <TextLoop>
                        I am a 
                        <Span>
                            <Typewriter options={
                              {
                                strings : Bio.roles,
                                autoStart: true,
                                loop: true,
                              }
                            }/>
                        </Span>
                     </TextLoop>


                </motion.div>
                     

                   <motion.div {...headContentAnimation}>
                   <SubTitle>{Bio.description}</SubTitle>
                   </motion.div>
                     
                     <ResumeButton>Check Resume</ResumeButton>

              </HeroLeftContainer>

              <HeroRightContainer>
               <motion.div {...headContentAnimation}>
               <Tilt style={{overflow:'visible'}}>
                <Img src={HeroImg} alt = "atik hasan"/>
                </Tilt>
               </motion.div>
                      
              </HeroRightContainer>
          </HeroInnerContainer>

       </motion.div>
          
        

       </HeroContainer>
    </div>
  )
}

export default Hero
