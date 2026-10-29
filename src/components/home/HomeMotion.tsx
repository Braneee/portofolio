"use client";

import { useEffect } from "react";

export default function HomeMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets =
      document.querySelectorAll<HTMLElement>("[data-home-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = entry.target as HTMLElement;
          target.removeAttribute("data-motion-pending");
          target.setAttribute("data-motion-visible", "");
          observer.unobserve(target);
        }
      },
      { threshold: 0.12 },
    );

    for (const target of targets) {
      target.setAttribute("data-motion-pending", "");
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
