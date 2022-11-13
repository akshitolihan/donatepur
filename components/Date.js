import React from "react";
import extra from "../styles/Extra.module.css";
const Date = (props) => {
  return (
    <>
      <section
      id={extra.caveat}
        className="flex justify-start text-lg font-semibold text-[#2F4858]"
      >
        {props.date}
      </section>
    </>
  );
};

export default Date;
