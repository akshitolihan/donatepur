import React from "react";
import Image from "next/image";
const poor = () => {
  return (
    <>
      <section
      style={{
        backgroundImage:`url("../blog-bg.jpg")`,
        width:"100%",
        height:"100%",
      }}
        className="flex justify-center flex-wrap md:flex-nowrap md:bg-[#ffffff]"
      >
        <section className="w-auto flex justify-center bg-white rounded-xl shadow-even my-10 border-[3px] border-[#6C63FF]">
          <section className="m-0 md:m-0 rounded-3xl text-black lg:w-[900px] ">
            <section className="p-2 pt-4 md:px-14">
              <h1 className="text-3xl font-bold text-center">
                Poverty in India is a Big Problem
              </h1>
              <div className="w-auto flex justify-center py-8">
                <Image
                  className="shadow-even rounded-md w-auto"
                  alt="childern"
                  src="/poor-childern.jpg"
                  height="375px"
                  width="850px"
                />
              </div>
              <div className="flex justify-between">
                <h1 className="text-base font-semibold text-[#454655]">
                  12 Oct 2022
                </h1>
                <h1 className="text-base font-semibold text-[#6C63FF]">
                  By Akshit Kumar
                </h1>
              </div>
              <p className="text-justify py-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                maxime laboriosam aliquid impedit totam, laudantium, quod
                blanditiis vero perspiciatis odit explicabo, eos eligendi sequi
                quae consequuntur hic atque nemo rem dolorum animi? Sed maxime
                quod, aut est labore consequuntur eius excepturi, animi sit
                aperiam nobis rem. Voluptas quidem repudiandae fuga voluptatibus
                veniam saepe, amet sint nemo reiciendis odio architecto. At.
              </p>
            </section>
          </section>
        </section>
      </section>
      
    </>
  );
};

export default poor;
