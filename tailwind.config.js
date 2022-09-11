/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: { main_font: "Taviraj", font_dev: "VT323" },
    extend: {
      colors: {
        main_white: "#FFFFFF",
        main_black: "#191919",
        light_theme_blue: "#3FCD23",
        dark_theme_cyan: "#34F1AA",
        nav_bar_bg: "#121212",
        dark_theme_elevated_2: "#404040",
        dark_theme_elevated_3: "#232323",
        secondary_text: "#B3B3B3",
        theme_pink: "#FF45DE",
        github_color: "#1b1f23",
        linkedIn_color: "#0077B5",
        stackOF_color: "#f18d3c",
        handlebars: "#F0772B",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

// text_white: "#ffffff",
// dark_black: "1e1e1e",
// lighter_black: "#252526",
// lightest_black: "#2d2d30",
// grey: "#3e3e42",
// blue: "007acc",

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
