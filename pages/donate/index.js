import React from "react";
import Head from "next/head";
import Image from "next/dist/client/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import extra from "../../styles/Extra.module.css";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

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
          <h1 className="text-4xl font-bold flex justify-center p-2">
            Start with the donation?
          </h1>
        </section>
        <section className="flex justify-center">
          <section className="grid md:grid-cols-3 justify-center bg-[#ffffff] p-2 w-full">
            <span className="flex justify-center">
              <h1 className="bg-[#FF8E6B] text-white p-2 cursor-pointer m-4 rounded-lg shadow-lg w-40 font-semibold text-center">
                {" "}
                Donate Food
              </h1>
            </span>
            <span className="flex justify-center">
              <h1 className="bg-[#FFC655] text-white p-2 cursor-pointer m-4 rounded-lg shadow-lg w-40 font-semibold text-center">
                {" "}
                Donate Clothes
              </h1>
            </span>
            <span className="flex justify-center">
              <h1 className="bg-[#FF589B] text-white p-2 cursor-pointer m-4 rounded-lg shadow-lg w-40 font-semibold text-center">
                {" "}
                Donate Food
              </h1>
            </span>
            <span className="flex justify-center">
              <h1 className="bg-[#ffffff] p-2 cursor-pointer m-4 rounded-lg shadow-lg w-40 font-semibold text-center">
                {" "}
                Donate Money
              </h1>
            </span>
            <span className="flex justify-center">
              <h1 className="bg-[#ffffff] p-2 cursor-pointer m-4 rounded-lg shadow-lg w-40 font-semibold text-center">
                {" "}
                Donate Education
              </h1>
            </span>
            <span className="flex justify-center">
              <h1 className="bg-[#ffffff] p-2 cursor-pointer m-4 rounded-lg shadow-lg w-40 font-semibold text-center">
                {" "}
                Donate Blood
              </h1>
            </span>

            <span className="flex justify-center">
              <h1 className="bg-[#FF8E6B] text-white p-2 cursor-pointer m-4 rounded-lg shadow-lg w-40 font-semibold text-center">
                {" "}
                Donate Organs
              </h1>
            </span>
            <span className="flex justify-center">
              <h1 className="bg-[#FFC655] text-white p-2 cursor-pointer m-4 rounded-lg shadow-lg w-40 font-semibold text-center">
                {" "}
                Donate Shelter
              </h1>
            </span>
            <span className="flex justify-center">
              <h1 className="bg-[#FF589B] text-white  p-2 cursor-pointer m-4 rounded-lg shadow-lg w-40 font-semibold text-center">
                {" "}
                Donate Shelter
              </h1>
            </span>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default donate;
