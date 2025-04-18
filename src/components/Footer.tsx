import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 20px 0;
  text-align: center;
  background-color: #0a192f;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const SocialLink = styled.a`
  color: #ccd6f6;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #64ffda;
  }
`;

const Copyright = styled.p`
  color: #8892b0;
  font-size: 14px;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </SocialLink>
        <SocialLink
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </SocialLink>
        <SocialLink
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </SocialLink>
      </SocialLinks>
      <Copyright>
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 