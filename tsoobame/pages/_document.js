import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@mui/styles";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" style={{ height: "100%" }}>
        <Head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/prism-themes@1.9.0/themes/prism-vsc-dark-plus.min.css"
          ></link>
          {this.props.emotionStyleTags}
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-Z67DVHFVCM`}
          />
          <script
            async
            src="https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.2.0/mermaid.min.js"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z67DVHFVCM', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body style={{ padding: 0, margin: 0, minHeight: "100%" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
