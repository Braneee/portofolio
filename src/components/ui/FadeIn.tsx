"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  duration = 700,
}: FadeInProps) {
  const reduce = useReducedMotion();

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: 24, x: 0 };
      case "down":
        return { y: -24, x: 0 };
      case "left":
        return { y: 0, x: 24 };
      case "right":
        return { y: 0, x: -24 };
      default:
        return { y: 24, x: 0 };
    }
  };

  const offset = getDirectionOffset();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: duration / 1000,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1], // fluid spring-like ease
      }}
    >
      {children}
    </motion.div>
  );
}
