import React from "react";
import Footerlogo from "../../Assets/Images/Home/Png/Hero-logo.png";
import tata from "../../Assets/Images/Home/Svg/Tata-Logo.svg";
import hero from "../../Assets/Images/Home/Svg/Hero-logo.svg";
import jhondeere from "../../Assets/Images/Home/Svg/Jhon-Deere-Logo.svg";
import maruti from "../../Assets/Images/Home/Svg/Suzuki-Logo.svg";
import { Facebook, Instagram, Linkdin } from "../Common.jsx/Icons";

const Footer = () => {
  return (
    <div className="bg-[#0c0c0c] py-10 md:pt-[100px] md:pb-[60px]">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-[55%] lg:w-[40%]">
            <img className="w-[150px] h-[45px]" src={Footerlogo} alt="" />
            <p className="font-dm font-normal text-base md:text-lg leading-121 text-white mb-0 mt-3 md:mt-6 max-w-[457px] md:max-w-[357px] xl:max-w-[457px]">
              Cynor Media Pvt. Ltd. in Chandigarh provides comprehensive brand
              promotion services, specializing in events, launches, and
              exhibitions, with over five years of experience delivering
              memorable results.
            </p>
          </div>
          <div className="w-full md:w-[20%] lg:w-[15%] xl:w-[15%] mt-5 md:mt-0">
            <ul>
              <li className="font-roboto font-semibold text-xl leading-121 text-white">
                Pages
              </li>
              <li className="mb-0 mt-2 md:mt-6">
                <a
                  href=""
                  className="font-dm font-normal text-base text-white leading-121"
                >
                  Home
                </a>
              </li>
              <li className="mb-0 mt-1 md:mt-4">
                <a
                  href=""
                  className="font-dm font-normal text-base text-white leading-121"
                >
                  About Us
                </a>
              </li>
              <li className="mb-0 mt-1 md:mt-4">
                <a
                  href=""
                  className="font-dm font-normal text-base text-white leading-121"
                >
                  Our Clients
                </a>
              </li>
              <li className="mb-0 mt-1 md:mt-4">
                <a
                  href=""
                  className="font-dm font-normal text-base text-white leading-121"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-[25%] lg:w-[20%] xl:w-[20%] mt-5 md:mt-0">
            <ul>
              <li className="font-roboto font-semibold text-xl leading-121 text-white">
                Services
              </li>
              <li className="mb-0 mt-2 md:mt-6">
                <a
                  href=""
                  className="font-dm font-normal text-base text-white leading-121"
                >
                  Float Van Campaign
                </a>
              </li>
              <li className="mb-0 mt-1 md:mt-4">
                <a
                  href=""
                  className="font-dm font-normal text-base text-white leading-121"
                >
                  Market Setup
                </a>
              </li>
              <li className="mb-0 mt-1 md:mt-4">
                <a
                  href=""
                  className="font-dm font-normal text-base text-white leading-121"
                >
                  Digital Marketing
                </a>
              </li>
              <li className="mb-0 mt-1 md:mt-4">
                <a
                  href=""
                  className="font-dm font-normal text-base text-white leading-121"
                >
                  Btl Marketing
                </a>
              </li>
              <li className="mb-0 mt-1 md:mt-4">
                <a
                  href=""
                  className="font-dm font-normal text-base text-white leading-121"
                >
                  Web Development
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-[25%] xl:w-[25%] mt-5 lg:mt-0">
            <ul>
              <li className="font-roboto font-semibold text-xl leading-121 text-white">
                Trusted By
              </li>
              <li className="flex justify-center items-center gap-4 mt-4">
                <li className="w-[80px]">
                  <a href="">
                    <img src={tata} alt="" />
                  </a>
                </li>
                <li className="w-[150px] flex justify-center items-center">
                  <a href="">
                    <img src={hero} alt="" />
                  </a>
                </li>
                <li className="w-[150px] flex justify-center items-center">
                  <a href="">
                    <img src={jhondeere} alt="" />
                  </a>
                </li>
              </li>
              <li className="flex lg:justify-center lg:items-center gap-4 mt-4">
                <li className="w-[80px]">
                  <a href="">
                    <img src={maruti} alt="" />
                  </a>
                </li>
                <li className="w-[80px] flex justify-center items-center">
                  <a href="">
                    <img src={tata} alt="" />
                  </a>
                </li>
                <li className="w-[150px] flex justify-center items-center">
                  <a href="">
                    <img src={hero} alt="" />
                  </a>
                </li>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-[2px] bg-[#696969] mt-10 md:mt-[101px] mb-[29px]"></div>
        <div className="flex flex-wrap justify-between">
          <div>
            <p className="font-roboto font-semibold text-xl leading-121 text-white">
              Copyright by
            </p>
            <p className="font-dm font-normal text-base text-white leading-121 mb-0 mt-2 md:mt-4">
              Designed by Iconstica.com
            </p>
          </div>
          <ul className="mt-4 lg:mt-0">
            <li className="font-roboto font-semibold text-xl leading-121 text-white mb-0">
              Contact Us
            </li>
            <li className=" mb-0 mt-2 md:mt-4">
              <a
                href="tel:+91"
                className="font-dm font-normal text-base text-white leading-121"
              >
                +0 12 457 4578
              </a>
            </li>
          </ul>
          <div className="mt-4 lg:mt-0">
            <p className="font-roboto font-semibold text-xl leading-121 text-white">
              Address
            </p>
            <p className="font-dm font-normal text-[15px] md:text-base text-white leading-121 mb-0 mt-2 md:mt-4">
              119 Tanglewood Lane Gulfport, MS 39503
            </p>
          </div>
          <div className="flex gap-[29px] mt-4 lg:mt-0">
            <Instagram />
            <Facebook />
            <Linkdin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
