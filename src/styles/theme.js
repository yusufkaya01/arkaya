export const theme = {
  colors: {
    primary: '#000000',       // Pure black
    secondary: '#333333',     // Dark gray
    accent: '#666666',        // Medium gray
    background: '#ffffff',    // Pure white
    surface: '#f8f8f8',      // Light gray
    text: {
      primary: '#000000',     // Black text
      secondary: '#666666',   // Gray text
      light: '#ffffff'        // White text
    },
    border: '#e0e0e0',       // Light gray border
    shadow: 'rgba(0, 0, 0, 0.15)',
    gradient: {
      primary: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
      accent: 'linear-gradient(135deg, #333333 0%, #666666 100%)'
    }
  },
  fonts: {
    primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    heading: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem'
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.08)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.08)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.08)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.06)'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    overlay: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070
  }
};
