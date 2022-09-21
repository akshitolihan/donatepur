import React from "react";
import Head from "next/head";
import Image from "next/dist/client/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import extra from "../styles/Extra.module.css";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import BCard1 from "../components/BCard1";
import BCard2 from "../components/BCard2";

const carousel = () => {
  return (
    <>
      <section className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
          <h1 id="carousel__slide1" tabIndex="0" className="carousel__slide">
            <div className="">
              <BCard1
              className="carousel__snapper"
                image="/poor-childern.jpg"
                heading="This is Heading"
                desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui molestias autem porro, quo necessitatibus, aspernatur "
                h="360px"
                w="640px"
                date="Oct 20, 2022"
                author=" Akshit Kumar"
              />
              <a href="#carousel__slide4" className="carousel__prev"></a>
              <a href="#carousel__slide2" className="carousel__next"></a>
            </div>
          </h1>
          <h1 id="carousel__slide2" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide1" className="carousel__prev"></a>
            <a href="#carousel__slide3" className="carousel__next"></a>
          </h1>
          <h1 id="carousel__slide3" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide2" className="carousel__prev"></a>
            <a href="#carousel__slide4" className="carousel__next"></a>
          </h1>
          <h1 id="carousel__slide4" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide3" className="carousel__prev"></a>
            <a href="#carousel__slide1" className="carousel__next">
              Go to first slide
            </a>
          </h1>
        </ol>
        <aside className="carousel__navigation">
          <ol className="carousel__navigation-list">
            <h1 className="carousel__navigation-item">
              <a
                href="#carousel__slide1"
                className="carousel__navigation-button"
              >
                Go to slide 1
              </a>
            </h1>
            <h1 className="carousel__navigation-item">
              <a
                href="#carousel__slide2"
                className="carousel__navigation-button"
              >
                Go to slide 2
              </a>
            </h1>
            <h1 className="carousel__navigation-item">
              <a
                href="#carousel__slide3"
                className="carousel__navigation-button"
              >
                Go to slide 3
              </a>
            </h1>
            <h1 className="carousel__navigation-item">
              <a
                href="#carousel__slide4"
                className="carousel__navigation-button"
              >
                Go to slide 4
              </a>
            </h1>
          </ol>
        </aside>
      </section>
    </>
  );
};

export default carousel;
