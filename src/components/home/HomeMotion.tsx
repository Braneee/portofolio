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
    const card = scene?.querySelector<HTMLElement>(".lanyard-card");
    const canSwing = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    let draggingPointer: number | null = null;
    let dragStartX = 0;
    let releaseTimer: ReturnType<typeof setTimeout> | undefined;

    const resetSwing = () => {
      if (!scene || draggingPointer !== null) return;
      scene.removeAttribute("data-interacting");
      scene.style.removeProperty("--lanyard-angle");
    };

    const updateSwing = (event: PointerEvent) => {
      if (!scene) return;
      if (draggingPointer === event.pointerId) {
        const angle = Math.max(
          -22,
          Math.min(22, (event.clientX - dragStartX) * 0.12),
        );
        scene.style.setProperty("--lanyard-angle", `${angle.toFixed(2)}deg`);
        return;
      }
      if (!canSwing || event.pointerType === "touch") return;
      const bounds = scene.getBoundingClientRect();
      const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
      scene.style.setProperty(
        "--lanyard-angle",
        `${(horizontal * 16).toFixed(2)}deg`,
      );
      scene.setAttribute("data-interacting", "");
    };

    const startDrag = (event: PointerEvent) => {
      if (
        !scene ||
        !card ||
        (event.pointerType === "mouse" && event.button !== 0)
      )
        return;
      clearTimeout(releaseTimer);
      draggingPointer = event.pointerId;
      dragStartX = event.clientX;
      scene.style.setProperty("--lanyard-angle", "0deg");
      scene.setAttribute("data-interacting", "");
      scene.setAttribute("data-dragging", "");
      card.setPointerCapture(event.pointerId);
      event.preventDefault();
    };

    const endDrag = (event: PointerEvent) => {
      if (!scene || draggingPointer !== event.pointerId) return;
      draggingPointer = null;
      scene.removeAttribute("data-dragging");
      scene.style.setProperty("--lanyard-angle", "0deg");
      releaseTimer = setTimeout(resetSwing, 700);
    };

    if (scene && card) {
      scene.addEventListener("pointermove", updateSwing);
      scene.addEventListener("pointerleave", resetSwing);
      card.addEventListener("pointerdown", startDrag);
      card.addEventListener("pointerup", endDrag);
      card.addEventListener("pointercancel", endDrag);
    }

    return () => {
      observer.disconnect();
      clearTimeout(releaseTimer);
      draggingPointer = null;
      if (scene && card) {
        scene.removeEventListener("pointermove", updateSwing);
        scene.removeEventListener("pointerleave", resetSwing);
        card.removeEventListener("pointerdown", startDrag);
        card.removeEventListener("pointerup", endDrag);
        card.removeEventListener("pointercancel", endDrag);
      }
      scene?.removeAttribute("data-dragging");
      resetSwing();
    };
  }, []);

  return null;
}
