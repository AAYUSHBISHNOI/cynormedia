import React from "react";
import experince from "../../Assets/Images/About-Us/Webp/Experience.webp";
import { Brands, Vision } from "../Common.jsx/Icons";

const Experince = () => {
  return (
    <div>
      <div className=" max-w-[1400px] mx-auto py-5 md:py-8 lg:py-0">
        <div className="md:flex flex-wrap justify-between items-center">
        
          <img
            className="w-[448px] lg:w-[366px] xl:w-[448px] h-[640px] xsm:h-[760px] xl:h-[880px] mt-8 lg:mt-0 hidden lg:block"
            src={experince}
            alt=""
          />
          <div className="px-4 text-center lg:text-start">
            <h2 className="font-roboto text-black text-3xl lg:text-6xl xl:text-8xl font-bold leading-121 mt-5 lg:mt-0">
              Expirence
            </h2>
            <p className="font-dm font-normal text-base xl:text-lg text-light_black leading-121 max-w-[785px] lg:w-[576px] xl:w-[785px] md:mt-3">
              Since 2017, we’ve been helping brands connect with their audience
              through smart and engaging BTL marketing. From on-ground
              activations to creative events, our experienced team knows how to
              make your brand stand out. With every campaign, we focus on real
              results and memorable experiences that truly make an impact.
            </p>
            <div className="mt-8 lg:mt-14 flex flex-wrap justify-center md:justify-between lg:gap-10 xl:gap-36">
              <div className="text-center items-center flex flex-col">
                <div className="w-[270px] lg:w-[250px] xl:w-[298px] h-[228px] shadow-lightskyblue hover:shadow-lightblue rounded-xl duration-500 flex justify-center items-center">
                  <Vision />
                </div>
                <h4 className="font-dm text-2xl font-bold text-black leading-121 z-10 mt-4 lg:mt-9">
                  BTL Experts
                </h4>
                <p className="font-dm font-normal text-lg text-light_black leading-121 z-10 w-[295px] lg:max-w-[262px] mb-0 mt-2">
                  On-ground activations that truly engage your audience.
                </p>
              </div>
              <div className="text-center items-center flex flex-col mt-8 md:mt-0">
                <div className="w-[270px] lg:w-[250px] xl:w-[298px] h-[228px] shadow-lightskyblue hover:shadow-lightblue rounded-xl duration-500 flex justify-center items-center">
                  <Brands />
                </div>
                <h4 className="font-dm text-2xl font-bold text-black leading-121 z-10 mt-4 lg:mt-9">
                  Creative Impact
                </h4>
                <p className="font-dm font-normal text-lg text-light_black leading-121 z-10 w-[295px] lg:max-w-[262px] mb-0 mt-2">
                  Memorable campaigns that deliver real results.
                </p>
              </div>
            </div>
          </div>
          <img
            className="w-[448px] lg:w-[366px] xl:w-[448px] h-[640px] xsm:h-[760px] xl:h-[880px] mt-8 lg:mt-0 md:hidden"
            src={experince}
            alt=""
          />
         
        </div>
      </div>
    </div>
  );
};

export default Experince;
