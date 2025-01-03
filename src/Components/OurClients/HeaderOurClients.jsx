import React from "react";
import imageone from "../../Assets/Images/OurClients/Png/Client-1.png";
import imagetwo from "../../Assets/Images/OurClients/Png/Client-2.png";
import imagethree from "../../Assets/Images/OurClients/Png/Client-3.png";
import imagefour from "../../Assets/Images/OurClients/Png/Client-4.png";
import imagefive from "../../Assets/Images/OurClients/Png/Client-5.png";
import imagesix from "../../Assets/Images/OurClients/Png/Client-6.png";

const HeaderOurClients = () => {
  return (
    <div className="py-24">
      <div className=" max-w-[1440px] mx-auto px-4">
        <div className="bg-[#0c0c0c] w-full h-full px3 lg:px-48 pb-40 pt-20 rounded-2xl">
          <h1 className="font-roboto font-bold xl:text-[77px] leading-121 text-white text-center">
            Our Clients
          </h1>
          <div className="flex flex-wrap justify-between mt-32">
            <img className="w-[188px] h-[143px]" src={imageone} alt="" />
            <img className="w-[188px] h-[143px]" src={imagetwo} alt="" />
            <img className="w-[188px] h-[143px]" src={imagethree} alt="" />
          </div>
          <div className="flex flex-wrap justify-between mt-[88px]">
            <img className="w-[188px] h-[143px]" src={imagefour} alt="" />
            <img className="w-[188px] h-[143px]" src={imagefive} alt="" />
            <img className="w-[188px] h-[143px]" src={imagesix} alt="" />
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
