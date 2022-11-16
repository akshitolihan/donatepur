import React from "react";
import Link from "next/link";
const DButton = (props) => {
  return (
    <>
      <span className="flex justify-center">
        <Link href={props.link}>
          <a>
            <h1
            style={{backgroundColor:`${props.bg}`}}
              className={` text-white p-2 cursor-pointer m-4 rounded-lg shadow-lg w-44 font-semibold text-center`}
            >
              {props.text}
            </h1>
          </a>
        </Link>
      </span>
    </>
  );
};

export default DButton;
