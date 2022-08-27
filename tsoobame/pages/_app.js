import Header from "../components/Header";
import Footer from "../components/Footer";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/theme";
import { Paper } from "@mui/material";
import createEmotionCache from "../src/createEmotionCache";
import { CacheProvider } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Header />
        <Paper
          style={{
            padding: 0,
            paddingTop: 100,
            width: "100%",
            zIndex: -1,
          }}
        >
          <Component {...pageProps} />
        </Paper>
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
