import React, { useState } from "react";
import Head from "next/head";
import extra from "../styles/Extra.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaSearch, FaWineBottle, FaLocationArrow } from "react-icons/fa";
import { Transition } from "@headlessui/react";
const Navbar = (props) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        id={extra.edu}
        className="hidden md:flex justify-between w-full mx-auto md:flex-row md:  bg-[#fff] md:z-[1] shadow-[#EEEEEE]"
      >
        <Link href="/" passHref>
          <div id={extra.edu} className="mt-2 cursor-pointer">
            <span className="text-4xl lin font-bold p-2 tracking-wide">
              donate
              <span className="text-[#00E676] text-4xl py-[-20px]">
                hut
              </span>
            </span>
          </div>
        </Link>
        <div className="flex text-lg font-[600] tracking-wide px-2 pt-2">
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
          <div className="p-1">
            <input
              className="outline-0 w-28 rounded-3xl border-2 px-6 border-[#00E676] text-[#00E676]"
              type="text"
            />
            <FaSearch className="mt-[-24px] px-1 text-xl text-[#00E676]" />
          </div>
          <h1 className="px-2 py-1 font-semibold">Akshit Kumar</h1>
          <div className="px-2">
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
