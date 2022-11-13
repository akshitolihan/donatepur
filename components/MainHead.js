import React from "react";

const MainHead = (props) => {
  return (
    <>
      <h1 className="flex justify-center text-4xl font-bold text-[#2F4858] m-2 md:my-4">
        {props.text}
      </h1>
    </>
  );
};

export default MainHead;
