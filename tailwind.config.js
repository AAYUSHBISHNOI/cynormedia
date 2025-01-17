/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
        roboto: ["Roboto Serif", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "Hero-bg": "url('./Assets/Images/Home/Png/Hero-bg.png')",
        "Service-bg": "url('./Assets/Images/Services/Png/Hero-bg.png')",
        "Enough-bg":
          "url('./Assets/Images/About-Us/Png/Call to Action-bg.png')",
      },
      boxShadow: {
        lightblack: "0 13px 15px 0 rgba(191, 191, 191, 1)",  
      },
      lineHeight: {
        110: "110%",
        121: "121%",
        130: "130%",
        140: "140%",
        145: "145%",
        150: "150%",
      },
      colors: {
        light_green: "#64CCC5",
        light_black: "#0c0c0c",
      },
      screens: {
        xsm:"360px",
        sm: "440px",
      },
    },
  },
  plugins: [],
};
