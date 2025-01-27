import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    window.matchMedia("(prefers-color-scheme:dark)").matches
  );

  useEffect(() => {
    const theme =
      sessionStorage.getItem("theme") || (isDark ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
    sessionStorage.setItem("theme", theme);
  }, [isDark]);

  const changeTheme = () => {
    const newTheme =
      document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = newTheme;
    sessionStorage.setItem("theme", newTheme);
    setIsDark(newTheme === "dark");
  };

  return (
    <button
      className="icon-btn theme-btn"
      onClick={changeTheme}
      aria-hidden="true"
    >
      <span className="material-symbols-outlined dark" aria-hidden="true">
        dark_mode
      </span>
      <span className="material-symbols-outlined light" aria-hidden="true">
        light_mode
      </span>
      <div className="state-layer"></div>
    </button>
  );
};

export default ThemeToggle;
