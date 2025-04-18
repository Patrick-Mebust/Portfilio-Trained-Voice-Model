import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #0a192f;
  color: #ccd6f6;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <MainContent>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App; 