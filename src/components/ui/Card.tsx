import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  intensity?: "soft" | "bold";
  hoverable?: boolean;
  id?: string;
  key?: string | number | null;
  onClick?: () => void;
}

export function Card({ 
  children, 
  className = "", 
  glow = true, 
  intensity = "soft", 
  hoverable = true,
  id,
  onClick
}: CardProps) {
  const baseClasses = "relative p-6 sm:p-8 rounded-3xl bg-[#121214] border border-zinc-800/80 transition-all duration-300 shadow-2xl overflow-hidden flex flex-col justify-between";
  const hoverClasses = hoverable ? "hover:border-brand/40 hover:bg-zinc-900/40" : "";
  const glowOpacity = intensity === "bold" ? "group-hover:bg-brand/12" : "group-hover:bg-brand/5";

  return (
    <div 
      id={id} 
      onClick={onClick}
      className={`${baseClasses} ${hoverClasses} group ${className}`}
    >
      {/* Background radial glow on header/spotlight hover */}
      {glow && (
        <div className={`absolute -top-12 -right-12 w-28 h-28 bg-brand/3 rounded-full blur-2xl transition-all duration-500 pointer-events-none ${glowOpacity}`} />
      )}
      
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
