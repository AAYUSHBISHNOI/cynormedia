import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { SliderArrow } from "../Common.jsx/Icons";
import amit_bishnoi from "../../Assets/Images/Home/Webp/Amit-Bishnoi.webp";
import sliderone from "../../Assets/Images/Home/Webp/Co-Founder.webp";

const Slider = () => {
  useEffect(() => {
    const nextButton = document.querySelector(".custom-next");
    const prevButton = document.querySelector(".custom-prev");

    if (nextButton && prevButton) {
      nextButton.classList.remove("swiper-button-disabled");
      prevButton.classList.remove("swiper-button-disabled");
    }
  }, []);

  return (
    <div className="pb-10 md:pb-[103px] pt-[25px]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="w-full h-[560px] bg-[#f4f4f4] rounded-3xl text-center flex flex-col justify-center items-center p-[15px] sm:p-[20px] md:p-[45px] relative">
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
              <div className="flex flex-col items-center justify-center h-full">
                <img
                  className="w-[100px] md:w-[120px] lg:w-[140px] h-[100px] md:h-[120px] lg:h-[140px] rounded-full"
                  src={amit_bishnoi}
                  alt=""
                />
                <h2 className="font-roboto font-semibold text-[15px] md:text-[19px] lg:text-[21px] xl:text-[25px] leading-140 text-light_black max-w-[1282px] mb-0 mt-5 md:mt-[15px]">
                  “At Cynor Media, we don’t just market, we spark movements."
                </h2>
                <h3 className="font-roboto font-medium text-[15px] md:text-[19px] lg:text-[21px] xl:text-[25px] leading-140 text-light_black max-w-[1182px] mb-0 mt-5 md:mt-2">
                  We go beyond traditional advertising. It’s about putting out
                  messages or running generic campaigns. Instead, it’s about
                  inspiring action, creating emotional connections, and building
                  a community around the brand. We think of it as turning a
                  brand campaign into a cultural moment.
                </h3>
                <h4 className="font-roboto font-semibold text-xl leading-121 text-light_black mb-0 mt-2 md:mt-5">
                  Amit Bishnoi
                </h4>
                <p className="font-dm font-normal text-base text-light_black leading-121 mt-1.5 mb-14">
                  CEO
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center h-full">
                <img
                  className="w-[100px] md:w-[120px] lg:w-[140px] h-[100px] md:h-[120px] lg:h-[140px]"
                  src={sliderone}
                  alt=""
                />
                <h2 className="font-roboto font-medium text-[15px] md:text-[19px] lg:text-[21px] xl:text-[25px] leading-140 text-light_black max-w-[1182px] mb-0 mt-5 md:mt-[15px]">
                  This journey started with a passion to break the mold in
                  marketing. Today, every success story we create at Cynor Media
                  is a personal milestone and just the beginning. We believe
                  great marketing isn’t just about visibility; it’s about
                  creating value through experiences that people remember and
                  our clients are proud of.
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
          {/* Custom arrows */}
          <button className="custom-prev w-[40px] h-[40px] absolute bottom-5 md:bottom-10 left-[35%] md:left-[43%] lg:left-[45%] xl:left-[46.5%] cursor-pointer z-20 flex items-center justify-center rotate-180">
            <SliderArrow />
          </button>
          <button className="custom-next w-[40px] h-[40px] absolute bottom-5 md:bottom-10 right-[35%] md:right-[43%] lg:right-[45%] xl:right-[46.5%] cursor-pointer z-20 flex items-center justify-center">
            <SliderArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
