"use client";

import { useEffect, useMemo, useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { supportedLocales, localePath } from "@/data/i18n";

export default function LanguageSwitcher({ currentLocale = "en", autoDetect = false }) {
  const [locale, setLocale] = useState(currentLocale);
  const supported = useMemo(() => new Set(supportedLocales.map((item) => item.code)), []);

  useEffect(() => {
    setLocale(currentLocale);
  }, [currentLocale]);

  useEffect(() => {
    if (!autoDetect || typeof window === "undefined") return;
    const saved = window.localStorage.getItem("portfolio-language");
    if (saved && supported.has(saved)) return;

    const detected = (window.navigator.language || "en").toLowerCase().split("-")[0];
    const next = supported.has(detected) ? detected : "en";
    window.localStorage.setItem("portfolio-language", next);

    if (next !== "en" && window.location.pathname === "/") {
      window.location.replace(localePath(next));
    }
  }, [autoDetect, supported]);

  function onChange(event) {
    const next = event.target.value;
    setLocale(next);
    window.localStorage.setItem("portfolio-language", next);
    window.location.assign(localePath(next));
  }

  return (
    <label className="language-switcher" title="Language">
      <FaGlobe aria-hidden="true" />
      <span className="sr-only">Language</span>
      <select value={locale} onChange={onChange} aria-label="Choose language">
        {supportedLocales.map((item) => (
          <option key={item.code} value={item.code}>{item.native}</option>
        ))}
      </select>
    </label>
  );
}
