import React from "react";
import Head from "next/head";
import Image from "next/dist/client/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

const index = () => {
  return (
    <>
      <Head>
        <title>DonateHut</title>
      </Head>
      <Navbar />
    </>
  )
}

export default index;
