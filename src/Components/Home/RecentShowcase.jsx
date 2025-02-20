import React from "react";
import imagone from "../../Assets/Images/Home/Webp/Recent-1.webp";
import imagetwo from "../../Assets/Images/Home/Webp/Recent-3.webp";
import imagethree from "../../Assets/Images/Home/Webp/Corporate-Event.webp";
import imagefour from "../../Assets/Images/Home/Webp/Recent-4.webp";

const RecentShowcase = () => {
  return (
    <div className="py-10 md:py-20 lg:pt-0">
      <div className=" max-w-[1440px] mx-auto px-4">
        <h2 className=" text-[26px] md:text-[32px] lg:text-[40px] xl:text-[64px] font-roboto font-semibold leading-121 text-light_black text-center">
          Recent Showcase
        </h2>
        <div className="flex flex-wrap mt-5 md:mt-10 lg:mt-16 xl:mt-[85px]">
          <div className="w-full md:w-3/6 text-center md:text-start">
            <div>
              <img
                className="w-full h-full xl:max-w-[663px] md:max-w-[355px] lg:max-w-[480px] min-h-[212px] md:min-h-[280px] lg:min-h-[370px] xl:min-h-[450px]"
                src={imagone}
                alt=""
              />
              <p className="font-roboto font-semibold text-xl md:text-2xl lg:text-3xl leading-121 text-light_black mb-0 mt-2 lg:mt-4">
                Float Van Campaign
              </p>
              <p className="font-dm font-normal text-base md:text-lg text-light_black leading-121 mb-0 mt-1 lg:mt-2.5">
                Jammu kashmir
              </p>
            </div>
          </div>
          <div className="w-full md:w-3/6 text-center md:text-start flex flex-col items-end justify-end translate-y-1 lg:translate-y-14">
            <div className="hidden md:flex justify-end">
              <button
                className=" font-dm text-white text-[20px] font-normal bg-black rounded-full py-1.5 px-3 flex justify-center items-center gap-2.5 mt-[32px]"
                onClick={() =>
                  window.open("https://wa.me/+917988709158", "_blank")
                }
              >
                <a
                  href=""
                  className=" text-black bg-white py-1 px-3 rounded-full text-xl text-center"
                >
                  >
                </a>
                Start your Free Trial
              </button>
            </div>
            <div className=" mt-2 md:mt-6 lg:mt-14 xl:mt-[51px]">
              <img
                className="w-full xl:max-w-[663px] md:max-w-[355px] lg:max-w-[480px] min-h-[212px] md:min-h-[280px] lg:min-h-[370px] xl:min-h-[450px] rounded-[20px]"
                src={imagetwo}
                alt=""
              />
              <p className="font-roboto font-semibold text-xl md:text-2xl lg:text-3xl leading-121 text-light_black mb-0 mt-2 lg:mt-4">
                Float Setup
              </p>
              <p className="font-dm font-normal text-base md:text-lg text-light_black leading-121 mb-0 mt-1 lg:mt-2.5">
                Rajasthan
              </p>
            </div>
          </div>
          <div className="w-full md:w-3/6 text-center md:text-start mt-5 md:mt-0 md:-translate-y-16">
            <div>
              <img
                className="w-full h-full xl:max-w-[663px] md:max-w-[355px] lg:max-w-[480px] min-h-[212px] md:min-h-[280px] lg:min-h-[370px] xl:min-h-[450px] rounded-[20px]"
                src={imagethree}
                alt=""
              />
              <p className="font-roboto font-semibold text-xl md:text-2xl lg:text-3xl leading-121 text-light_black mb-0 mt-2 lg:mt-4">
                Corporate Events
              </p>
              <p className="font-dm font-normal text-base md:text-lg text-light_black leading-121 mb-0 mt-1 lg:mt-2.5">
                Rohtak
              </p>
            </div>
          </div>
          <div className="w-full md:w-3/6 text-center md:text-start flex justify-end mt-5 md:mt-14 lg:mt-32 xl:mt-[183px]">
            <div>
              <img
                className="w-full xl:max-w-[663px] md:max-w-[355px] lg:max-w-[480px] min-h-[212px] md:min-h-[280px] lg:min-h-[370px] xl:min-h-[450px]"
                src={imagefour}
                alt=""
              />
              <p className="font-roboto font-semibold text-xl md:text-2xl lg:text-3xl leading-121 text-light_black mb-0 mt-2 lg:mt-4">
                Product Launch
              </p>
              <p className="font-dm font-normal text-base md:text-lg text-light_black leading-121 mb-0 mt-1 lg:mt-2.5">
                Haryana
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-center">
          <div className="md:hidden">
            <button className=" font-dm text-white text-[20px] font-normal bg-black rounded-full py-1.5 px-3 flex justify-center items-center gap-2.5 mt-[32px]">
              <a
                href=""
                className=" text-black bg-white py-1 px-3 rounded-full text-xl text-center"
              >
                >
              </a>
              Start your Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentShowcase;
