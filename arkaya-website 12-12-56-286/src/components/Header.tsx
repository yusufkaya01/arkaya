import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../styles/theme';

const HeaderContainer = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${theme.zIndex.sticky};
  background: ${props => props.$scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  border-bottom: ${props => props.$scrolled ? `1px solid ${theme.colors.border}` : 'none'};
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.md} 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: ${theme.spacing.lg};
  padding-right: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.sm}) {
    padding-left: ${theme.spacing.md};
    padding-right: ${theme.spacing.md};
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${theme.colors.primary};
  font-weight: 700;
  font-size: ${theme.fontSizes.xl};

  img {
    height: 40px;
    margin-right: ${theme.spacing.sm};
  }
`;

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.lg}) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.colors.background};
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacing['2xl']};
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease;
    z-index: ${theme.zIndex.modal};
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  color: ${props => props.$active ? theme.colors.accent : theme.colors.text.primary};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.accent};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${props => props.$active ? '100%' : '0'};
    height: 2px;
    background: ${theme.colors.accent};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: ${theme.fontSizes.lg};
  }
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const LanguageButton = styled.button<{ $active: boolean }>`
  background: ${props => props.$active ? theme.colors.accent : 'transparent'};
  color: ${props => props.$active ? theme.colors.text.light : theme.colors.text.primary};
  border: 1px solid ${theme.colors.border};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.sm};
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.accent};
    color: ${theme.colors.text.light};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: ${theme.zIndex.modal + 1};

  div {
    width: 100%;
    height: 2px;
    background: ${theme.colors.primary};
    transition: all 0.3s ease;
    transform-origin: 1px;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    display: flex;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${theme.zIndex.overlay};
  display: none;

  @media (max-width: ${theme.breakpoints.lg}) {
    display: block;
  }
`;

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'services', path: '/services' },
    { key: 'products', path: '/products' },
    { key: 'contact', path: '/contact' }
  ];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <HeaderContainer $scrolled={scrolled}>
        <Nav>
          <Logo to="/">
            <img src="/logo_company-name-right-side-of-logo.png" alt="Arkaya" />
          </Logo>

          <NavLinks $isOpen={mobileMenuOpen}>
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                $active={location.pathname === item.path}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(`navigation.${item.key}`)}
              </NavLink>
            ))}
          </NavLinks>

          <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.md }}>
            <LanguageSelector>
              <LanguageButton
                $active={i18n.language === 'tr'}
                onClick={() => changeLanguage('tr')}
              >
                TR
              </LanguageButton>
              <LanguageButton
                $active={i18n.language === 'en'}
                onClick={() => changeLanguage('en')}
              >
                EN
              </LanguageButton>
            </LanguageSelector>

            <MobileMenuButton onClick={toggleMobileMenu}>
              <div style={{
                transform: mobileMenuOpen ? 'rotate(45deg)' : 'rotate(0)',
                transformOrigin: '1px'
              }} />
              <div style={{
                opacity: mobileMenuOpen ? '0' : '1',
                transform: mobileMenuOpen ? 'translateX(20px)' : 'translateX(0)'
              }} />
              <div style={{
                transform: mobileMenuOpen ? 'rotate(-45deg)' : 'rotate(0)',
                transformOrigin: '1px'
              }} />
            </MobileMenuButton>
          </div>
        </Nav>
      </HeaderContainer>

      <AnimatePresence>
        {mobileMenuOpen && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
