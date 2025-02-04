import React, { useState, useEffect } from "react";
import backtotop from "../../Assets/Images/Home/Svg/BackTopTop.svg";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-2 md:bottom-3 lg:bottom-5 right-2 md:right-3 lg:right-5 p-2 rounded-full cursor-pointer transition-opacity duration-500 z-50 
        bg-gradient-to-b from-[#64ccc5] to-[#1c6B64] border-2 border-white 
        ${isVisible ? "opacity-100" : "opacity-0"}`}
      onClick={scrollToTop}
    >
      <img
        src={backtotop}
        alt="Back to top"
        className="w-4 md:w-5 lg:w-8 h-4 md:h-5 lg:h-8"
      />
    </button>
  );
};

export default BackToTop;
