import React from "react";
import OurService from "../Services/OurService";
import OurActivity from "../Services/OurActivity";
import EnoughTalks from "../AboutUs/EnoughTalks";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Cynor Media</title>
        <meta
          name="description"
          content="Explore our range of services at Cynor Media. We provide top-notch BTL marketing solutions."
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
