import React from "react";
import Image from "next/image";
const Carousel = (props) => {
  return (
    <>
      <section className="w-auto grid justify-center md:flex md:justify-evenly pt-8 md:p-0 h-[px] m-4 shadow-even rounded-lg">
        <div className="grid justify-center md:block">
          <h1 className="text-4xl p-2 md:text-6xl font-bold md:mt-20 md:max-w-2xl w-56 md:w-auto text-[#6C63FF]">
            {props.heading}
          </h1>
          <h1 className="text-xl p-2 md:text-3xl font-semibold text-[#454655] md:max-w-2xl w-56 md:w-auto">
            {props.desc} 
          </h1>
        </div>
        <div className="md:pt-10">
          <Image
            alt="home"
            className="rounded-3xl"
            src={props.image}
            height="350px"
            width="500px"
            layout="intrinsic"
          />
        </div>
      </section>
    </>
  );
};

export default Carousel;
