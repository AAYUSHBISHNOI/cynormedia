import React, { useState, useEffect, useRef } from "react";
import imgone from "../../Assets/Images/Home/Png/Slider-2.png";
import imgtwo from "../../Assets/Images/Home/Png/Slider-3.png";
import imgthree from "../../Assets/Images/Home/Png/Slider-1.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutUs = () => {
  const [activeSlide, setActiveSlide] = useState(2); // Default to the 3rd slide (index 2)
  const sectionRef = useRef(null);
  const animationRan = useRef(false);
  // Track if the animation has run

  // Array of images for the slides
  const images = [imgone, imgtwo, imgthree];

  // Counter data
  const counters = [
    { id: 1, value: 18, text: "Brands Promoted" },
    { id: 2, value: 10000, text: "Promotional activities carried out" },
  ];

  // Animate counters when the section is in view
  useEffect(() => {
    if (animationRan.current) return; // Stop if animation already ran

    const elements = sectionRef.current.querySelectorAll(".counter");
    animationRan.current = true; // Mark animation as run

    counters.forEach((counter, index) => {
      const targetValue = counter.value;

      gsap.fromTo(
        elements[index],
        { innerText: 0 },
        {
          innerText: targetValue,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
          },
          onUpdate: function () {
            elements[index].innerText = `${Math.round(
              elements[index].innerText
            )}+`;
          },
        }
      );
    });
  }, [counters]);

  // Function to handle slide change
  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <div
      ref={sectionRef}
      className="bg-[#0c0c0c] pt-10 pb-64 md:pb-[450px] lg:pb-[50px] xl:py-[100px] 2xl:pb-10 px-4 max-w-[1920px] mx-auto"
    >
      <div className="flex flex-wrap lg:justify-between">
        {/* Slider */}
        <div className="w-full lg:w-[15%] xl:w-[15%] 2xl:w-[20%] order-1 lg:order-0 mt-8">
          <div
            id="slider"
            className="relative w-full"
            style={{ height: "35vw" }}
          >
            {[...Array(images.length)].map((_, index) => (
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
                className={`absolute left-1/2 transform -translate-x-1/2 w-[250px] md:w-[590px] lg:w-[360px] xl:w-[540px] h-[280px] md:h-[590px] lg:h-[360px] xl:h-[540px] rounded-lg cursor-pointer transition-all duration-700 ease-in-out
            ${
              activeSlide === index
                ? "opacity-100 z-10 -translate-x-[105px] md:-translate-x-[250px] lg:translate-x-8 translate-y-10 md:translate-y-20 lg:translate-y-4 xl:translate-y-0"
                : index === (activeSlide + 1) % images.length
                ? "opacity-20 z-0 transform -translate-x-[125px] md:-translate-x-[300px] translate-y-5 md:translate-y-[40px] lg:-translate-y-12 lg:translate-x-[-80px] xl:-translate-y-20 lg:scale-90"
                : index === (activeSlide + 2) % images.length
                ? "opacity-40 z-0 transform -translate-x-[140px] md:-translate-x-[340px] lg:translate-x-[-40px] lg:scale-90 lg:-translate-y-6 xl:-translate-y-14"
                : "opacity-40 z-0 transform scale-80"
            }
          `}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ))}
          </div>
        </div>
        {/* About Us Content */}
        <div className="w-full lg:w-[50%] xl:w-[50%] 2xl:w-[50%] order-0 lg:order-1 text-center lg:text-start flex justify-center lg:justify-start flex-col lg:items-start items-center">
          <h2 className="text-[30px] text-light_green font-roboto font-semibold leading-121 mb-0">
            About us
          </h2>
          <p className="text-lg md:text-3xl lg:text-2xl xl:text-4xl font-roboto font-semibold text-white leading-121 mt-3 xl:mt-[25px] mb-0 max-w-[570px] md:max-w-[742px]">
            Cynor Media, founded in 2015, is a leading event management company
            in Chandigarh, delivering successful events and innovative
            promotions with a passionate, results-driven team.
          </p>
          <p className="text-sm md:text-base lg:text-sm xl:text-base font-dm font-normal text-white leading-121 mt-3 xl:mt-[25px] mb-0 max-w-[575px] md:max-w-[732px]">
            We have 360-degree solutions for brand promotions, marketing
            including Float van events, Product launch Event, exhibitions, stall
            designs, portable displays, etc. Get one-stop solutions for
            corporate events, customer meets, indoor and outdoor advertising,
            and printing solutions only at Cynor Media Pvt. Ltd.
          </p>

          <div className="flex gap-10">
            {/* Counters */}
            {counters.map((counter) => (
              <div
                key={counter.id}
                className=" flex flex-col mt-2 lg:mt-[30px]"
              >
                <div>
                  <p
                    className="counter font-roboto text-[45px] font-semibold leading-121 text-light_green mb-0"
                    data-value={counter.value}
                  >
                    0+
                  </p>
                </div>
                <p className=" font-dm font-normal text-base md:text-lg leading-121 text-white mt-1 md:mt-3">
                  {counter.text}
                </p>
              </div>
            ))}
          </div>
          <button
            className=" font-dm text-black text-[20px] font-normal bg-white rounded-full py-1.5 px-3 flex justify-center items-center gap-2.5 mt-[32px]"
            onClick={() => window.open("https://wa.me/+917988709158", "_blank")}
          >
            <a
              href=""
              className=" text-white bg-black py-1 px-3 rounded-full text-xl text-center"
            >
              >
            </a>
            Start your Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
