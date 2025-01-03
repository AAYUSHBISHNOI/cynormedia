import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { SliderArrow } from "../Common.jsx/Icons";

const WhatOurClients = () => {
  useEffect(() => {
    const nextButton = document.querySelector(".custom-next");
    const prevButton = document.querySelector(".custom-prev");

    if (nextButton && prevButton) {
      nextButton.classList.remove("swiper-button-disabled");
      prevButton.classList.remove("swiper-button-disabled");
    }
  }, []);
  return (
    <div className="py-20 max-w-[1420px] 2xl:max-w-[1740px] mx-auto relative">
      <div className="flex">
        <div className=" bg-white mx-auto max-w-[720px] 2xl:max-w-[645px]">
          <h2 className="font-roboto font-semibold text-[26px] md:text-[32px] lg:text-[40px] xl:text-[64px] text-light_black leading-12">
            What our clients say
          </h2>
          <div className="flex">
            <button className="custom-prev w-[40px] h-[40px] cursor-pointer z-20 flex items-center justify-center rotate-180">
              <SliderArrow />
            </button>
            <button className="custom-next w-[40px] h-[40px] cursor-pointer z-20 flex items-center justify-center">
              <SliderArrow />
            </button>
          </div>
        </div>
        <div className=" bg-[#000000] h-[742px] max-w-[720px] 2xl:max-w-[795px]">
          <div>
            <Swiper
              loop={true}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              modules={[Navigation]}
              className="mySwiper"
              style={{ width: "100%", height: "100%" }}
            >
              <SwiperSlide>
                <div className="w-full h-full max-w-[671px] min-h-[428px] rounded-xl bg-[#fbfbfb]"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center h-full">
                  <h2 className="font-roboto font-semibold text-[15px] md:text-[19px] lg:text-[21px] xl:text-[25px] leading-140 text-light_black max-w-[1282px] mb-0 mt-5 md:mt-[35px]">
                    "Ramniwas Bishnoi, Co-Founder of Cynor Media, brings
                    expertise to the agency, focusing on client satisfaction and
                    impactful results. With a keen eye for innovation, he drives
                    strategic marketing initiatives and design solutions that
                    transform brands."
                  </h2>
                  <h4 className="font-roboto font-semibold text-xl leading-121 text-light_black mb-0 mt-2 md:mt-5">
                    Ramniwas Bishnoi
                  </h4>
                  <p className="font-dm font-normal text-base text-light_black leading-121 mt-1.5 mb-14">
                    Co-Founder
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatOurClients;
