import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/ai-background.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  opacity: 0.97;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(1, 6, 14, 0.3);
`;

const MainContent = styled.div`
  position: relative;
  z-index: 1;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  background: rgba(1, 6, 14, 0.5);
  min-height: 100vh;
  width: 100%;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
`;

const Greeting = styled(motion.h1)`
  color: #64ffda;
  font-size: 18px;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  font-weight: 600;
  letter-spacing: 1px;
`;

const Name = styled(motion.h2)`
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const Title = styled(motion.h3)`
  font-size: 60px;
  color: #e6f1ff;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  font-weight: 600;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Description = styled(motion.p)`
  font-size: 20px;
  color: #ffffff;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 30px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  letter-spacing: 0.5px;
  font-weight: 500;
`;

const ContactButton = styled(motion.a)`
  display: inline-block;
  padding: 15px 30px;
  background-color: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  border: 2px solid #64ffda;
  border-radius: 4px;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 1px;

  &:hover {
    background-color: rgba(100, 255, 218, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(100, 255, 218, 0.2);
  }
`;

const Hero: React.FC = () => {
  return (
    <>
      <BackgroundContainer>
        <BackgroundImage />
        <BackgroundOverlay />
      </BackgroundContainer>
      <MainContent>
        <ContentContainer>
          <HeroSection id="home">
            <HeroContent>
              <Greeting
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Hi, my name is
              </Greeting>
              <Name
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Patrick Mebust
              </Name>
              <Title
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                I architect AI cloud solutions.
              </Title>
              <Description
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                I'm an AI Cloud Engineer specializing in building high-performance, scalable infrastructure 
                for AI/ML workloads. Currently at NephoX, I'm focused on architecting cloud-native AI solutions 
                that transform complex data challenges into actionable insights.
              </Description>
              <ContactButton
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ y: -2 }}
              >
                Get In Touch
              </ContactButton>
            </HeroContent>
          </HeroSection>
        </ContentContainer>
      </MainContent>
    </>
  );
};

export default Hero;