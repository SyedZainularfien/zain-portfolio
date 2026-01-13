import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeader({ title, subtitle, align = "left" }: SectionHeaderProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-2 mb-12 ${alignClass}`}
    >
      <div className="flex items-center gap-3">
        <span className="h-[2px] w-12 bg-primary shadow-[0_0_8px_var(--primary)]"></span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 tracking-tighter">
          {title}
        </h2>
        {align === "center" && <span className="h-[2px] w-12 bg-primary shadow-[0_0_8px_var(--primary)]"></span>}
      </div>
      {subtitle && (
        <p className="text-muted-foreground max-w-lg font-mono text-sm md:text-base border-l-2 border-primary/50 pl-4 ml-1">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
