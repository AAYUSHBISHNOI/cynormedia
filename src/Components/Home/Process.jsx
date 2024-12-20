import React from "react";
import arrow from "../../Assets/Images/Home/Png/Card-Arrow.png";
import arrowtwo from "../../Assets/Images/Home/Png/Card-Arrow-2.png";
import { Execution } from "../Common.jsx/Icons";

const Process = () => {
  return (
    <div className="py-10 md:pt-[107px] md:pb-[186px]">
      <div className=" max-w-[1440px] mx-auto px-4">
        <div className=" text-center flex flex-col justify-center items-center">
          <p className=" text-light_green font-semibold leading-130 font-roboto text-2xl md:text-3xl">
            Process
          </p>
          <h2 className=" text-[26px] md:text-[32px] lg:text-[40px] xl:text-[64px] font-roboto font-semibold leading-121 text-light_black text-center">
            Our Strengths
          </h2>
        </div>
        <div className="flex flex-wrap justify-between mt-24">
          <div className="w-full md:w-[25%] relative">
            <img
              className="absolute w-[370px] h-[223px] -left-[4px] -top-[4px] rotate-90"
              src={arrow}
              alt=""
            />
            <div className="w-[265px] h-[215px] rounded-[32px] bg-white relative px-10 pt-[76px] pb-3.5">
              <div className=" absolute -top-10 left-[75px] flex items-center gap-3">
                <Execution />
                <p className=" font-roboto text-3xl text-light_black font-semibold leading-121">
                  Execution
                </p>
              </div>
              <p className=" font-dm text-base font-normal leading-121 text-light_black">
                We follow absolute processes to make sure that defined concepts
                are delivered according to the vision of our creative director.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[25%] relative mt-28">
            <img
              className=" absolute w-[356px] h-[223px] -left-[4px] -top-[4px] rotate-90"
              src={arrow}
              alt=""
            />
            <div className="w-[265px] h-[215px] rounded-[32px] bg-white relative px-10 pt-[76px] pb-3.5">
              <div className=" absolute -top-10 left-[75px] flex items-center gap-3">
                <Execution />
                <p className=" font-roboto text-3xl text-light_black font-semibold leading-121">
                  Ideation
                </p>
              </div>
              <p className=" font-dm text-base font-normal leading-121 text-light_black">
                We follow absolute processes to make sure that defined concepts
                are delivered according to the vision of our creative director.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[25%] relative mt-28">
            <img
              className=" absolute w-[356px] h-[223px] -left-[4px] -top-[4px] rotate-90"
              src={arrow}
              alt=""
            />
            <div className="w-[265px] h-[215px] rounded-[32px] bg-white relative px-10 pt-[76px] pb-3.5">
              <div className=" absolute -top-10 left-[75px] flex items-center gap-3">
                <Execution />
                <p className=" font-roboto text-3xl text-light_black font-semibold leading-121">
                  Ideate
                </p>
              </div>
              <p className=" font-dm text-base font-normal leading-121 text-light_black">
                We follow absolute processes to make sure that defined concepts
                are delivered according to the vision of our creative director.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[25%] relative mt-28">
            <img
              className=" absolute w-[278px] h-[223px] -left-[4px] -top-[4px] rotate-90"
              src={arrowtwo}
              alt=""
            />
            <div className="w-[265px] h-[215px] rounded-[32px] bg-white relative px-10 pt-[76px] pb-3.5">
              <div className=" absolute -top-10 left-[75px] flex items-center gap-3">
                <Execution />
                <p className=" font-roboto text-3xl text-light_black font-semibold leading-121">
                  Feedback
                </p>
              </div>
              <p className=" font-dm text-base font-normal leading-121 text-light_black">
                We follow absolute processes to make sure that defined concepts
                are delivered according to the vision of our creative director.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
