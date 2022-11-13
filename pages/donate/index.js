import React from "react";
import Head from "next/head";
import Image from "next/dist/client/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import extra from "../../styles/Extra.module.css";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import DButton from "../../components/DButton";
const donate = () => {
  return (
    <>
      <Head>
        <title>Demo</title>
      </Head>
      <Navbar />
      <Carousel
        image="/dp-donate.svg"
        heading="Donate"
        desc="Donate to those who need help 💰"
      />

      <section className="my-16">
        <section className="grid justify-center p-4">
          <h1 className="text-4xl text-[#454655] font-bold flex justify-center p-2">
            Start with the donation?
          </h1>
        </section>
        <section className="flex justify-center">
          <section className="grid md:grid-cols-3 justify-center bg-[#ffffff] p-2 w-full">
            <DButton bg="FF8E6B" text="Donate Food" link="/../donate/food" />
            <DButton bg="FFC655" text="Donate Clothes" link="/../donate/clothes" />
            <DButton bg="FF589B" text="Donate Money" link="/../donate/money" />
            <DButton bg="FF8E6B" text="Donate Blood" link="/../donate/blood" />
            <DButton bg="FFC655" text="Donate Education" link="/../donate/education" />
            <DButton bg="FF589B" text="Donate Shelter" link="/../donate/shelter"/>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default donate;
