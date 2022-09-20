import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState("dark");

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    console.log("useEffect in useDarkMode hook was called");
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme]);

  return [colorTheme, setTheme];
}
