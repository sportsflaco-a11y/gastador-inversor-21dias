import React from "react";
import { ChevronRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  showIcon?: boolean;
  id?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  showIcon = true,
  id
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-display font-bold text-center transition-all duration-300 active:scale-95 text-xs sm:text-sm md:text-base";
  
  const variants = {
    primary: "bg-brand text-black hover:bg-brand-hover shadow-[0_0_20px_rgba(203,250,5,0.15)] hover:shadow-[0_0_30px_rgba(203,250,5,0.35)]",
    secondary: "bg-[#121214] border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800/60 hover:border-zinc-700",
    outline: "border border-brand text-brand hover:bg-brand hover:text-black shadow-[0_0_15px_rgba(203,250,5,0.05)] hover:shadow-[0_0_25px_rgba(203,250,5,0.2)]"
  };

  const content = (
    <>
      {children}
      {showIcon && <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    return (
      <a href={href} id={id} className={`${baseClasses} ${variants[variant]} group ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} id={id} className={`${baseClasses} ${variants[variant]} group ${className}`}>
      {content}
    </button>
  );
}
