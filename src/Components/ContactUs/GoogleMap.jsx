import React from "react";

const GoogleMap = () => {
  return (
    <div className="pb-10 md:pb-16 lg:pb-[100px]">
      <div className="max-w-[1440px] mx-auto px-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.995815447095!2d76.80250310000001!3d30.634075499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb3c262e5c9b%3A0x6b1baf69d615f266!2sCynor%20Packers!5e0!3m2!1sen!2sin!4v1734774647634!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-96 md:h-[314px] rounded-3xl"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
