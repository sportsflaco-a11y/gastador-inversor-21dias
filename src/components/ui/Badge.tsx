import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "brand" | "red" | "zinc";
  className?: string;
}

export function Badge({ children, variant = "brand", className = "" }: BadgeProps) {
  const baseClasses = "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase border";
  
  const variants = {
    brand: "bg-brand/10 border-brand/20 text-brand shadow-[0_0_15px_rgba(203,250,5,0.05)]",
    red: "bg-red-500/10 border-red-500/25 text-red-400",
    zinc: "bg-zinc-900 border-zinc-800 text-zinc-400"
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
