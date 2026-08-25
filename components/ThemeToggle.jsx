"use client";

import { useEffect, useMemo, useState } from "react";
import { FaDesktop, FaMoon, FaSun } from "react-icons/fa";

const modes = ["system", "light", "dark"];

function applyTheme(mode) {
  const root = document.documentElement;
  if (mode === "system") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", mode);
}

export default function ThemeToggle() {
  const [mode, setMode] = useState("system");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    const next = modes.includes(saved) ? saved : "system";
    setMode(next);
    applyTheme(next);
  }, []);

  const Icon = useMemo(() => {
    if (mode === "light") return FaSun;
    if (mode === "dark") return FaMoon;
    return FaDesktop;
  }, [mode]);

  function cycle() {
    const next = modes[(modes.indexOf(mode) + 1) % modes.length];
    setMode(next);
    localStorage.setItem("portfolio-theme", next);
    applyTheme(next);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={cycle}
      aria-label={`Theme: ${mode}. Click to change.`}
      title={`Theme: ${mode}`}
    >
      <span className="theme-toggle__orb"><Icon aria-hidden="true" /></span>
      <span className="theme-toggle__label">{mode}</span>
    </button>
  );
}
