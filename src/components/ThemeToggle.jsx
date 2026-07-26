import { useContext } from "react";
import { ThemeContext } from "../ui/ThemeContext";

export default function ThemeToggle() {

  const { theme, toggleTheme } =
    useContext(ThemeContext);

  return (
    <button
      className="theme-btn"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}