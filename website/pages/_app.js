import { MDXProvider } from "@mdx-js/react";
import { Typography } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/theme";

// eslint-disable-next-line react/display-name
const VariantTypo = (variant) => (props) =>
  <Typography variant={variant} gutterBottom={true} {...props}></Typography>;

// const Pre = (props) => (
//   <pre>
//     <code>{props.children}</code>
//   </pre>
// );

const components = {
  //   img: ResponsiveImage,
  h1: VariantTypo("h2"),
  h2: VariantTypo("h3"),
  h3: VariantTypo("h4"),
  h4: VariantTypo("h5"),
  p: VariantTypo("body1"),
  // pre: Pre,
  //   code: InlineCode,
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
};

export default MyApp;
