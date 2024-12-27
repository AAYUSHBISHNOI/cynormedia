import React from "react";
import ReadyToElevate from "../AboutUs/ReadyToElevate";
import Experince from "../AboutUs/Experince";
import WhatWe from "../AboutUs/WhatWe";
import OurTeam from "../AboutUs/OurTeam";
import EnoughTalks from "../AboutUs/EnoughTalks";
import ChooseUs from "../AboutUs/ChooseUs";

const AboutUs = () => {
  return (
    <div>
      <ReadyToElevate />
      <Experince />
      <WhatWe />
      {/* <ChooseUs /> */}
      <OurTeam />
      <EnoughTalks />
    </div>
  );
};

export default AboutUs;
