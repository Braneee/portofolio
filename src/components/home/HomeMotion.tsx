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

    const scene = document.querySelector<HTMLElement>(".lanyard-scene");
    const canTilt = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    const resetTilt = () => {
      if (!scene) return;
      scene.removeAttribute("data-interacting");
      scene.style.removeProperty("--lanyard-tilt-x");
      scene.style.removeProperty("--lanyard-tilt-y");
    };

    const updateTilt = (event: PointerEvent) => {
      if (!scene || event.pointerType === "touch") return;
      const bounds = scene.getBoundingClientRect();
      const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
      const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
      scene.style.setProperty(
        "--lanyard-tilt-x",
        `${(-vertical * 8).toFixed(2)}deg`,
      );
      scene.style.setProperty(
        "--lanyard-tilt-y",
        `${(horizontal * 10).toFixed(2)}deg`,
      );
      scene.setAttribute("data-interacting", "");
    };

    if (scene && canTilt) {
      scene.addEventListener("pointermove", updateTilt);
      scene.addEventListener("pointerleave", resetTilt);
      scene.addEventListener("pointercancel", resetTilt);
    }

    return () => {
      observer.disconnect();
      if (scene && canTilt) {
        scene.removeEventListener("pointermove", updateTilt);
        scene.removeEventListener("pointerleave", resetTilt);
        scene.removeEventListener("pointercancel", resetTilt);
      }
      resetTilt();
    };
  }, []);

  return null;
}
