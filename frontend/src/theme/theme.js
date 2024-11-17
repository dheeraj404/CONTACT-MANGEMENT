// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => createTheme({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
          // Dark mode palette
          background: {
            default: '#121212',
            paper: 'rgba(18, 18, 18, 0.6)', // Semi-transparent for glassmorphism
          },
          text: {
            primary: '#ffffff',
          },
        }
      : {
          // Light mode palette
          background: {
            default: '#f5f5f5',
            paper: '#ffffff',
          },
          text: {
            primary: '#000000',
          },
        }),
  },
  typography: {
    fontFamily: 'Montserrat', // Set Montserrat as the default font
    h1: {
      fontWeight: 700, // Bold
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 500, // Medium
    },
    subtitle2: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400, // Regular
    },
    body2: {
      fontWeight: 400,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none', // Prevent uppercase transformation
    },
    caption: {
      fontWeight: 400,
    },
    overline: {
      fontWeight: 400,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          // Apply glassmorphism effect
          background: mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          border: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Rounded corners for modern look
        },
      },
    },
    // Add more component overrides as needed
  },
});

export default getTheme;
