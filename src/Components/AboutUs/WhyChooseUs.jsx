import React from "react";
import { Dedication, Proven, Tailored } from "../Common.jsx/Icons";

const WhyChooseUs = () => {
  return (
    <div className="pt-20 pb-32">
      <div className=" max-w-[1440px] mx-auto px-4">
        <h2 className="font-roboto font-semibold text-[26px] md:text-[32px] lg:text-[40px] xl:text-[64px] text-light_black leading-121 text-center">
          Why Choose Us?
        </h2>
        <div className="flex flex-wrap mt-24">
          <div className="w-full md:w-4/12">
            <div className="max-w-[446px] min-h-[302px] bg-[#64CCC5] rounded-xl transition duration-500 hover:translate-y-10 p-11">
              <Proven />
              <p className="font-roboto font-semibold text-[30px] leading-121 text-white mb-0 mt-6">
                Proven success in engaging campaigns
              </p>
            </div>
          </div>
          <div className="w-full md:w-4/12">
            <div className="max-w-[446px] min-h-[302px] bg-[#64CCC5] rounded-xl transition duration-500 hover:translate-y-10 p-11">
              <Dedication />
              <p className="font-roboto font-semibold text-[30px] leading-121 text-white mb-0 mt-6">
                Dedication to measurable results
              </p>
            </div>
          </div>
          <div className="w-full md:w-4/12">
            <div className="max-w-[446px] min-h-[302px] bg-[#64CCC5] rounded-xl transition duration-500 hover:translate-y-10 p-11">
              <Tailored />
              <p className="font-roboto font-semibold text-[30px] leading-121 text-white mb-0 mt-6">
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
