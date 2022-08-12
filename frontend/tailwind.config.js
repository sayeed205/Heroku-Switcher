/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        heroku: "#6567a5",
        herokub: "#464778",
      },
    },
    fontFamily: {
      display: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
});
