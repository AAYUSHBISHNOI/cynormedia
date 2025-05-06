import React from "react";
import Footerlogo from "../../Assets/Images/Home/Svg/Footer-Logo.svg";
import tata from "../../Assets/Images/Home/Svg/Tata-Logo.svg";
import hero from "../../Assets/Images/Home/Svg/Hero-logo.svg";
import jhondeere from "../../Assets/Images/Home/Svg/Jhon-Deere-Logo.svg";
import maruti from "../../Assets/Images/Home/Svg/Suzuki-Logo.svg";
import epson from "../../Assets/Images/OurClients/Webp/Epson.webp";
import kubota from "../../Assets/Images/OurClients/Webp/Kubota.webp";
import { Facebook, Instagram, Linkdin } from "../Common.jsx/Icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#0c0c0c] py-10 md:pt-14 lg:pt-[100px] md:pb-[60px]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-[55%] lg:w-[40%]">
            <div className="flex items-center gap-2">
              <a href="" className="flex items-center gap-2">
                <img className="" src={Footerlogo} alt="" />
                <p className=" font-roboto font-semibold text-[20px] text-white mb-0">
                  Cynor Media
                </p>
              </a>
            </div>
            <p className="font-dm font-normal text-base md:text-lg leading-121 text-white mb-0 mt-3 md:mt-6 max-w-[457px] md:max-w-[357px] xl:max-w-[457px]">
              Cynor Media Pvt. Ltd. in Chandigarh provides comprehensive brand
              promotion services, specializing in events, launches, and
              exhibitions, with over five years of experience delivering
              memorable results.
            </p>
            <div className="flex gap-[29px] mt-4">
              <a
                href="https://www.instagram.com/cynor.media/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
              <a
                href="https://www.facebook.com/cynormedia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
              <a
                href="https://in.linkedin.com/company/cynormedia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkdin />
              </a>
            </div>
          </div>
          <div className="w-full md:w-[20%] lg:w-[15%] xl:w-[15%] mt-5 md:mt-0">
            {/* <ul className="">
              {[
                { name: "Home", path: "/" },
                { name: "Service", path: "/service" },
                { name: "About Us", path: "/about-us" },
                { name: "Our Clients", path: "/our-clients" },
                { name: "Contact Us", path: "/contact-us" },
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul> */}
            <ul>
              <li className="font-roboto font-semibold text-xl leading-121 text-white">
                Pages
              </li>
              <li className="mb-0 mt-2 md:mt-6">
                <a
                  href="/"
                  className="font-dm font-normal text-base text-white leading-121"
                >
                  Home
                </a>
              </li>
              <li className="mb-0 mt-2 md:mt-6">
                <a
                  href="/Service"
                  className="font-dm font-normal text-base text-white leading-121"
                >
                  Service
                </a>
              </li>
              <li className="mb-0 mt-1 md:mt-4">
                <a
                  href="/about-us"
                  className="font-dm font-normal text-base text-white leading-121"
                >
                  About Us
                </a>
              </li>
              <li className="mb-0 mt-1 md:mt-4">
                <a
                  href="/our-clients"
                  className="font-dm font-normal text-base text-white leading-121"
                >
                  Our Clients
                </a>
              </li>
              <li className="mb-0 mt-1 md:mt-4">
                <a
                  href="/contact-us"
                  className="font-dm font-normal text-base text-white leading-121"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-[25%] lg:w-[20%] xl:w-[20%] mt-5 md:mt-0 flex lg:justify-center">
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
          <div className="w-full md:w-1/2 lg:w-[25%] xl:w-[25%] mt-5 lg:mt-0 flex lg:justify-end">
            <div>
              <p className="font-roboto font-semibold text-xl leading-121 text-white">
                Trusted By
              </p>
              <div className="flex gap-6 mt-4 justify-start items-center">
                <img
                  className="w-[60px] lg:w-[70px] xl:w-[90px] h-[80px]"
                  src={tata}
                  alt=""
                />
                <img
                  className="w-[60px] lg:w-[70px] xl:w-[100px] h-[80px]"
                  src={jhondeere}
                  alt=""
                />
                <img
                  className="w-[60px] lg:w-[70px] xl:w-[100px] h-[80px]"
                  src={maruti}
                  alt=""
                />
              </div>
              <div className="flex items-center gap-6 mt-4">
                <img
                  className="w-[60px] lg:w-[70px] xl:w-[100px] h-full"
                  src={epson}
                  alt=""
                />
                <img
                  className="w-[60px] lg:w-[70px] xl:w-[100px] h-full"
                  src={hero}
                  alt=""
                />
                <img
                  className="w-[60px] lg:w-[70px] xl:w-[100px] h-full"
                  src={kubota}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[2px] bg-[#696969] mt-10 md:mt-14 lg:mt-[101px] mb-[29px]"></div>
        <div className="flex flex-wrap justify-between">
          <div>
            <p className="font-roboto font-semibold text-xl leading-121 text-white">
              Copyright by
            </p>
            <p className="font-dm font-normal text-base text-white leading-121 mb-0 mt-2 md:mt-4">
              Cynor Media
            </p>
          </div>
          <ul className="mt-4 xsm:mt-0">
            <li className="font-roboto font-semibold text-xl leading-121 text-white mb-0">
              Contact Us
            </li>
            <li className=" mb-0 mt-2 md:mt-4">
              <a
                href="tel:+91"
                className="font-dm font-normal text-base text-white leading-121"
              >
                +91 89013 99629
              </a>
            </li>
          </ul>
          <div className="mt-4 md:mt-0">
            <p className="font-roboto font-semibold text-xl leading-121 text-white">
              Address
            </p>
            <p className="font-dm font-normal text-[15px] md:text-base text-white leading-121 mb-0 mt-2 md:mt-4">
              Opposite Nabha Sahib Gurudwara, VIP road Zirakpur, Punjab, 140603
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
