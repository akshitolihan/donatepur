import React from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/dist/client/image";
const pickup = (props) => {
  return (
    <>
      <Head>
        <title>Pickup Details</title>
      </Head>
      <Navbar />
      <section className="flex justify-center shadow-even rounded-lg m-4">
        <section className="flex">
          <section className="bg-[#6C63FF] rounded-lg m-4">
            <h1 className="text-4xl font-bold flex justify-center relative top-16 text-[#ffffff]">
              Reaching You!
            </h1>
            <h1 className="text- font-bold flex justify-center relative top-20 m-4 text-[#ffffff]">
              We will pickup your donation!
            </h1>
            <div className="mt-4">
              <Image
                alt="home"
                className="rounded-3xl"
                src="/pickup2.svg"
                height="600px"
                width="400px"
                layout="intrinsic"
              />
            </div>
          </section>
          <section className="m-4">
            <h1 className="text-4xl font-bold flex justify-center">
              Enter Your Details
            </h1>
            <section className="mt-8">
              <section className="flex">
                <section className="grid">
                  <label htmlFor="name" className="m-2 p-2 text-base font-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="m-2 p-2 rounded-full h-10 outline-0 border-2 w-72"
                  />
                </section>
                <section className="grid justify-center">
                  <label
                    htmlFor="phone"
                    className="m-2 p-2 text-base font-bold"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Your Mobile"
                    className="m-2 p-2 rounded-full h-10 outline-0 border-2 w-72"
                  />
                </section>
              </section>
              <section className="grid">
                <label htmlFor="name" className="m-2 p-2 text-base font-bold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="m-2 p-2 rounded-full h-10 outline-0 border-2 w-72"
                />
              </section>
            </section>

            <section className="mt-8">
              <h1 className="m-2 p-2 text-base font-bold">Pickup Address</h1>
              <section className="flex">
                <section className="grid">
                  <input
                    type="text"
                    placeholder="Address Line 1"
                    className="m-2 my-4 p-2 rounded-full h-10 outline-0 border-2 w-72"
                  />
                </section>
                <section className="grid justify-center">
                  <input
                    type="text"
                    placeholder="Address Line 1"
                    className="m-2 my-4 p-2 rounded-full h-10 outline-0 border-2 w-72"
                  />
                </section>
              </section>
              <section className="flex">
                <section className="grid">
                  <input
                    type="text"
                    placeholder="District"
                    className="m-2 my-4 p-2 rounded-full h-10 outline-0 border-2 w-72"
                  />
                </section>
                <section className="grid">
                  <input
                    type="number"
                    placeholder="Pincode"
                    className="m-2 my-4 p-2 rounded-full h-10 outline-0 border-2 w-72"
                  />
                </section>
              </section>
            </section>
            <button className="bg-[#6C63FF] text-white m-2 my-4 p-2 rounded-full px-4 font-bold">
              Submit
            </button>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default pickup;
