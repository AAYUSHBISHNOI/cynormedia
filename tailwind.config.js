/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
        roboto: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "Bg-Hero": "url('./Assets/Images/Home/Png/Bg-Hero.jpeg')",
        "Hero-bg": "url('./Assets/Images/Home/Webp/Hero-bg.webp')",
        "Service-bg": "url('./Assets/Images/Services/Webp/Hero-bg.webp')",
        "Enough-bg":
          "url('./Assets/Images/About-Us/Webp/Call to Action-bg.webp')",
      },
      boxShadow: {
        lightblack: "0 13px 15px 0 rgba(191, 191, 191, 1)",
        darkblack: "0 5px 5px 0rgba(0, 0, 0, 1)",
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
        xsm: "360px",
        sm: "440px",
        xxl: "1490px",
      },
    },
  },
  plugins: [],
};
