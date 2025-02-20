import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import imgone from "../../Assets/Images/About-Us/Webp/Hero-1.webp";
import imgtwo from "../../Assets/Images/About-Us/Webp/Hero-2.webp";
import imgthree from "../../Assets/Images/About-Us/Webp/Hero-3.webp";
import sliderone from "../../Assets/Images/About-Us/Webp/hemannt.webp";
import slidertwo from "../../Assets/Images/About-Us/Webp/hemannt.webp";
import { Star } from "../../Components/Common.jsx/Icons";

const ReadyToElevate = () => {
  // State to control the active slide
  const [activeSlide, setActiveSlide] = useState(0);

  // Array of images
  const images = [imgone, imgtwo, imgthree];

  // Function to handle slide change
  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const nextButton = document.querySelector(".custom-next");
    const prevButton = document.querySelector(".custom-prev");

    if (nextButton && prevButton) {
      nextButton.classList.remove("swiper-button-disabled");
      prevButton.classList.remove("swiper-button-disabled");
    }
  }, []);

  const rating = 3;
  return (
    <div className="my-10 lg:mt-[63px] lg:mb-24 px-4">
      <div className="max-w-[1440px] h-[52vh] xsm:h-[70vh] sm:h-[60vh] md:h-[63vh] lg:h-[50vh] xl:h-[68vh] xxl:h-[78vh] 2xl:h-[75vh] mx-auto py-5 px-3 lg:ps-20 lg:pt-7 lg:pb-28 bg-[#0c0c0c] rounded-3xl">
        <div className="flex flex-wrap justify-center items-center lg:justify-between">
          {/* About Us Content */}
          <div className="w-full lg:w-[40%] text-center lg:text-start">
            <h2 className="font-dm font-normal text-sm md:text-lg leading-121 text-white">
              Pleasure and so read the was hope.
            </h2>
            <p className="font-roboto font-semibold text-3xl xl:text-[64px] leading-140 text-white max-w-[522px] md:max-w-[707px] lg:max-w-[522px]">
              Ready to elevate your business?
            </p>
            <p className="font-dm font-normal text-sm md:text-lg leading-121 text-white max-w-[554px] md:max-w-[717px] lg:max-w-[554px] mt-2 lg:mt-6">
              Success begins with bold decisions and innovative strategies.
              Let’s seize opportunities, unlock potential, and bring your vision
              to life. Your journey to success starts here!
            </p>

            {/* <Swiper
              loop={true}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              autoplay={{
                delay: 20,
                disableOnInteraction: false,
              }}
              modules={[Navigation]}
              className="mySwiper"
              style={{ width: "100%", height: "100%" }}
            >
              <SwiperSlide>
                <div className="flex items-center gap-3">
                  <img className="w-[70px] h-[70px]" src={sliderone} alt="" />
                  <div>
                    <p className="font-roboto font-semibold text-xl leading-121 text-white">
                      Rated 5/5 stars
                    </p>
                    <Star
                      rating={5}
                      colorMap={{ 3: "#FF69B4", 4.5: "#1E90FF", 5: "#FFD700" }}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center gap-3">
                  <img className="w-[70px] h-[70px]" src={sliderone} alt="" />
                  <div>
                    <p className="font-roboto font-semibold text-xl leading-121 text-white">
                      Rated 5/5 stars
                    </p>
                    <Star
                      rating={5}
                      colorMap={{ 3: "#FF69B4", 4.5: "#1E90FF", 5: "#FFD700" }}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center gap-3">
                  <img className="w-[70px] h-[70px]" src={sliderone} alt="" />
                  <div>
                    <p className="font-roboto font-semibold text-xl leading-121 text-white">
                      Rated 5/5 stars
                    </p>
                    <Star
                      rating={5}
                      colorMap={{ 3: "#FF69B4", 4.5: "#1E90FF", 5: "#FFD700" }}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center gap-3">
                  <img className="w-[70px] h-[70px]" src={sliderone} alt="" />
                  <div>
                    <p className="font-roboto font-semibold text-xl leading-121 text-white">
                      Rated 5/5 stars
                    </p>
                    <Star
                      rating={5}
                      colorMap={{ 3: "#FF69B4", 4.5: "#1E90FF", 5: "#FFD700" }}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center gap-3">
                  <img className="w-[70px] h-[70px]" src={sliderone} alt="" />
                  <div>
                    <p className="font-roboto font-semibold text-xl leading-121 text-white">
                      Rated 5/5 stars
                    </p>
                    <Star
                      rating={5}
                      colorMap={{ 3: "#FF69B4", 4.5: "#1E90FF", 5: "#FFD700" }}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center gap-3">
                  <img className="w-[70px] h-[70px]" src={sliderone} alt="" />
                  <div>
                    <p className="font-roboto font-semibold text-xl leading-121 text-white">
                      Rated 5/5 stars
                    </p>
                    <Star
                      rating={5}
                      colorMap={{ 3: "#FF69B4", 4.5: "#1E90FF", 5: "#FFD700" }}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center gap-3">
                  <img className="w-[70px] h-[70px]" src={sliderone} alt="" />
                  <div>
                    <p className="font-roboto font-semibold text-xl leading-121 text-white">
                      Rated 5/5 stars
                    </p>
                    <Star
                      rating={5}
                      colorMap={{ 3: "#FF69B4", 4.5: "#1E90FF", 5: "#FFD700" }}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center gap-3">
                  <img className="w-[70px] h-[70px]" src={sliderone} alt="" />
                  <div>
                    <p className="font-roboto font-semibold text-xl leading-121 text-white">
                      Rated 5/5 stars
                    </p>
                    <Star
                      rating={5}
                      colorMap={{ 3: "#FF69B4", 4.5: "#1E90FF", 5: "#FFD700" }}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center gap-3">
                  <img className="w-[70px] h-[70px]" src={sliderone} alt="" />
                  <div>
                    <p className="font-roboto font-semibold text-xl leading-121 text-white">
                      Rated 5/5 stars
                    </p>
                    <Star
                      rating={5}
                      colorMap={{ 3: "#FF69B4", 4.5: "#1E90FF", 5: "#FFD700" }}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center gap-3">
                  <img className="w-[70px] h-[70px]" src={sliderone} alt="" />
                  <div>
                    <p className="font-roboto font-semibold text-xl leading-121 text-white">
                      Rated 5/5 stars
                    </p>
                    <Star
                      rating={5}
                      colorMap={{ 3: "#FF69B4", 4.5: "#1E90FF", 5: "#FFD700" }}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center gap-3">
                  <img className="w-[70px] h-[70px]" src={sliderone} alt="" />
                  <div>
                    <p className="font-roboto font-semibold text-xl leading-121 text-white">
                      Rated 5/5 stars
                    </p>
                    <Star
                      rating={5}
                      colorMap={{ 3: "#FF69B4", 4.5: "#1E90FF", 5: "#FFD700" }}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex items-center gap-3">
                  <img className="w-[70px] h-[70px]" src={sliderone} alt="" />
                  <div>
                    <p className="font-roboto font-semibold text-xl leading-121 text-white">
                      Rated 5/5 stars
                    </p>
                    <Star
                      rating={5}
                      colorMap={{ 3: "#FF69B4", 4.5: "#1E90FF", 5: "#FFD700" }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper> */}
          </div>

          {/* Slider */}
          <div className="w-full lg:w-[60%] mt-9">
            <div
              id="slider"
              className="relative w-full"
              style={{ height: "35vw" }}
            >
              {/* Radio buttons */}
              {images.map((_, index) => (
                <input
                  key={index}
                  type="radio"
                  name="slider"
                  id={`s${index + 1}`}
                  className="hidden"
                  checked={activeSlide === index}
                  onChange={() => handleSlideChange(index)}
                />
              ))}
              {/* Slider labels */}
              {images.map((image, index) => (
                <label
                  key={index}
                  htmlFor={`s${index + 1}`}
                  className={`absolute left-1/2 transform -translate-x-1/2 w-[210px] md:w-[350px] lg:w-[330px] xl:w-[490px] h-[230px] md:h-[350px] lg:h-[330px] xl:h-[490px] rounded-lg cursor-pointer transition-all duration-700 ease-in-out
                    ${
                      activeSlide === index
                        ? "opacity-100 z-10 -translate-x-[80px] md:-translate-x-[140px] translate-y-8 md:translate-y-[50px] lg:translate-y-[70px] lg:-translate-x-[90px] xl:-translate-x-[160px]"
                        : index === (activeSlide + 1) % images.length
                        ? "opacity-20 z-0 transform -translate-x-[130px] md:-translate-x-[210px] md:translate-y-0 lg:translate-y-[30px] lg:-translate-x-[130px] xl:-translate-x-[210px]"
                        : index === (activeSlide + 2) % images.length
                        ? "opacity-40 z-0 transform translate-y-4 md:translate-y-5 lg:translate-y-0"
                        : "opacity-40 z-0 transform"
                    }`}
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToElevate;
