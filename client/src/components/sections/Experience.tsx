import { motion } from "framer-motion";
import { useExperience } from "@/hooks/use-portfolio";
import { Section, SectionTitle } from "../Section";

export function Experience() {
  const { data: experience, isLoading } = useExperience();

  if (isLoading) return null;

  return (
    <Section id="experience">
      <SectionTitle subtitle="MISSION_LOG">EXPERIENCE</SectionTitle>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

        <div className="space-y-12">
          {experience?.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                idx % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-[5px] w-2.5 h-2.5 rounded-full bg-accent box-glow z-10 mt-1.5" />

              <div className={`pl-8 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <h3 className="text-2xl font-bold text-white font-display">{job.role}</h3>
                <h4 className="text-xl text-primary mb-2">{job.company}</h4>
                <span className="text-sm font-mono text-gray-500 mb-4 block">{job.period}</span>
                <p className="text-gray-400 leading-relaxed">
                  {job.description}
                </p>
              </div>
              
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
