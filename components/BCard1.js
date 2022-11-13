import React from "react";
import Link from "next/link";
import Image from "next/image";
const BCard1 = (props) => {
  return (
    <>
    <Link href={props.link} >
      <section className="grid md:flex justify-around shadow-even m-4 rounded-lg md:py-10 mt-4 cursor-pointer">
        <div className="grid justify-center md:block p-4">
          <h1 className="text-xl font-bold text-[#6C63FF]">
            Latest from us!
          </h1>
          <div className="flex justify-between">
            <h1 className="text-base font-semibold text-[#454655]">
              {props.date}
            </h1>
          </div>
          <h1 className="mt-4 md:mt-10 text-3xl w-auto font-bold text-[#6C63FF]">
            {props.heading}
          </h1>
          <p className="mt-4 font-semibold text-justify text-[#454655] max-w-lg">
            {props.desc}
          </p>
          <h1 className="mt-4 md:mt-10 text-base font-semibold text-[#6C63FF]">
            <span className="mt-4 md:mt-10 text-base w-auto font-bold text-[#454655]">
              By
            </span>
            {props.author}
          </h1>
        </div>
        <div className="w-auto max-w-lg">
          <Image
            className="shadow-even rounded-lg"
            alt="home"
            src={props.image}
            height={props.h}
            width={props.w}
            // layout="intrinsic"
          />
        </div>
      </section>
      </Link>
    </>
  );
};

export default BCard1;
