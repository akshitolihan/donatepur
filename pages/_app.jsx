import { SessionProvider } from "next-auth/react"
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
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
    </SessionProvider>
  )
}