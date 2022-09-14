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
      <section className="flex justify-around pt-6 bg-[#6C63FF]">
        <section>
          <h1 className="m-2 flex text-4xl font-[600] tracking-wider mt-2 text-[#fff]">
            Contact Us!
          </h1>
          <h1 className="mt-10 m-2 flex text-2xl font-[600] tracking-wider mt-2 text-[#fff]">
            Location
          </h1>
          <h1 className="m-2 flex text-sm tracking-wider mt-2 text-[#fff]">
            Chandigarh University, Mohali, Punjab
          </h1>
          <h1 className="m-2 flex text-sm tracking-wider mt-2 text-[#fff]">
            140413
          </h1>
          <div className="">
            <iframe
              className="rounded-2xl p-2"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.205166210258!2d76.57242631494712!3d30.768820681624558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140bd63e07%3A0x68591e334d17a988!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1663150519181!5m2!1sen!2sin"
              width="500"
              height="300"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        <section className="grid jusitfy text-center">
          <h1 className="m-2 flex justify-start p-4 text-2xl font-[600] tracking-wider mt-2 text-[#fff]">
            Send a message!
          </h1>
          <input
            type="name"
            placeholder="Name"
            className="max-w- h-10 m-4 w-80 rounded-3xl text-start p-2 outline-0 bg-[#ffffff] text-[#000]"
          />
          <input
            type="num"
            placeholder="Phone"
            className="max-w- h-10 m-4 w-80 rounded-3xl text-start p-2 outline-0 bg-[#ffffff] text-[#000]"
          />
          <input
            type="email"
            placeholder="Email"
            className="max-w- h-10 m-4 w-80 rounded-3xl text-start p-2 outline-0 bg-[#ffffff] text-[#000]"
          />
          <textarea
            placeholder="Your Message Here"
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="max-w-xs h-32 m-4 w-auto rounded-xl text-start p-2 outline-0 bg-[#ffffff] text-[#000]"
          ></textarea>
          <button className="max-w-xs h-9 m-4 w-16 rounded-full text-center outline-0 bg-[#ffffff] text-[#000]">
            Send
          </button>
        </section>
      </section>
      <section className="w-auto">
        <h1 className="m-4 p-2 text-4xl font-[600] tracking-wider text-[#000] text-center">
          Our Motive
        </h1>
        <span className="flex justify-center m-4">
        <p className="max-w-xl text-justify my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum
          quae tempore mollitia. Ipsam quae animi, exercitationem consequatur
          fugiat, neque dolores expedita minima dicta fuga harum a illo eligendi
          amet recusandae molestiae quaerat? Aliquid facere fugit, distinctio
          fuga repellendus voluptas tenetur. Quia molestias iste, ad vel
          dignissimos reiciendis voluptas numquam!
        </p></span>
      </section>
      <Footer />
    </>
  );
};

export default about;
