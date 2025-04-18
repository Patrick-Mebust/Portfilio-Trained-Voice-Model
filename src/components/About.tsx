import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 100px 0;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 32px;
  color: #ccd6f6;
  margin-bottom: 50px;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100px;
    height: 2px;
    background-color: #64ffda;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled(motion.div)`
  color: #8892b0;
  font-size: 18px;
  line-height: 1.6;

  p {
    margin-bottom: 20px;
  }
`;

const SkillsList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 20px;
`;

const SkillItem = styled.span`
  color: #64ffda;
  font-size: 16px;
  display: flex;
  align-items: center;

  &::before {
    content: '▹';
    margin-right: 10px;
    color: #64ffda;
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    border: 2px solid #64ffda;
    z-index: -1;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  border-radius: 4px;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%);
  }
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </SectionTitle>
      <AboutContent>
        <AboutText
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>
            Hello! I'm [Your Name], a passionate software developer with a strong
            focus on creating beautiful and functional web applications. My journey
            in web development started [X] years ago, and I've been hooked ever since.
          </p>
          <p>
            I specialize in building modern web applications using technologies like
            React, TypeScript, and Node.js. I'm always eager to learn new technologies
            and improve my skills to create better user experiences.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <SkillsList>
            <SkillItem>JavaScript (ES6+)</SkillItem>
            <SkillItem>TypeScript</SkillItem>
            <SkillItem>React</SkillItem>
            <SkillItem>Node.js</SkillItem>
            <SkillItem>HTML & CSS</SkillItem>
            <SkillItem>Git</SkillItem>
          </SkillsList>
        </AboutText>
        <AboutImage
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ImageWrapper>
            <Image src="/path-to-your-image.jpg" alt="Your Name" />
          </ImageWrapper>
        </AboutImage>
      </AboutContent>
    </AboutSection>
  );
};

export default About; 