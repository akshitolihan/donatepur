import React from 'react'
import Image from "next/image";

const Card = () => {
  return (
    <>
    <section className="grid md:flex justify-center mt-10 p-2">
        <section>
        <div className="flex justify-center z-0">
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
    </section>
    </>
  )
}

export default Card;