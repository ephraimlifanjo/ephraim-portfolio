"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "@/utils/data/portfolio-data";

const Ctx = createContext(null);
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-lang");
    if (saved && translations[saved]) return setLang(saved);
    const browser = (navigator.language || "en").slice(0,2).toLowerCase();
    setLang(translations[browser] ? browser : "en");
  }, []);
  const value = useMemo(() => ({ lang, t: translations[lang], setLang: (v) => { setLang(v); localStorage.setItem("portfolio-lang", v); } }), [lang]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export const useLanguage = () => useContext(Ctx);
