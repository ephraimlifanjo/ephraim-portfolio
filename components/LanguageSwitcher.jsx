"use client";

import { useEffect, useRef, useState } from "react";
import { FaCheck, FaChevronDown, FaGlobe } from "react-icons/fa";
import { localePath, supportedLocales } from "@/data/i18n";
import styles from "./LanguageSwitcher.module.css";

const flags = {
  en: "🇬🇧",
  fr: "🇫🇷",
  de: "🇩🇪",
  es: "🇪🇸",
  pt: "🇵🇹",
  it: "🇮🇹",
  zh: "🇨🇳",
  ja: "🇯🇵",
  ko: "🇰🇷",
  ar: "🌍",
  ru: "🇷🇺",
};

const supportedCodes = new Set(supportedLocales.map((item) => item.code));

export default function LanguageSwitcher({ currentLocale = "en", autoDetect = false }) {
  const [locale, setLocale] = useState(currentLocale);
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const current = supportedLocales.find((item) => item.code === locale) || supportedLocales[0];

  useEffect(() => {
    setLocale(currentLocale);
  }, [currentLocale]);

  useEffect(() => {
    function closeOnOutside(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false);
    }

    function closeOnEscape(event) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  useEffect(() => {
    if (!autoDetect || typeof window === "undefined") return;

    const saved = window.localStorage.getItem("portfolio-language");
    if (saved && supportedCodes.has(saved)) return;

    const browserLanguage = window.navigator.languages?.[0] || window.navigator.language || "en";
    const detected = browserLanguage.toLowerCase().split("-")[0];
    const next = supportedCodes.has(detected) ? detected : "en";
    window.localStorage.setItem("portfolio-language", next);

    if (next !== "en" && window.location.pathname === "/") {
      window.location.replace(localePath(next));
    }
  }, [autoDetect]);

  function chooseLanguage(next) {
    if (!supportedCodes.has(next)) return;
    setLocale(next);
    setOpen(false);
    window.localStorage.setItem("portfolio-language", next);
    window.location.assign(localePath(next));
  }

  return (
    <div ref={rootRef} className={`${styles.picker} ${open ? styles.open : ""}`}>
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Language: ${current.native}`}
        onClick={() => setOpen((value) => !value)}
      >
        <FaGlobe className={styles.globe} aria-hidden="true" />
        <span className={styles.flag} aria-hidden="true">{flags[current.code] || "🌐"}</span>
        <span className={styles.native}>{current.native}</span>
        <FaChevronDown className={styles.chevron} aria-hidden="true" />
      </button>

      {open && (
        <div className={styles.menu} role="listbox" aria-label="Choose language">
          <div className={styles.menuTitle}>🌐 Language</div>
          {supportedLocales.map((item) => {
            const active = item.code === locale;
            return (
              <button
                key={item.code}
                type="button"
                role="option"
                aria-selected={active}
                className={`${styles.option} ${active ? styles.active : ""}`}
                onClick={() => chooseLanguage(item.code)}
              >
                <span className={styles.optionFlag} aria-hidden="true">{flags[item.code] || "🌐"}</span>
                <span>
                  <strong>{item.native}</strong>
                  <small>{item.label}</small>
                </span>
                {active ? <FaCheck className={styles.check} aria-hidden="true" /> : <span />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
