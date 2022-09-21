import React from "react";
import Image from "next/image";
const Card1 = (props) => {
  return (
    <>
      <section className="md:flex rounded-lg shadow-even justify-center p-4 my-8">
        <section className="block justify-center p-2 mt-4">
          <h1 className="font-bold text-5xl">{props.heading}</h1>
          <div className="flex justify-center">
          <button className="bg-[#6C63FF] text-white rounded-3xl text-md font-semibold p-2 m-6">
            Copy Link
          </button></div>
        </section>
      </section>
    </>
  );
};

export default Card1;
