import React from "react";
import customer from "../../Assets/Images/About-Us/Webp/OurCustomer.webp";
import { Brands, Creativity, Creativitys, Vision } from "../Common.jsx/Icons";

const Customer = () => {
  return (
    <div>
      <div className=" max-w-[1400px] mx-auto py-5 md:py-8 lg:py-0">
        <div className="md:flex flex-wrap justify-between items-center">
          <div className="px-4 text-center lg:text-start">
            <h2 className="font-roboto text-black text-3xl lg:text-6xl xl:text-8xl font-bold leading-121 mt-5 lg:mt-0">
              Customer
            </h2>
            <p className="font-dm font-normal text-base xl:text-lg text-light_black leading-121 max-w-[785px] lg:w-[576px] xl:w-[785px] md:mt-3">
              From first-time clients to long-term partners- hear real stories
              of real impact from the brands and customers who trust us. Be it
              the BTL marketing, float van services or any brand promotion{" "}
              <a href="/service" className=" text-[#64ccc5] font-extrabold">
                services
              </a>
              , our customers have seen real impact with Cynor Media.
            </p>
            <div className="mt-8 lg:mt-14 flex flex-wrap justify-center md:justify-between lg:gap-10 xl:gap-36">
              <div className="text-center items-center flex flex-col">
                <div className="w-[270px] lg:w-[250px] xl:w-[298px] h-[228px] shadow-lightskyblue hover:shadow-lightblue rounded-xl duration-500 flex justify-center items-center">
                  <Brands />
                </div>
                <h4 className="font-dm text-[22px] font-bold text-black leading-121 z-10 mt-4 lg:mt-9">
                  Team of 100+ Experts
                </h4>
                <p className="font-dm font-normal text-lg text-light_black leading-121 z-10 w-[295px] lg:max-w-[262px] mb-0 mt-2">
                  Driven, passionate, and committed to delivering excellence.
                </p>
              </div>
              <div className="text-center items-center flex flex-col mt-8 md:mt-0">
                <div className="w-[270px] lg:w-[250px] xl:w-[298px] h-[228px] shadow-lightskyblue hover:shadow-lightblue rounded-xl duration-500 flex justify-center items-center">
                  <Creativitys />
                </div>
                <h4 className="font-dm text-[22px] font-bold text-black leading-121 z-10 mt-4 lg:mt-9">
                  United by Creativity
                </h4>
                <p className="font-dm font-normal text-lg text-light_black leading-121 z-10 w-[295px] lg:max-w-[262px] mb-0 mt-2">
                  Each member brings unique energy to every project.
                </p>
              </div>
            </div>
          </div>
          <img
            className="w-[448px] lg:w-[366px] xl:w-[448px] h-[640px] xsm:h-[760px] xl:h-[880px] mt-8 lg:mt-0 md:hidden lg:block"
            src={customer}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Customer;
