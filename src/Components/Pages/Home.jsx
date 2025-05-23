import React from "react";
import Header from "../Home/Header";
import OurServise from "../Home/OurServise";
import AboutUs from "../Home/AboutUs";
import Process from "../Home/Process";
import RecentShowcase from "../Home/RecentShowcase";
import Slider from "../Home/Slider";
import Navbar from "../Home/Navbar";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Cynor Media - Below the line Marketing Company in India</title>
        <meta
          name="description"
          content="Explore Cynor Media's BTL marketing and branding solutions. Elevate your brand with us."
        />
        <meta
          name="keywords"
          content="BTL marketing, branding, advertising, digital growth"
        />
        <link rel="canonical" href="https://www.cynormedia.com/" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Home - Cynor Media" />
        <meta
          property="og:description"
          content="Cynor Media offers expert BTL marketing solutions to elevate your brand."
        />
        <meta property="og:url" content="https://www.cynormedia.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home - Cynor Media" />
        <meta
          name="twitter:description"
          content="Explore Cynor Media's BTL marketing and branding solutions."
        />
      </Head>

      {/* <Navbar /> */}
      <Header />
      <OurServise />
      <AboutUs />
      <Process />
      <RecentShowcase />
      <Slider />
    </>
  );
};

export default Home;
