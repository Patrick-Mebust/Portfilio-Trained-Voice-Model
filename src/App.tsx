import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContainer = styled.div`
  background-color: #0a192f;
  color: #8892b0;
  min-height: 100vh;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </AppContainer>
  );
};

export default App; 