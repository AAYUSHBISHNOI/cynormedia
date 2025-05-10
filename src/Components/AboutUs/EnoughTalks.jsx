import React from "react";

const EnoughTalks = () => {
  return (
    <div className="py-10 md:py-12 xl:py-[100px]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="bg-Enough-bg bg-cover bg-center rounded-3xl h-[150px] md:h-[209px] flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h3 className="font-roboto font-semibold text-base md:text-[25px] xl:text-[35px] text-white leading-121 max-w-[855px] text-center">
              Let’s turn your brand into an experience they’ll never forget-
              connect with us now!
            </h3>
            <a
              href="mailto:info@cynormedia.com"
              className="font-dm font-normal text-base text-light_black leading-121 bg-white py-[14px] px-6 rounded-full mt-4 lg:mt-[14px]"
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
