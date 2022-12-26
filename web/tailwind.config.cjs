/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "pokeball-red": "#ee1515",
        "pokeball-gray": "#222224",
        "pokeball-white": "#f0f0f0",
      },
      animation: { pokeball: "pokeball .3s ease-in-out forwards" },
      keyframes: {
        pokeball: {
          "0%": { transform: "scale(0) rotate(0deg)" },
          "100%": { transform: "scale(1) rotate(60deg)" },
        },
      },
    },
  },
  plugins: [],
};
