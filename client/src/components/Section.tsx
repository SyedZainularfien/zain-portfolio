import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
}

export function Section({ id, className, children, fullWidth = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative  flex flex-col justify-center py-10 sm:py-14 overflow-hidden",
        className
      )}
    >
      <div className={cn("relative z-10 w-full", !fullWidth && "max-w-7xl mx-auto px-6")}>
        {children}
      </div>

      {/* Decorative background grid line */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
    </section>
  );
}

export function SectionTitle({ children, subtitle }: { children: ReactNode; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      {subtitle && (
        <span className="text-secondary font-mono text-sm tracking-[0.2em] uppercase mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-6xl font-bold font-display text-white inline-block relative">
        {children}
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-primary to-secondary"
        />
      </h2>
    </motion.div>
  );
}
