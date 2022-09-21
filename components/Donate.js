import React from "react";
import Image from "next/image";
const Donate = (props) => {
  return (
    <>
      <section className="max-w-4xl h-auto grid md:flex rounded-lg shadow-even m-4 my-12 justify-between">
        <section className="p-4 mt-4">
          <h1 className="font-bold text-5xl">{props.heading}</h1>
          <button className="bg-[#6C63FF] text-white rounded-3xl text-md font-semibold px-2 py-1 mt-6">
            Start Here
          </button>
        </section>
        <section className="max-w-sm">
          <div className="flex justify-center">
            <Image
              className="rounded-lg"
              alt="donation"
              src={props.src}
              objectFit="cover"
              objectPosition="center"
              quality={100}
              height={400}
              width={750}
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default Donate;
