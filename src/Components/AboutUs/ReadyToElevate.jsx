import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import imgone from "../../Assets/Images/About-Us/Webp/Hero-1.webp";
import imgtwo from "../../Assets/Images/About-Us/Webp/Hero-2.webp";
import imgthree from "../../Assets/Images/About-Us/Webp/Hero-3.webp";
import owner from "../../Assets/Images/About-Us/Webp/Founder.webp";
import star from "../../Assets/Images/About-Us/Star.png";
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
    <div className="bg-black">
      <div className="max-w-[1400px] mx-auto px-4 ">
        {/* <div className="bg-[#64ccc5] h-full w-[250px] absolute right-0 top-0"></div> */}

        <div className="flex flex-wrap py-10 lg:py-14 xl:py-[158px] text-center items-center md:text-start">
          <div className="w-full md:w-3/5 xl:w-[70%]">
            <h1 className="font-dm font-bold text-[28px] xsm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-121 text-white">
              About Cynor Media
            </h1>
            <p className="md:w-[448px] lg:w-[587px] xl:w-[927px] text-white font-dm font-normal leading-130 text-base mb-0 mt-4 xl:mt-10">
              Welcome to Cynor Media — a trusted BTL marketing company in India,
              delivering impactful campaigns. At Cynor Media, we transform bold
              ideas into powerful brand experiences. Since 2015, we’ve been at
              the forefront of BTL event management in Chandigarh and across
              India, offering 360-degree{" "}
              <a href="/service" className=" text-[#64ccc5] font-extrabold">
                services
              </a>{" "}
              for brand promotions. Our services include Float Van campaigns,
              product launches, corporate events, and creative advertising, etc.
            </p>
            <p className="md:w-[448px] lg:w-[587px] xl:w-[927px] text-white font-dm font-normal leading-130 text-base mb-0 mt-3 xl:mt-8">
              Backed by a passionate, results-driven team and a PAN India
              presence, we don’t just plan events — we create experiences that
              connect, engage, and convert.
            </p>
            <h5 className="text-white font-dm leading-130 font-bold text-3xl lg:text-5xl mt-4 lg:mt-10 mb-0">
              Mr. Amit Bishnoi
            </h5>
            <p className="text-white font-dm font-normal leading-130 text-lg mb-0">
              Chief Executive Officer
            </p>
          </div>
          <div className="w-full md:w-2/5 xl:w-[30%] mt-10 md:mt-0 flex justify-center relative">
            <img
              className="z-50 relative w-[260px] lg:w-[362px] h-[350px] lg:h-[512px] rounded-2xl"
              src={owner}
              alt="btl marketing"
            />
            <div className="bg-[#64ccc5] h-[330px] w-[260px] lg:h-[504px] lg:w-[370px] rounded-3xl blur-[16px] absolute top-6 right-1 xsm:right-9 sm:right-16 md:right-0"></div>
            <img
              className="w-[290px] sm:w-[350px] lg:w-[780px] h-[440px] lg:h-[540px] absolute -top-10 right-0 sm:right-10 md:right-4 lg:right-9 lg:-top-24"
              src={star}
              alt="below the line marketing"
            />
          </div>
        </div>
      </div>

      {/* <div className="max-w-[1440px] h-[52vh] xsm:h-[70vh] sm:h-[60vh] md:h-[63vh] lg:h-[50vh] xl:h-[68vh] xxl:h-[78vh] 2xl:h-[75vh] mx-auto py-5 px-3 lg:ps-20 lg:pt-7 lg:pb-28 bg-[#0c0c0c] rounded-3xl">
        <div className="flex flex-wrap justify-center items-center lg:justify-between">

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

          
          </div>

  
          <div className="w-full lg:w-[60%] mt-9">
            <div
              id="slider"
              className="relative w-full"
              style={{ height: "35vw" }}
            >
            
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
      </div> */}
    </div>
  );
};

export default ReadyToElevate;
