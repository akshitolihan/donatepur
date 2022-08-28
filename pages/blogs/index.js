import React from "react";
import Head from "next/head";
import Image from "next/dist/client/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import extra from "../../styles/Extra.module.css";
import Carousel from "../../components/Carousel";
const index = () => {
  return (
    <>
      <Head>
        <title>Demo</title>
      </Head>
      <Navbar />
      <Carousel heading="Blogs" desc="Know more about donation." />
    </>
  );
};

export default index;
