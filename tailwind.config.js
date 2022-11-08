/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xsm: "300px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    fontFamily: { main_font: "Taviraj", font_dev: "VT323" },
    extend: {
      colors: {
        main_white: "#FFFFFF",
        main_black: "#191919",
        light_theme_blue: "#4284f5",
        dark_theme_cyan: "#38FFDD",
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
