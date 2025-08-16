import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const PageContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  background: ${theme.colors.gradient.primary};
  color: ${theme.colors.text.light};
  padding: ${theme.spacing['4xl']} 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 0 ${theme.spacing.md};
  }
`;

const Section = styled.section`
  padding: ${theme.spacing['5xl']} 0;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['4xl']} 0;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['4xl']};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing['2xl']};
  }
`;

const ContactForm = styled.form`
  background: ${theme.colors.background};
  padding: ${theme.spacing['2xl']};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.lg};
  border: 1px solid ${theme.colors.border};
`;

const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.lg};

  label {
    display: block;
    margin-bottom: ${theme.spacing.sm};
    color: ${theme.colors.text.primary};
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    padding: ${theme.spacing.md};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.md};
    font-size: ${theme.fontSizes.md};
    font-family: inherit;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: ${theme.colors.accent};
    }

    &::placeholder {
      color: ${theme.colors.text.secondary};
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const SubmitButton = styled.button`
  background: ${theme.colors.accent};
  color: ${theme.colors.text.light};
  border: none;
  padding: ${theme.spacing.md} ${theme.spacing['2xl']};
  border-radius: ${theme.borderRadius.lg};
  font-size: ${theme.fontSizes.md};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background: ${theme.colors.primary};
    transform: translateY(-2px);
  }

  &:disabled {
    background: ${theme.colors.text.secondary};
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactInfo = styled.div`
  h3 {
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.lg};
  }

  p {
    margin-bottom: ${theme.spacing['2xl']};
    color: ${theme.colors.text.secondary};
    line-height: 1.6;
  }
`;

const ContactCard = styled.div`
  background: ${theme.colors.background};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: ${theme.spacing.lg};
  border: 1px solid ${theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${theme.shadows.md};
    transform: translateY(-2px);
  }

  h4 {
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.sm};
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
  }

  p, a {
    color: ${theme.colors.text.secondary};
    text-decoration: none;
    margin: 0;
  }

  a:hover {
    color: ${theme.colors.accent};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: ${theme.colors.accent};
    color: ${theme.colors.text.light};
    border-radius: ${theme.borderRadius.md};
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: ${theme.colors.primary};
      transform: translateY(-2px);
    }
  }
`;

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{t('contact.title')}</h1>
            <p>{t('contact.subtitle')}</p>
          </motion.div>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <ContactGrid>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactForm onSubmit={handleSubmit}>
                <h3>Bize Mesaj Gönderin</h3>
                <FormGroup>
                  <label htmlFor="name">{t('contact.form.name')} *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Adınızı ve soyadınızı girin"
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="email">{t('contact.form.email')} *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="E-posta adresinizi girin"
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="phone">{t('contact.form.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Telefon numaranızı girin"
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="subject">{t('contact.form.subject')} *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Mesaj konusunu girin"
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="message">{t('contact.form.message')} *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Mesajınızı detaylı olarak yazın"
                  />
                </FormGroup>

                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Gönderiliyor...' : t('contact.form.send')}
                </SubmitButton>
              </ContactForm>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactInfo>
                <h3>İletişim Bilgileri</h3>
                <p>
                  Projeleriniz, sorularınız veya iş birliği teklifleriniz için 
                  bizimle iletişime geçebilirsiniz. Size en kısa sürede dönüş yapacağız.
                </p>

                {process.env.REACT_APP_PHONE && (
                  <ContactCard>
                    <h4>☎ {t('contact.info.phone')}</h4>
                    <a href={`tel:${process.env.REACT_APP_PHONE}`}>
                      {process.env.REACT_APP_PHONE}
                    </a>
                  </ContactCard>
                )}

                {process.env.REACT_APP_EMAIL && (
                  <ContactCard>
                    <h4>✉ {t('contact.info.email')}</h4>
                    <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>
                      {process.env.REACT_APP_EMAIL}
                    </a>
                  </ContactCard>
                )}

                {process.env.REACT_APP_WHATSAPP && (
                  <ContactCard>
                    <h4>◉ WhatsApp</h4>
                    <a 
                      href={`https://wa.me/${process.env.REACT_APP_WHATSAPP}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp ile mesaj gönder
                    </a>
                  </ContactCard>
                )}

                {process.env.REACT_APP_ADDRESS && (
                  <ContactCard>
                    <h4>⌖ {t('contact.info.address')}</h4>
                    <p>{process.env.REACT_APP_ADDRESS}</p>
                  </ContactCard>
                )}

                <SocialLinks>
                  {process.env.REACT_APP_LINKEDIN && (
                    <a href={process.env.REACT_APP_LINKEDIN} target="_blank" rel="noopener noreferrer">
                      Li
                    </a>
                  )}
                  {process.env.REACT_APP_TWITTER && (
                    <a href={process.env.REACT_APP_TWITTER} target="_blank" rel="noopener noreferrer">
                      Tw
                    </a>
                  )}
                  {process.env.REACT_APP_FACEBOOK && (
                    <a href={process.env.REACT_APP_FACEBOOK} target="_blank" rel="noopener noreferrer">
                      Fb
                    </a>
                  )}
                </SocialLinks>
              </ContactInfo>
            </motion.div>
          </ContactGrid>
        </Container>
      </Section>
    </PageContainer>
  );
};
