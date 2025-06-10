/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "Primary-100": "#FFE1E0",
        "Primary-300": "#FFA6A3",
        "Primary-500": "#FF6B66",
        "Secondary-400": "#FFCD58",
        "Secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred" : "lineargradient(90deg, #FF616A 0%, FFC837 100%)",
        "mobile-home" : "url('./assets/HomePageGraphics.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "san-serif"]
      },
      content : {
        evolvetext: "url('./assets/EvolveText.png')",
        evolvetext: "url('./assets/EvolveText.png')",
        evolvetext: "url('./assets/EvolveText.png')",
        evolvetext: "url('./assets/EvolveText.png')",
      }
    },
  },
  plugins: [],
}