import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "primary" | "secondary" | "success";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-colors duration-200";
  
  const variantStyles = {
    default: "bg-bg-subtle border border-border text-text-secondary hover:bg-border/35",
    outline: "border border-border text-text-secondary hover:bg-bg-subtle",
    primary: "bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 border border-primary-100 dark:border-primary-900/50",
    secondary: "bg-bg-subtle text-text-primary border border-border-strong",
    success: "bg-success/10 text-success border border-success/20",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
