import React from "react";
import imageone from "../../Assets/Images/OurClients/Png/Client-1.png";
import imagetwo from "../../Assets/Images/OurClients/Png/Client-2.png";
import imagethree from "../../Assets/Images/OurClients/Png/Client-3.png";
import imagefour from "../../Assets/Images/OurClients/Png/Client-4.png";
import imagefive from "../../Assets/Images/OurClients/Png/Client-5.png";
import imagesix from "../../Assets/Images/OurClients/Png/Client-6.png";
import imageseven from "../../Assets/Images/OurClients/Png/Client-7.png";
import imageseight from "../../Assets/Images/OurClients/Png/Client-8.png";

const HeaderOurClients = () => {
  return (
    <div className="pt-10 md:py-24">
      <div className=" max-w-[1440px] mx-auto px-4">
        <div className="bg-[#000] w-full h-full px-3 lg:px-48 py-10 lg:pb-40 lg:pt-20 rounded-2xl flex flex-col justify-center items-center">
          <h1 className="font-roboto font-bold xl:text-[77px] leading-121 text-white text-center">
            Our Clients
          </h1>
          <div className="flex flex-wrap justify-center xl:justify-between mt-5 xl:mt-32 sm:gap-[20px] md:gap-[30px] lg:gap-[20px] xl:gap-[80px]">
            <img className="w-[188px] h-[143px] invert" src={imageone} alt="" />
            <img
              className="w-[188px] invert h-[143px] mt-3 sm:mt-0"
              src={imagetwo}
              alt=""
            />
            <img
              className="w-[188px] invert h-[143px] mt-3 md:mt-0"
              src={imagethree}
              alt=""
            />
            <img
              className="w-[188px] invert h-[143px] mt-3 md:mt-0"
              src={imagefour}
              alt=""
            />

            <img
              className="w-[188px] invert h-[143px] mt-3 md:mt-0"
              src={imagefive}
              alt=""
            />
            <img
              className="w-[188px] invert h-[143px] mt-3 md:mt-0"
              src={imagesix}
              alt=""
            />
            <img
              className="w-[188px] invert h-[143px] mt-3 md:mt-0"
              src={imageseven}
              alt=""
            />
            <img
              className="w-[188px] invert h-[143px] mt-3 md:mt-0"
              src={imageseight}
              alt=""
            />
          </div>
          {/* <div className="flex flex-wrap">
            <div className="w-full md:w-1/3">
              <img className="w-[188px] h-[143px]" src={imageone} alt="" />
            </div>
            <div className="w-full md:w-1/3">
              <img className="w-[188px] h-[143px]" src={imageone} alt="" />
            </div>
            <div className="w-full md:w-1/3">
              <img className="w-[188px] h-[143px]" src={imageone} alt="" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderOurClients;
