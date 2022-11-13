import React from "react";

const ParaHead = (props) => {
  return (
    <>
      <section className="grid justify-center text-justify text-base font-normal p-2 md:px-4 m-2 md:my-4 text-[#2F4858]">
        <section className="flex justify-start">
          <div className="h-8 w-2 bg-[#6C63FF] rounded-xl mx-2 my-2">
            
          </div>
        <h1 className="flex justify-start font-bold text-xl my-2">{props.head}</h1>
        </section>
        <p className="my-2">{props.para}</p>
      </section>
    </>
  );
};

export default ParaHead;
