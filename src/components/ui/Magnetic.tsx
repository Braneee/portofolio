"use client";

import React, { useRef, useState, useEffect } from "react";

interface MagneticProps {
  children: React.ReactElement;
  range?: number;
  strength?: number;
  className?: string;
}

export default function Magnetic({
  children,
  range = 60,
  strength = 0.35,
  className = "",
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const distX = clientX - centerX;
      const distY = clientY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);
      
      if (distance < range) {
        setPosition({ x: distX * strength, y: distY * strength });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [range, strength]);

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const child = React.Children.only(children);
  
  return (
    <div
      ref={ref}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0px)`
      }}
    >
      {child}
    </div>
  );
}
