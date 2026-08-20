"use client";

import { useEffect } from "react";

export default function MotionEngine() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.documentElement.classList.add("motion-ready");
      return;
    }

    let ctx;
    let trigger;
    let cancelled = false;

    const start = async () => {
      const gsapModule = await import("gsap");
      const triggerModule = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      const gsap = gsapModule.gsap || gsapModule.default;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      trigger = ScrollTrigger;

      ctx = gsap.context(() => {
        gsap.from("[data-hero-item]", {
          y: 26,
          opacity: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
        });

        ScrollTrigger.batch("[data-reveal]", {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              { y: 24, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: "power2.out", overwrite: true },
            ),
        });

        const bar = document.querySelector("[data-scroll-progress]");
        if (bar) {
          gsap.to(bar, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: { trigger: document.documentElement, start: "top top", end: "bottom bottom", scrub: true },
          });
        }
      });
      document.documentElement.classList.add("motion-ready");
    };

    const id = "requestIdleCallback" in window ? window.requestIdleCallback(start, { timeout: 1200 }) : window.setTimeout(start, 150);

    return () => {
      cancelled = true;
      if ("cancelIdleCallback" in window) window.cancelIdleCallback(id);
      else window.clearTimeout(id);
      ctx?.revert();
      trigger?.getAll().forEach((item) => item.kill());
    };
  }, []);

  return <div className="scroll-progress" data-scroll-progress aria-hidden="true" />;
}
