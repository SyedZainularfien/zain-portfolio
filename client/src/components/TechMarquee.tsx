import { motion } from "framer-motion";

const technologies = [
  "React", "TypeScript", "Next.js", "TailwindCSS", "Node.js", "GraphQL", 
  "Framer Motion", "PostgreSQL", "Docker", "AWS", "Three.js", "Figma"
];

export function TechMarquee() {
  return (
    <div className="w-full overflow-hidden bg-black/20 backdrop-blur-sm border-y border-white/5 py-4">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {[...technologies, ...technologies, ...technologies].map((tech, i) => (
          <div key={i} className="flex items-center gap-2 text-muted-foreground font-mono uppercase text-sm tracking-widest hover:text-primary transition-colors cursor-default">
            <span className="w-2 h-2 bg-primary rotate-45" />
            {tech}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
