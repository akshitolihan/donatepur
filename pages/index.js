import React from "react";
import Head from "next/head";
import Image from "next/dist/client/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import extra from "../styles/Extra.module.css";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import Footer from "../components/Footer";
const index = () => {
  return (
    <>
      <Head>
        <title>Demo</title>
      </Head>
      <Navbar />
      <Carousel image="/dp-home.svg" heading="I'm Donatepur" desc="A helping hand!🤝"/>
      <h1>akdbdfn </h1>
      <Footer />
    </>
  );
};

export default index;
