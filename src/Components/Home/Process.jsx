import React from "react";
import { Concept, Execution, Feedback, Message } from "../Common.jsx/Icons";

const Process = () => {
  return (
    <div className="pt-10 md:pt-14 lg:pt-[86px] lg:pb-[115px]">
      <div className=" max-w-[1400px] mx-auto px-4">
        <div className=" text-center flex flex-col justify-center items-center">
          <p className=" text-light_green font-semibold leading-130 font-roboto text-2xl md:text-3xl">
            Process
          </p>
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[64px] font-roboto font-semibold leading-121 text-light_black text-center">
            From Vision to Impact
          </h2>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between text-center md:text-start mt-14 lg:mt-24">
          <div className="w-full md:w-1/2 lg:w-[25%] flex justify-center">
            <div className="w-full max-w-[340px] lg:max-w-[225px] xl:max-w-[340px] h-full min-h-[222px] rounded-[32px] bg-white relative border-[#ababab] border-4 px-6 lg:px-4 xl:px6 pb-10 pt-10 md:pt-[62px]">
              <div className=" ">
                <Execution />
              </div>
              <p className=" font-roboto text-xl md:text-3xl lg:text-base xl:text-2xl text-light_black font-semibold leading-121">
                Execute & Activate
              </p>
              <p className="font-dm text-base font-normal leading-121 text-light_black mt-2">
                From BTL marketing activities to launch events, we ensure
                end-to-end execution. Our on-ground teams handle logistics,
                coordination, and activation, so your campaign runs seamlessly
                and makes a strong impact.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-[25%] flex justify-center mt-14 md:mt-0">
            <div className="w-full max-w-[340px] lg:max-w-[225px] xl:max-w-[340px] h-full min-h-[222px] rounded-[32px] bg-white relative border-[#ababab] border-4 px-6 lg:px-4 xl:px6 pb-10 pt-10 md:pt-[62px]">
              <Message />
              <p className=" font-roboto text-xl md:text-3xl lg:text-base xl:text-2xl text-light_black font-semibold leading-121">
                Measure & Amplify
              </p>
              <p className=" font-dm text-base font-normal leading-121 text-light_black mt-2">
                After execution, we dive deep into data, gather audience
                insights, and measure performance, so we can optimize, evolve,
                and push your brand further.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-[25%] flex justify-center mt-14 lg:mt-0">
            <div className="w-full max-w-[340px] lg:max-w-[225px] xl:max-w-[340px] h-full min-h-[222px] rounded-[32px] bg-white relative border-[#ababab] border-4 px-6 lg:px-4 xl:px6 pb-10 pt-10 md:pt-[62px]">
              <Concept />
              <p className=" font-roboto text-xl md:text-3xl lg:text-base xl:text-2xl text-light_black font-semibold leading-121">
                Discover & Strategize
              </p>
              <p className=" font-dm text-base font-normal leading-121 text-light_black mt-2">
                We start by understanding your brand, audience, and goals. With
                proper research and collaborations, we define a clear roadmap
                tailored to your specific needs and objectives.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-[25%] flex justify-center mt-14 lg:mt-0">
            <div className="w-full max-w-[340px] lg:max-w-[225px] xl:max-w-[340px] h-full min-h-[222px] rounded-[32px] bg-white relative border-[#ababab] border-4 px-6 lg:px-4 xl:px6 pb-10 pt-10 md:pt-[62px]">
              <Feedback />
              <p className=" font-roboto text-xl md:text-3xl lg:text-base xl:text-2xl text-light_black font-semibold leading-121">
                Ideate & Design
              </p>

              <p className=" font-dm text-base font-normal leading-121 text-light_black mt-2">
                Our creative team gets to work. From brainstorming,
                conceptualizing, and designing experiences that resonate.
                Whether it's a float van campaign, a product launch, or a
                digital push, every detail is crafted to tell your brand story
                memorably.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
