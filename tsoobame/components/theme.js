import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

const white = "#FFFFFF";
const black = "#000000";

// Create a theme instance.
const theme = createTheme({
  palette: {
    black,
    white,
    primary: {
      contrastText: white,
      dark: "#00766c",
      main: "#26a69a",
      light: "#64d8cb",
    },
    secondary: {
      contrastText: white,
      dark: "#0077c2",
      main: "#42a5f5",
      light: "#80d6ff",
    },
    success: {
      contrastText: white,
      dark: colors.green[900],
      main: colors.green[600],
      light: colors.green[400],
    },
    info: {
      contrastText: white,
      dark: colors.blue[900],
      main: colors.blue[600],
      light: colors.blue[400],
    },
    warning: {
      contrastText: white,
      dark: colors.orange[900],
      main: colors.orange[600],
      light: colors.orange[400],
    },
    error: {
      contrastText: white,
      dark: colors.red[900],
      main: colors.red[600],
      light: colors.red[400],
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
      link: colors.blue[600],
    },
    background: {
      default: "#F4F6F8",
      paper: white,
    },
    icon: colors.blueGrey[600],
    divider: colors.grey[200],
  },
});

export default theme;
