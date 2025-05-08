import React from "react";
import OurService from "../Services/OurService";
import OurActivity from "../Services/OurActivity";
import EnoughTalks from "../AboutUs/EnoughTalks";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>BTL Marketing Activities Services | Cynor Media</title>
        <meta
          name="description"
          content="Boost your brand visibility with expert BTL marketing services in India. Cynor Media delivers impactful on-ground promotions and offline campaigns."
        />
        <meta
          name="keywords"
          content="BTL marketing services, brand activations, promotional campaigns, on-ground marketing, Cynor Media services"
        />
        <link rel="canonical" href="https://www.cynormedia.com/services" />
        <meta
          property="og:title"
          content="BTL Marketing Activities Services | Cynor Media"
        />
        <meta
          property="og:description"
          content="Cynor Media specializes in delivering result-driven BTL marketing services including brand activations and offline strategies across India."
        />
        <meta property="og:url" content="https://www.cynormedia.com/services" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="BTL Marketing Services - Cynor Media"
        />
        <meta
          name="twitter:description"
          content="Explore Cynor Media’s range of BTL marketing services that enhance offline brand presence and drive engagement."
        />
      </Helmet>

      <div className="bg-[#f4f4f4]">
        <OurService />
        <OurActivity />
        <EnoughTalks />
      </div>
    </>
  );
};

export default Services;
