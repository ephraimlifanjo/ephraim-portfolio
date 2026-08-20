"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("ephraim");

  useEffect(() => {
    const saved = window.localStorage.getItem("ephraim-theme");
    if (saved === "ephraim-light" || saved === "ephraim") {
      document.documentElement.dataset.theme = saved;
      setTheme(saved);
    }
  }, []);

  function toggle() {
    const next = theme === "ephraim" ? "ephraim-light" : "ephraim";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("ephraim-theme", next);
  }

  const isDark = theme === "ephraim";
  return (
    <button
      type="button"
      className="btn btn-ghost btn-circle btn-sm border border-base-content/10"
      onClick={toggle}
      aria-label={isDark ? "Use light theme" : "Use dark theme"}
      title={isDark ? "Use light theme" : "Use dark theme"}
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
