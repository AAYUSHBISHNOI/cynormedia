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
        "Hero-bg": "url('./Assets/Images/Home/Png/Header-bg.png')",
      },
    },
  },
  plugins: [],
};
