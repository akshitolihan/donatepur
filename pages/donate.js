import React from "react";
import Head from "next/head";
import Image from "next/dist/client/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import extra from "../styles/Extra.module.css";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const donate = () => {
  return (
    <>
      <Head>
        <title>Demo</title>
      </Head>
      <Navbar />
      <Carousel 
       image="/dp-donate.svg"
      heading = "Donate"
      desc = "Donate to those who need help 💰"
      />   
      <Footer />
       </>
      
  );
};

export default donate;
