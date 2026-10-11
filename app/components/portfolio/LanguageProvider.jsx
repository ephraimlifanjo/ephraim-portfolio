"use client";
import { createContext, useContext, useMemo, useSyncExternalStore } from "react";
import { translations } from "@/utils/data/portfolio-data";

const Ctx = createContext(null);
const LANGUAGE_KEY = "portfolio-lang";
const LANGUAGE_EVENT = "portfolio-language-change";

function getPreferredLanguage() {
  try {
    const saved = window.localStorage.getItem(LANGUAGE_KEY);
    if (saved && translations[saved]) return saved;
  } catch {
    // Language selection still works when browser storage is unavailable.
  }
  const browser = (window.navigator.language || "en").slice(0, 2).toLowerCase();
  return translations[browser] ? browser : "en";
}

function subscribeToLanguage(onChange) {
  window.addEventListener("storage", onChange);
  window.addEventListener(LANGUAGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(LANGUAGE_EVENT, onChange);
  };
}

export function LanguageProvider({ children }) {
  const lang = useSyncExternalStore(subscribeToLanguage, getPreferredLanguage, () => "en");
  const value = useMemo(() => ({
    lang,
    t: translations[lang],
    setLang: (nextLang) => {
      if (!translations[nextLang]) return;
      try {
        window.localStorage.setItem(LANGUAGE_KEY, nextLang);
      } catch {
        return;
      }
      window.dispatchEvent(new Event(LANGUAGE_EVENT));
    },
  }), [lang]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useLanguage = () => useContext(Ctx);
