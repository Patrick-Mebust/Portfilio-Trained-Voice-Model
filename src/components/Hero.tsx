import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const HeroContent = styled.div`
  max-width: 1000px;
`;

const Greeting = styled(motion.h1)`
  color: #64ffda;
  font-size: 18px;
  margin-bottom: 20px;
`;

const Name = styled(motion.h2)`
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ccd6f6;

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const Title = styled(motion.h3)`
  font-size: 60px;
  color: #8892b0;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Description = styled(motion.p)`
  font-size: 20px;
  color: #8892b0;
  max-width: 600px;
  line-height: 1.5;
  margin-bottom: 30px;
`;

const ContactButton = styled(motion.a)`
  display: inline-block;
  padding: 15px 30px;
  background-color: transparent;
  color: #64ffda;
  border: 1px solid #64ffda;
  border-radius: 4px;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

const Hero: React.FC = () => {
  return (
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
          [Your Name]
        </Name>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I build things for the web.
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          I'm a software developer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products.
        </Description>
        <ContactButton
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Get In Touch
        </ContactButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 