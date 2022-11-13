import React from "react";
import extra from "../styles/Extra.module.css";
const Author = (props) => {
  return (
    <>
      <section
      id={extra.caveat}
        className="flex justify-start text-lg font-semibold text-[#2F4858]"
      >
        {props.author}
      </section>
    </>
  );
};

export default Author;
