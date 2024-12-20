import React from "react";
import Header from "../Home/Header";
import OurServise from "../Home/OurServise";
import AboutUs from "../Home/AboutUs";
import Process from "../Home/Process";
import RecentShowcase from "../Home/RecentShowcase";
import Slider from "../Home/Slider";
import Footer from "../Home/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <OurServise />
      <AboutUs />
      {/* <Process /> */}
      <RecentShowcase />
      <Slider />
      <Footer />
    </>
  );
};

export default Home;
