import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WebDevelopment from "./WebDevelopment";
import ReadyToLearn from "./ReadyToLearn";
import CreativeDesign from "./CreativeDesign";
import { Arrow } from "../Common.jsx/Icons";

const FadeSlider = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    <WebDevelopment key="web" slideIndex={0} />,
    <ReadyToLearn key="ready" slideIndex={0} />,
    <CreativeDesign key="creative" slideIndex={0} />,
  ];

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Autoplay functionality
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 5000); // change every 5 seconds

  //   return () => clearInterval(interval); // cleanup on unmount
  // }, [index]);

  return (
    <div className="relative max-w-[1400px] px-4 mx-auto py-10">
      {/* Slider Container */}
      <div className="flex flex-col items-center">
        {/* Slide transition */}
        <div className="w-full relative overflow-hidden min-h-[420px] lg:min-h-[370px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full"
            >
              {slides[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons (inside for small screens) */}
        <div className="flex justify-center space-x-4 mt-6 2xl:hidden">
          <button
            onClick={prevSlide}
            className="rounded-full pointer-events-auto w-10 h-10 flex justify-center items-center bg-[#64ccc5] rotate-180"
          >
            <Arrow />
          </button>
          <button
            onClick={nextSlide}
            className="rounded-full pointer-events-auto w-10 h-10 flex justify-center items-center bg-[#64ccc5]"
          >
            <Arrow />
          </button>
        </div>
      </div>

      {/* Navigation Buttons (outside for xl and above) */}
      <div className="hidden 2xl:flex absolute top-1/2 left-[-80px] right-[-80px] justify-between transform -translate-y-1/2 pointer-events-none">
        <button
          onClick={prevSlide}
          className="rounded-full pointer-events-auto w-10 h-10 flex justify-center items-center bg-[#64ccc5] rotate-180"
        >
          <Arrow />
        </button>
        <button
          onClick={nextSlide}
          className="rounded-full pointer-events-auto w-10 h-10 flex justify-center items-center bg-[#64ccc5]"
        >
          <Arrow />
        </button>
      </div>
    </div>
  );
};

export default FadeSlider;
