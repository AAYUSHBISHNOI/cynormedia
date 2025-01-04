import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Comma, SliderArrowAbout } from "../Common.jsx/Icons";
import manish from "../../Assets/Images/OurClients/Webp/Manish.webp";
import star_image from "../../Assets/Images/OurClients/Svg/Star.svg";
import Sandy from "../../Assets/Images/OurClients/Webp/Sandy-Bishnoi.webp";
import rocky from "../../Assets/Images/OurClients/Png/Rocky.png";
import akash from "../../Assets/Images/OurClients/Png/Aakash.png";
import gulam from "../../Assets/Images/OurClients/Png/Gulam.png";
import vipin from "../../Assets/Images/OurClients/Png/Vipin.png";
import gurmesh from "../../Assets/Images/OurClients/Png/Gurmesh.png";

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
    <div className="py-20 mx-auto overflow-hidden">
      <div className="flex h-[742px] px-4">
        {/* Left column with white background */}
        <div className="flex-1 bg-white 2xl:translate-x-[22%]">
          <div className="flex flex-col justify-start items-start">
            <h1 className="font-roboto font-semibold text-center text-[26px] md:text-[32px] lg:text-[40px] xl:text-[64px] text-light_black leading-121">
              What our clients say
            </h1>
            <div className="flex gap-4">
              <button className="custom-prev w-[93px] h-[93px] cursor-pointer z-20">
                <SliderArrowAbout />
              </button>
              <button className="custom-next w-[93px] h-[93px] cursor-pointer z-20 rotate-180">
                <SliderArrowAbout />
              </button>
            </div>
          </div>
        </div>

        {/* Right column with black background and slider overflowing to the left */}
        <div className="relative flex-1 bg-black">
          <div className="absolute top-0 left-[-25%] w-[100%] min-h-[742px] h-full flex justify-center items-center z-10">
            {/* Overflow content */}
            <Swiper
              loop={true}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              modules={[Navigation]}
              className="mySwiper w-full max-w-[850px] h-full translate-y-[200px]"
            >
              <SwiperSlide className="flex justify-center items-center h-full max-w-[850px]">
                <div className="max-w-[671px] min-h-[428px] bg-[#fff] px-[36px] py-[33px] rounded-2xl">
                  <div className="flex items-center gap-7">
                    <img className="w-[100px] h-[100px]" src={manish} alt="" />
                    <div>
                      <p className="font-roboto font-bold text-[32px] leading-121 text-[#0a0338] mb-0">
                        Manish Kumar
                      </p>
                      <div className="flex items-center gap-4">
                        <p className="font-roboto font-bold text-[32px] leading-121 text-[#0a0338] mb-0">
                          5
                        </p>
                        <img src={star_image} alt="" />
                      </div>
                    </div>
                    <Comma />
                  </div>
                  <p className="font-dm font-normal text-2xl leading-121 text-[#0c0c0c] max-w-[530px] mt-9 mb-0">
                    The company is very good, I enjoyed working in it. I am
                    currently working in Hero for advertising work and I am
                    working in Ghaziabad during the Diwali week. I would like to
                    thank the owner of this company very much.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center h-full max-w-[850px]">
                <div className="max-w-[671px] min-h-[428px] bg-[#fff] px-[36px] py-[33px] rounded-2xl">
                  <div className="flex items-center gap-7">
                    <img className="w-[100px] h-[100px]" src={Sandy} alt="" />
                    <div>
                      <p className="font-roboto font-bold text-[32px] leading-121 text-[#0a0338] mb-0">
                        Sandy Bishnoi
                      </p>
                      <div className="flex items-center gap-4">
                        <p className="font-roboto font-bold text-[32px] leading-121 text-[#0a0338] mb-0">
                          5
                        </p>
                        <img src={star_image} alt="" />
                      </div>
                    </div>
                    <Comma />
                  </div>
                  <p className="font-dm font-normal text-2xl leading-121 text-[#0c0c0c] max-w-[530px] mt-9 mb-0">
                    “ Big Ideas that will Change your Business" Our experience
                    over the past few years has been very enjoyable They are
                    very knowledgeable about the market.
                    <span className="block">
                      It has been such a pleasure to work with Cynor media on
                      multiple projects. The team is rich with talent and
                      creativity!!
                    </span>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center h-full max-w-[850px]">
                <div className="max-w-[671px] min-h-[428px] bg-[#fff] px-[36px] py-[33px] rounded-2xl">
                  <div className="flex items-center gap-7">
                    <img className="w-[100px] h-[100px]" src={rocky} alt="" />
                    <div>
                      <p className="font-roboto font-bold text-[32px] leading-121 text-[#0a0338] mb-0">
                        Rocky
                      </p>
                      <div className="flex items-center gap-4">
                        <p className="font-roboto font-bold text-[32px] leading-121 text-[#0a0338] mb-0">
                          5
                        </p>
                        <img src={star_image} alt="" />
                      </div>
                    </div>
                    <Comma />
                  </div>
                  <p className="font-dm font-normal text-2xl leading-121 text-[#0c0c0c] max-w-[530px] mt-9 mb-0">
                    Cynor Media is a very good event company whose effect is
                    always good for everyone. Regards :- Anchor Rocky 🎤
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center h-full max-w-[850px]">
                <div className="max-w-[671px] min-h-[428px] bg-[#fff] px-[36px] py-[33px] rounded-2xl">
                  <div className="flex items-center gap-7">
                    <img className="w-[100px] h-[100px]" src={akash} alt="" />
                    <div>
                      <p className="font-roboto font-bold text-[32px] leading-121 text-[#0a0338] mb-0">
                        Akash Tiwari
                      </p>
                      <div className="flex items-center gap-4">
                        <p className="font-roboto font-bold text-[32px] leading-121 text-[#0a0338] mb-0">
                          5
                        </p>
                        <img src={star_image} alt="" />
                      </div>
                    </div>
                    <Comma />
                  </div>
                  <p className="font-dm font-normal text-2xl leading-121 text-[#0c0c0c] max-w-[530px] mt-9 mb-0">
                    Very nice event management company, provided to all types of
                    events service with punctuality & perfection. thanks
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center h-full max-w-[850px]">
                <div className="max-w-[671px] min-h-[428px] bg-[#fff] px-[36px] py-[33px] rounded-2xl">
                  <div className="flex items-center gap-7">
                    <img className="w-[100px] h-[100px]" src={gulam} alt="" />
                    <div>
                      <p className="font-roboto font-bold text-[32px] leading-121 text-[#0a0338] mb-0">
                        Gulam Gouse
                      </p>
                      <div className="flex items-center gap-4">
                        <p className="font-roboto font-bold text-[32px] leading-121 text-[#0a0338] mb-0">
                          5
                        </p>
                        <img src={star_image} alt="" />
                      </div>
                    </div>
                    <Comma />
                  </div>
                  <p className="font-dm font-normal text-2xl leading-121 text-[#0c0c0c] max-w-[530px] mt-9 mb-0">
                    One place for all market activation i.e. BTL or ATL. They do
                    the task with full ownership from start to finish and very
                    professional, organised and result oriented. You can have
                    any type of personalization as per your business need,You
                    ask for it and they will do it. No question asked. They also
                    do have core experience in business parameters, environment
                    & market needs. Which is helping them to drive the
                    activation better. Overall a great organization for your
                    activation needs
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center h-full max-w-[850px]">
                <div className="max-w-[671px] min-h-[428px] bg-[#fff] px-[36px] py-[33px] rounded-2xl">
                  <div className="flex items-center gap-7">
                    <img className="w-[100px] h-[100px]" src={vipin} alt="" />
                    <div>
                      <p className="font-roboto font-bold text-[32px] leading-121 text-[#0a0338] mb-0">
                        Er vipin dev
                      </p>
                      <div className="flex items-center gap-4">
                        <p className="font-roboto font-bold text-[32px] leading-121 text-[#0a0338] mb-0">
                          5
                        </p>
                        <img src={star_image} alt="" />
                      </div>
                    </div>
                    <Comma />
                  </div>
                  <p className="font-dm font-normal text-2xl leading-121 text-[#0c0c0c] max-w-[530px] mt-9 mb-0">
                    This company is very good and the staff here is very nice I
                    love this company
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center h-full max-w-[850px]">
                <div className="max-w-[671px] min-h-[428px] bg-[#fff] px-[36px] py-[33px] rounded-2xl">
                  <div className="flex items-center gap-7">
                    <img className="w-[100px] h-[100px]" src={gurmesh} alt="" />
                    <div>
                      <p className="font-roboto font-bold text-[32px] leading-121 text-[#0a0338] mb-0">
                        Gurmesh Bishnoi
                      </p>
                      <div className="flex items-center gap-4">
                        <p className="font-roboto font-bold text-[32px] leading-121 text-[#0a0338] mb-0">
                          5
                        </p>
                        <img src={star_image} alt="" />
                      </div>
                    </div>
                    <Comma />
                  </div>
                  <p className="font-dm font-normal text-2xl leading-121 text-[#0c0c0c] max-w-[530px] mt-9 mb-0">
                    we plan a event with cynor media last month . in this event
                    A float van & setup held in many locations . we get many
                    more out comes from this event . really cynor media is best
                    event planners specifically we like theirs creative ideas.
                    <span className="block"> Thnx Cynor Media</span>
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
