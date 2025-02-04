import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ourmission from "../../Assets/Images/About-Us/Png/OurMission.png";

const CounterSection = () => {
  const sectionRef = useRef(null);
  const animationRan = useRef(false); // Track if the animation has run

  // Counter data
  const counters = [
    { id: 1, value: 100, suffix: "k", text: "more than 100k BTL activations" },
    { id: 2, value: 25, suffix: "+", text: "satisfied customers" },
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
            const roundedValue = Math.round(elements[index].innerText);
            elements[index].innerText = `${roundedValue}${counter.suffix}`;
          },
        }
      );
    });
  }, [counters]);

  return (
    <div ref={sectionRef} className="bg-[#0c0c0c] py-10 lg:py-[140px]">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-start">
          <div className="w-full lg:w-[55%] flex flex-col items-center justify-center lg:justify-start lg:items-start">
            <p className="text-[30px] text-light_green font-roboto font-semibold leading-121 mb-0">
              Our Mission
            </p>
            <h2 className="font-roboto font-semibold text-[22px] md:text-[32px] lg:text-[40px] xl:text-[64px] text-white leading-121 mt-2 md:mt-5 mb-0">
              Inspiring Connections, Driving Engagement
            </h2>
            <p className="font-dm font-normal text-lg leading-121 text-white max-w-[603px] mt-5 lg:mt-8 mb-0">
              To deliver tailored BTL marketing solutions that inspire
              connections, drive engagement, and create lasting value for brands
              and their audiences.
            </p>
            {/* Counters in Separate Divs */}
            <div className="mt-6 lg:mt-12 flex gap-10">
              <div className="text-center">
                <p
                  className="counter font-roboto text-[45px] font-semibold leading-121 text-white mb-0"
                  data-value={counters[0].value}
                >
                  0{counters[0].suffix}
                </p>
                <p className="font-dm font-normal text-base md:text-lg leading-121 text-white mt-1 md:mt-3  max-w-[132px]">
                  {counters[0].text}
                </p>
              </div>
              <div className="bg-[#fff] h-[100px] w-[2px]"></div>
              <div className="text-center">
                <p
                  className="counter font-roboto text-[45px] font-semibold leading-121 text-white mb-0"
                  data-value={counters[1].value}
                >
                  0{counters[1].suffix}
                </p>
                <p className="font-dm font-normal text-base md:text-lg leading-121 text-white mt-1 md:mt-3">
                  {counters[1].text}
                </p>
              </div>
            </div>
            <div className=" flex justify-center lg:justify-start">
              <button
                className=" font-dm text-black text-[20px] font-normal bg-white rounded-full py-1.5 px-3 flex justify-center items-center gap-2.5 mt-[32px]"
                onClick={() =>
                  window.open("https://wa.me/+917988709158", "_blank")
                }
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
          <div className="w-full lg:w-[45%] mt-6 flex justify-center">
            <img
              className="md:max-w-[450px] xl:max-w-[629px]"
              src={ourmission}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
