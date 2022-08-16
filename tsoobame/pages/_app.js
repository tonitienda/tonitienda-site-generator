import Head from "next/head";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next and MDX Blog</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />

        <link rel="stylesheet" href="/css/prism.okaidia.css" />
        <script src="/scripts/prism.js" />
      </Head>
      <div className="container">
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
