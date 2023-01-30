/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xsm: "350px",

      sm: "640px",

      xmd: "665px",

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
        theme_cyan: "#2FBD92",
        nav_bar_bg: "#121212",
        dark_theme_elevated_2: "#191919",
        dark_theme_elevated_3: "#232323",
        secondary_text: "rgb(136 136 136)",
        theme_pink: "#ED6D8C",
        theme_purple: "#6F74B7",
        github_color: "#1b1f23",
        linkedIn_color: "#0077B5",
        theme_yellow: "#C5C454",
        theme_green: "#4DBB76",
        theme_orange: "#ED786B",
        stackOF_color: "#f18d3c",
        handlebars: "#F0772B",
        js_color: "#FFFF00",
        ts_color: "#2F72BC",
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
        restAPI_color: "#FFFFFF",
        graphQL_color: "#DA33A3",
        git_color: "#E44C30",
        github_color: "#FFFFFF",
        npm_color: "#c13534",
        heroku_color: "#531EA9",
        railway_color: "#FFFFFF",
        py_color: "#346E9E",
        svelte_color: "#FF5620",
        webpack_color: " #1C78C0",
        docker_color: "#019BC6",
        contact_gradient: "#48bb78",
        img_gradient: "#ed8936"
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
