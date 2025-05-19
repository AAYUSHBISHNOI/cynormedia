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
        <title>
          Our Clients | Trusted Partners in BTL Marketing – Cynor Media
        </title>
        <meta
          name="description"
          content="Explore the trusted brands and businesses we’ve partnered with. Cynor Media delivers impactful BTL marketing solutions to top clients across India."
        />
        <meta
          name="keywords"
          content="Cynor Media clients, trusted partners, BTL marketing clients, brand collaborations, client portfolio"
        />
        <link rel="canonical" href="https://www.cynormedia.com/our-clients" />
        <meta
          property="og:title"
          content=" Our Clients | Trusted Partners in BTL Marketing – Cynor Media"
        />
        <meta
          property="og:description"
          content="See how Cynor Media helps top brands grow through strategic BTL marketing campaigns and partnerships."
        />
        <meta
          property="og:url"
          content="https://www.cynormedia.com/our-clients"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Clients | Trusted Partners in BTL Marketing – Cynor Media"
        />
        <meta
          name="twitter:description"
          content="Check out our successful client collaborations in BTL marketing across India."
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
