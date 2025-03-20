'use client'
import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-default-primary)',
  },
  palette: {
    primary: {
      main: '#007ade',
    },
  },
});

export default theme;