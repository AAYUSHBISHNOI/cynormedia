import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import imgtwo from "../../Assets/Images/Blog/Webp/Corporate.webp";

const slides = [
  {
    image: imgtwo,
    title: "Corporate Website Design Principles for 2025",
    excerpt:
      "Corporate website design in 2025 focuses on clean layouts, fast performance, and user-friendly experiences. Responsive design, accessibility, and modern visuals help brands build trust, boost engagement, and drive results in a digital-first world.",
    description:
      'By: <span class="text-[#64ccc5] font-medium">Aayush</span> on Apr 15, 2025',

    link: "/blog/corporate-website-design-2025", // The link to the specific blog post
  },
];

const WebDevelopment = ({ slideIndex }) => {
  return (
    <div className="flex items-center justify-center relative overflow-hidden w-full">
      {/* Image Section */}
      <div className="w-full md:w-[50%] relative p-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[slideIndex].image}
            src={slides[slideIndex].image}
            alt={slides[slideIndex].title}
            className="w-full max-w-[663px] h-[363px] object-cover rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-[50%] p-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[slideIndex].title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[34px] text-black font-roboto leading-121 font-bold max-w-[690px] mb-0">
              {slides[slideIndex].title}
            </h2>
            <p
              className="text-lg text-light_black font-dm leading-130 font-normal pt-4 mb-0"
              dangerouslySetInnerHTML={{
                __html: slides[slideIndex].description,
              }}
            />
            <p className="text-lg text-light_black font-dm leading-130 font-normal max-w-[650px]">
              {slides[slideIndex].excerpt}
            </p>

            <a href={slides[slideIndex].link}>
              <button className="text-lg text-white hover:bg-black bg-[#64ccc5] rounded-md font-dm leading-130 font-normal px-4 py-2 shadow duration-700 transition-all mt-5">
                Learn More
              </button>
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WebDevelopment;
