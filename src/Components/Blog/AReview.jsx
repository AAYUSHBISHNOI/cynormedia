import React from "react";
import imgtwo from "../../Assets/Images/Blog/Webp/Corporate.webp";

const AReview = () => {
  return (
    <div>
      <div className="max-w-[1400px] mx-auto py-10">
        <div>
          <div>
            <h2 className="text-5xl text-black font-roboto leading-121 font-bold max-w-[710px] mb-0">
              Corporate Website Design Principles for 2025
            </h2>
            <p className="text-sm text-light_black font-dm leading-130 font-normal pt-2 mb-0">
              By: Aayush on Apr 15, 2025
            </p>
            <img
              className="w-[732px] h-[417px] rounded-md mt-5"
              src={imgtwo}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AReview;
