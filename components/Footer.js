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
      <main
        id={extra.edu}
        className="bg-[#454655] w-full h-auto shadow-aksh text-[#ffffff] "
      >
        <section className="grid md:flex justify-between">
          <div className="justify-start">
            <Link href="/" passHref>
              <h1 className="px-2 m-2 flex text-4xl font-[600]  tracking-wider mt-2 cursor-pointer text-[#6C63FF] md:text-start">
                donatepur
              </h1>
            </Link>
            <div className="flex justify-start">
              <h1 className="text-xl font-bold p-4 text-center md:text-">
                Donate Food
              </h1>
              <h1 className="text-xl font-bold p-4 text-center md:text-">
                Donate Clothes
              </h1>
              <h1 className="text-xl font-bold p-4 text-center md:text-">
                Donate Money
              </h1>
            </div>
          </div>
          <div className="bg-[#454655]">
            <h1 className="text-2xl font-bold tracking-wide p-4 text-center md:text-start">
              Share your email !
            </h1>
            <div className="flex justify-center">
              <input
                type="email"
                placeholder="Your Email Here "
                className="w-auto rounded-3xl text-center h-10 p-5 outline-0 text-black mx-4"
              />
              <button>
                <BsFillArrowRightCircleFill className="text-4xl -ml-12  text-[#454655]" />
              </button>
            </div>
          </div>
        </section>
        <div className="bg-[#454655] flex justify-between mt-20">
          <h1 className="p-4 text-xl font-semibold tracking-wider text-center">
            Thanks for visiting us!
          </h1>
          <section className="mt-[-60px]">
            <h1 className="text-xl font-bold p-4 text-center">Our Social</h1>

            <section className="flex justify-center md:flex md:justify-center text-[#ffffff] ">
              <a
                className="p-3 text-xl hover:text-[#000000]"
                href="https://www.youtube.com/channel/UCR3Py_Ko1w8Y8tK8rg5wwqA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                className="p-3 text-xl hover:text-[#000000]"
                href="https://twitter.com/akshitvillager"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                className="p-3 text-xl hover:text-[#000000]"
                href="https://www.instagram.com/akshitvillager/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                className="p-3 text-xl hover:text-[#000000]"
                href="https://www.facebook.com/akshitvillager"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </section>
          </section>
          <h1 className="p-4 text-xl font-semibold tracking-wider text-center">
            Made with
            <span className="text-red-500 text-2xl text-center">❤</span> by
            Akshit Kumar.
          </h1>
        </div>
        {/* <div className="grid md:flex md:justify-between">
          <h1 className="p-4 text-xl font-semibold tracking-wider text-center">
            Thanks for visiting us!
          </h1>
          <h1 className="p-4 text-xl font-semibold tracking-wider text-center">
            Made with{" "}
            <span className="text-red-500 text-2xl text-center">❤</span> by
            Akshit Kumar.
          </h1>
        </div> */}
      </main>
    </>
  );
};

export default Footer;
