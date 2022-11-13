import React from "react";
import extra from "../styles/Extra.module.css";

const End = () => {
  return (
    <>
   <section>
      <h2
        id={extra.caveat}
        className="flex justify-center text-lg font-semibold text-[#2F4858] my-6"
        >
        That&lsquo;s all the folks!
      </h2>
        <hr/>
   </section>
    </>
  );
};

export default End;
