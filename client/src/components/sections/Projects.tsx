import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useProjects } from "@/hooks/use-portfolio";
import { Section, SectionTitle } from "../Section";

export function Projects() {
  const { data: projects, isLoading } = useProjects();
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [Autoplay({ delay: 4000 })]);

  if (isLoading) return null;

  return (
    <Section id="projects" fullWidth>
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <SectionTitle subtitle="DEPLOYED_UNITS">FEATURED_PROJECTS</SectionTitle>
      </div>

      <div className="relative" ref={emblaRef}>
        <div className="flex touch-pan-y pl-4 md:pl-0">
          {projects?.map((project, idx) => (
            <div 
              key={project.id} 
              className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 pl-6 md:pl-10 relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative h-[500px] bg-card border border-white/10 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 shadow-xl"
              >
                {/* Image */}
                <div className="h-1/2 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 h-1/2 flex flex-col justify-between bg-gradient-to-b from-card to-black">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map(tech => (
                        <span key={tech} className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-secondary border border-secondary/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-white/5">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl}
                        className="flex items-center gap-2 text-sm font-bold text-white hover:text-accent transition-colors"
                      >
                        <ExternalLink size={16} /> LIVE DEMO
                      </a>
                    )}
                    {project.repoUrl && (
                      <a 
                        href={project.repoUrl}
                        className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={16} /> CODE
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
