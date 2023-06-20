import React from "react";
import Head from "next/head";
import Image from "next/dist/client/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import extra from "../styles/Extra.module.css";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <main className="shadow-top rounded-lg mt-10">
        <article className="md:flex md:justify-around md:text-start text-center">
          <section className="">
            <Link href="/" passHref>
              <button
                // id={extra.edu}
                className="text-4xl font-bold text-[#000000] tracking-wider pt-4"
              >
                donatepur
              </button>
            </Link>
            <h1 className="font-semibold md:text-start py-2 text-[#454655]">
              A helping Hand!
            </h1>
            <h1 className="hidden text-lg font-semibold md:text-start py-2 tracking-wider text-[#000000]">
              Thanks for visiting!
            </h1>
          </section>
          <section className="text-center md:text-start">
            <h1 className="text-2xl font-bold pt-4">Donate</h1>
            <h1 className="font-semibold py-2 hover:text-[#6C63FF]">
              Food
            </h1>
            <h1 className="font-semibold py-2 hover:text-[#6C63FF]">
              Clothes
            </h1>
            <h1 className="font-semibold py-2 hover:text-[#6C63FF]">
              Shelter
            </h1>
          </section>
          <section className="">
            <div>
              <h1 className="text-2xl font-bold text-center p-4">We Social</h1>
              <section className="flex justify-center md:flex md:justify-center text-[#000000] ">
                <a
                  className="p-3 text-xl hover:text-[#6C63FF]"
                  href="https://www.youtube.com/channel/UCR3Py_Ko1w8Y8tK8rg5wwqA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
                <a
                  className="p-3 text-xl hover:text-[#6C63FF]"
                  href="https://twitter.com/akshitvillager"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className="p-3 text-xl hover:text-[#6C63FF]"
                  href="https://www.instagram.com/akshitvillager/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  className="p-3 text-xl hover:text-[#6C63FF]"
                  href="https://www.facebook.com/akshitvillager"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </section>
            </div>
          </section>
          <section className="">
            <div className="grid">
              <section className="grid md:justify-between justify-center">
                <h1 className="text-2xl font-bold tracking-wide p-4 text-center md:text-start">
                  Share your email !
                </h1>
                <div className="grid md:flex">
                  <input
                    type="email"
                    placeholder="Your Email Here"
                    className="w-auto rounded-3xl text-center h-10 p-4 outline-0 text-[#ffffff] bg-[#000] mx-4"
                  />
                  <span className="flex justify-center p-2 cursor-pointer">
                    <BsFillArrowRightCircleFill className="text-4xl mx-4 text-center text-[#000000]" />
                  </span>
                </div>
              </section>
            </div>
          </section>
        </article>
        <hr />
        <h1 className="text-center text-lg font-semibold p-4 tracking-wider text-[#000000]">
          Made with ❤️ by Akshit!
        </h1>
      </main>
    </>
  );
};

export default Footer;
