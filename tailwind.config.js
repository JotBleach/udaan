/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'udaanpurple': '#201431',
      'udaanpurplelight': "#d8b4fe",
      'white': '#ffffff',
      'black': '#000000',
      'overlay': '#6B21A8'
    },
    fontFamily: {
      udaanfont: ['Anurati'],
      udaanfontsm: ['Brandon-Grotesque'],
      luloclean: ['lulo-clean']
    },
    extend: {
      backgroundImage: {
        'hero-pattern':"url('/JotBleach.github.io/Foellinger.jpg')",
        'udaan-letters':"url('/JotBleach.github.io/UdaanLogoWords.png')"
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
