import React from "react";
import vision from "../../Assets/Images/About-Us/Webp/Vision.webp";
import { Brands, Expertised, Smart, Vision } from "../Common.jsx/Icons";

const OurVision = () => {
  return (
    <div>
      <div className="max-w-[1400px] mx-auto py-5 md:py-8 lg:py-0">
        <div className="md:flex flex-wrap justify-between items-center">
          <div className="px-4 text-center lg:text-start">
            <h2 className="font-roboto text-black text-3xl lg:text-6xl xl:text-8xl font-bold leading-121 mt-5 lg:mt-0">
              Our Vision
            </h2>
            <p className="font-dm font-normal text-base xl:text-lg text-light_black leading-121 max-w-[785px] lg:w-[576px] xl:w-[785px] md:mt-3">
              To be the most innovative and result-driven BTL marketing company
              in India, transforming how brands connect with their audience
              through BTL marketing and other{" "}
              <a href="/service" className=" text-[#64ccc5] font-extrabold">
                services
              </a>{" "}
              in India and beyond.
            </p>
            <div className="mt-8 lg:mt-14 flex flex-wrap justify-center md:justify-between lg:gap-10 xl:gap-36">
              <div className="text-center items-center flex flex-col">
                <div className="w-[270px] lg:w-[250px] xl:w-[298px] h-[228px] shadow-lightskyblue hover:shadow-lightblue rounded-xl duration-500 flex justify-center items-center">
                  <Expertised />
                </div>
                <h4 className="font-dm text-[22px] font-bold text-black leading-121 z-10 mt-4 lg:mt-9">
                  Innovative Marketing
                </h4>
                <p className="font-dm font-normal text-lg text-light_black leading-121 z-10 max-w-[295px] lg:max-w-[280px] xl:max-w-[352px] mb-0 mt-2">
                  Revolutionizing on-ground brand experiences by delivering
                  fresh, creative, and impactful marketing solutions that spark
                  meaningful connections with audiences and drive measurable,
                  lasting impact.
                </p>
              </div>
              <div className="text-center items-center flex flex-col mt-8 md:mt-0">
                <div className="w-[270px] lg:w-[250px] xl:w-[298px] h-[228px] shadow-lightskyblue hover:shadow-lightblue rounded-xl duration-500 flex justify-center items-center">
                  <Smart />
                </div>
                <h4 className="font-dm text-[22px] font-bold text-black leading-121 z-10 mt-4 lg:mt-9">
                  Smart Brand Engagement
                </h4>
                <p className="font-dm font-normal text-lg text-light_black leading-121 z-10 max-w-[295px] lg:max-w-[280px] xl:max-w-[352px] mb-0 mt-2">
                  We focus on creating strategic, localized, and human-centered
                  marketing solutions that make brands stand out where it
                  matters most, in the hearts and minds of people.
                </p>
              </div>
            </div>
          </div>
          <img
            className="w-[448px] lg:w-[366px] xl:w-[448px] h-[640px] xsm:h-[760px] xl:h-[880px] mt-8 lg:mt-0 md:hidden lg:block"
            src={vision}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
