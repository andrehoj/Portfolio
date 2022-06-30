/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#282c34",
        secondary: "#565656",
        third: "#051622",
        text_color: '#33B6AE',
        second_color: "#ffffff"
      }
    },
  },
  plugins: [],
}
