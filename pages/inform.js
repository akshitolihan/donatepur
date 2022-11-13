import React, { useState } from "react";
import Head from "next/head";
import Image from "next/dist/client/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import extra from "../styles/Extra.module.css";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import Footer from "../components/Footer";
import { BsFillImageFill,BsFillCameraVideoFill } from "react-icons/bs";
const Inform = () => {
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const [video, setVideo] = useState(null);

  const onVideoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setVideo(URL.createObjectURL(event.target.files[0]));
    }
  };
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle
    if (event.target.files && event.target.files[1]) {
      setIsActive(current => !current);
      // setVideo(URL.createObjectURL(event.target.files[0]));
    }
    // 👇️ or set to true
    // setIsActive(true);
  };

  return (
    <>
      <Head>
        <title>Demo</title>
      </Head>
      <Navbar />
      <Carousel
        image="/dp-inform.svg"
        heading="Inform us"
        desc="If you find any needy 💁"
      />
      <form action="">
        <section className="grid p-2">
          <h1 className="text-4xl font-bold flex justify-center p-2">
            Fill out the given form!
          </h1>
          <section className="flex justify-center py-10">
            <section className="max-w-4xl py-4">
              <h1 className="text-xl font-bold m-4">
                What kind of help is needed?
              </h1>

              <select name="help" className="mx-4">
                <option value="food">Food</option>
                <option value="money">Money</option>
                <option value="clothes">Clothes</option>
                <option value="blood">Blood</option>
              </select>

              {/* Taking informer info */}
              <section className="py-4">
                <h1 className="text-xl font-bold m-4">Please add your info?</h1>
                <section>
                  <input
                    className="placeholder-[#454655] h-10 m-4 w-80 rounded-3xl  p-2 outline-0 bg-[#EEEEEE] focus:bg-[#EEEEEE] text-[#454655] font-semibold"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="placeholder-[#454655] h-10 m-4 w-80 rounded-3xl  p-2 outline-0 bg-[#EEEEEE] focus:bg-[#EEEEEE] text-[#454655] font-semibold"
                    type="number"
                    placeholder="Phone"
                  />
                  <input
                    className="placeholder-[#454655] h-10 m-4 w-80 rounded-3xl  p-2 outline-0 bg-[#EEEEEE] focus:bg-[#EEEEEE] text-[#454655] font-semibold"
                    type="number"
                    placeholder="Pincode"
                  />
                  <input
                    className="placeholder-[#454655] h-10 m-4 w-80 rounded-3xl  p-2 outline-0 bg-[#EEEEEE] focus:bg-[#EEEEEE] text-[#454655] font-semibold"
                    type="text"
                    placeholder="Address"
                  />
                </section>
              </section>

              {/* Where the help is needed -- Getting Addrsss */}
              <section className="py-4">
                <h1 className="text-xl font-bold m-4">
                  Where this help is needed?
                </h1>
                <section>
                  <input
                    className="placeholder-[#454655] h-10 m-4 w-80 rounded-3xl  p-2 outline-0 bg-[#EEEEEE] focus:bg-[#EEEEEE] text-[#454655] font-semibold"
                    type="number"
                    placeholder="Pincode"
                  />
                  <input
                    className="placeholder-[#454655] h-10 m-4 w-80 rounded-3xl  p-2 outline-0 bg-[#EEEEEE] focus:bg-[#EEEEEE] text-[#454655] font-semibold"
                    type="text"
                    placeholder="Address"
                  />
                </section>
              </section>

              {/* Adding media */}
              <div className="w-auto">
                <h1 className="text-xl font-bold m-4">Add a media!</h1>
                <button type="button" className="">
                  <label htmlFor="filePicker">
                    <BsFillImageFill className="m-4 text-3xl" />
                  </label>
                </button>
                <input multiple
                  id="filePicker"
                  style={{ visibility: "hidden" }}
                  className="bg-transparent text-transparent placeholder-[#454655] h-10 m-4 w-80 rounded-3xl  p-2 outline-0 bg-[#EEEEEE] focus:bg-[#EEEEEE] text-[#454655] font-semibold"
                  type="file"
                  onChange={onImageChange}
                />
                <img src={image} className="w-96" />
              </div>
              {/* <div>
              <button type="button" className="">
                  <label htmlFor="videoPicker" 
                onClick={handleClick}
                >
                    <BsFillCameraVideoFill className="m-4 text-3xl" />
                  </label>
                </button>
                <input
                  id="videoPicker"
                  style={{ visibility: "hidden" ,  display: isActive ? 'none' : ''}}
                  className="placeholder-[#454655] h-10 m-4 w-80 rounded-3xl  p-2 outline-0 bg-[#EEEEEE] focus:bg-[#EEEEEE] text-[#454655] font-semibold"
                  type="file"
                  onChange={onVideoChange}
                />
                <video
                        style={{
                          display: isActive ? 'block' : '',
                        }}
            
                  controls
                  src={video}
                  className="w-96 hidden"
                />
              </div> */}
              <button
                type="submit"
                className="m-4 bg-[#000000] text-white p-2 py-1 font-semibold rounded-full"
              >
                Submit
              </button>
            </section>
          </section>
        </section>
      </form>
      <Footer />
    </>
  );
};

export default Inform;
