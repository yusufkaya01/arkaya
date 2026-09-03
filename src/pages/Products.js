import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import { PRODUCTS, ETBIS_QUERY_URL } from '../config/products';
import { usePageSeo } from '../utils/seo';

const PageContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  background: ${theme.colors.gradient.primary};
  color: ${theme.colors.text.light};
  padding: ${theme.spacing['4xl']} 0;
  text-align: center;

  h1 {
    color: ${theme.colors.text.light};
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: ${theme.fontSizes.lg};
    max-width: 720px;
    margin: ${theme.spacing.lg} auto 0 auto;
    line-height: 1.6;
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

const ProductSection = styled.section`
  padding: ${theme.spacing['4xl']} 0;
  background: ${props => props.$alt ? theme.colors.surface : theme.colors.background};
  /* Sabit başlığın altına gizlenmeden hedeflenebilmesi için */
  scroll-margin-top: 96px;
`;

const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};
  flex-wrap: wrap;
  padding-bottom: ${theme.spacing.xl};
  border-bottom: 1px solid ${theme.colors.border};
  margin-bottom: ${theme.spacing['2xl']};
`;

const LogoSlot = styled.div`
  height: 104px;
  display: flex;
  align-items: center;

  img {
    max-height: 100%;
    max-width: 260px;
    width: auto;
    object-fit: contain;
  }
`;

const HeaderText = styled.div`
  flex: 1 1 320px;

  h2 {
    color: ${theme.colors.primary};
    font-size: ${theme.fontSizes['2xl']};
    margin: 0 0 ${theme.spacing.xs} 0;
  }
`;

const TaglineRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
`;

const Tagline = styled.p`
  color: ${props => props.$accent};
  font-weight: 600;
  font-size: ${theme.fontSizes.md};
  margin: 0;
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 2px ${theme.spacing.sm};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.xs};
  font-weight: 600;
  color: ${theme.colors.text.secondary};
  background: ${theme.colors.background};

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${props => props.$accent};
  }
`;

/* ETBİS rozeti: StatusBadge ile aynı boyutta küçük bir pil, ama bağlantı —
   kamuya açık sorgulama sayfasına gider (karekod programı 09.2025'te bitti). */
const EtbisBadge = styled(StatusBadge)`
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${props => props.$accent};
    color: ${theme.colors.text.primary};
  }
`;

const Description = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSizes.lg};
  line-height: 1.7;
  max-width: 900px;
  margin: 0 0 ${theme.spacing['2xl']} 0;
`;

const ResellerNote = styled.p`
  border-left: 3px solid ${props => props.$accent};
  background: ${theme.colors.background};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: 0 ${theme.borderRadius.md} ${theme.borderRadius.md} 0;
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSizes.md};
  line-height: 1.6;
  max-width: 900px;
  margin: 0 0 ${theme.spacing['2xl']} 0;
`;

const BlockTitle = styled.h3`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.xl};
  margin-bottom: ${theme.spacing.lg};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${theme.spacing['2xl']} 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.sm} ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }

  li {
    color: ${theme.colors.text.secondary};
    line-height: 1.6;
    padding-left: ${theme.spacing.lg};
    position: relative;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      font-weight: bold;
      color: ${props => props.$accent};
    }
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing['2xl']};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};

  h4 {
    color: ${theme.colors.primary};
    font-size: ${theme.fontSizes.md};
    margin: 0 0 ${theme.spacing.sm} 0;
  }

  p {
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSizes.sm};
    line-height: 1.6;
    margin: 0;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
`;

const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${theme.colors.primary};
  color: ${theme.colors.text.light};
  border: 2px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.md};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: transparent;
    color: ${theme.colors.primary};
  }
`;

const SecondaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: transparent;
  color: ${theme.colors.primary};
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${theme.colors.primary};
  }
`;

export const Products = () => {
  const { t } = useTranslation();
  usePageSeo({ titleKey: 'seo.products.title', descriptionKey: 'seo.products.description', path: '/products' });
  const { hash } = useLocation();

  // /products#xlog gibi bağlantılarla doğrudan ürüne inilebilsin.
  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);

  const asArray = (value) => (Array.isArray(value) ? value : []);

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
            <p>{t('products.subtitle')}</p>
          </motion.div>
        </Container>
      </HeroSection>

      {PRODUCTS.map((product, index) => {
        const base = `products.${product.key}`;
        const featureKey = product.detailedFeatures ? 'featuresDetailed' : 'features';
        const features = asArray(t(`${base}.${featureKey}`, { returnObjects: true }));

        return (
          <ProductSection key={product.key} id={product.key} $alt={index % 2 === 1}>
            <Container>
              <ProductHeader>
                <LogoSlot>
                  <img
                    src={product.logo}
                    alt={`${t(`${base}.name`)} logosu`}
                    width={product.logoWidth}
                    height={product.logoHeight}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </LogoSlot>
                <HeaderText>
                  <h2>{t(`${base}.name`)}</h2>
                  <TaglineRow>
                    <Tagline $accent={product.accent}>{t(`${base}.tagline`)}</Tagline>
                    {!product.own && (
                      <StatusBadge $accent={product.accent}>
                        {t('products.badgeReseller')}
                      </StatusBadge>
                    )}
                    {product.etbisRegistered && (
                      <EtbisBadge
                        as="a"
                        href={ETBIS_QUERY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`${t('products.etbisNote')} ${t('products.etbisVerify')}.`}
                        aria-label={`${t('products.etbisBadge')} — ${t('products.etbisVerify')}`}
                        $accent={product.accent}
                      >
                        {t('products.etbisBadge')}
                      </EtbisBadge>
                    )}
                  </TaglineRow>
                </HeaderText>
              </ProductHeader>

              <Description>{t(`${base}.description`)}</Description>

              {!product.own && (
                <ResellerNote $accent={product.accent}>
                  {t(`${base}.resellerNote`)}
                </ResellerNote>
              )}

              <BlockTitle>{t('products.featuresTitle')}</BlockTitle>

              {product.detailedFeatures ? (
                <FeatureGrid>
                  {features.map((feature, idx) => (
                    <FeatureCard
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: Math.min(idx, 5) * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </FeatureCard>
                  ))}
                </FeatureGrid>
              ) : (
                <FeatureList $accent={product.accent}>
                  {features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </FeatureList>
              )}

              <Actions>
                <PrimaryLink
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('products.visit')}
                </PrimaryLink>
                <SecondaryLink to="/contact">{t('hero.contactUs')}</SecondaryLink>
              </Actions>
            </Container>
          </ProductSection>
        );
      })}
    </PageContainer>
  );
};

export default Products;
