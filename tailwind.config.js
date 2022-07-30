/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "md-lg": "920px",
      },
      colors: {
        primary: "#8cd0d3",
        secondary: "#ee8373",
        primaryDark: "#ee8373",
        secondaryDark: "#8cd0d3",
      },
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
        poppins: ["Poppings", "sans-serif"],
        syneMono: ["Syne Mono", "monospace"],
      },
      keyframes: {
        toFullWidth: {
          from: {
            width: "0%",
          },
          to: {
            width: "100%",
          },
        },
      },
      animation: {
        toFullWidth: "toFullWidth 1s ease-out",
      },
    },
  },
  plugins: [],
};
