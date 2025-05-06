import React from "react";
import vision from "../../Assets/Images/About-Us/Webp/Vision.webp";
import { Brands, Vision } from "../Common.jsx/Icons";

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
              Our vision is to become India’s most trusted and innovative BTL
              marketing company, dedicated to empowering brands by creating
              meaningful, engaging, and result-driven on-ground experiences. We
              aim to bridge the gap between brands and their target audiences by
              delivering immersive, interactive, and memorable campaigns that
              spark genuine connections, inspire meaningful action, and deliver
              measurable outcomes for long-term brand growth.
            </p>
            <div className="mt-8 lg:mt-14 flex flex-wrap justify-center md:justify-between lg:gap-10 xl:gap-36">
              <div className="text-center items-center flex flex-col">
                <div className="w-[270px] lg:w-[250px] xl:w-[298px] h-[228px] shadow-lightskyblue hover:shadow-lightblue rounded-xl duration-500 flex justify-center items-center">
                  <Vision />
                </div>
                <h4 className="font-dm text-2xl font-bold text-black leading-121 z-10 mt-4 lg:mt-9">
                  Trust and Innovation
                </h4>
                <p className="font-dm font-normal text-lg text-light_black leading-121 z-10 w-[295px] lg:max-w-[262px] mb-0 mt-2">
                  India’s most trusted BTL agency delivering impactful,
                  result-driven on-ground brand experiences.
                </p>
              </div>
              <div className="text-center items-center flex flex-col mt-8 md:mt-0">
                <div className="w-[270px] lg:w-[250px] xl:w-[298px] h-[228px] shadow-lightskyblue hover:shadow-lightblue rounded-xl duration-500 flex justify-center items-center">
                  <Brands />
                </div>
                <h4 className="font-dm text-2xl font-bold text-black leading-121 z-10 mt-4 lg:mt-9">
                  Brands with Audiences
                </h4>
                <p className="font-dm font-normal text-lg text-light_black leading-121 z-10 w-[295px] lg:max-w-[262px] mb-0 mt-2">
                  We connect brands with audiences through engaging campaigns
                  that drive lasting growth.
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
