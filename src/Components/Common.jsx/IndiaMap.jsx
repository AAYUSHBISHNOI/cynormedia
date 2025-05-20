import React from "react";
import maps from "../../Assets/Images/OurClients/Svg/IndiaMap.svg";
import ParticlesBackground from "../Common.jsx/ParticlesBackground";

const IndiaMap = () => {
  const locations = [
    { name: "Chandigarh", top: "28%", left: "43%" },
    { name: "Delhi", top: "28%", left: "44%" },
    { name: "Jaipur", top: "38%", left: "43%" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-4 overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          Our Presence Across India
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          We are proud to be strategically located in key cities across northern
          India. Hover over the map to explore our office locations.
        </p>
      </div>

      <div className="relative z-10 flex justify-center">
        <div className="relative w-[90%] max-w-[650px]">
          <img src={maps} alt="India Map" className="w-full h-auto relative" />
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="absolute group"
              style={{ top: loc.top, left: loc.left }}
            >
              <div className="w-4 h-4 bg-purple-500 rounded-full animate-ping absolute top-0 left-0 opacity-70" />
              <div className="w-2.5 h-2.5 bg-purple-400 rounded-full relative z-10" />
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 whitespace-nowrap">
                {loc.name}
                <div className="w-2 h-2 bg-gray-900 rotate-45 absolute bottom-[-4px] left-1/2 -translate-x-1/2 z-0"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;
