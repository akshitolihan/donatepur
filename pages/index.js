import React from "react";
import Head from "next/head";
import Image from "next/dist/client/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import extra from "../styles/Extra.module.css";

const index = () => {
  return (
    <>
      <Head>
        <title>DonateHut</title>
      </Head>
      <Navbar />``
      <div id={extra.edu} className="md:flex justify-evenly md:pt-12">
        <div className="mt-20 text-6xl font-semibold text-center">
          <h1 className="py-4 text-[#4d4d4d]">Help People</h1>
          <h1 className="py-4 text-[#4d4d4d]">Through</h1>
          <div id={extra.edu} className="py-4">
            <span className="text-[#00E676] text-8xl font-extrabold tracking-wide">
              donate
              <span className="text-[#00E676] text-8xl">hut</span>
            </span>
          </div>
        </div>
        <div className="px-2 py-2">
          <div className="hover:block"></div>
          <Image
            alt="home"
            className="rounded-full"
            src="/help.svg"
            height="500px"
            width="500px"
          />
        </div>
      </div>
    </>
  );
};

export default index;
