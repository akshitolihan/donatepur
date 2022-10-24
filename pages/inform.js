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
const inform = () => {
  return (
    <>
      <Head>
        <title>Demo</title>
      </Head>
      <Navbar />
      <Carousel
        image="/dp-inform.svg"
        heading="Inform us"
        desc="If you find any needy 💁"
      />

      <section>
        <section>
          <h1>Fill out the given form!</h1>
          <h1>What kind of help is needed?</h1>

          <select name="help" id="donate">
            <option value="food">Food</option>
            <option value="money">Money</option>
            <option value="clothes">Clothes</option>
            <option value="blood">Blood</option>
          </select>
          <section>
            <h1>Please add your info?</h1>
            <section>
              <input type="text" placeholder="Name" />
              <input type="number" placeholder="Phone" />
              <input type="text" placeholder="Address" />
            </section>
          </section>

          {/* Where the help is needed -- Getting Addrsss */}
          <section>
            <h1>Where this help is needed?</h1>
            <section>
              <input type="number" placeholder="Phone" />
              <input type="text" placeholder="Address" />
            </section>
          </section>
        </section>
      </section>

      <Footer />
    </>
  );
};

export default inform;
