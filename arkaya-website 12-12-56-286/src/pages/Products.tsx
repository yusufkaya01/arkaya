import React from 'react';
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

const ProductCard = styled(motion.div)`
  background: ${theme.colors.background};
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${theme.shadows.lg};
  border: 1px solid ${theme.colors.border};
  margin-bottom: ${theme.spacing['3xl']};
`;

const ProductHeader = styled.div`
  background: ${theme.colors.gradient.primary};
  color: ${theme.colors.text.light};
  padding: ${theme.spacing['2xl']};
  text-align: center;

  h2 {
    color: ${theme.colors.text.light};
    margin-bottom: ${theme.spacing.md};
    font-size: ${theme.fontSizes['3xl']};
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: ${theme.fontSizes.lg};
    margin: 0;
  }
`;

const ProductContent = styled.div`
  padding: ${theme.spacing['2xl']};

  .product-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing['2xl']};

    @media (max-width: ${theme.breakpoints.lg}) {
      grid-template-columns: 1fr;
    }
  }

  .features-section {
    h3 {
      color: ${theme.colors.primary};
      margin-bottom: ${theme.spacing.lg};
      font-size: ${theme.fontSizes.xl};
    }

    ul {
      list-style: none;
      
      li {
        color: ${theme.colors.text.secondary};
        margin-bottom: ${theme.spacing.sm};
        padding-left: ${theme.spacing.lg};
        position: relative;
        line-height: 1.6;

        &::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: ${theme.colors.accent};
          font-weight: bold;
        }
      }
    }
  }

  .benefits-section {
    h3 {
      color: ${theme.colors.primary};
      margin-bottom: ${theme.spacing.lg};
      font-size: ${theme.fontSizes.xl};
    }

    .benefit-card {
      background: ${theme.colors.surface};
      padding: ${theme.spacing.lg};
      border-radius: ${theme.borderRadius.md};
      margin-bottom: ${theme.spacing.md};

      h4 {
        color: ${theme.colors.primary};
        margin-bottom: ${theme.spacing.sm};
        font-size: ${theme.fontSizes.md};
      }

      p {
        color: ${theme.colors.text.secondary};
        margin: 0;
        font-size: ${theme.fontSizes.sm};
        line-height: 1.5;
      }
    }
  }
`;

const ProductActions = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  justify-content: center;
  padding: ${theme.spacing['2xl']};
  border-top: 1px solid ${theme.colors.border};

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const ActionButton = styled.a<{ $variant?: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.md} ${theme.spacing['2xl']};
  border-radius: ${theme.borderRadius.lg};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 180px;

  ${props => props.$variant === 'secondary' ? `
    background: transparent;
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.text.light};
    }
  ` : `
    background: ${theme.colors.accent};
    color: ${theme.colors.text.light};
    border: 2px solid ${theme.colors.accent};

    &:hover {
      background: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
    }
  `}
`;

const TechStack = styled.div`
  background: ${theme.colors.surface};
  padding: ${theme.spacing['2xl']};
  border-radius: ${theme.borderRadius.lg};
  margin-top: ${theme.spacing['2xl']};

  h3 {
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.lg};
    text-align: center;
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: ${theme.spacing.md};
    text-align: center;

    .tech-item {
      background: ${theme.colors.background};
      padding: ${theme.spacing.md};
      border-radius: ${theme.borderRadius.md};
      font-weight: 500;
      color: ${theme.colors.text.secondary};
      font-size: ${theme.fontSizes.sm};
    }
  }
`;

const SectorsSection = styled(Section)`
  background: ${theme.colors.surface};
`;

const SectorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing['2xl']};
`;

const SectorCard = styled(motion.div)`
  background: ${theme.colors.background};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.lg};
  text-align: center;
  border: 1px solid ${theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.md};
  }

  .sector-icon {
    font-size: ${theme.fontSizes['3xl']};
    margin-bottom: ${theme.spacing.md};
  }

  h4 {
    color: ${theme.colors.primary};
    margin: 0;
  }
`;

const SectionTitle = styled.h2`
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.lg};
`;

export const Products: React.FC = () => {
  const { t } = useTranslation();

  const katipFeatures = t('products.katip.features.list', { returnObjects: true }) as string[];
  
  const benefits = [
    {
      title: 'Zaman Tasarrufu',
      description: 'Manuel işlemlerinizi otomatikleştirerek günde saatler kazanın'
    },
    {
      title: 'Hata Minimizasyonu',
      description: 'İnsan kaynaklı hataları minimuma indirerek güvenilirlik sağlayın'
    },
    {
      title: 'Mevzuat Uyumu',
      description: 'Güncel mevzuata uygun raporlama ve takip sistemleri'
    },
    {
      title: 'Mobil Erişim',
      description: 'Her yerden, her zaman sisteminize erişim imkanı'
    }
  ];

  const techStack = [
    'React', 'Node.js', 'PostgreSQL', 'Docker', 
    'AWS', 'TypeScript', 'REST API', 'WebSocket'
  ];

  const sectors = [
    { name: t('sectors.healthcare'), icon: '🏥' },
    { name: t('sectors.construction'), icon: '🏗️' },
    { name: t('sectors.manufacturing'), icon: '🏭' },
    { name: t('sectors.finance'), icon: '💰' },
    { name: t('sectors.education'), icon: '📚' },
    { name: t('sectors.retail'), icon: '🛍️' }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{t('products.title')}</h1>
            <p>İş süreçlerinizi optimize eden, modern ve güvenilir yazılım çözümleri</p>
          </motion.div>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <ProductCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ProductHeader>
              <h2>{t('products.katip.title')}</h2>
              <p>OSGB Merkezi Yönetim ve Otomasyon Sistemi</p>
            </ProductHeader>

            <ProductContent>
              <p style={{ fontSize: theme.fontSizes.lg, marginBottom: theme.spacing['2xl'], textAlign: 'center', color: theme.colors.text.secondary }}>
                {t('products.katip.description')}
              </p>

              <div className="product-grid">
                <div className="features-section">
                  <h3>{t('products.katip.features.title')}</h3>
                  <ul>
                    {katipFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="benefits-section">
                  <h3>Faydalar</h3>
                  {benefits.map((benefit, index) => (
                    <div key={index} className="benefit-card">
                      <h4>{benefit.title}</h4>
                      <p>{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <TechStack>
                <h3>Kullanılan Teknolojiler</h3>
                <div className="tech-grid">
                  {techStack.map((tech, index) => (
                    <div key={index} className="tech-item">{tech}</div>
                  ))}
                </div>
              </TechStack>
            </ProductContent>

            <ProductActions>
              <ActionButton 
                href={process.env.REACT_APP_PRODUCT_URL || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t('products.katip.visit')}
              </ActionButton>
              <ActionButton href="/contact" $variant="secondary">
                Demo Talep Et
              </ActionButton>
            </ProductActions>
          </ProductCard>
        </Container>
      </Section>

      <SectorsSection>
        <Container>
          <SectionTitle>{t('sectors.title')}</SectionTitle>
          <p style={{ textAlign: 'center', color: theme.colors.text.secondary, fontSize: theme.fontSizes.lg, marginBottom: theme.spacing['2xl'] }}>
            Çözümlerimizle birçok sektöre hizmet veriyoruz
          </p>
          
          <SectorsGrid>
            {sectors.map((sector, index) => (
              <SectorCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="sector-icon">{sector.icon}</div>
                <h4>{sector.name}</h4>
              </SectorCard>
            ))}
          </SectorsGrid>
        </Container>
      </SectorsSection>
    </PageContainer>
  );
};
