import { MDXProvider } from "@mdx-js/react";
import Typography from "@mui/material/Typography";
import { createStyles, makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.red,
    },
  })
);

const theme = createTheme();

// eslint-disable-next-line react/display-name
const VariantTypo = (variant) => (props) =>
  <Typography variant={variant} gutterBottom={true} {...props}></Typography>;

const components = {
  //   img: ResponsiveImage,
  h1: VariantTypo("h2"),
  h2: VariantTypo("h3"),
  h3: VariantTypo("h4"),
  h4: VariantTypo("h5"),
  //   p: Text,
  //   pre: Pre,
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
