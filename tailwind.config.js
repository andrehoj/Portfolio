/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: { main_font: "Taviraj", font_dev: "VT323" },
    extend: {
      colors: {
        dark_blue: "#15202B",
        light_blue: "#192734",
        grey: "#22303C",
        white: "#FFFFFF",
        blue: "#7DD8EB",
        light_grey: "#8899A6",
        github_color: "#1b1f23",
        linkedIn_color: "#0077B5",
        stackOF_color: "#f18d3c",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

// black: "#121212",
// light_black: "#181818",
// grey: "#404040",
// dark_grey: "#282828",
// white: "#ffffff",
// light_grey: "#B3B3B3",
// blue: "#2D54D7",

//dark_grey: "#282c34",
// light_grey: "#565656",
// lightest_grey: "#afbfc9",
// dark_blue: "#051622",
// lighter_blue: "#0d293d",
// lightest_blue: "#33B6AE",
// main_orange: "#deb992",
