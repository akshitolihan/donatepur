import React from "react";
import Head from "next/head";
import Image from "next/dist/client/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import extra from "../../styles/Extra.module.css";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import BCard1 from "../../components/BCard1";
import BCard2 from "../../components/BCard2";
import BCard3 from "../../components/BCard3";
import BCard4 from "../../components/BCard4";

const index = () => {
  return (
    <>
      <Head>
        <title>Demo</title>
      </Head>
      <Navbar />
      {/* <Carousel
        image="/poor-childern.jpg"
        link="/blogs/poor"
        heading="Blogs"
        desc="Know more about donation 📒"
      />  */}
      <BCard1
        link="/blogs/poor"
        image="/poor-childern.jpg"
        heading="Why people need Donation?"
        desc="Need for the donation is concerned with diffrents needs of the people. People need donation for food, clothes, education becuause they are not able to earn much and can't get enough of food and clothes. "
        h="350px"
        w="700px"
        date="Oct 20, 2022"
        author=" Akshit Kumar"
      />
      <section className="grid md:grid-cols-2 justify-around">
        <BCard3
          image="/poor-childern.jpg"
          link="/blogs/poor"
          alt="blog image"
          heading="Why people need Donation?"
          desc="Blood and organ donation is needed at time if someone suffres some illness of accidents."
          h="200px"
          w="400px"
          date="12 Oct 2022"
          author="by Akshit Kumar"
        />
        <BCard3
          image="/poor-childern.jpg"
          link="/blogs/poor"
          alt="blog image"
          heading="Why people need Donation?"
          desc="Blood and organ donation is needed at time if someone suffres some illness of accidents."
          h="200px"
          w="400px"
          date="12 Oct 2022"
          author="by Akshit Kumar"
        />
        <BCard3
          image="/poor-childern.jpg"
          link="/blogs/poor"
          alt="blog image"
          heading="Why people need Donation?"
          desc="Blood and organ donation is needed at time if someone suffres some illness of accidents."
          h="200px"
          w="400px"
          date="12 Oct 2022"
          author="by Akshit Kumar"
        />
        <BCard3
          image="/poor-childern.jpg"
          link="/blogs/poor"
          alt="blog image"
          heading="Why people need Donation?"
          desc="Blood and organ donation is needed at time if someone suffres some illness of accidents."
          h="200px"
          w="400px"
          date="12 Oct 2022"
          author="by Akshit Kumar"
        />
      </section>

      <BCard4
        image="/poor-childern.jpg"
        link="/blogs/poor"
        heading="Why people need Donation?"
        desc="Blood and organ donation is needed at time if someone suffres some illness of accidents."
        h="350px"
        w="700px"
        date="Oct 20, 2022"
        author=" Akshit Kumar"
      />
      <section className="grid md:grid-cols-2 lg:grid-cols-3 justify-evenly ">
        <BCard2
          image="/poor-childern.jpg"
          link="/blogs/poor"
          alt="blog image"
          heading="Why people need Donation?"
          desc="Blood and organ donation is needed at time if someone suffres some illness of accidents."
          h="400px"
          w="750px"
          date="12 Oct 2022"
          author="by Akshit Kumar"
        />
        <BCard2
          image="/poor-childern.jpg"
          link="/blogs/poor"
          alt="blog image"
          heading="Why people need Donation?"
          desc="Blood and organ donation is needed at time if someone suffres some illness of accidents."
          h="400px"
          w="750px"
          date="12 Oct 2022"
          author="by Akshit Kumar"
        />
        <BCard2
          image="/poor-childern.jpg"
          link="/blogs/poor"
          alt="blog image"
          heading="Why people need Donation?"
          desc="Blood and organ donation is needed at time if someone suffres some illness of accidents."
          h="400px"
          w="750px"
          date="12 Oct 2022"
          author="by Akshit Kumar"
        />
      </section>

      <Footer />
    </>
  );
};

export default index;
