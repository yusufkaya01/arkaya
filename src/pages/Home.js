import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${theme.colors.gradient.primary};
  color: ${theme.colors.text.light};
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['4xl']};
  align-items: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${theme.spacing['2xl']};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 0 ${theme.spacing.md};
  }
`;

const HeroText = styled.div`
  h1 {
    color: ${theme.colors.text.light};
    font-size: ${theme.fontSizes['5xl']};
    font-weight: 700;
    margin-bottom: ${theme.spacing.lg};
    line-height: 1.2;

    @media (max-width: ${theme.breakpoints.lg}) {
      font-size: ${theme.fontSizes['4xl']};
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes['3xl']};
    }
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: ${theme.fontSizes.lg};
    margin-bottom: ${theme.spacing['2xl']};
    line-height: 1.6;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes.md};
    }
  }
`;

const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    filter: brightness(0) invert(1);
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.md} ${theme.spacing['2xl']};
  border-radius: ${theme.borderRadius.lg};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 160px;

  ${props => props.$variant === 'secondary' ? `
    background: transparent;
    color: ${theme.colors.text.light};
    border: 2px solid ${theme.colors.text.light};

    &:hover {
      background: ${theme.colors.text.light};
      color: ${theme.colors.primary};
    }
  ` : `
    background: ${theme.colors.accent};
    color: ${theme.colors.text.light};
    border: 2px solid ${theme.colors.accent};

    &:hover {
      background: transparent;
      color: ${theme.colors.accent};
      border-color: ${theme.colors.accent};
    }
  `}
`;

const Section = styled.section`
  padding: ${theme.spacing['5xl']} 0;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['4xl']} 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 0 ${theme.spacing.md};
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};
  color: ${theme.colors.primary};
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing['2xl']};
  margin-top: ${theme.spacing['3xl']};
`;

const ServiceCard = styled(motion.div)`
  background: ${theme.colors.background};
  padding: ${theme.spacing['2xl']};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.lg};
  text-align: center;
  border: 1px solid ${theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.xl};
  }

  h3 {
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.lg};
  }

  p {
    color: ${theme.colors.text.secondary};
    line-height: 1.6;
  }
`;

const ProductSection = styled(Section)`
  background: ${theme.colors.surface};
`;

const ProductCard = styled.div`
  background: ${theme.colors.background};
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${theme.shadows.lg};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['2xl']};
  align-items: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ProductContent = styled.div`
  padding: ${theme.spacing['2xl']};

  h3 {
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.lg};
  }

  p {
    color: ${theme.colors.text.secondary};
    margin-bottom: ${theme.spacing.lg};
    line-height: 1.6;
  }

  ul {
    list-style: none;
    margin-bottom: ${theme.spacing.lg};

    li {
      color: ${theme.colors.text.secondary};
      margin-bottom: ${theme.spacing.sm};
      padding-left: ${theme.spacing.lg};
      position: relative;

      &::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: ${theme.colors.accent};
        font-weight: bold;
      }
    }
  }
`;

const ProductImage = styled.div`
  padding: ${theme.spacing['2xl']};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.surface};

  img {
    max-width: 100%;
    height: auto;
    border-radius: ${theme.borderRadius.lg};
  }
`;

export const Home = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.software.title'),
      description: t('services.software.description')
    },
    {
      title: t('services.construction.title'),
      description: t('services.construction.description')
    },
    {
      title: t('services.automation.title'),
      description: t('services.automation.description')
    },
    {
      title: t('services.consulting.title'),
      description: t('services.consulting.description')
    }
  ];

  return (
    <>
      <HeroSection>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroText>
              <h1>{t('hero.title')}</h1>
              <p>{t('hero.subtitle')}</p>
              <CTAButtons>
                <Button to="/about">{t('hero.cta')}</Button>
                <Button to="/contact" $variant="secondary">{t('hero.contactUs')}</Button>
              </CTAButtons>
            </HeroText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroImage>
              <img src="/logo_company-name-below-logo.png" alt="Arkaya Logo" />
            </HeroImage>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>{t('services.title')}</SectionTitle>
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </Section>

      <ProductSection>
        <Container>
          <SectionTitle>{t('products.title')}</SectionTitle>
          <ProductCard>
            <ProductContent>
              <h3>{t('products.katip.title')}</h3>
              <p>{t('products.katip.description')}</p>
              <h4>{t('products.katip.features.title')}</h4>
              <ul>
                {t('products.katip.features.list', { returnObjects: true }).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Button to={process.env.REACT_APP_PRODUCT_URL || '#'} target="_blank">
                {t('products.katip.visit')}
              </Button>
            </ProductContent>
            <ProductImage>
              <div style={{ 
                background: theme.colors.gradient.primary,
                padding: theme.spacing['2xl'],
                borderRadius: theme.borderRadius.lg,
                color: theme.colors.text.light,
                textAlign: 'center'
              }}>
                <h4>Katip Otomasyonu</h4>
                <p>OSGB Automation Solution</p>
              </div>
            </ProductImage>
          </ProductCard>
        </Container>
      </ProductSection>
    </>
  );
};
