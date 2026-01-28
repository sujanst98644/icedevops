/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx, ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif']
      },

    },
  },
  plugins: [],
  darkMode: "class",
}

