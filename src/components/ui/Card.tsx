import React from "react";

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

  return (
    <div
      onClick={onClick}
      className={`rounded-xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 ${
        isClickable
          ? "cursor-pointer hover:-translate-y-1.5 hover:border-primary-500/40 hover:shadow-lg hover:shadow-primary-500/10"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
