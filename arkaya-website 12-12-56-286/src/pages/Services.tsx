import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing['2xl']};
  margin-top: ${theme.spacing['3xl']};
`;

const ServiceCard = styled(motion.div)`
  background: ${theme.colors.background};
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${theme.shadows.lg};
  border: 1px solid ${theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.xl};
  }
`;

const ServiceImage = styled.div`
  height: 200px;
  background: ${theme.colors.gradient.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.text.light};
  font-size: ${theme.fontSizes['3xl']};
`;

const ServiceContent = styled.div`
  padding: ${theme.spacing['2xl']};

  h3 {
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.lg};
    font-size: ${theme.fontSizes.xl};
  }

  p {
    color: ${theme.colors.text.secondary};
    line-height: 1.6;
    margin-bottom: ${theme.spacing.lg};
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

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  background: ${theme.colors.accent};
  color: ${theme.colors.text.light};
  text-decoration: none;
  border-radius: ${theme.borderRadius.md};
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const ProcessSection = styled(Section)`
  background: ${theme.colors.surface};
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing['2xl']};
  margin-top: ${theme.spacing['3xl']};
`;

const ProcessStep = styled(motion.div)`
  text-align: center;
  padding: ${theme.spacing.xl};

  .step-number {
    width: 60px;
    height: 60px;
    background: ${theme.colors.accent};
    color: ${theme.colors.text.light};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.fontSizes.xl};
    font-weight: bold;
    margin: 0 auto ${theme.spacing.lg} auto;
  }

  h4 {
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.sm};
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
  margin: 0 auto;
  line-height: 1.6;
`;

export const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.software.title'),
      description: t('services.software.description'),
      icon: '💻',
      features: [
        'Web Uygulaması Geliştirme',
        'Mobil Uygulama Geliştirme',
        'Desktop Uygulama Geliştirme',
        'API ve Backend Geliştirme',
        'Veritabanı Tasarımı',
        'Sistem Entegrasyonu'
      ]
    },
    {
      title: t('services.construction.title'),
      description: t('services.construction.description'),
      icon: '🏗️',
      features: [
        'Konut Projeleri',
        'Ticari Yapılar',
        'Endüstriyel Tesisler',
        'Renovasyon Projeleri',
        'Proje Yönetimi',
        'Kalite Kontrol'
      ]
    },
    {
      title: t('services.automation.title'),
      description: t('services.automation.description'),
      icon: '⚙️',
      features: [
        'İş Süreçleri Otomasyonu',
        'Workflow Yönetimi',
        'Doküman Yönetimi',
        'Raporlama Sistemleri',
        'Veri Analizi',
        'Dashboard Geliştirme'
      ]
    },
    {
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      icon: '🎯',
      features: [
        'Dijital Strateji Danışmanlığı',
        'Teknoloji Seçimi',
        'Süreç Analizi',
        'Proje Planlama',
        'Eğitim ve Destek',
        'Sürekli İyileştirme'
      ]
    }
  ];

  const processSteps = [
    {
      title: 'Analiz',
      description: 'İhtiyaçlarınızı analiz eder ve en uygun çözümü belirleriz'
    },
    {
      title: 'Planlama',
      description: 'Detaylı proje planı hazırlayıp timeline ve kaynakları belirleriz'
    },
    {
      title: 'Geliştirme',
      description: 'En son teknolojiler kullanarak çözümünüzü geliştiririz'
    },
    {
      title: 'Test',
      description: 'Kapsamlı testler yaparak kaliteyi garanti altına alırız'
    },
    {
      title: 'Teslimat',
      description: 'Projenizi teslim eder ve kullanıcı eğitimi sağlarız'
    },
    {
      title: 'Destek',
      description: 'Sürekli destek ve bakım hizmetleri sunarak yanınızda oluruz'
    }
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
            <h1>{t('services.title')}</h1>
            <p>İş ihtiyaçlarınıza özel çözümler geliştiriyor, dijital dönüşüm yolculuğunuzda yanınızda oluyoruz.</p>
          </motion.div>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Hizmetlerimiz</SectionTitle>
          <SectionSubtitle>
            Modern teknolojiler kullanarak size en uygun çözümleri sunuyoruz
          </SectionSubtitle>
          
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceImage>
                  <span style={{ fontSize: '3rem' }}>{service.icon}</span>
                </ServiceImage>
                <ServiceContent>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <CTAButton to="/contact">İletişime Geçin</CTAButton>
                </ServiceContent>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </Section>

      <ProcessSection>
        <Container>
          <SectionTitle>Çalışma Sürecimiz</SectionTitle>
          <SectionSubtitle>
            Projelerinizi baştan sona profesyonel bir yaklaşımla yönetiyoruz
          </SectionSubtitle>
          
          <ProcessGrid>
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="step-number">{index + 1}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </ProcessStep>
            ))}
          </ProcessGrid>
        </Container>
      </ProcessSection>
    </PageContainer>
  );
};
