import React from "react";
import imageone from "../../Assets/Images/About-Us/Webp/Team-1.webp";
import imagetwo from "../../Assets/Images/About-Us/Webp/Team-2.webp";
import { FacebookTeam, InstagramTeam, LinkTeam } from "../Common.jsx/Icons";

const OurTeam = () => {
  return (
    <div className="pt-10 md:pt-[77px] pb-20 lg:pb-40">
      <div className=" max-w-[1400px] mx-auto px-4 text-center lg:text-start">
        <h2 className="font-roboto font-semibold text-[26px] md:text-[32px] lg:text-[40px] xl:text-[64px] text-light_black leading-121 text-center">
          Our team
        </h2>
        <div className="flex flex-wrap justify-center mt-5 lg:mt-10 xl:mt-20">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="relative group w-full max-w-[419px] md:max-w-[350px] lg:max-w-[310px] xl:max-w-[419px] h-full min-h-[400px] md:min-h-[500px] lg:min-h-[430px]">
              {/* Icons */}
              <div className="absolute right-[15px] top-[15px] transition duration-1000 z-30 flex gap-5 items-center opacity-0 group-hover:opacity-100">
                <FacebookTeam />
                <InstagramTeam />
                <LinkTeam />
              </div>

              {/* Image */}
              <img
                className="w-full h-full object-cover rounded-3xl"
                src={imageone}
                alt="Descriptive Alt Text"
              />
              <h3 className="font-semibold font-roboto text-xl text-light_black leading-121 mt-4">
                Nagina Bishnoi
              </h3>
              <p className="font-dm font-normal text-base text-light_black leading-121 mt-2.5">
                Digital Head
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mt-24 md:mt-0">
            <div className="relative group w-full max-w-[419px] md:max-w-[350px] lg:max-w-[310px] xl:max-w-[419px] h-full min-h-[400px] md:min-h-[500px] lg:min-h-[430px]">
              {/* Icons */}
              <div className="absolute right-[15px] top-[15px] transition duration-700 z-30 flex gap-5 items-center  opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <FacebookTeam />
                <InstagramTeam />
                <LinkTeam />
              </div>

              {/* Image */}
              <img
                className="w-full h-full object-cover rounded-3xl"
                src={imagetwo}
                alt="Descriptive Alt Text"
              />
              <h3 className="font-semibold font-roboto text-xl text-light_black leading-121 mt-4">
                Ramniwas Bishnoi
              </h3>
              <p className="font-dm font-normal text-base text-light_black leading-121 mt-2.5">
                Opretion Head
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mt-24 lg:mt-0">
            <div className="relative group w-full max-w-[419px] md:max-w-[350px] lg:max-w-[310px] xl:max-w-[419px] h-full min-h-[400px] md:min-h-[500px] lg:min-h-[430px]">
              {/* Icons */}
              <div className="absolute right-[15px] top-[15px] transition duration-700 z-30 flex gap-5 items-center  opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <FacebookTeam />
                <InstagramTeam />
                <LinkTeam />
              </div>

              {/* Image */}
              <img
                className="w-full h-full object-cover rounded-3xl"
                src={imagetwo}
                alt="Descriptive Alt Text"
              />
              <h3 className="font-semibold font-roboto text-xl text-light_black leading-121 mt-4">
                Amit Bishnoi
              </h3>
              <p className="font-dm font-normal text-base text-light_black leading-121 mt-2.5">
                Reporting Head
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
