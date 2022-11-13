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

const about = () => {
  return (
    <>
      <Head>
        <title>Demo</title>
      </Head>
      <Navbar />
      <Carousel
        image="/dp-about.svg"
        heading="Know about us "
        desc="Let's Work Together ✊"
      />

      <h1 className="mt-20 my-10 text-4xl font-[600] tracking-wider text-[#454655] text-center">
        Interact more!
      </h1>
      <section className="flex justify-center mt-4">
        <section className="grid md:flex md:justify-between pt-6 bg-[#ffffff] max-w-6xl w-auto shadow-even ">
          <section className="p-2 md:mr-20">
            <h1 className="m-2 pt-4 flex text-2xl font-[600] tracking-wider text-[#454655]">
              Location
            </h1>
            <h1 className="mt-4 m-2 flex text-sm font-[600] text-[#454655]">
              Chandigarh University
            </h1>
            <h1 className="m-2 flex text-sm mt-2 text-[#454655]">
              NH-05, Ludhiana – Chandigarh State Highway
            </h1>
            <h1 className="m-2 flex text-sm mt-2 text-[#454655]">
              Mohali, Punjab - 140413
            </h1>
            <div className="w-auto pt-8">
              <iframe
                className="rounded-2xl p-2 md:w-[500px] md:h-[300px] w-auto"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.205166210258!2d76.57242631494712!3d30.768820681624558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140bd63e07%3A0x68591e334d17a988!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1663150519181!5m2!1sen!2sin"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
          <section className="grid jusitfy text-center rounded-lg md:ml-20">
            <h1 className="m-2 flex justify-start p-4 text-2xl font-[600] tracking-wider text-[#454655]">
              Send a message!
            </h1>
            <input
              type="name"
              placeholder="Name"
              className="placeholder-[#454655] h-10 m-4 w-80 rounded-3xl text-start p-2 outline-0 bg-[#EEEEEE] focus:bg-[#EEEEEE] text-[#454655] font-semibold"
            />
            <input
              type="num"
              placeholder="Phone"
              className="placeholder-[#454655] h-10 m-4 w-80 rounded-3xl text-start p-2 outline-0 bg-[#EEEEEE] focus:bg-[#EEEEEE] text-[#454655] font-semibold"
            />
            <input
              type="email"
              placeholder="Email"
              className="placeholder-[#454655] h-10 m-4 w-80 rounded-3xl text-start p-2 outline-0 bg-[#EEEEEE] focus:bg-[#EEEEEE] text-[#454655] font-semibold"
            />
            <textarea
              placeholder="Your Message Here"
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="placeholder-[#454655] max-w-xs h-32 m-4 w-auto rounded-xl text-start p-2 outline-0 bg-[#EEEEEE] focus:bg-[#EEEEEE] text-[#454655] font-semibold"
            ></textarea>
            <button className="max-w-xs h-9 m-4 w-16 rounded-full text-center outline-0 bg-[#EEEEEE] focus:bg-[#EEEEEE] text-[#454655] font-semibold">
              Send
            </button>
          </section>
        </section>
      </section>

      <Footer />
    </>
  );
};

export default about;
