import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeading({ title, subtitle, align = "left" }: SectionHeadingProps) {
  const alignmentClass = align === "center" ? "items-center text-center" : align === "right" ? "items-end text-right" : "items-start text-left";

  return (
    <div className={`flex flex-col mb-12 ${alignmentClass}`}>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        transition={{ duration: 0.8 }}
        className="h-1 bg-gradient-to-r from-primary to-secondary mb-4"
      />
      
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-wider relative"
      >
        <span className="absolute -top-6 left-0 text-7xl md:text-9xl opacity-5 font-outline-2 pointer-events-none whitespace-nowrap">
          {title}
        </span>
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-2 text-primary font-mono text-lg uppercase tracking-widest"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
