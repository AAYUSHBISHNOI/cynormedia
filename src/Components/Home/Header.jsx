import React, { useEffect, useState } from "react";
import Logo from "../../Assets/Images/Home/Png/Hero-logo.png";
import tata from "../../Assets/Images/Home/Svg/Tata-Logo.svg";
import Suzuki from "../../Assets/Images/Home/Svg/Suzuki-Logo.svg";
import Hero from "../../Assets/Images/Home/Svg/Hero-logo.svg";
import Jhondeere from "../../Assets/Images/Home/Svg/Jhon-Deere-Logo.svg";
import mainimg from "../../Assets/Images/Home/Png/Hero-main-image.png";
import dots from "../../Assets/Images/Home/Png/Ornament-Dots.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#161616] bg-Hero-bg bg-cover bg-center relative">
      <img
        className="w-[183px] h-[193px] absolute top-[10%] hidden 2xl:flex"
        src={dots}
        alt=""
      />
      <div className="max-w-[1440px] mx-auto px-4 xl:pb-[110px] py-[40px] md:py-[60px] xl:pt-[90px]">
        <div className="lg:flex items-center">
          <div className="w-full lg:w-6/12 text-center lg:text-start items-center lg:items-start justify-center lg:justify-start flex flex-col">
            <h1 className=" font-roboto text-white text-[27px] md:text-[42px] lg:text-[32px] xl:text-[56px] leading-110 lg:max-w-[600px] font-semibold mb-0">
              We Ignite Bold Ideas Through Dynamic Brainstorming, Elevating Your
              Brand to New Heights
            </h1>
            <p className="font-dm font-normal text-[16px] md:text-lg text-[#dedede] leading-121 mt-3 md:mt-4 xl:mt-6 md:max-w-[600px] lg:max-w-[432px] xl:max-w-[517px]">
              Unlock your brand's full potential with us. Our collaborative
              approach combines creative vision with data-driven insights,
              delivering tailored marketing solutions that spark meaningful
              connections and drive business growth.
            </p>
            <div className="mt-3 md:mt-6 xl:mt-[43px]">
              <button className=" font-dm text-black text-[20px] font-normal bg-white rounded-full py-3 px-6 flex justify-center items-center gap-2.5">
                <a
                  href=""
                  className=" text-white bg-black py-1 px-3 rounded-full text-xl text-center"
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
          <div className="w-full lg:w-6/12 mt-10 flex justify-center">
            <img
              className="md:w-[520px] lg:w-[480px] xl:w-[720px] md:h-[535px] lg:h-[480px] xl:h-[735px]"
              src={mainimg}
              alt=""
            />

            {/* <div className="w-[450px] h-[450px] rounded-full bg-transparent custom-border"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
