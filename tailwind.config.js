/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#282c34",
        secondary: "#565656",
        back: "#0d293d",
        third: "#051622",
        second_text: "#deb992",
        text_color: "#33B6AE",
        second_color: "#ffffff",
        third_text: "#afbfc9",
        font_two: "Source Code Pro",
        github_color: "#1b1f23",
        linkedIn_color: "#0077B5",
        stackOF_color: "#f18d3c",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
