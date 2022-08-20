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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        id={extra.edu}
        className="justify-between flex md:justify-between w-full mx-auto md:flex-row md:  bg-[#fff] md:z-[1] shadow-[#EEEEEE]"
      >
        <button type="button" className="md:hidden">
          <CgMenuLeftAlt className="md:hidden text-4xl" />
        </button>

        <Link href="/" passHref>
          <div
            id={extra.edu}
            className="flex justify-center mt-2 cursor-pointer"
          >
            <span className="text-4xl lin font-bold p-2 tracking-wide">
              donate
              <span className="text-[#00E676] text-4xl py-[-20px]">hut</span>
            </span>
          </div>
        </Link>
        <div className="hidden md:flex text-lg font-[600] tracking-wide px-2 pt-2">
          <span className="p-4">
            <Link href="/">
              <a className={router.pathname == "/" ? "active" : ""}>Home</a>
            </Link>
          </span>
          <span className="p-4">
            <Link href="/donate">
              <a className={router.pathname == "/donate" ? "active" : ""}>
                Donate
              </a>
            </Link>
          </span>
          <span className="p-4">
            <Link href="/inform">
              <a className={router.pathname == "/inform" ? "active" : ""}>
                Inform
              </a>
            </Link>
          </span>
          <span className="p-4">
            <Link href="/blogs">
              <a className={router.pathname == "/blogs" ? "active" : ""}>
                Blog
              </a>
            </Link>
          </span>
          <span className="p-4">
            <Link href="/about">
              <a className={router.pathname == "/about" ? "active" : ""}>
                About
              </a>
            </Link>
          </span>
        </div>
        <div className="flex p-4">
          <button className="py-1 px-2">
            <BiSearchAlt className="text-2xl text-[#00E676]" />
          </button>

          {/* <h1 className="px-2 py-1 font-semibold">Akshit Kumar</h1> */}
          {/* <button type="button" className="md:hidden text-2xl"> <CgMenuLeftAlt/> </button> */}
          <div className="px-2">
            <div className="hover:block">
            </div>
            <Image
              alt="home"
              className="rounded-full"
              src="/akshit.png"
              height="32px"
              width="32px"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
