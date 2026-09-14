import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import { usePageSeo } from '../utils/seo';
import { PRODUCTS } from '../config/products';
import {
  CertificateTitle,
  TeknogirisimCertificate,
  TrademarkCertificate
} from '../components/Certificate';

const PageContainer = styled.div`
  padding-top: 80px; // Account for fixed header
`;

const HeroSection = styled.section`
  background: ${theme.colors.gradient.primary};
  color: ${theme.colors.text.light};
  padding: ${theme.spacing['5xl']} 0;
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['4xl']};
  align-items: center;
  margin-top: ${theme.spacing['3xl']};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing['2xl']};
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: ${theme.borderRadius.xl};
    box-shadow: ${theme.shadows.lg};
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing['2xl']};
  margin-top: ${theme.spacing['3xl']};
`;

const ValueCard = styled(motion.div)`
  background: ${theme.colors.background};
  padding: ${theme.spacing['2xl']};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.md};
  border: 1px solid ${theme.colors.border};
  text-align: center;

  h3 {
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.lg};
    font-size: ${theme.fontSizes.xl};
  }

  p {
    color: ${theme.colors.text.secondary};
    line-height: 1.6;
  }
`;

const SectionTitle = styled.h2`
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.lg};
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSizes.lg};
  max-width: 800px;
  margin: 0 auto ${theme.spacing['2xl']} auto;
  line-height: 1.6;
`;

const StatsSection = styled(Section)`
  background: ${theme.colors.surface};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing['2xl']};
  text-align: center;
`;

const StatCard = styled(motion.div)`
  h3 {
    font-size: ${theme.fontSizes['4xl']};
    color: ${theme.colors.accent};
    margin-bottom: ${theme.spacing.sm};
    font-weight: 700;
  }

  p {
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSizes.lg};
    font-weight: 500;
  }
`;

export const About = () => {
  const { t } = useTranslation();
  usePageSeo({ titleKey: 'seo.about.title', descriptionKey: 'seo.about.description', path: '/about' });

  const values = [
    {
      title: t('about.mission'),
      description: t('about.missionText')
    },
    {
      title: t('about.vision'),
      description: t('about.visionText')
    },
    {
      title: t('about.values'),
      description: t('about.valuesText')
    }
  ];

  const statsData = t('about.stats', { returnObjects: true });
  const stats = Array.isArray(statsData) ? statsData : [];

  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{t('about.title')}</h1>
            <p style={{ fontSize: theme.fontSizes.lg, marginTop: theme.spacing.lg }}>
              {process.env.REACT_APP_COMPANY_NAME}
            </p>
          </motion.div>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <ContentGrid>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>{t('about.title')}</h2>
              <p>{t('about.description')}</p>
              <p>{t('about.description2')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ImageContainer>
                <img
                  src="/logo_company-name-below-logo-2.png"
                  alt="Arkaya Arge Yazılım İnşaat Tic. Ltd. Şti. logosu"
                  width="1262"
                  height="835"
                  loading="lazy"
                  decoding="async"
                />
              </ImageContainer>
            </motion.div>
          </ContentGrid>
        </Container>
      </Section>

      {/* Belgelerimiz — resmî kurumların şirket ve ürün adına düzenlediği belgeler.
          Belgeler SAYFADA görsel olarak durur; PDF indirme bağlantısı yoktur
          (kullanıcı kararı 14.09.2026). Veriler config dosyalarından okunur:
          rozet `config/teknogirisim.js`, marka tescili `config/products.js`
          (Ürünler sayfasıyla AYNI kaynak ve AYNI bileşen). */}
      <Section>
        <Container>
          <SectionTitle>{t('about.certificatesTitle')}</SectionTitle>
          <SectionSubtitle>{t('about.certificatesSubtitle')}</SectionSubtitle>
          <TeknogirisimCertificate />
          {/* Kendi ürünlerimizin marka tescilleri — Katip Otomasyonu ve İSG Asistan
              (kullanıcı kararı 14.09.2026). Bayisi olduğumuz ürünün markası bize ait
              değildir; `own` + `trademark` süzgeci onu dışarıda bırakır. */}
          {PRODUCTS.filter((product) => product.own && product.trademark).map((product) => (
            <React.Fragment key={product.key}>
              <CertificateTitle>
                {t('products.trademarkTitle')} — {t(`products.${product.key}.name`)}
              </CertificateTitle>
              <TrademarkCertificate productKey={product.key} trademark={product.trademark} />
            </React.Fragment>
          ))}
        </Container>
      </Section>

      <StatsSection>
        <Container>
          <SectionTitle>{t('about.statsTitle')}</SectionTitle>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </StatCard>
            ))}
          </StatsGrid>
        </Container>
      </StatsSection>

      <Section>
        <Container>
          <SectionTitle>{t('about.valuesTitle')}</SectionTitle>
          <SectionSubtitle>
            {t('about.valuesSubtitle')}
          </SectionSubtitle>
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </ValueCard>
            ))}
          </ValuesGrid>
        </Container>
      </Section>
    </PageContainer>
  );
};
