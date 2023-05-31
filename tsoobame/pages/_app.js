import Header from "../components/Header";
import Footer from "../components/Footer";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/theme";
import { Box } from "@mui/material";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tsoobame</title>
      </Head>
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
    </>
  );
}

export default MyApp;
