import React from "react";
import { Concept, Execution, Feedback, Message } from "../Common.jsx/Icons";

const Process = () => {
  return (
    <div className="pt-10 md:pt-14 lg:pt-[86px] lg:pb-[115px]">
      <div className=" max-w-[1440px] mx-auto px-4">
        <div className=" text-center flex flex-col justify-center items-center">
          <p className=" text-light_green font-semibold leading-130 font-roboto text-2xl md:text-3xl">
            Process
          </p>
          <h2 className=" text-[26px] md:text-[32px] lg:text-[40px] xl:text-[64px] font-roboto font-semibold leading-121 text-light_black text-center">
            Our Strengths
          </h2>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between text-center md:text-start mt-14 lg:mt-24">
          <div className="w-full md:w-1/2 lg:w-[25%] flex justify-center">
            <div className="w-full max-w-[340px] lg:max-w-[225px] xl:max-w-[340px] h-full min-h-[222px] rounded-[32px] bg-white relative border-[#ababab] border-4 px-6 lg:px-4 xl:px6 pb-10 pt-10 md:pt-[62px]">
              <div className=" ">
                <Execution />
              </div>
              <p className=" font-roboto text-2xl md:text-3xl lg:text-xl xl:text-3xl text-light_black font-semibold leading-121">
                Execution
              </p>
              <p className="font-dm text-base font-normal leading-121 text-light_black mt-2">
                We follow absolute processes to make sure that defined concepts
                are delivered according to the vision of our creative director.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-[25%] flex justify-center mt-14 md:mt-0">
            <div className="w-full max-w-[340px] lg:max-w-[225px] xl:max-w-[340px] h-full min-h-[222px] rounded-[32px] bg-white relative border-[#ababab] border-4 px-6 lg:px-4 xl:px6 pb-10 pt-10 md:pt-[62px]">
              <Message />
              <p className=" font-roboto text-2xl md:text-3xl lg:text-xl xl:text-3xl text-light_black font-semibold leading-121">
                Ideation
              </p>
              <p className=" font-dm text-base font-normal leading-121 text-light_black mt-2">
                Our ideation involves innovative market and advertising trends,
                Client’s vision, competitors strategies and the consumer
                behavior by compiling them to create an innovative.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-[25%] flex justify-center mt-14 lg:mt-0">
            <div className="w-full max-w-[340px] lg:max-w-[225px] xl:max-w-[340px] h-full min-h-[222px] rounded-[32px] bg-white relative border-[#ababab] border-4 px-6 lg:px-4 xl:px6 pb-10 pt-10 md:pt-[62px]">
              <Concept />
              <p className=" font-roboto text-2xl md:text-3xl lg:text-xl xl:text-3xl text-light_black font-semibold leading-121">
                Conceptualization
              </p>
              <p className=" font-dm text-base font-normal leading-121 text-light_black mt-2">
                The vivid imagination, creativity, innovative strategies are the
                best solutions to excel in the winning game. We work efficiently
                to create a visually appealing identity that says best for your
                brand.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-[25%] flex justify-center mt-14 lg:mt-0">
            <div className="w-full max-w-[340px] lg:max-w-[225px] xl:max-w-[340px] h-full min-h-[222px] rounded-[32px] bg-white relative border-[#ababab] border-4 px-6 lg:px-4 xl:px6 pb-10 pt-10 md:pt-[62px]">
              <Feedback />
              <p className=" font-roboto text-2xl md:text-3xl lg:text-xl xl:text-3xl text-light_black font-semibold leading-121">
                Feedback
              </p>

              <p className=" font-dm text-base font-normal leading-121 text-light_black mt-2">
                We at Cynor Media, put a lot more focus on response,outcome,
                reviews and desired results, we are getting from the audience.
                We are continuously changing and improving each day by staying
                ahead of the competition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
