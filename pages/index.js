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
      <Carousel heading="Help People with ease..." desc="Help through us..." />
      <section className="bg-[#ffffff] w-full h-[00px] shadow-aksh "></section>
      <section className="bg-[#9b96ff] w-full h-[950px] shadow-aksh ">
        <section className="flex justify-center">
          <h1 className="text-center pt-20">Help people have food.</h1>
          <div className="flex justify-center z-0">
            <Image
              alt="home"
              className=""
              src="/child.svg"
              height="256px"
              width="256px"
              layout="intrinsic"
            />
          </div>
        </section>
      </section>

      <section className="bg-[#ffffff] w-full h-[950px] shadow-aksh ">
        hd
      </section>
      <section className="bg-[#FFA98C] w-full h-[950px] shadow-aksh ">
        hd
      </section>
      <section className="bg-[#ffffff] w-full h-[950px] shadow-aksh ">
        hd
      </section>
      <section className="bg-[#FFD06B] w-full h-[950px] shadow-aksh ">
        hd
      </section>
      <section className="bg-[#ffffff] w-full h-[950px] shadow-aksh ">
        hd
      </section>
      <section className="bg-[#71e9a1] w-full h-[950px] shadow-aksh ">
        hd
      </section>
      <section className="bg-[#ffffff] w-full h-[950px] shadow-aksh ">
        hd
      </section>
      <Footer />
    </>
  );
};

export default index;
