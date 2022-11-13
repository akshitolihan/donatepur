import React from "react";
import Image from "next/image";

const Images = (props) => {
  return (
    <>
      <div className="md:pt-10 flex justify-center">
        <Image
          alt={props.alt}
          className="rounded-3xl"
          src={props.image}
          height="350px"
          width="500px"
        //   layout="intrinsic"
        />
      </div>
    </>
  );
};

export default Images;
