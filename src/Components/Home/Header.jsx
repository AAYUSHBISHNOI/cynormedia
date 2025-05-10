import React, { useEffect, useState } from "react";
import tata from "../../Assets/Images/Home/Svg/Tata-Logo.svg";
import Suzuki from "../../Assets/Images/Home/Svg/Suzuki-Logo.svg";
import Hero from "../../Assets/Images/Home/Svg/Hero-logo.svg";
import Jhondeere from "../../Assets/Images/Home/Svg/Jhon-Deere-Logo.svg";
import mainimg from "../../Assets/Images/Home/Webp/Hero-main-image.webp";
import dots from "../../Assets/Images/Home/Webp/Ornament-Dots.webp";
import eleipse_img from "../../Assets/Images/Home/Webp/Ellipse-Hero.webp";
import { Link } from "react-router-dom";
import { HomeEllipse } from "../Common.jsx/Icons";

const Header = () => {
  return (
    <div className="bg-[#161616] bg-Hero-bg bg-cover bg-center relative overflow-hidden">
      <img
        className="w-[183px] h-[193px] absolute top-[10%] hidden 2xl:flex"
        src={dots}
        alt=""
      />
      <div className="max-w-[1400px] mx-auto px-4 xl:pb-[110px] pt-[40px] pb-16 md:pt-[60px] md:pb-28 xl:pt-[90px]">
        <div className="lg:flex items-center">
          <div className="w-full lg:w-6/12 text-center lg:text-start items-center lg:items-start justify-center lg:justify-start flex flex-col">
            <h1 className=" font-roboto text-white text-[16px] md:text-[42px] lg:text-[32px] xl:text-[38px] 2xl:text-[39px] leading-110 lg:max-w-[600px] font-semibold mb-0">
              Welcome to Cynor Media India’s Trusted BTL Marketing Partner for
              Innovative On-Ground Brand Solutions.
            </h1>
            <p className="font-dm font-normal text-[14px] md:text-lg text-[#dedede] leading-121 mt-3 md:mt-4 xl:mt-6 md:max-w-[600px] lg:max-w-[432px] xl:max-w-[517px]">
              Great brands don’t just advertise, they connect. With powerful
              below-the-line marketing and all the other services that we
              provide, we turn your ideas into memorable moments that spark
              curiosity, loyalty, and attention. From eye-catching float van
              services to game-changing product launches and local market
              activations, we help you rise above the noise.
            </p>
            
            <div className="mt-3 md:mt-6 xl:mt-[43px]">
              <button
                className="font-dm text-black text-base md:text-[20px] font-normal bg-white rounded-full py-2 px-4 md:py-3 md:px-6 flex justify-center items-center gap-2.5"
                onClick={() =>
                  window.open("https://wa.me/+917988709158", "_blank")
                }
              >
                <a
                  href="#"
                  className="text-white bg-black py-1 px-3 rounded-full text-xl text-center"
                >
                  >
                </a>
                Start your Free Trial
              </button>
            </div>
            <div className="mt-3 md:mt-6 xl:mt-[53px]">
              <p className=" font-roboto font-semibold text-[20px] text-[#64CCC5]">
                Trusted by Leading Brands
              </p>
              <div className="flex items-center md:gap-5 xl:gap-6 mt-4 lg:mt-2">
                <div className=" w-2/4 md:w-1/4 lg:w-full">
                  <img
                    className="w-[50px] h-[46px]"
                    src={tata}
                    alt="Tata_logo"
                  />
                </div>
                <div className=" w-2/4 md:w-1/4 lg:w-full">
                  <img
                    className="w-[50px] h-[50px]"
                    src={Suzuki}
                    alt="Suzuki_logo"
                  />
                </div>
                <div className=" w-2/4 md:w-1/4 lg:w-full">
                  <img
                    className="w-[200px] h-[33px]"
                    src={Hero}
                    alt="Hero_logo"
                  />
                </div>
                <div className=" w-2/4 md:w-1/4 lg:w-full xl:ms-6">
                  <img
                    className="w-[80px] h-[54px]"
                    src={Jhondeere}
                    alt="Jhondeere_logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 mt-10 md:mt-20 lg:mt-0 flex justify-center">
            <div className="relative">
              <img
                className="w-[180px] md:w-[450px] lg:w-[420px] xl:w-[550px] md:h-[450px] lg:h-[420px] xl:h-[550px] lg:me-4 xl:me-0"
                src={mainimg}
                alt=""
              />
              <img
                className="absolute -top-[63%] md:-top-[62%] lg:-top-[61%] xl:-top-[63%] -right-[63%] md:-right-[62%] lg:-right-[54.5%] xl:-right-[63%] max-w-[408px] md:max-w-[1010px] lg:max-w-[930px] xl:max-w-[1250px] xl:min-h-[850px] "
                src={eleipse_img}
                alt=""
              />
            </div>
            {/* <div className="w-[450px] h-[450px] rounded-full bg-transparent custom-border"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
