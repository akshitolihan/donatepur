import React from "react";
import Image from "next/image";
import ClipboardCopy from "./Copy";
import {
  BsWhatsapp,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
const Card1 = (props) => {
  return (
    <>
      <section className="rounded-lg shadow-even p-4 my-4">
        <section className="p-2">
          <section className="flex justify-evenly font-bold text-xl">
            <BsWhatsapp className="text-[#25D366] font-bold text-3xl"/>

            <BsFacebook className="text-[#1877F2] font-bold text-3xl"/>

            <BsInstagram className="text-[#E4405F] font-bold text-3xl"/>

            <BsLinkedin className="text-[#0A66C2] font-bold text-3xl"/>
          </section>
          <section className="flex justify-center my-8 ">
          <section className="shadow-even rounded-lg max-w-xl">
      
          <h1 className="flex justify-center text-[#454655] text-2xl font-bold bg-white rounded-3xl px-2 py-1 m-4 my-4"> 
          Share About Us
           </h1>
          <div className="flex justify-center mt-6">
          <h1 className="text-[#0A66C2] bg-white rounded-3xl text-base font-semibold px-2 py-1 m-4 my-4"> 
          www.donatepur.com/donate
           </h1>

            <h1 className="bg-[#0A66C2] text-white rounded-3xl text-base font-semibold px-2 py-1 m-4 my-4">
              <ClipboardCopy
                copyText={props.link}
              />
            </h1>
          </div>
        </section>
        </section>
        </section>
      </section>
    </>
  );
};

export default Card1;
