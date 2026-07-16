import React, { useRef } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
}

export default function Card({
  children,
  className = "",
  onClick,
  interactive = false,
}: CardProps) {
  const isClickable = !!onClick || interactive;
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`group relative rounded-xl border border-border bg-surface p-6 shadow-sm overflow-hidden transition-all duration-300 ${
        isClickable
          ? "cursor-pointer hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary-500/10"
          : ""
      } ${className}`}
    >
      {/* Spotlight Hover Border Glow Layer */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(139, 92, 246, 0.12), transparent 80%)`,
          border: '1px solid rgba(139, 92, 246, 0.35)',
          WebkitMaskImage: 'radial-gradient(150px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), black, transparent)',
          maskImage: 'radial-gradient(150px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), black, transparent)',
        }}
      />
      
      {/* Background Soft Spotlight Glow */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{
          background: `radial-gradient(300px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(139, 92, 246, 0.04), transparent 60%)`
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
