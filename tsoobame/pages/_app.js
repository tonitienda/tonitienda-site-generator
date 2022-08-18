import Header from "../components/Header";
import Footer from "../components/Footer";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/theme";
import { Paper } from "@mui/material";

function MyApp({ Component, pageProps, posts }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Paper
          style={{
            paddingTop: 100,
            paddingBottom: 100,
            width: "100%",
            zIndex: -1,
          }}
        >
          <Component {...pageProps} />
        </Paper>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
