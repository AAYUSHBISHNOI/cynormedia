import React from "react";
import imageone from "../../Assets/Images/OurClients/Png/Tata.png";
import imagetwo from "../../Assets/Images/OurClients/Png/Maruti-Suzuki.png";
import imagethree from "../../Assets/Images/OurClients/Png/Hero.png";
import imagefour from "../../Assets/Images/OurClients/Svg/Tafe.svg";
import imagefive from "../../Assets/Images/OurClients/Png/Tvs.png";
import imagesix from "../../Assets/Images/OurClients/Png/Kubota.png";
import imageseven from "../../Assets/Images/OurClients/Png/rJhon-Deere.png";
import imageseight from "../../Assets/Images/OurClients/Png/Epson.png";

const HeaderOurClients = () => {
  return (
    <div className="pt-10 md:py-24">
      <div className=" max-w-[1440px] mx-auto px-4">
        <div className="bg-[#000] w-full h-full px-3 lg:px-48 py-10 lg:pb-40 lg:pt-20 rounded-2xl flex flex-col justify-center items-center">
          <h1 className="font-roboto font-bold text-[26px] md:text-[32px] lg:text-[40px] xl:text-[77px] leading-121 text-white text-center">
            Our Clients
          </h1>
          <div className="flex flex-wrap justify-center items-center md:justify-between xl:justify-between mt-10 xl:mt-32 gap-10 sm:gap-[20px] md:gap-[30px] lg:gap-[40px] xl:gap-[100px]">
            <div>
              <img
                className="w-full h-full max-w-[145px] lg:max-w-[120px] xl:max-w-[145px] min-h-[90px]"
                src={imageone}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-full max-w-[145px] lg:max-w-[120px] xl:max-w-[145px] min-h-[90px]"
                src={imagetwo}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-full max-w-[145px] lg:max-w-[120px] xl:max-w-[145px] min-h-[90px]"
                src={imageseven}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-full max-w-[145px] lg:max-w-[120px] xl:max-w-[145px] min-h-[90px]"
                src={imagethree}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-full max-w-[145px] lg:max-w-[120px] xl:max-w-[145px] min-h-[90px]"
                src={imagefour}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-full max-w-[145px] lg:max-w-[120px] xl:max-w-[145px] min-h-[40px] mt-3"
                src={imagefive}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-full max-w-[145px] lg:max-w-[120px] xl:max-w-[145px] min-h-[40px] mt-3"
                src={imagesix}
                alt=""
              />
            </div>

            <div>
              <img
                className="w-full h-full max-w-[145px] lg:max-w-[120px] xl:max-w-[145px] min-h-[40px] mt-3"
                src={imageseight}
                alt=""
              />
            </div>
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
