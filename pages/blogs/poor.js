import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Date from "../../components/Date";
import Author from "../../components/Author";
import MainHead from "../../components/MainHead";
import Para from "../../components/Para";
import ParaHead from "../../components/ParaHead";
import Images from "../../components/Image";
import End from "../../components/End";
const poor = () => {
  return (
    <>
      <Head>
        <title>Why is the donation needed?</title>
      </Head>

      <Navbar Color="#448AFF" bColor="#ffffff" />
      <section className="flex justify-center flex-wrap md:flex-nowrap md:bg-[#ffffff] ">
        <section className="w-auto flex justify-center bg-white rounded-3xl shadow-even my-10">
          <section className="m-0 md:m-0 rounded-3xl text-black lg:w-[900px] ">
            <section className="p-2 pt-4 md:px-14">
              <section className="flex justify-between ">
                <Date date="10 Nov 2022" />
                <Author author="by Akshit Kumar" />
              </section>
              <hr />
              <MainHead text="Why there is a need of donation?" />
              <Images alt="Test" image="/help.svg" />
              <ParaHead
                head="Need for Donation"
                para="There are many reasons why people might need donations. Someone might need donations to help with a medical emergency, for example. Or someone might need donations to help with a specific cause, such as a charity that helps children in need."
              />
              <Para text="There are many reasons why people might need donations. Someone might need donations to help with a medical emergency, for example. Or someone might need donations to help with a specific cause, such as a charity that helps children in need." />
              <ParaHead
                head="Need for Donation"
                para="There are many reasons why people might need donations. Someone might need donations to help with a medical emergency, for example. Or someone might need donations to help with a specific cause, such as a charity that helps children in need."
              />
              <ParaHead
                head="Need for Donation"
                para="There are many reasons why people might need donations. Someone might need donations to help with a medical emergency, for example. Or someone might need donations to help with a specific cause, such as a charity that helps children in need."
              />
              <End />
            </section>
          </section>
        </section>
      </section>
      <Footer/>
    </>
  );
};

export default poor;
