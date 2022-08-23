import React, { useState } from "react";
import Head from "next/head";
import extra from "../styles/Extra.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { CgMenuLeftAlt } from "react-icons/cg";
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
        <div className="block shadow-lg">
      <nav
        id={extra.edu}
        className="justify-between shadow-sm pb-4 md:justify-between w-full mx-auto md:flex-row md:fixed bg-[#fff] md:z-[1] shadow-[#EEEEEE]"
      >
        <div className={`hidden w-full md:flex justify-between pt-4 -mb-4`}>
          <Link href="/" passHref>
            <div
              id={extra.edu}
              className="flex justify-center mt-2 cursor-pointer"
            >
              <span className="text-4xl font-bold p-2 tracking-wide">
                donate
                <span className="text-[#00E676] text-4xl py-[-20px]">hut</span>
              </span>
            </div>
          </Link>
          <div className="hidden md:flex text-lg font-[600] tracking-wide -2 pt-6 justify-evenly">
            <span className="px-4 -mb-4">
              <Link href="/">
                <a
                  className={`${router.pathname == "/" ? "active" : ""} px-2 shadow-aksh`}
                >
                  Home
                </a>
              </Link>
            </span>
            <span className="px-4">
              <Link href="/donate">
                <a
                  className={`${router.pathname == "/donate" ? "active" : ""} px-2 shadow-aksh`}
                >
                  Donate
                </a>
              </Link>
            </span>
            <span className="px-4">
              <Link href="/inform">
                <a
                  className={`${router.pathname == "/inform" ? "active" : ""} px-2 shadow-aksh`}
                >
                  Inform
                </a>
              </Link>
            </span>
            <span className="px-4">
              <Link href="/blogs">
                <a
                  className={`${router.pathname == "/blogs" ? "active" : ""} px-2 shadow-aksh`}
                >
                  Blog
                </a>
              </Link>
            </span>
            <span className="px-4">
              <Link href="/about">
                <a
                  className={`${router.pathname == "/about" ? "active" : ""} px-2 shadow-aksh`}
                >
                  About
                </a>
              </Link>
            </span>
          </div>
          <div className="flex p-4">
            <button className="py-1 px-2">
              <BiSearchAlt className="text-2xl text-[#00E676]" />
            </button>
            <div className="px-2">
              <div className="hover:block"></div>
              <Image
                alt="home"
                className="rounded-full"
                src="/akshit.png"
                height="32px"
                width="32px"
              />
            </div>
          </div>
        </div>
        <div className="md:hidden w-full">
          <div className="flex justify-between">
            <button
              type="button"
              className="text-[#000] "
              onClick={handleClick}
            >
              <CgMenuLeftAlt className="text-4xl" />
            </button>

            <Link href="/" passHref>
              <div
                id={extra.edu}
                className="flex justify-center cursor-pointer"
              >
                <span className="text-4xl px-4 font-bold tracking-wide">
                  donate
                  <span className="text-[#00E676] text-4xl ">hut</span>
                </span>
              </div>
            </Link>
            <div className="flex px-4">
              <button className="py-1 px-2">
                <BiSearchAlt className="text-2xl text-[#00E676]" />
              </button>
              <div className="px-2 py-2">
                <div className="hover:block"></div>
                <Image
                  alt="home"
                  className="rounded-full"
                  src="/akshit.png"
                  height="32px"
                  width="32px"
                />
              </div>
            </div>
          </div>
          <div className={`${active ? "" : "hidden"}   w-full`}>
            <div className="w-full flex jusitfy-center flex-col">
              <Link href="/">
                <a className="w-auto px-3 py-2 rounded text ">Home</a>
              </Link>
              <Link href="/donate">
                <a className="w-auto px-3 py-2 rounded text">Donate</a>
              </Link>
              <Link href="/inform">
                <a className="w-auto px-3 py-2 rounded text">Inform</a>
              </Link>
              <Link href="/blogs">
                <a className="w-auto px-3 py-2 rounded text">Blog</a>
              </Link>
              <Link href="/about">
                <a className="w-auto px-3 py-2 rounded text">About</a>
              </Link>
            </div>
          </div>
        </div>
      {/* <hr className="h-2 w-full mt-2" /> */}
      </nav>
      </div>
    </>
  );
};

export default Navbar;
