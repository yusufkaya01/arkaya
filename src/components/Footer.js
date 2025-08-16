import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const FooterContainer = styled.footer`
  background: #000000;
  color: #ffffff;
  padding: ${theme.spacing['4xl']} 0 ${theme.spacing.xl} 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing['2xl']};

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 0 ${theme.spacing.md};
    gap: ${theme.spacing.xl};
  }
`;

const FooterSection = styled.div`
  h4 {
    color: #ffffff;
    margin-bottom: ${theme.spacing.lg};
    font-size: ${theme.fontSizes.lg};
    font-weight: 600;
  }

  p, a {
    color: #cccccc;
    margin-bottom: ${theme.spacing.sm};
    line-height: 1.6;
  }

  a {
    display: block;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ffffff;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.lg};

  img {
    height: 40px;
    margin-right: ${theme.spacing.sm};
    filter: brightness(0) invert(1);
  }

  span {
    font-size: ${theme.fontSizes.lg};
    font-weight: 700;
    color: ${theme.colors.text.light};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};

  a {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.text.light};
    }
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
    width: 40px;
    height: 40px;
    background: #333333;
    border-radius: ${theme.borderRadius.md};
    color: #ffffff;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: #666666;
      transform: translateY(-2px);
    }
  }
`;

const Copyright = styled.div`
  margin-top: ${theme.spacing['2xl']};
  padding-top: ${theme.spacing.xl};
  border-top: 1px solid #333333;
  text-align: center;
  color: #999999;
  font-size: ${theme.fontSizes.sm};
`;

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'services', path: '/services' },
    { key: 'products', path: '/products' },
    { key: 'contact', path: '/contact' }
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo>
            <img src="/only-logo.png" alt="Arkaya" />
            <span>{process.env.REACT_APP_COMPANY_SHORT_NAME}</span>
          </Logo>
          <p>
            {t('about.description')}
          </p>
          <SocialLinks>
            {process.env.REACT_APP_LINKEDIN && (
              <a href={process.env.REACT_APP_LINKEDIN} target="_blank" rel="noopener noreferrer">
                <span>Li</span>
              </a>
            )}
            {process.env.REACT_APP_TWITTER && (
              <a href={process.env.REACT_APP_TWITTER} target="_blank" rel="noopener noreferrer">
                <span>Tw</span>
              </a>
            )}
            {process.env.REACT_APP_FACEBOOK && (
              <a href={process.env.REACT_APP_FACEBOOK} target="_blank" rel="noopener noreferrer">
                <span>Fb</span>
              </a>
            )}
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h4>{t('footer.quickLinks')}</h4>
          {quickLinks.map((link) => (
            <Link key={link.key} to={link.path}>
              {t(`navigation.${link.key}`)}
            </Link>
          ))}
        </FooterSection>

        <FooterSection>
          <h4>{t('footer.contact')}</h4>
          <ContactInfo>
            {process.env.REACT_APP_PHONE && (
              <a href={`tel:${process.env.REACT_APP_PHONE}`}>
                ☎ {process.env.REACT_APP_PHONE}
              </a>
            )}
            {process.env.REACT_APP_EMAIL && (
              <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>
                ✉ {process.env.REACT_APP_EMAIL}
              </a>
            )}
            {process.env.REACT_APP_WHATSAPP && (
              <a href={`https://wa.me/${process.env.REACT_APP_WHATSAPP}`} target="_blank" rel="noopener noreferrer">
                ◉ WhatsApp
              </a>
            )}
            {process.env.REACT_APP_ADDRESS && (
              <span>⌖ {process.env.REACT_APP_ADDRESS}</span>
            )}
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {currentYear} {process.env.REACT_APP_COMPANY_SHORT_NAME}. {t('footer.rights')}
      </Copyright>
    </FooterContainer>
  );
};
