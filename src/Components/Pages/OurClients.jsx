import React from "react";
import HeaderOurClients from "../OurClients/HeaderOurClients";
import WhatOurClients from "../OurClients/WhatOurClients";
import EnoughTalks from "../AboutUs/EnoughTalks";
import { Helmet } from "react-helmet";
import Accordion from "../OurClients/Accordion";

const OurClients = () => {
  return (
    <>
      <Helmet>
        <title>Our Clients - Cynor Media</title>
        <meta
          name="description"
          content="See what our clients have to say about Cynor Media. Trusted by top brands."
        />
      </Helmet>

      <div>
        <HeaderOurClients />
        <WhatOurClients />
        <Accordion />
        <EnoughTalks />
      </div>
    </>
  );
};

export default OurClients;
