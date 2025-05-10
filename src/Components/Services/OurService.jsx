import React from "react";

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

      <div className="relative max-w-[1400px] mx-auto px-4 flex flex-col h-[30vh] lg:h-screen justify-center items-center text-center">
        <h1 className="font-roboto font-bold text-[40px] lg:text-[77px] leading-121 text-white">
          Our Services
        </h1>
        <p className="font-roboto font-normal text-base lg:text-2xl xl:text-[26px] leading-121 text-white text-center xl:mt-3 max-w-[626px]">
          Discover the range of services designed to help your brand leave a
          lasting impression
        </p>
      </div>
    </div>
  );
};

export default OurService;
