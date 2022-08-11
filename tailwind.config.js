/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: { main_font: "open sans regular", font_dev: "VT323" },
    extend: {
      colors: {
        dark_grey: "#282c34",
        light_grey: "#565656",
        lightest_grey: "#afbfc9",
        dark_blue: "#051622",
        lighter_blue: "#0d293d",
        lightest_blue: "#33B6AE",
        main_orange: "#deb992",
        github_color: "#1b1f23",
        linkedIn_color: "#0077B5",
        stackOF_color: "#f18d3c",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
