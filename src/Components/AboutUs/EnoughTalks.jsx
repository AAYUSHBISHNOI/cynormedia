import React from "react";

const EnoughTalks = () => {
  return (
    <div className="py-10 md:py-12 xl:py-[100px]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="bg-Enough-bg bg-cover bg-center rounded-3xl h-[150px] md:h-[209px] flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h3 className="font-roboto font-semibold text-lg md:text-[25px] xl:text-[45px] text-white leading-121">
              Enough talk, let’s get to work
            </h3>
            <a
              href="mailto:info@cynormedia.com"
              className="font-dm font-normal text-base text-light_black leading-121 bg-white py-[14px] px-6 rounded-full mt-4 lg:mt-[34px]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnoughTalks;
