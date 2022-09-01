import React from "react";
import Image from "next/image";
const Carousel = (props) => {
  return (
    <>
      <section className="w-auto grid justify-center md:flex md:justify-evenly pt-8 md:p-0 h-[650px]">
        <div className="grid justify-center md:block">
          <h1 className="text-4xl p-2 md:text-6xl font-bold md:mt-40 md:max-w-2xl w-56 md:w-auto text-[#6C63FF]">
            {props.heading}
          </h1>
          <h1 className="text-xl p-2 md:text-3xl font-semibold text-[#454655] md:max-w-2xl w-56 md:w-auto">
            {props.desc}
          </h1>
        </div>
        <div className="w-96 md:pt-20">
          <Image
            alt="home"
            className="rounded-full"
            src="/child.svg"
            height="550px"
            width="500px"
            layout="intrinsic"
          />
        </div>
      </section>
    </>
  );
};

export default Carousel;
