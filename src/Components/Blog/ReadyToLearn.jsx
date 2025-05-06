import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import imgone from "../../Assets/Images/Blog/Webp/Btl.webp";
const slides = [
  {
    image: imgone,
    title: "How to Learn Web Development as a Beginner? Step-by-Step Guide",
    excerpt:
      "Learn the basics of HTML, CSS, and JavaScript. Start your journey step by step Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem minima nam, officia, saepe eaque aliquam recusandae quo tempora porro accusamus eius iusto expedita, nisi dicta! Repudiandae recusandae vero consectetur consequatur..........",
    description: "By: Aayush on Apr 15, 2025",
    link: "/blog/how-to-learn-web-development",
  },
];

const ReadyToLearn = ({ slideIndex }) => {
  return (
    <div className="flex items-center relative overflow-hidden w-full">
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
            <p className="text-lg text-light_black font-dm leading-130 font-normal pt-4 mb-0">
              {slides[slideIndex].description}
            </p>
            <p className="text-lg text-light_black font-dm leading-130 font-normal max-w-[650px]">
              {slides[slideIndex].excerpt}
            </p>

            <Link to={slides[slideIndex].link}>
              <button className="text-lg text-white hover:bg-black bg-[#64ccc5] rounded-md font-dm leading-130 font-normal px-4 py-2 shadow duration-700 transition-all mt-5">
                Read More
              </button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ReadyToLearn;
