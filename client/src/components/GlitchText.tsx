import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function GlitchText({ text }: { text: string }) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative inline-block">
      <span className="relative z-10">{text}</span>
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 -ml-[2px] text-secondary opacity-70 animate-pulse">
            {text}
          </span>
          <span className="absolute top-0 left-0 -ml-[1px] mt-[1px] text-primary opacity-70 animate-pulse">
            {text}
          </span>
        </>
      )}
    </div>
  );
}
