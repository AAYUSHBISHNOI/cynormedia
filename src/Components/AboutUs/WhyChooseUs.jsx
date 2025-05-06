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
        <div className="flex flex-wrap justify-center mt-5 lg:mt-8 xl:mt-24">
          <div className="w-full md:w-2/4 lg:w-4/12">
            <div className="max-w-[446px] md:max-w-[350px] lg:max-w-[315px] xl:max-w-[446px] min-h-[250px] lg:min-h-[302px] bg-[#64CCC5] flex flex-col items-center justify-center text-center rounded-xl transition duration-500 hover:translate-y-2 lg:hover:translate-y-10 p-11">
              <Proven />
              <p className="font-roboto font-semibold text-lg lg:text-[22px] xl:text-[30px] leading-121 text-white mb-0 mt-6">
                Proven success in engaging campaigns
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/4 lg:w-4/12 mt-4 md:mt-0">
            <div className="max-w-[446px] md:max-w-[350px] lg:max-w-[315px] xl:max-w-[446px] min-h-[250px] lg:min-h-[302px] bg-[#64CCC5] flex flex-col items-center justify-center text-center rounded-xl transition duration-500 hover:translate-y-2 lg:hover:translate-y-10 p-11">
              <Dedication />
              <p className="font-roboto font-semibold text-lg lg:text-[22px] xl:text-[30px] leading-121 text-white mb-0 mt-6">
                Dedication to measurable results
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/4 lg:w-4/12 mt-4 lg:mt-0">
            <div className="max-w-[446px] md:max-w-[350px] lg:max-w-[315px] xl:max-w-[446px] min-h-[250px] lg:min-h-[302px] bg-[#64CCC5] flex flex-col items-center justify-center text-center rounded-xl transition duration-500 hover:translate-y-2 lg:hover:translate-y-10 p-11">
              <Tailored />
              <p className="font-roboto font-semibold text-lg lg:text-[22px] xl:text-[30px] leading-121 text-white mb-0 mt-6">
                Tailored, creative strategies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
