import { createTheme, ThemeProvider as TP } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5b84',
    },
  },
});

export const ThemeProvider = TP;