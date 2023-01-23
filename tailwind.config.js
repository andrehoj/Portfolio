/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xsm: "350px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    fontFamily: { main_font: "Work+Sans", font_dev: "VT323" },
    extend: {
      colors: {
        main_white: "#FFFFFF",
        main_black: "#121212",
        text_secondary: "#888888",
        light_theme_blue: "#4284f5",
        dark_theme_cyan: "#38FFDD",
        nav_bar_bg: "#121212",
        dark_theme_elevated_2: "#404040",
        dark_theme_elevated_3: "#232323",
        secondary_text: "rgb(136 136 136)",
        theme_pink: "#FF45DE",
        github_color: "#1b1f23",
        linkedIn_color: "#0077B5",
        stackOF_color: "#f18d3c",
        handlebars: "#F0772B",
        js_color: "#FFFF00",
        ts_color: "#F2F2F2",
        html_color: "#D84924",
        css_color: "#2449D8",
        react_color: "#5ccfee",
        jQuery_color: "#1064A5",
        bootstrap_color: "#6E10EA",
        tailwind_color: "#07ADCA",
        node_color: "#7CC327",
        express_color: "#FFFFFF",
        mySQL_color: "#417399",
        mongoDB_color: "#4BA13E",
        graphQL_color: "#DA33A3",
        git_color: "#E44C30",
        github_color: "#FFFFFF",
        npm_color: "#c13534",
        railway_color: "#FFFFFF",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
