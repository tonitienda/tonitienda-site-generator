import Header from "../components/Header";
import Footer from "../components/Footer";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/theme";
import { Box } from "@mui/material";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box
        style={{
          position: "relative",
          width: "90%",
          paddingLeft: 24,
          paddingRight: 24,
          marginTop: 80,
          paddingBottom: 90,
          zIndex: 0,
          minHeight: "100%",
        }}
      >
        <Component {...pageProps}></Component>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
