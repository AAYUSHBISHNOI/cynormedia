import React from "react";
import ReadyToElevate from "../AboutUs/ReadyToElevate";
import Experince from "../AboutUs/Experince";
import WhatWe from "../AboutUs/WhatWe";
import OurTeam from "../AboutUs/OurTeam";
import EnoughTalks from "../AboutUs/EnoughTalks";
import ChooseUs from "../AboutUs/ChooseUs";
import WhyChooseUs from "../AboutUs/WhyChooseUs";
import OurMission from "../AboutUs/OurMission";
import { Helmet } from "react-helmet";
import OurVision from "../AboutUs/OurVision";
import Customer from "../AboutUs/Customer";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>
          About Us - Leading BTL Marketing Company in India | Cynor Media
        </title>
        <meta
          name="description"
          content="Learn about Cynor Media, a leading agency in BTL marketing, delivering innovative and result-driven brand activation solutions across India."
        />
        <meta
          name="keywords"
          content="Cynor Media, about us, branding, BTL marketing, digital marketing, business growth"
        />
        <link rel="canonical" href="https://www.cynormedia.com/about-us" />
        <meta
          property="og:title"
          content="About Us - Leading BTL Marketing Company in India | Cynor Media"
        />
        <meta
          property="og:description"
          content="Discover Cynor Media's mission, experience, and expertise in BTL marketing."
        />
        <meta property="og:url" content="https://www.cynormedia.com/about-us" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Cynor Media" />
        <meta
          name="twitter:description"
          content="Learn more about Cynor Media and why we're the right choice for your marketing needs."
        />
      </Helmet>

      <div>
        <ReadyToElevate />
        <OurVision />
        <Experince />
        <Customer />
        <WhyChooseUs />
        {/* <WhatWe /> */}
        {/* <ChooseUs /> */}
        <OurMission />
        {/* <OurTeam /> */}
        <EnoughTalks />
      </div>
    </>
  );
};

export default AboutUs;
