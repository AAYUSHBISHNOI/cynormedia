// pages/about-us.tsx (if you're using Next.js routing)

import Head from "next/head";
import ReadyToElevate from "../components/AboutUs/ReadyToElevate";
import Experince from "../components/AboutUs/Experince";
import OurMission from "../components/AboutUs/OurMission";
import OurVision from "../components/AboutUs/OurVision";
import Customer from "../components/AboutUs/Customer";
import WhyChooseUs from "../components/AboutUs/WhyChooseUs";
import EnoughTalks from "../components/AboutUs/EnoughTalks";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>
          About Us - Leading BTL Marketing Company in India | Cynor Media
        </title>
        <meta
          name="description"
          content="Cynor Media is a leading BTL marketing company in India, connecting brands with audiences through innovative, impactful, and unforgettable experiences."
        />
        <meta
          name="keywords"
          content="Cynor Media, BTL marketing, about us, brand activation, digital marketing"
        />
        <link rel="canonical" href="https://www.cynormedia.com/about-us" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About Us - Leading BTL Marketing Company in India | Cynor Media"
        />
        <meta
          property="og:description"
          content="Cynor Media connects brands with audiences through innovative BTL marketing solutions across India."
        />
        <meta
          property="og:image"
          content="https://www.cynormedia.com/images/about-us-og.jpg"
        />
        <meta property="og:url" content="https://www.cynormedia.com/about-us" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Cynor Media" />
        <meta
          name="twitter:description"
          content="Explore how Cynor Media leads in BTL marketing through innovative, audience-first brand activations."
        />
        <meta
          name="twitter:image"
          content="https://www.cynormedia.com/images/about-us-og.jpg"
        />
      </Head>

      <ReadyToElevate />
      <OurVision />
      <Experince />
      <Customer />
      <WhyChooseUs />
      <OurMission />
      <EnoughTalks />
    </>
  );
};

export default AboutUs;
