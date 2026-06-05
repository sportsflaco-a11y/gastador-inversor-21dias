import React from "react";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  tag: string;
  title: React.ReactNode;
  desc?: string;
  variant?: "brand" | "red" | "zinc";
  theme?: "dark" | "light";
  className?: string;
}

export function SectionHeader({ tag, title, desc, variant = "brand", theme = "dark", className = "" }: SectionHeaderProps) {
  const isLight = theme === "light";
  
  return (
    <div className={`max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4 ${className}`}>
      <div className="flex justify-center">
        <Badge variant={isLight && variant === "brand" ? "zinc" : variant}>{tag}</Badge>
      </div>
      <h2 className={`font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight ${isLight ? "text-zinc-950" : "text-white"}`}>
        {title}
      </h2>
      {desc && (
        <p className={`text-sm sm:text-base max-w-xl mx-auto leading-relaxed ${isLight ? "text-zinc-650" : "text-zinc-400"}`}>
          {desc}
        </p>
      )}
    </div>
  );
}
