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
        text_color: '#fba92c',
        second_color: "#ffffff"
      }
    },
  },
  plugins: [],
}
