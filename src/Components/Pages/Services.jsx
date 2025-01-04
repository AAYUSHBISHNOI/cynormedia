import React from "react";
import OurService from "../Services/OurService";
import OurActivity from "../Services/OurActivity";
import EnoughTalks from "../AboutUs/EnoughTalks";

const Services = () => {
  return (
    <div className="bg-[#f4f4f4]">
      <OurService />
      <OurActivity />
      <EnoughTalks />
    </div>
  );
};

export default Services;
