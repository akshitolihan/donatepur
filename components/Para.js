import React from "react";

const Para = (props) => {
  return (
    <>
      <p className="flex justify-center text-justify text-base font-normal p-2 py-6 md:px-4 m-2 md:my-4 text-[#2F4858]">
        {props.text}
      </p>
    </>
  );
};

export default Para;
