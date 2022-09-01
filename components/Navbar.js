import React, { useState } from "react";
import Head from "next/head";
import extra from "../styles/Extra.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdEmojiPeople } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { Transition } from "@headlessui/react";

const Navbar = (props) => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="shadow-lg pb-20 md:pb-16">
        <nav
          id={extra.edu}
          className="justify-between rounded-b-xl md:justify-between pb-4 w-full mx-auto flex-row fixed bg-[#fff] z-[1] "
        >
          <div className={`hidden w-full md:flex justify-between pt-4 -mb-4`}>
            <div className="px-2">
              <Link href="/" passHref>
                <div className="flex">
                  <h1 className="m-2 flex justify-center text-4xl font-[600]  tracking-wider mt-2 cursor-pointer text-[#6C63FF]">
                    donatepur
                  </h1>
                </div>
              </Link>
            </div>
            <span className="hidden md:flex text-lg text-[#454655] font-[600] pt-6 justify-evenly">
              <span className="px-4 -mb-4">
                <Link href="/">
                  <a
                    className={`${router.pathname == "/" ? "active" : ""} px-2`}
                  >
                    Home
                  </a>
                </Link>
              </span>
              <span className="px-4">
                <Link href="/donate">
                  <a
                    className={`${
                      router.pathname == "/donate" ? "active" : ""
                    } px-2`}
                  >
                    Donate
                  </a>
                </Link>
              </span>
              <span className="px-4">
                <Link href="/inform">
                  <a
                    className={`${
                      router.pathname == "/inform" ? "active" : ""
                    } px-2`}
                  >
                    Inform
                  </a>
                </Link>
              </span>
              <span className="px-4">
                <Link href="/blogs">
                  <a
                    className={`${
                      router.pathname == "/blogs" ? "active" : ""
                    } px-2`}
                  >
                    Blog
                  </a>
                </Link>
              </span>
              <span className="px-4">
                <Link href="/about">
                  <a
                    className={`${
                      router.pathname == "/about" ? "active" : ""
                    } px-2`}
                  >
                    About
                  </a>
                </Link>
              </span>
            </span>
            <div className="flex p-4">
              <button className="bg-[#ffffff] px-2 py-1 text-[#454655] rounded-3xl mx-1 text-md font-bold">
                Log in
              </button>
              <button className="bg-[#6C63FF] px-2 py-1 text-white rounded-3xl mx-1 text-md font-semibold">
                Sign Up
              </button>
            </div>
          </div>
          <div className="md:hidden w-full justify-evenly">
            <div className="flex justify-around">
              <button
                type="button"
                className="text-[#454655] "
                onClick={handleClick}
              >
                <CgMenuLeftAlt className="text-3xl" />
              </button>
              <div className="px-2">
              <Link href="/" passHref>
                <div className="flex">
                  <h1 className="m-2 flex justify-center text-4xl font-[600]  tracking-wider mt-2 cursor-pointer text-[#6C63FF]">
                    donatepur
                  </h1>
                </div>
              </Link>
              </div>
              <div className="flex pt-4">
                <MdEmojiPeople className="text-3xl text-[#454655]" />
              </div>
            </div>
            <div className={`${active ? "" : "hidden"}   w-full `}>
              <div className="w-full flex jusitfy-around flex-col text-[#454655] px-8">
                <Link href="/">
                  <a className="w-auto py-2 rounded text-md font-bold">Home</a>
                </Link>
                <Link href="/donate">
                  <a className="w-auto py-2 rounded text-md font-bold">
                    Donate
                  </a>
                </Link>
                <Link href="/inform">
                  <a className="w-auto py-2 rounded text-md font-bold">
                    Inform
                  </a>
                </Link>
                <Link href="/blogs">
                  <a className="w-auto py-2 rounded text-md font-bold">Blog</a>
                </Link>
                <Link href="/about">
                  <a className="w-auto py-2 rounded text-md font-bold">About</a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
