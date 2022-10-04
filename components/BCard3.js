import React from "react";
import Image from "next/image";
const BCard3 = (props) => {
  return (
    <>
        <section className="flex justify-evenly m-4">
          <section className="flex justify-center shadow-even hover:shadow-lg rounded-sm max-w-[600px]">
            <div className="p-5 pb-4 mt-6">
              <Image
                className="rounded-sm"
                alt={props.alt}
                src={props.image}
                height={props.h}
                width={props.w}
              />
            </div>
            <div className="p-4 max-w-[450px]">
              <h1 className="text-xl font-bold">{props.heading}</h1>
              <p className="text-justify">{props.desc}</p>
              <div className="flex justify-between pt-4">
                <h1 className="text-base font-semibold text-[#454655]">
                  {props.date}
                </h1>
                <h1 className="text-base font-semibold text-[#6C63FF]">
                  {props.author}
                </h1>
              </div>
            </div>
          </section>
      </section>
    </>
  );
};

export default BCard3;
