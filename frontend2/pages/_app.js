import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import Typography from "@mui/material/Typography";

const VariantTypo = (variant) => (props) =>
  <Typography variant={variant} gutterBottom={true} {...props}></Typography>;

const components = {
  //   img: ResponsiveImage,
  h1: VariantTypo("h1"),
  h2: VariantTypo("h2"),
  h3: VariantTypo("h3"),
  h4: VariantTypo("h4"),
  //   p: Text,
  //   pre: Pre,
  //   code: InlineCode,
};

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
