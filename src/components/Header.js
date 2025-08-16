import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../styles/theme';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${theme.zIndex.sticky};
  background: rgba(255, 255, 255, 1.0) !important;
  backdrop-filter: none;
  transition: all 0.3s ease;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: none;
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

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.lg}) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffffff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacing['2xl']};
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: ${theme.zIndex.modal};
    
    /* Ensure mobile menu is clickable */
    pointer-events: ${props => props.$isOpen ? 'auto' : 'none'};
    opacity: ${props => props.$isOpen ? 1 : 0};
    
    /* Add padding for better touch targets */
    padding: ${theme.spacing['2xl']};
    
    /* Prevent scrolling on body when menu is open */
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    
    /* Ensure proper layering */
    will-change: transform, opacity;
    backface-visibility: hidden;
  }
`;

const NavLink = styled(Link)`
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
    padding: ${theme.spacing.lg} ${theme.spacing.xl};
    border-radius: ${theme.borderRadius.md};
    min-height: 60px; /* Larger touch target for mobile */
    min-width: 200px; /* Minimum width for better usability */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${theme.spacing.sm} 0;
    
    /* Ensure links are clickable */
    pointer-events: auto !important;
    touch-action: manipulation;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    
    /* Better border for visibility */
    border: 1px solid transparent;
    
    &:hover, &:focus, &:active {
      background: ${theme.colors.surface};
      outline: none;
      transform: scale(1.02);
      border-color: ${theme.colors.border};
    }
    
    /* Better visual feedback on touch */
    &:active {
      transform: scale(0.98);
      background: ${theme.colors.accent};
      color: ${theme.colors.text.light};
    }
    
    /* Override Link component styles */
    &, &:hover, &:focus, &:active {
      text-decoration: none;
    }
  }
`;

const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const LanguageButton = styled.button`
  background: ${props => props.$active ? theme.colors.accent : 'transparent'};
  color: ${props => props.$active ? theme.colors.text.light : theme.colors.text.primary};
  border: 1px solid ${theme.colors.border};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.sm};
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.accent};
    color: ${theme.colors.text.light};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: ${theme.zIndex.modal + 1};
  padding: 4px;
  
  /* Better touch target */
  min-height: 44px;
  min-width: 44px;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
  
  /* Ensure button is always clickable */
  pointer-events: auto;
  position: relative;

  div {
    width: 100%;
    height: 2px;
    background: ${theme.colors.primary};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: 1px;
    border-radius: 1px;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    display: flex;
  }
  
  &:focus {
    outline: 2px solid ${theme.colors.accent};
    outline-offset: 2px;
  }
  
  &:active {
    transform: scale(0.95);
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

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'services', path: '/services' },
    { key: 'products', path: '/products' },
    { key: 'contact', path: '/contact' }
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Handle link clicks to ensure menu closes and navigation works
  const handleNavLinkClick = (e, path) => {
    e.preventDefault();
    console.log('Nav link clicked:', path);
    closeMobileMenu();
    setTimeout(() => {
      navigate(path);
    }, 300); // Delay to allow menu to animate out
  };

  const handleMobileMenuToggle = (e) => {
    // Don't prevent default here - it might interfere
    console.log('Mobile menu toggle clicked, current state:', mobileMenuOpen);
    setMobileMenuOpen(prev => !prev);
  };

  // Close menu when clicking outside
  const handleOverlayClick = (e) => {
    closeMobileMenu();
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
                onClick={(e) => handleNavLinkClick(e, item.path)}
              >
                {t(`navigation.${item.key}`)}
              </NavLink>
            ))}
          </NavLinks>

          <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.md }}>
            <LanguageSelector>
              {i18n.language === 'tr' ? (
                <LanguageButton
                  $active={false}
                  onClick={() => changeLanguage('en')}
                >
                  EN
                </LanguageButton>
              ) : (
                <LanguageButton
                  $active={false}
                  onClick={() => changeLanguage('tr')}
                >
                  TR
                </LanguageButton>
              )}
            </LanguageSelector>

            <MobileMenuButton onClick={handleMobileMenuToggle}>
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
            onClick={handleOverlayClick}
          />
        )}
      </AnimatePresence>
    </>
  );
};
