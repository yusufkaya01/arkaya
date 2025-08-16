import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const PageContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
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

const ProductSection = styled.section`
  background: ${theme.colors.background};
  padding: ${theme.spacing['4xl']} 0;
`;

const ProductCard = styled.div`
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
  margin-bottom: ${theme.spacing.xl};
`;

const ProductHeader = styled.div`
  background: ${theme.colors.primary};
  color: ${theme.colors.text.light};
  padding: ${theme.spacing.lg};

  h3 {
    margin: 0 0 ${theme.spacing.sm} 0;
    font-size: ${theme.fontSizes['2xl']};
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.9);
    font-size: ${theme.fontSizes.lg};
  }
`;

const ProductContent = styled.div`
  padding: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing.lg};
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: ${theme.spacing.sm} 0;
    border-bottom: 1px solid ${theme.colors.border};
    font-size: ${theme.fontSizes.md};

    &:last-child {
      border-bottom: none;
    }

    &:before {
      content: '▶';
      color: ${theme.colors.primary};
      margin-right: ${theme.spacing.sm};
    }
  }
`;

const BenefitCard = styled.div`
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.md};

  h4 {
    color: ${theme.colors.primary};
    margin: 0 0 ${theme.spacing.sm} 0;
    font-size: ${theme.fontSizes.lg};
  }

  p {
    margin: 0;
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSizes.md};
  }
`;

const SectorsSection = styled.section`
  background: ${theme.colors.surface};
  padding: ${theme.spacing['4xl']} 0;

  h2 {
    text-align: center;
    margin-bottom: ${theme.spacing['2xl']};
    color: ${theme.colors.primary};
    font-size: ${theme.fontSizes['3xl']};
  }
`;

const SectorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const SectorCard = styled.div`
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

export const Products = () => {
  const { t, ready } = useTranslation();

  // Debug logging for mobile troubleshooting
  console.log('Products component rendering');
  console.log('Translation ready:', ready);
  console.log('User agent:', navigator.userAgent);
  console.log('Screen size:', window.innerWidth, 'x', window.innerHeight);

  // Show loading state if translations aren't ready
  if (!ready) {
    return (
      <PageContainer>
        <div style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h2>Loading...</h2>
        </div>
      </PageContainer>
    );
  }

  try {
    const katipFeatures = Array.isArray(t('products.katip.features.list', { returnObjects: true })) 
      ? t('products.katip.features.list', { returnObjects: true })
      : [];
    
    const benefitsData = t('products.katip.benefits.list', { returnObjects: true });
    const benefits = Array.isArray(benefitsData) ? benefitsData : [];

    const sectors = [
      { name: t('sectors.construction'), icon: '▲' },
      { name: t('sectors.software'), icon: '◆' },
      { name: t('sectors.consulting'), icon: '◇' }
    ];

    return (
      <PageContainer>
        <HeroSection>
          <Container>
            <h1>{t('products.title')}</h1>
            <p>{t('products.subtitle')}</p>
          </Container>
        </HeroSection>

        <ProductSection>
          <Container>
            <ProductCard>
              <ProductHeader>
                <h3>{t('products.katip.title')}</h3>
                <p>{t('products.katip.description')}</p>
              </ProductHeader>
              
              <ProductContent>
                <ProductGrid>
                  <div className="features-section">
                    <h3>{t('products.katip.features.title')}</h3>
                    <FeatureList>
                      {katipFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </FeatureList>
                  </div>

                  <div className="benefits-section">
                    <h3>{t('products.katip.benefits.title')}</h3>
                    {benefits.map((benefit, index) => (
                      <BenefitCard key={index}>
                        <h4>{benefit.title}</h4>
                        <p>{benefit.description}</p>
                      </BenefitCard>
                    ))}
                  </div>
                </ProductGrid>

              </ProductContent>
            </ProductCard>
          </Container>
        </ProductSection>

        <SectorsSection>
          <Container>
            <h2>{t('products.sectors.title')}</h2>
            <SectorsGrid>
              {sectors.map((sector, index) => (
                <SectorCard key={index}>
                  <div className="sector-icon">{sector.icon}</div>
                  <h4>{sector.name}</h4>
                </SectorCard>
              ))}
            </SectorsGrid>
          </Container>
        </SectorsSection>
      </PageContainer>
    );
  } catch (error) {
    console.error('Error in Products component:', error);
    return (
      <PageContainer>
        <div style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h2>Error loading products</h2>
          <p>Please try refreshing the page</p>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
      </PageContainer>
    );
  }
};

export default Products;
