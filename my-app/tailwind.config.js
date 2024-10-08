/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      udaanfont: ['Anurati'],
      udaanfontsm: ['Intro']
    },
    extend: {
      backgroundImage: {
        'hero-pattern':"url('/Foellinger.jpg')"
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
