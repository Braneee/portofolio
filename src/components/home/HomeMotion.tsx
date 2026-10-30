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
    const canSwing = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    const resetSwing = () => {
      if (!scene) return;
      scene.removeAttribute("data-interacting");
      scene.style.removeProperty("--lanyard-angle");
    };

    const updateSwing = (event: PointerEvent) => {
      if (!scene || event.pointerType === "touch") return;
      const bounds = scene.getBoundingClientRect();
      const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
      scene.style.setProperty(
        "--lanyard-angle",
        `${(horizontal * 16).toFixed(2)}deg`,
      );
      scene.setAttribute("data-interacting", "");
    };

    if (scene && canSwing) {
      scene.addEventListener("pointermove", updateSwing);
      scene.addEventListener("pointerleave", resetSwing);
      scene.addEventListener("pointercancel", resetSwing);
    }

    return () => {
      observer.disconnect();
      if (scene && canSwing) {
        scene.removeEventListener("pointermove", updateSwing);
        scene.removeEventListener("pointerleave", resetSwing);
        scene.removeEventListener("pointercancel", resetSwing);
      }
      resetSwing();
    };
  }, []);

  return null;
}
