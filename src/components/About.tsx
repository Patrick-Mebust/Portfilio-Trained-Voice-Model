import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
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
  font-size: 32px;
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled(motion.div)`
  color: #ffffff;
  font-size: 18px;
  line-height: 1.6;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  letter-spacing: 0.5px;

  p {
    margin-bottom: 20px;
    font-weight: 500;
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
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  letter-spacing: 0.5px;
  font-weight: 500;

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
  color: #e6f1ff;
  font-size: 20px;
  margin-bottom: 15px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  letter-spacing: 0.5px;
  font-weight: 600;
`;

const CertificationItem = styled.span`
  color: #ffffff;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  letter-spacing: 0.5px;
  font-weight: 500;

  &::before {
    content: '✓';
    margin-right: 10px;
    color: #64ffda;
    text-shadow: 0 0 8px rgba(100, 255, 218, 0.3);
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  background: rgba(2, 12, 27, 0.7);
  border: 2px solid rgba(100, 255, 218, 0.3);
  transition: all 0.3s ease;

  &:hover {
    border-color: #64ffda;
    box-shadow: 0 20px 40px -20px rgba(100, 255, 218, 0.3);
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0%);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(50%);
  }
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <BackgroundContainer />
      <ContentContainer>
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
              <Image src="/images/profile.jpg" alt="Patrick Mebust" />
            </ImageWrapper>
          </AboutImage>
        </AboutContent>
      </ContentContainer>
    </AboutSection>
  );
};

export default About; 