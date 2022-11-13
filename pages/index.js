import React, { useState } from "react";
import Head from "next/head";
import Image from "next/dist/client/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import extra from "../styles/Extra.module.css";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import Footer from "../components/Footer";
import Donate from "../components/Donate";
import Card1 from "../components/Card1";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BiCopy } from "react-icons/bi";
import ClipboardCopy from "../components/Copy";
const Index = () => {
  return (
    <>
      <Head>
        <title>Demo</title>
      </Head>
      <Navbar />

      <Carousel
        image="/donate.svg"
        heading="I'm Donatepur"
        desc="A helping place!🤝"
      />
      <section className="flex justify-center py-10 m-4 rounded-lg shadow-even">
        <section className="max-w-4xl bg-[#ffffff] rounded-lg">
          <div className="block justify-between">
            <h1 className="text-[#6C63FF] font-bold text-5xl p-2 text-center">
              What I do?
            </h1>
            <p className="text-[#454655] text-5xl font-semibold p-2 text-center">
              I help people in need!
            </p>
          </div>
          <div className="max-w-full p-2 ">
            <Image
              className="rounded-lg"
              alt="donation"
              src="/donation.jpg"
              objectFit="cover"
              objectPosition="center"
              quality={100}
              height={500}
              width={900}
            />
          </div>
        </section>
      </section>

      <section className="flex justify-center py-10 m-4 rounded-lg shadow-even">
        <section className="max-w-4xl bg-[#ffffff] rounded-lg">
          <div className="block justify-center">
            <h1 className="text-[#6C63FF] font-bold text-5xl p-2 text-center">
              What you can do?
            </h1>
          </div>
          <Donate link="/donate/food" heading="Donate Food" src="/food-donation.jpg" />
          <Donate link="/donate/clothes" heading="Donate Clothes" src="/clothes-donation.jpg" />
          <Donate link="/donate/money" heading="Donate Money" src="/money-donation.jpg" />
          <Donate link="/donate/blood" heading="Donate Blood" src="/blood-donation.jpg" />
          <Donate
            link="/donate/education" heading="Donate for Education"
            src="/education-donation.jpg"
          />
          <Donate link="/donate" heading="Find out more..." src="/more-donation.jpg" />
        </section>
      </section>

      <section className=" justify-center m-4 shadow-even rounded-lg">
        <h1 className="text-[#6C63FF] font-bold text-5xl p-4 text-center">
          What else can you do?
        </h1>
  
          <section className="">
            <Card1 heading="dsjg" link="www.donatepur.com" />
          
          </section>

      </section>

      <section className="flex justify-center mt-10 bg-[#6C63FF] pb-40  m-4 rounded-lg shadow-even">
        <section className="grid md:flex max-w-4xl bg-[#ffffff] p-4 rounded-lg shadow-even relative top-20">
          <section className="p-4 bg-[#ffffff] rounded-lg rounded-r-none shadow-even">
            <h1 className="font-bold text-5xl py-4">Become a volunteer!</h1>
            <p className="text-justify text-lg">
              Give your time helping people!
            </p>
            <Link href="/auth" passHref>
            <a href="">
            <button className="bg-[#6C63FF] text-white rounded-3xl text-md font-semibold px-2 py-1 mt-4">
              Register
            </button>
            </a>
          </Link>
          </section>
          <section className="p-4 bg-[#000000] text-white rounded-lg rounded-l-none">
            <h1 className="font-bold text-5xl py-4">Become a Donater!</h1>
            <p className="text-justify text-lg">
              Donate whatever you can donate!
            </p>
            <Link href="/donate" passHref>
            <a href="">
            <button className="bg-[#6C63FF] text-white rounded-3xl text-md font-semibold px-2 py-1 mt-4">
              Donate
            </button>
            </a>
          </Link>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Index;

{
  /* <div className="flex bg-slate-300 max-w-md justify-between">
        <pre>{codeSnippet}</pre>
        <CopyToClipboard text={codeSnippet} onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}>
          <span>{isCopied ? "Copied!" : <BiCopy />}</span>
        </CopyToClipboard>
      </div>
      <h1>vlkdfmklhl</h1>
      <div className="flex bg-slate-300 max-w-md justify-between">
        <pre>{}</pre>
        <CopyToClipboard text={webSite} onCopy={onCopyText}>
          <span>{isCopied ? "Copied!" : <BiCopy />}</span>
        </CopyToClipboard>
      </div> */
}
