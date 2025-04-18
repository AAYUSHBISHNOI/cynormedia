import React from "react";
import gears from "../../Assets/Images/Services/Gifs/Gears-1.gif";

const OurService = () => {
  return (
    <div className="relative bg-Service-bg bg-cover bg-center">
      {/* <img
        className="w-[750px] h-[750px] absolute  bottom-0"
        src={gears}
        alt=""
      /> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative max-w-[1440px] mx-auto px-4 flex h-[30vh] lg:h-screen justify-center items-center text-center">
        <h1 className="font-roboto font-bold text-[40px] lg:text-[77px] leading-121 text-white">
          Our Services
        </h1>
      </div>
    </div>
  );
};

export default OurService;
