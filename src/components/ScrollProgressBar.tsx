import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[3px] bg-zinc-950 z-[9999] pointer-events-none"
      id="scroll-progress-container"
    >
      <div
        id="scroll-progress-bar"
        className="h-full bg-brand transition-all duration-100 ease-out shadow-[0_0_8px_#CBFA05]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
