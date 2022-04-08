import { createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: "#0eafa0",
      main: "#00756A",
      dark: "#00756A",
      contrastText: "#fff",
    },
    secondary: {
      light: "#71708C",
      main: "#FAB70B",
      dark: "#FAB70B",
      contrastText: "#444",
    },
    openTitle: "#3f4771",
    protectedTitle: pink["400"],
    type: "light",
  },
});

export default theme;
