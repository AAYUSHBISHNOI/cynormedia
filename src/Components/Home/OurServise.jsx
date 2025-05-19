import React from "react";
import {
  Btl,
  Corporateevents,
  Digital,
  DigitalMarket,
  Float,
  Pen,
  Pencil,
  Product,
  ProductLaunch,
  Web,
  WebDevelop,
} from "../Common.jsx/Icons";
import floatvan from "../../Assets/Images/Home/Gif/Float-Van.gif";
import digitalmarketing from "../../Assets/Images/Home/Gif/Digital-Marketing.gif";
import productlaunch from "../../Assets/Images/Home/Gif/Product-Launch.gif";
import webdevelopment from "../../Assets/Images/Home/Gif/Web-Development.gif";

const OurServise = () => {
  return (
    <div className=" relative">
      <div className=" absolute -bottom-[0.7%] md:-bottom-[4%] lg:-bottom-[6%] left-0 -z-10">
        <p className="font-roboto font-semibold text-[#e9e9e9] leading-150 text-[35px] sm:text-[40px] md:text-[98px] lg:text-[128px] xl:text-[180px]">
          CYNOR MEDIA
        </p>
      </div>
      <div className=" max-w-[1400px] mx-auto py-10 md:pt-[50px] md:pb-[80px] px-4">
        {/* <div className="circle_gradient_border w-[550px] h-[550px] rounded-full flex items-center justify-center">
          <div className="inner_circle w-full h-full rounded-full"></div>
        </div> */}
        <div className=" text-center flex flex-col justify-center items-center">
          <p className=" text-light_green font-semibold leading-130 font-roboto text-2xl md:text-3xl">
            Our Services
          </p>
          <h2 className="text-base sm:text-[26px] md:text-[32px] lg:text-[40px] font-roboto font-semibold leading-121 text-light_black max-w-[690px] md:max-w-[797px] text-center">
            Let your brand be seen, heard, and felt through our innovative
            services.
          </h2>
        </div>
        <div className="flex mt-4 xl:mt-[80px] flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-2/6 flex justify-center mt-6 md:mt-5 xl:mt-0">
            <div className="w-full max-w-[310px] md:max-w-[346px] lg:max-w-[308px] xl:max-w-[422px] text-center justify-center items-center flex flex-col md:text-start md:justify-start md:items-start h-full min-h-[300px] md:min-h-[272px] lg:min-h-[308px] xl:min-h-[416px] bg-[#f4f4f4] hover:bg-[#0c0c0c] group transition-all duration-500 ease-in-out rounded-[20px] px-[25px] xl:px-[35px] py-[25px] lg:py-[45px]">
              <Float />
              {/* <img
                className=" rounded-full h-[80px] w-[80px]"
                src={floatvan}
                alt=""
              /> */}
              <h4 className=" font-roboto text-[22px] md:text-[25px] font-medium leading-121 text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-5 xl:mt-[62px]">
                Float van services
              </h4>
              <p className=" font-dm text-base xl:text-lg leading-121 font-normal text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-1 xl:mt-[15px] max-w-[328px]">
                Let your brand take center stage with our Float Van services.
                From city streets to marketplaces, we create engaging, immersive
                experiences that drive attention, spark conversations, and build
                lasting brand recognition on the move.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/6 flex justify-center mt-6 md:mt-5 xl:mt-0">
            <div className="w-full max-w-[310px] md:max-w-[346px] lg:max-w-[308px] xl:max-w-[422px] text-center justify-center items-center flex flex-col md:text-start md:justify-start md:items-start h-full min-h-[300px] md:min-h-[272px] lg:min-h-[308px] xl:min-h-[416px] bg-[#f4f4f4] hover:bg-[#0c0c0c] group transition-all duration-500 ease-in-out rounded-[20px] px-[25px] xl:px-[35px] py-[25px] lg:py-[45px]">
              <Pen />
              <h4 className=" font-roboto text-[22px] md:text-[25px] font-medium leading-121 text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-5 xl:mt-[62px]">
                Market Setup
              </h4>
              <p className=" font-dm text-base xl:text-lg leading-121 font-normal text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-1 xl:mt-[15px] max-w-[308px]">
                Transform ordinary spaces into brand experiences with our custom
                Market Setups—featuring kiosks, live demos, and interactive
                engagements to boost visibility and connect with your audience.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/6 flex justify-center mt-6 md:mt-5 xl:mt-0">
            <div className="w-full max-w-[310px] md:max-w-[346px] lg:max-w-[308px] xl:max-w-[422px] text-center justify-center items-center flex flex-col md:text-start md:justify-start md:items-start h-full min-h-[300px] md:min-h-[272px] lg:min-h-[308px] xl:min-h-[416px] bg-[#f4f4f4] hover:bg-[#0c0c0c] group transition-all duration-500 ease-in-out rounded-[20px] px-[25px] xl:px-[35px] py-[25px] lg:py-[45px]">
              {/* <img
                className=" rounded-full h-[80px] w-[80px]"
                src={digitalmarketing}
                alt=""
              /> */}
              <DigitalMarket />
              <h4 className=" font-roboto text-[22px] md:text-[25px] font-medium leading-121 text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-5 xl:mt-[62px]">
                Digital Marketing
              </h4>
              <p className=" font-dm text-base xl:text-lg leading-121 font-normal text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-1 xl:mt-[15px] max-w-[328px]">
                From SEO to social media, our digital experts use data-driven
                strategies to grow followers, boost visibility, and generate
                leads—delivering the right content to the right audience, on the
                right platforms.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/6 flex justify-center mt-6 md:mt-5 xl:mt-[80px]">
            <div className="w-full max-w-[310px] md:max-w-[346px] lg:max-w-[308px] xl:max-w-[422px] text-center justify-center items-center flex flex-col md:text-start md:justify-start md:items-start h-full min-h-[300px] md:min-h-[272px] lg:min-h-[308px] xl:min-h-[416px] bg-[#f4f4f4] hover:bg-[#0c0c0c] group transition-all duration-500 ease-in-out rounded-[20px] px-[25px] xl:px-[35px] py-[25px] lg:py-[45px]">
              {/* <img
                className=" rounded-full h-[80px] w-[80px]"
                src={webdevelopment}
                alt=""
              /> */}
              <Corporateevents />
              <h4 className=" font-roboto text-[22px] md:text-[25px] font-medium leading-121 text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-5 xl:mt-[62px]">
                Corporate Events
              </h4>
              <p className=" font-dm text-base xl:text-lg leading-121 font-normal text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-1 xl:mt-[15px] max-w-[378px]">
                We deliver seamless corporate events that align with your brand,
                from meetings to large conferences, ensuring flawless execution
                and strong engagement.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/6 flex justify-center mt-6 md:mt-5 xl:mt-[80px]">
            <div className="w-full max-w-[310px] md:max-w-[346px] lg:max-w-[308px] xl:max-w-[422px] text-center justify-center items-center flex flex-col md:text-start md:justify-start md:items-start h-full min-h-[300px] md:min-h-[272px] lg:min-h-[308px] xl:min-h-[416px] bg-[#f4f4f4] hover:bg-[#0c0c0c] group transition-all duration-500 ease-in-out rounded-[20px] px-[25px] xl:px-[35px] py-[25px] lg:py-[45px]">
              <Btl />
              <h4 className=" font-roboto text-[22px] md:text-[25px] font-medium leading-121 text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-5 xl:mt-[62px]">
                BTL Marketing
              </h4>
              <p className=" font-dm text-base xl:text-lg leading-121 font-normal text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-1 xl:mt-[15px] max-w-[408px]">
                Our BTL marketing services create tangible engagement through
                market activations, street campaigns, and live demos, bringing
                your brand to life with creative, face-to-face strategies.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/6 flex justify-center mt-6 md:mt-5 xl:mt-[80px]">
            <div className="w-full max-w-[310px] md:max-w-[346px] lg:max-w-[308px] xl:max-w-[422px] text-center justify-center items-center flex flex-col md:text-start md:justify-start md:items-start h-full min-h-[300px] md:min-h-[272px] lg:min-h-[308px] xl:min-h-[416px] bg-[#f4f4f4] hover:bg-[#0c0c0c] group transition-all duration-500 ease-in-out rounded-[20px] px-[25px] xl:px-[35px] py-[25px] lg:py-[45px]">
              {/* <img
                className=" rounded-full h-[80px] w-[80px]"
                src={productlaunch}
                alt=""
              /> */}
              <ProductLaunch />
              <h4 className=" font-roboto text-[22px] md:text-[25px] font-medium leading-121 text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-5 xl:mt-[62px]">
                Product Launch
              </h4>
              <p className=" font-dm text-base xl:text-lg leading-121 font-normal text-[#0c0c0c] group-hover:text-[#fff] transition-all duration-500 ease-in-out mb-0 mt-1 xl:mt-[15px] max-w-[310px]">
                Our BTL marketing and product launch services showcase your
                brand with immersive setups, strategic promotions, and memorable
                audience experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServise;
