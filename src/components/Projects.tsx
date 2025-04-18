import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
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
  color: #ccd6f6;
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  font-size: 16px;
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
  font-size: 14px;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const ProjectLink = styled.a`
  color: #ccd6f6;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;

  &:hover {
    color: #64ffda;
  }
`;

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of your project and what it does.',
      tech: ['React', 'TypeScript', 'Node.js'],
      github: 'https://github.com/yourusername/project1',
      live: 'https://project1-live-url.com',
    },
    {
      title: 'Project 2',
      description: 'Another project description highlighting its features and impact.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/project2',
      live: 'https://project2-live-url.com',
    },
    // Add more projects as needed
  ];

  return (
    <ProjectsSection id="projects">
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
    </ProjectsSection>
  );
};

export default Projects; 