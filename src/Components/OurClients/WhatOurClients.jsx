import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Comma, SliderArrowAbout } from "../Common.jsx/Icons";
import manish from "../../Assets/Images/OurClients/Webp/Manish.webp";
import star_image from "../../Assets/Images/OurClients/Svg/Star.svg";
import Sandy from "../../Assets/Images/OurClients/Webp/Sandy-Bishnoi.webp";
import rocky from "../../Assets/Images/OurClients/Webp/Rocky.webp";
import akash from "../../Assets/Images/OurClients/Webp/Aakash.webp";
import gulam from "../../Assets/Images/OurClients/Webp/Gulam.webp";
import vipin from "../../Assets/Images/OurClients/Webp/Vipin.webp";
import gurmesh from "../../Assets/Images/OurClients/Webp/Gurmesh.webp";

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
    <div className="pt-10 md:pt-4 pb-5 md:pb-0 mx-auto overflow-hidden">
      <div className="max-w-[1320px] px-4 mx-auto">
        <div className="flex flex-wrap justify-center md:justify-between items-center md:items-start">
          <h1 className="font-roboto font-semibold text-center text-[26px] md text-base:lg:text-[32px] lg:text-[40px] xl:text-[64px] text-light_black leading-121">
            What our clients say
          </h1>
          <div className="flex gap-4 mt-4">
            <button className="custom-prev  cursor-pointer z-20">
              <SliderArrowAbout />
            </button>
            <button className="custom-next  cursor-pointer z-20 rotate-180">
              <SliderArrowAbout />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center md:pt-5">
        <Swiper
          slidesPerView={1.1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 1.4,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1490: {
              slidesPerView: 2.6,
              spaceBetween: 10,
            },
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="pb-7 lg:pb-16">
            <div className="w-full max-w-[300px] lg:max-w-[671px] h-full min-h-[280px] lg:min-h-[428px] shadow-xl bg-[#fff] px-3 lg:px-[36px] py-[33px] rounded-2xl hover:shadow-2xl ">
              <div className="flex items-center gap-2 lg:gap-7">
                <img
                  className="w-[50px] lg:w-[100px] h-[50px] lg:h-[100px]"
                  src={manish}
                  alt="best btl marketing campaigns"
                />
                <div className=" flex justify-between gap-6">
                  <div>
                    <p className="font-roboto font-bold text-base lg:text-[32px] leading-121 text-[#0a0338] mb-0">
                      Manish Kumar
                    </p>
                    <div className="flex items-center gap-4">
                      <p className="font-roboto font-bold text-base lg:text-[32px] leading-121 text-[#0a0338] mb-0">
                        5
                      </p>
                      <img
                        className="w-[80px]"
                        src={star_image}
                        alt="atl btl marketing campaigns"
                      />
                    </div>
                  </div>
                  <Comma />
                </div>
              </div>
              <p className="font-dm font-normal text-base lg:text-2xl leading-121 text-[#0c0c0c] max-w-[530px] mt-3 lg:mt-9 mb-0">
                The company is very good, I enjoyed working in it. I am
                currently working in Hero for advertising work and I am working
                in Ghaziabad during the Diwali week. I would like to thank the
                owner of this company very much.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-7 lg:pb-16">
            <div className="w-full max-w-[300px] lg:max-w-[671px] h-full min-h-[280px] lg:min-h-[428px] shadow-xl bg-[#fff] px-3 lg:px-[36px] py-[33px] rounded-2xl hover:shadow-2xl ">
              <div className="flex items-center gap-2 lg:gap-7">
                <img
                  className="w-[50px] lg:w-[100px] h-[50px] lg:h-[100px]"
                  src={Sandy}
                  alt="below the line marketing campaigns"
                />
                <div>
                  <p className="font-roboto font-bold text-base lg:text-[32px] leading-121 text-[#0a0338] mb-0">
                    Sandy Bishnoi
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="font-roboto font-bold text-base lg:text-[32px] leading-121 text-[#0a0338] mb-0">
                      5
                    </p>
                    <img
                      className="w-[80px]"
                      src={star_image}
                      alt="what is above the line marketing"
                    />
                  </div>
                </div>
                <Comma />
              </div>
              <p className="font-dm font-normal text-base lg:text-2xl leading-121 text-[#0c0c0c] max-w-[530px] mt-3 lg:mt-9 mb-0">
                “ Big Ideas that will Change your Business" Our experience over
                the past few years has been very enjoyable
                <span className="block">
                  It has been such a pleasure to work with Cynor media on
                  multiple projects. The team is rich with talent and
                  creativity!!
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-7 lg:pb-16">
            <div className="w-full max-w-[300px] lg:max-w-[671px] h-full min-h-[280px] lg:min-h-[428px] shadow-xl bg-[#fff] px-3 lg:px-[36px] py-[33px] rounded-2xl hover:shadow-2xl ">
              <div className="flex items-center gap-2 lg:gap-7">
                <img
                  className="w-[50px] lg:w-[100px] h-[50px] lg:h-[100px]"
                  src={rocky}
                  alt="atl btl ttl marketing"
                />
                <div>
                  <p className="font-roboto font-bold text-base lg:text-[32px] leading-121 text-[#0a0338] mb-0">
                    Rocky
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="font-roboto font-bold text-base lg:text-[32px] leading-121 text-[#0a0338] mb-0">
                      5
                    </p>
                    <img
                      className="w-[80px]"
                      src={star_image}
                      alt="atl btl ttl marketing"
                    />
                  </div>
                </div>
                <Comma />
              </div>
              <p className="font-dm font-normal text-base lg:text-2xl leading-121 text-[#0c0c0c] max-w-[530px] mt-3 lg:mt-9 mb-0">
                Cynor Media is a very good event company whose effect is always
                good for everyone. Regards :- Anchor Rocky 🎤
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-7 lg:pb-16">
            <div className="w-full max-w-[300px] lg:max-w-[671px] h-full min-h-[280px] lg:min-h-[428px] shadow-xl bg-[#fff] px-3 lg:px-[36px] py-[33px] rounded-2xl hover:shadow-2xl ">
              <div className="flex items-center gap-2 lg:gap-7">
                <img
                  className="w-[50px] lg:w-[100px] h-[50px] lg:h-[100px]"
                  src={akash}
                  alt="below the line marketing activities"
                />
                <div>
                  <p className="font-roboto font-bold text-base lg:text-[32px] leading-121 text-[#0a0338] mb-0">
                    Akash Tiwari
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="font-roboto font-bold text-base lg:text-[32px] leading-121 text-[#0a0338] mb-0">
                      5
                    </p>
                    <img
                      className="w-[80px]"
                      src={star_image}
                      alt="btl marketing"
                    />
                  </div>
                </div>
                <Comma />
              </div>
              <p className="font-dm font-normal text-base lg:text-2xl leading-121 text-[#0c0c0c] max-w-[530px] mt-3 lg:mt-9 mb-0">
                Very nice event management company, provided to all types of
                events service with punctuality & perfection. thanks
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-7 lg:pb-16">
            <div className="w-full max-w-[300px] lg:max-w-[671px] h-full min-h-[280px] lg:min-h-[428px] shadow-xl bg-[#fff] px-3 lg:px-[36px] py-[33px] rounded-2xl hover:shadow-2xl ">
              <div className="flex items-center gap-2 lg:gap-7">
                <img
                  className="w-[50px] lg:w-[100px] h-[50px] lg:h-[100px]"
                  src={vipin}
                  alt="best btl marketing campaigns"
                />
                <div>
                  <p className="font-roboto font-bold text-base lg:text-[32px] leading-121 text-[#0a0338] mb-0">
                    Er vipin dev
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="font-roboto font-bold text-base lg:text-[32px] leading-121 text-[#0a0338] mb-0">
                      5
                    </p>
                    <img
                      className="w-[80px]"
                      src={star_image}
                      alt="atl btl marketing campaigns"
                    />
                  </div>
                </div>
                <Comma />
              </div>
              <p className="font-dm font-normal text-base lg:text-2xl leading-121 text-[#0c0c0c] max-w-[530px] mt-3 lg:mt-9 mb-0">
                This company is very good and the staff here is very nice I love
                this company
              </p>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="w-[671px] max-w-[280px] md:max-w-[350px] lg:max-w-[671px] h-full min-h-[270px] md:min-h-[360px] lg:min-h-[428px] shadow-xl bg-[#fff] px-3 lg:px-[36px] py-[33px] rounded-2xl hover:shadow-2xl ">
              <div className="flex items-center gap-2 lg:gap-7">
                <img
                  className="w-[50px] lg:w-[100px] h-[50px] lg:h-[100px]"
                  src={gurmesh}
                  alt=""
                />
                <div>
                  <p className="font-roboto font-bold text-base lg:text-[32px] leading-121 text-[#0a0338] mb-0">
                    Gurmesh Bishnoi
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="font-roboto font-bold text-base lg:text-[32px] leading-121 text-[#0a0338] mb-0">
                      5
                    </p>
                    <img className="w-[80px]" src={star_image} alt="" />
                  </div>
                </div>
                <Comma />
              </div>
              <p className="font-dm font-normal text-base lg:text-2xl leading-121 text-[#0c0c0c] max-w-[530px] mt-3 lg:mt-9 mb-0">
                we plan a event with cynor media last month . in this event A
                float van & setup held in many locations . we get many more out
                comes from this event . really cynor media is best event
                planners specifically we like theirs creative ideas.
                <span className="block"> Thnx Cynor Media</span>
              </p>
            </div>
          </SwiperSlide> */}
        </Swiper>
        {/* Right column with black background and slider overflowing to the left */}
        {/* <div className="relative flex-1 bg-black pb-[200px] md:mb-[180px] lg:mb-0"> */}
        {/* <div className=" absolute -top-[30%] md:-top-[5%] left-[2%] lg:left-[0%] 2xl:left-[5%] w-[100%] min-h-[542px] h-full flex justify-center items-center z-10"> */}
        {/* Overflow content */}
        {/* <Swiper
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          slidesPerView={1.9}
          spaceBetween={10}
          centeredSlides={true}
          modules={[Navigation]}
          className="mySwiper h-full  mt-10 -translate-x- w-full "
        >
          <SwiperSlide className="flex justify-center items-center h-full !w-[700px]"></SwiperSlide>
          <SwiperSlide className="flex justify-center items-center h-full !w-[700px]"></SwiperSlide>
          <SwiperSlide className="flex justify-center items-center h-full !w-[700px]"></SwiperSlide>
          <SwiperSlide className="flex justify-center items-center h-full !w-[700px]"></SwiperSlide>
          <SwiperSlide className="flex justify-center items-center h-full !w-[700px]"></SwiperSlide>
        </Swiper> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default WhatOurClients;
