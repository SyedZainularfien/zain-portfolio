import { motion } from "framer-motion";

interface CharacterProps {
  src: string;
  alt: string;
  position: "left" | "right";
  className?: string;
}

export function Character({ src, alt, position, className = "" }: CharacterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: position === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`absolute bottom-0 ${position === "left" ? "left-0" : "right-0"} pointer-events-none z-0 hidden lg:block ${className}`}
    >
      <div className="relative">
        {/* Glow effect behind character */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent blur-2xl transform scale-110" />
        
        <img 
          src={src} 
          alt={alt} 
          className="relative z-10 max-h-[80vh] object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        />
      </div>
    </motion.div>
  );
}
