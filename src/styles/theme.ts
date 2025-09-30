export const theme = {
  colors: {
    // Base colors
    white: '#FFFFFF',
    warmBeige: '#F7F3ED',
    softBeige: '#EDE6DB',
    mutedLine: '#E7E3DC',
    
    // Accent colors
    olive: '#6B7D3B',
    sage: '#A3B18A',
    
    // Text colors
    textPrimary: '#1E1E1E',
    textSecondary: '#666666',
    textMuted: '#999999',
    
    // Status colors
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FF9800',
  },
  
  space: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px',
    xxxxl: '80px',
  },
  
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "50%",
  },
  
  
  fonts: {
    primary: "'Poppins', sans-serif",
    weights: {
      normal: 400,
      medium: 500,
      semibold: 600,
    },
    sizes: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '24px',
      xxxl: '32px',
      xxxxl: '48px',
    },
  },
  
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px',
  },
  
  
  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.15)",
  },

  transitions: {
    fast: '0.2s ease',
    normal: '0.3s ease',
    slow: '0.4s ease',
  },
} as const;

export type Theme = typeof theme;
