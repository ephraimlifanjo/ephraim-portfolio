"use client";

import { useEffect, useMemo, useSyncExternalStore } from "react";
import { FaDesktop, FaMoon, FaSun } from "react-icons/fa";

const modes = ["system", "light", "dark"];
const THEME_KEY = "portfolio-theme";
const THEME_EVENT = "portfolio-theme-change";

function getMode() {
  try {
    const saved = window.localStorage.getItem(THEME_KEY);
    return modes.includes(saved) ? saved : "system";
  } catch {
    return "system";
  }
}

function subscribeMode(onChange) {
  window.addEventListener("storage", onChange);
  window.addEventListener(THEME_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(THEME_EVENT, onChange);
  };
}

function applyTheme(mode) {
  const root = document.documentElement;
  if (mode === "system") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", mode);
}

export default function ThemeToggle() {
  const mode = useSyncExternalStore(subscribeMode, getMode, () => "system");

  useEffect(() => {
    applyTheme(mode);
  }, [mode]);

  const Icon = useMemo(() => {
    if (mode === "light") return FaSun;
    if (mode === "dark") return FaMoon;
    return FaDesktop;
  }, [mode]);

  function cycle() {
    const next = modes[(modes.indexOf(mode) + 1) % modes.length];
    try {
      window.localStorage.setItem(THEME_KEY, next);
    } catch {
      applyTheme(next);
      return;
    }
    window.dispatchEvent(new Event(THEME_EVENT));
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
