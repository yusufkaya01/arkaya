import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import { PRODUCTS, ETBIS_QUERY_URL } from '../config/products';
import { usePageSeo } from '../utils/seo';

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
  padding: ${theme.spacing['4xl']} ${theme.spacing.lg};
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
    padding: ${theme.spacing['4xl']} ${theme.spacing.md};
  }
`;

const Badge = styled.span`
  display: inline-block;
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.sm};
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: ${theme.spacing.lg};
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

  @media (max-width: ${theme.breakpoints.lg}) {
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const buttonStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.md} ${theme.spacing['2xl']};
  border-radius: ${theme.borderRadius.lg};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 160px;
`;

const Button = styled(Link)`
  ${buttonStyles}

  ${props => props.$variant === 'secondary' ? `
    background: transparent;
    color: ${theme.colors.text.light};
    border: 2px solid ${theme.colors.text.light};

    &:hover {
      background: ${theme.colors.text.light};
      color: ${theme.colors.primary};
    }
  ` : `
    background: ${theme.colors.text.light};
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.text.light};

    &:hover {
      background: transparent;
      color: ${theme.colors.text.light};
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
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.primary};
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSizes.lg};
  max-width: 760px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ProductSection = styled(Section)`
  background: ${theme.colors.surface};
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing['3xl']};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ProductCard = styled(motion.div)`
  position: relative; /* köşedeki bayi rozeti için */
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-top: 4px solid ${props => props.$accent};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['2xl']};
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
  }
`;

/**
 * Üç ürünün logosu farklı en/boy oranında (Katip kare, İSG Asistan ve XLog
 * yatay). Sabit yükseklik + ortak genişlik sınırı üçünü de benzer ağırlıkta
 * gösterir.
 */
const LogoSlot = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${theme.spacing.lg};

  img {
    max-height: 100%;
    max-width: 190px;
    width: auto;
    object-fit: contain;
  }
`;

/**
 * Yalnızca bayisi olduğumuz ürünlerde görünür (kendi ürünlerimizde rozet yok).
 * Tek bir kartta çıktığı için akışın içinde değil, kartın sağ üst köşesinde
 * duruyor: aksi hâlde rozetsiz kartların metni yukarı kayar ve üç kartın
 * satırları hizasız görünürdü.
 */
const OwnershipBadge = styled.span`
  position: absolute;
  top: ${theme.spacing.lg};
  right: ${theme.spacing.lg};
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 2px ${theme.spacing.sm};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.full};
  background: ${theme.colors.background};
  font-size: ${theme.fontSizes.xs};
  font-weight: 600;
  color: ${theme.colors.text.secondary};

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${props => props.$accent};
  }
`;

const Tagline = styled.p`
  color: ${props => props.$accent};
  font-weight: 600;
  font-size: ${theme.fontSizes.sm};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: ${theme.spacing.sm};
`;

const CardText = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.xl};
  flex-grow: 1;
`;

const CardActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
  align-items: center;
`;

const TextLink = styled(Link)`
  color: ${theme.colors.primary};
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid ${theme.colors.border};
  padding-bottom: 2px;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${theme.colors.primary};
  }
`;

const ExternalLink = styled.a`
  color: ${theme.colors.text.secondary};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

/**
 * ETBİS satırı: yalnız satış sitesi ETBİS'e kayıtlı ürünlerde (config/products.js
 * `etbisRegistered`). Tek satır, xs punto — kartın eylem satırının hemen üstünde.
 * Akışın içindedir ama kartlar ızgarada eşit boya uzadığı ve CardText esnediği
 * için eylem satırları yine hizalı kalır. Bağlantı, kamuya açık sorgulama sayfasına.
 */
const EtbisLine = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  align-self: flex-start;
  margin: 0 0 ${theme.spacing.md} 0;
  font-size: ${theme.fontSizes.xs};
  font-weight: 600;
  color: ${theme.colors.text.secondary};
  text-decoration: none;
  transition: color 0.3s ease;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${props => props.$accent};
  }

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: ${theme.spacing['2xl']};
  margin-top: ${theme.spacing['3xl']};
`;

const WhyCard = styled(motion.div)`
  h3 {
    color: ${theme.colors.primary};
    font-size: ${theme.fontSizes.lg};
    margin-bottom: ${theme.spacing.sm};
  }

  p {
    color: ${theme.colors.text.secondary};
    line-height: 1.6;
  }
`;

const CTASection = styled.section`
  background: ${theme.colors.gradient.primary};
  color: ${theme.colors.text.light};
  padding: ${theme.spacing['4xl']} 0;
  text-align: center;

  h2 {
    color: ${theme.colors.text.light};
    margin-bottom: ${theme.spacing.md};
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: ${theme.fontSizes.lg};
    max-width: 640px;
    margin: 0 auto ${theme.spacing['2xl']} auto;
    line-height: 1.6;
  }
`;

const CTAInner = styled.div`
  display: flex;
  justify-content: center;
`;

/** Bağlantı metni: şema, "www." ve sondaki eğik çizgi olmadan. Href değişmez. */
const displayUrl = (url) =>
  url.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '');

export const Home = () => {
  const { t } = useTranslation();
  usePageSeo({ titleKey: 'seo.home.title', descriptionKey: 'seo.home.description', path: '/' });

  const reasons = t('home.why', { returnObjects: true });
  const whyItems = Array.isArray(reasons) ? reasons : [];

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
              <Badge>{t('hero.badge')}</Badge>
              <h1>{t('hero.title')}</h1>
              <p>{t('hero.subtitle')}</p>
              <CTAButtons>
                <Button to="/products">{t('hero.cta')}</Button>
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
              {/* Sayfanın en büyük görseli = LCP adayı: erken indirilsin,
                  ölçüleri baştan bilinsin (yer ayrılır, kayma olmaz). */}
              <img
                src="/logo_company-name-below-logo.png"
                alt="Arkaya Arge Yazılım İnşaat Tic. Ltd. Şti. logosu"
                width="1561"
                height="968"
                fetchpriority="high"
                decoding="async"
              />
            </HeroImage>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <ProductSection>
        <Container>
          <SectionTitle>{t('home.productsTitle')}</SectionTitle>
          <SectionSubtitle>{t('home.productsSubtitle')}</SectionSubtitle>

          <ProductGrid>
            {PRODUCTS.map((product, index) => (
              <ProductCard
                key={product.key}
                $accent={product.accent}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <LogoSlot>
                  <img
                    src={product.logo}
                    alt={`${t(`products.${product.key}.name`)} logosu`}
                    width={product.logoWidth}
                    height={product.logoHeight}
                    loading="lazy"
                    decoding="async"
                  />
                </LogoSlot>
                {!product.own && (
                  <OwnershipBadge $accent={product.accent}>
                    {t('products.badgeReseller')}
                  </OwnershipBadge>
                )}
                <Tagline $accent={product.accent}>
                  {t(`products.${product.key}.tagline`)}
                </Tagline>
                <CardText>{t(`products.${product.key}.short`)}</CardText>
                {product.etbisRegistered && (
                  <EtbisLine
                    href={ETBIS_QUERY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={t('products.etbisNote')}
                    $accent={product.accent}
                  >
                    {t('products.etbisBadge')} · {t('products.etbisVerify')}
                  </EtbisLine>
                )}
                <CardActions>
                  <TextLink to="/products">{t('products.detail')}</TextLink>
                  <ExternalLink
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {displayUrl(product.url)} ↗
                  </ExternalLink>
                </CardActions>
              </ProductCard>
            ))}
          </ProductGrid>
        </Container>
      </ProductSection>

      <Section>
        <Container>
          <SectionTitle>{t('home.whyTitle')}</SectionTitle>
          <SectionSubtitle>{t('home.whySubtitle')}</SectionSubtitle>

          <WhyGrid>
            {whyItems.map((item, index) => (
              <WhyCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </WhyCard>
            ))}
          </WhyGrid>
        </Container>
      </Section>

      <CTASection>
        <Container>
          <h2>{t('home.ctaTitle')}</h2>
          <p>{t('home.ctaSubtitle')}</p>
          <CTAInner>
            <Button to="/contact">{t('home.ctaButton')}</Button>
          </CTAInner>
        </Container>
      </CTASection>
    </>
  );
};
