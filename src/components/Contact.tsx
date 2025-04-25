import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
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

const ContactContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContactText = styled(motion.p)`
  color: #ffffff;
  font-size: 36px;
  text-align: center;
  margin-bottom: 50px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  letter-spacing: 0.5px;
  font-weight: 500;
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  color: #ffffff;
  font-size: 28px;
`;

const Input = styled.input`
  padding: 12px;
  background-color: #112240;
  border: 1px solid #233554;
  border-radius: 4px;
  color: #ffffff;
  font-size: 32px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #64ffda;
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  background-color: #112240;
  border: 1px solid #233554;
  border-radius: 4px;
  color: #ffffff;
  font-size: 32px;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #64ffda;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 15px 30px;
  background-color: transparent;
  color: #64ffda;
  border: 1px solid #64ffda;
  border-radius: 4px;
  font-size: 32px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <ContactSection id="contact">
      <BackgroundContainer />
      <ContentContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </SectionTitle>
        <ContactContent>
          <ContactText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm currently looking for new opportunities. Whether you have a question or
            just want to say hi, I'll try my best to get back to you!
          </ContactText>
          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </ContentContainer>
    </ContactSection>
  );
};

export default Contact; 