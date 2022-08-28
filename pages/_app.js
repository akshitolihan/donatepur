import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel="icon" href="/dp.svg" />
    </Head>
      <NextNProgress
        color="#1E71F9"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
