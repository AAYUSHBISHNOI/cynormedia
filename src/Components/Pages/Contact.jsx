import React from "react";
import LetsTalk from "../ContactUs/LetsTalk";
import GoogleMap from "../ContactUs/GoogleMap";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact Us | Connect with BTL Marketing Experts – Cynor Media
        </title>
        <meta
          name="description"
          content="Get in touch with Cynor Media for expert BTL marketing solutions. Reach out today to discuss your brand activation, events, or advertising needs."
        />
        <meta
          name="keywords"
          content="contact Cynor Media, marketing inquiries, collaboration, business support"
        />
        <link rel="canonical" href="https://www.cynormedia.com/contact-us" />
        <meta
          property="og:title"
          content="  Contact Us | Connect with BTL Marketing Experts – Cynor Media"
        />
        <meta
          property="og:description"
          content="Reach out to Cynor Media for marketing and branding solutions."
        />
        <meta
          property="og:url"
          content="https://www.cynormedia.com/contact-us"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Cynor Media" />
        <meta
          name="twitter:description"
          content="Get in touch with our experts at Cynor Media for top-notch marketing services."
        />
      </Helmet>

      <div>
        {/* <Navbar /> */}
        <LetsTalk />
        <GoogleMap />
      </div>
    </>
  );
};

export default Contact;
