import React from "react";
import { Dedication, Proven, Tailored } from "../Common.jsx/Icons";

const WhyChooseUs = () => {
  return (
    <div className="py-10 xl:pt-20 lg:pb-32 relative">
      <div className=" absolute -bottom-[1.2%] md:-bottom-[6%] lg:-bottom-[8.4%] xl:-bottom-[12%] left-0 -z-10">
        <p className="font-roboto font-semibold text-[#e9e9e9] leading-150 text-[35px] sm:text-[40px] md:text-[98px] lg:text-[128px] xl:text-[180px]">
          CYNOR MEDIA
        </p>
      </div>
      <div className=" max-w-[1400px] mx-auto px-4">
        <h2 className="font-roboto font-semibold text-[26px] md:text-[32px] lg:text-[40px] xl:text-[64px] text-light_black leading-121 text-center">
          Why Choose Us?
        </h2>
        <div className="flex flex-wrap justify-center mt-5 lg:mt-8 xl:mt-24 text-center">
          <div className="w-full md:w-2/4 lg:w-4/12">
            <div className="max-w-[446px] md:max-w-[350px] lg:max-w-[315px] xl:max-w-[446px] h-full min-h-[250px] lg:min-h-[302px] bg-[#64CCC5] flex flex-col items-center justify-center rounded-xl transition duration-500 hover:translate-y-2 lg:hover:translate-y-10 p-4 md:p-11 lg:p-4 xl:p-11">
              <Proven />
              <p className="font-roboto font-semibold text-lg lg:text-[22px] xl:text-[26px] leading-121 text-white mb-0 mt-6">
                End-to-End Expertise in BTL Marketing Activities
              </p>
              <p className="font-roboto font-normal text-lg leading-121 text-white mb-0 mt-2">
                From creative ideation to flawless execution, we manage every
                detail, ensuring your brand shines.
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/4 lg:w-4/12 mt-4 md:mt-0">
            <div className="max-w-[446px] md:max-w-[350px] lg:max-w-[315px] xl:max-w-[446px] h-full min-h-[250px] lg:min-h-[302px] bg-[#64CCC5] flex flex-col items-center justify-center rounded-xl transition duration-500 hover:translate-y-2 lg:hover:translate-y-10 p-4 md:p-11 lg:p-4 xl:p-11">
              <Dedication />
              <p className="font-roboto font-semibold text-lg lg:text-[22px] xl:text-[26px] leading-121 text-white mb-0 mt-6">
                PAN India Network for Product Launch Services
              </p>
              <p className="font-roboto font-normal text-lg leading-121 text-white mb-0 mt-2">
                With a strong presence nationwide, we deliver consistent,
                high-impact campaigns wherever your audience is.
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/4 lg:w-4/12 mt-4 lg:mt-0">
            <div className="max-w-[446px] md:max-w-[350px] lg:max-w-[315px] xl:max-w-[446px] h-full min-h-[250px] lg:min-h-[302px] bg-[#64CCC5] flex flex-col items-center justify-center rounded-xl transition duration-500 hover:translate-y-2 lg:hover:translate-y-10 p-4 md:p-11 lg:p-4 xl:p-11">
              <Tailored />
              <div>
                <p className="font-roboto font-semibold text-lg lg:text-[22px] xl:text-[26px] leading-121 text-white mb-0 mt-6">
                  Results-Driven Approach
                </p>
                <p className="font-roboto font-normal text-lg leading-121 text-white mb-0 mt-2">
                  Every activation, event, and campaign is designed to drive
                  engagement, brand recall, and measurable ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
