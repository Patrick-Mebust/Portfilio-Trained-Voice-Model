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

const CertificationsList = styled(motion.div)`
  margin-top: 30px;
`;

const CertificationTitle = styled.h3`
  color: #ccd6f6;
  font-size: 20px;
  margin-bottom: 15px;
`;

const CertificationItem = styled.span`
  color: #8892b0;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  &::before {
    content: '✓';
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
            Based in Nashville, I'm an AI Cloud Engineer specializing in building high-performance, 
            scalable cloud infrastructure for demanding AI workloads. At NephoX, I architect 
            cloud-native AI solutions leveraging container orchestration, real-time data ingestion, 
            and automated pipelines to accelerate model training and deployment while optimizing 
            costs and ensuring robust security.
          </p>
          <p>
            My background includes significant experience designing complex infrastructure solutions 
            at Dell, utilizing technologies like VxRail, PowerFlex, PowerStore, and APEX, integrated 
            with cloud services like AWS and Azure. I guide enterprise clients through critical 
            decisions on high availability, disaster recovery, and cloud cost optimization, 
            translating technical capabilities into clear business value.
          </p>
          <p>
            I thrive on bridging the gap between cutting-edge AI/ML possibilities and the 
            practicalities of cloud engineering and technical sales. My passion lies in 
            transforming complex data challenges into actionable insights at cloud speed, 
            enabled by resilient and efficient infrastructure.
          </p>

          <CertificationsList>
            <CertificationTitle>Certifications</CertificationTitle>
            <CertificationItem>Microsoft Azure: AI Cloud Apps Builder</CertificationItem>
            <CertificationItem>AWS Cloud Technical Essentials</CertificationItem>
            <CertificationItem>Google Cloud Fundamentals</CertificationItem>
            <CertificationItem>Google API Design & Security</CertificationItem>
            <CertificationItem>Vanderbilt: AI Agents & Generative AI with Python</CertificationItem>
          </CertificationsList>

          <p>Technical Skills:</p>
          <SkillsList>
            <SkillItem>MLOps Pipelines (MLflow, Cubeflow, Vertex AI, SageMaker)</SkillItem>
            <SkillItem>Foundation Models (V-JEPA, OpenAI, Anthropic, Vertex AI, Bedrock)</SkillItem>
            <SkillItem>LLMOps Tools (LangChain, LlamaIndex)</SkillItem>
            <SkillItem>Cloud Platforms (AWS, Azure, GCP, VCF)</SkillItem>
            <SkillItem>IaC & Automation (Terraform, Ansible, CI/CD)</SkillItem>
            <SkillItem>AI/ML Infrastructure (GPU Clusters, Data Lakes)</SkillItem>
            <SkillItem>Vector Search & RAG (Qdran, Vespa)</SkillItem>
            <SkillItem>High Availability Systems</SkillItem>
            <SkillItem>Disaster Recovery</SkillItem>
            <SkillItem>Cost Optimization</SkillItem>
          </SkillsList>
        </AboutText>
        <AboutImage
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ImageWrapper>
            <Image src="/path-to-your-image.jpg" alt="Patrick Mebust" />
          </ImageWrapper>
        </AboutImage>
      </AboutContent>
    </AboutSection>
  );
};

export default About; 