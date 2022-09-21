import React from "react";
import Image from "next/image";
const BCard2 = (props) => {
  return (
    <section className="flex justify-center py-4 m-4">
      <section className="grid max-w-[300px] justify-center">
        <div className="w-auto  flex justify-center">
          <Image
            className="shadow-even rounded-2xl w-auto "
            alt={props.alt}
            src={props.image}
            height={props.h}
            width={props.w}
          />
        </div>
        <div className="rounded-2xl shadow-even p-4 mt-2 bg-white">
          <h1 className="text-xl font-bold">{props.heading}</h1>
          <p className="text-justify">{props.desc}</p>
          <div>
            <h1 className="pt-4 text-base font-semibold text-[#454655]">
              {props.date}
            </h1>
            <h1 className="pt-2 text-base font-semibold text-[#6C63FF]">
              {props.author}
            </h1>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BCard2;
