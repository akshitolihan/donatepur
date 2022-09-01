import React from 'react'
import Image from "next/image";

const Card2 = () => {
  return (
    <>
    <section className="grid md:flex justify-center mt-10 p-2">
    <section>
        <div className="flex justify-center md:hidden">
          <Image
            alt="home"
            className=""
            src="/child.svg"
            height="256px"
            width="256px"
            layout="intrinsic"
          />
        </div>
        </section>
        <section className="grid md:flex-shrink p-2">
            <h1 className="text-xl font-bold">Heading</h1>
            <p className="text-base font-normal max-w-xl text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus laborum eos, porro maxime eligendi non illum quaerat aperiam placeat sapiente. Vero hic soluta iste provident eaque ad quidem ipsa nostrum.</p>
        </section>
        <section>
        <div className="hidden md:flex justify-center">
          <Image
            alt="home"
            className=""
            src="/child.svg"
            height="256px"
            width="256px"
            layout="intrinsic"
          />
        </div>
        </section>
    </section>
    </>
  )
}

export default Card2;