import { useEffect, useState } from "react";

export default function useDarkMode() {
  //set the theme to the local storage theme, either 'dark' or 'light'
  const [theme, setTheme] = useState(localStorage.theme);

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [colorTheme, setTheme];
}
