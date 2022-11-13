import React from "react";
import Link from "next/link";
import Image from "next/image";
const BCard2 = (props) => {
  return (
    <>
    <section className="flex justify-center py-4 m-4">
    <Link href={props.link} >
      <section className="grid max-w-[350px] justify-center shadow-even hover:shadow-lg rounded-lg  cursor-pointer">
        <div className="w-auto flex justify-center p-2">
          <Image
            className="shadow-even rounded- w-auto "
            alt={props.alt}
            src={props.image}
            height={props.h}
            width={props.w}
          />
        </div>
        <div className="p-4">
          <h1 className="text-xl font-bold my-2">{props.heading}</h1>
          <p className="text-justify my-2">{props.desc}</p>
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
      </Link>
    </section>
      </>
  );
};

export default BCard2;
