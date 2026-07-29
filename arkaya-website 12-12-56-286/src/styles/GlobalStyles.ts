import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.md};
    line-height: 1.6;
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: ${theme.spacing.md};
  }

  h1 {
    font-size: ${theme.fontSizes['4xl']};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes['3xl']};
    }
  }

  h2 {
    font-size: ${theme.fontSizes['3xl']};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes['2xl']};
    }
  }

  h3 {
    font-size: ${theme.fontSizes['2xl']};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes.xl};
    }
  }

  h4 {
    font-size: ${theme.fontSizes.xl};
  }

  h5 {
    font-size: ${theme.fontSizes.lg};
  }

  h6 {
    font-size: ${theme.fontSizes.md};
  }

  p {
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.text.secondary};
  }

  a {
    color: ${theme.colors.accent};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.primary};
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s ease;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.lg};

    @media (max-width: ${theme.breakpoints.sm}) {
      padding: 0 ${theme.spacing.md};
    }
  }

  .section {
    padding: ${theme.spacing['4xl']} 0;

    @media (max-width: ${theme.breakpoints.md}) {
      padding: ${theme.spacing['3xl']} 0;
    }
  }

  .text-center {
    text-align: center;
  }

  .mb-0 { margin-bottom: 0; }
  .mb-1 { margin-bottom: ${theme.spacing.sm}; }
  .mb-2 { margin-bottom: ${theme.spacing.md}; }
  .mb-3 { margin-bottom: ${theme.spacing.lg}; }
  .mb-4 { margin-bottom: ${theme.spacing.xl}; }
  .mb-5 { margin-bottom: ${theme.spacing['2xl']}; }

  .mt-0 { margin-top: 0; }
  .mt-1 { margin-top: ${theme.spacing.sm}; }
  .mt-2 { margin-top: ${theme.spacing.md}; }
  .mt-3 { margin-top: ${theme.spacing.lg}; }
  .mt-4 { margin-top: ${theme.spacing.xl}; }
  .mt-5 { margin-top: ${theme.spacing['2xl']}; }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.secondary};
    border-radius: ${theme.borderRadius.sm};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.primary};
  }
`;
