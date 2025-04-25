import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 100px 0;
  position: relative;
  z-index: 1;
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 25, 47, 0.5);
  backdrop-filter: blur(10px);
  z-index: -1;
`;

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 64px;
  color: #ffffff;
  margin-bottom: 50px;
  position: relative;
  display: inline-block;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  font-weight: 600;
  letter-spacing: 1px;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100px;
    height: 2px;
    background-color: #64ffda;
    box-shadow: 0 0 8px rgba(100, 255, 218, 0.3);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const ProjectCard = styled(motion.div)`
  background-color: #112240;
  border-radius: 4px;
  padding: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #0a192f;
  margin-bottom: 20px;
  border-radius: 4px;
  overflow: hidden;
`;

const ProjectTitle = styled.h3`
  color: #ffffff;
  font-size: 48px;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: #ffffff;
  font-size: 32px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const TechItem = styled.span`
  color: #64ffda;
  font-size: 28px;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const ProjectLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 28px;
  transition: color 0.3s ease;

  &:hover {
    color: #64ffda;
  }
`;

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'V-JEPA AI Model',
      description: 'A sophisticated implementation of Meta\'s V-JEPA (Vision Joint Embedding Predictive Architecture) model. This project demonstrates advanced computer vision capabilities using self-supervised learning techniques for robust visual understanding.',
      tech: ['PyTorch', 'CUDA', 'Python', 'Computer Vision', 'Deep Learning'],
      github: 'https://github.com/Patrick-Mebust/V-JEPA-Project',
      live: 'https://huggingface.co/spaces/Patrick-Mebust/V-JEPA-Demo'
    },
    {
      title: 'Terraform Builder',
      description: 'An innovative tool that automates the creation and management of cloud infrastructure using Terraform. Features include dynamic template generation, multi-cloud support, and infrastructure validation.',
      tech: ['Terraform', 'AWS', 'Azure', 'Python', 'Infrastructure as Code'],
      github: 'https://github.com/Patrick-Mebust/Terraform-Builder',
      live: 'https://terraform-builder-demo.com'
    }
  ];

  return (
    <ProjectsSection id="projects">
      <BackgroundContainer />
      <ContentContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.tech.map((tech, techIndex) => (
                  <TechItem key={techIndex}>{tech}</TechItem>
                ))}
              </TechStack>
              <ProjectLinks>
                <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </ProjectLink>
                <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </ProjectLink>
              </ProjectLinks>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ContentContainer>
    </ProjectsSection>
  );
};

export default Projects; 