import React from "react";
import experince from "../../Assets/Images/About-Us/Webp/Experience.webp";
import { Brands, Seamless, Vision } from "../Common.jsx/Icons";

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
              With years of hands-on experience and hundreds of successful
              campaigns to our name, Cynor Media has become a trusted name in
              the event and marketing industry. From high-energy product
              launches and roadshows to PAN India marketing activations and
              digital campaigns, our team knows what it takes to craft memorable
              brand stories.
            </p>
            <div className="mt-8 lg:mt-14 flex flex-wrap justify-center md:justify-between lg:gap-10 xl:gap-36">
              <div className="text-center items-center flex flex-col">
                <div className="w-[270px] lg:w-[250px] xl:w-[298px] h-[228px] shadow-lightskyblue hover:shadow-lightblue rounded-xl duration-500 flex justify-center items-center">
                  <Vision />
                </div>
                <h4 className="font-dm text-[22px] font-bold text-black leading-121 z-10 mt-4 lg:mt-9">
                  Expertise & Trusted
                </h4>
                <p className="font-dm font-normal text-lg text-light_black leading-121 z-10 max-w-[295px] lg:max-w-[280px] xl:max-w-[352px] mb-0 mt-2">
                  With years of experience and a portfolio of successful
                  campaigns, we’ve earned the trust of brands by consistently
                  delivering memorable and result-driven marketing and event
                  solutions.
                </p>
              </div>
              <div className="text-center items-center flex flex-col mt-8 md:mt-0">
                <div className="w-[270px] lg:w-[250px] xl:w-[298px] h-[228px] shadow-lightskyblue hover:shadow-lightblue rounded-xl duration-500 flex justify-center items-center">
                  <Seamless />
                </div>
                <h4 className="font-dm text-[22px] font-bold text-black leading-121 z-10 mt-4 lg:mt-9">
                  Seamless, Impactful Brand
                </h4>
                <p className="font-dm font-normal text-lg text-light_black leading-121 z-10 max-w-[295px] lg:max-w-[280px] xl:max-w-[352px] mb-0 mt-2">
                  From high-energy activations and roadshows to large-scale
                  marketing campaigns, we have created immersive brand
                  experiences that leave a lasting impact.
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
