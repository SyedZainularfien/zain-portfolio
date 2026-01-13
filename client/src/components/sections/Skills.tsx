import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Section, SectionTitle } from "../Section";
import { useEffect, useState } from "react";

const techSkills = [
  {
    name: "React.Js",
    lottieUrl: "https://lottie.host/e4093e44-0442-43f0-9378-889ec9a23505/tADGTaKrlQ.lottie",
    color: "#61DAFB",
    bgColor: "from-blue-500/10 to-cyan-500/10"
  },
  {
    name: "Next.js",
    lottieUrl: "https://lottie.host/e4093e44-0442-43f0-9378-889ec9a23505/tADGTaKrlQ.lottie",
    color: "#000000",
    bgColor: "from-gray-500/10 to-black/10"
  },
  {
    name: "JavaScript",
    lottieUrl: "https://lottie.host/e4093e44-0442-43f0-9378-889ec9a23505/tADGTaKrlQ.lottie",
    color: "#F7DF1E",
    bgColor: "from-yellow-500/10 to-yellow-400/10"
  },
  {
    name: "TypeScript",
    lottieUrl: "https://lottie.host/e4093e44-0442-43f0-9378-889ec9a23505/tADGTaKrlQ.lottie",
    color: "#3178C6",
    bgColor: "from-blue-600/10 to-blue-500/10"
  },
  {
    name: "Redux Toolkit",
    lottieUrl: "https://lottie.host/e4093e44-0442-43f0-9378-889ec9a23505/tADGTaKrlQ.lottie",
    color: "#764ABC",
    bgColor: "from-purple-600/10 to-purple-500/10"
  },
  {
    name: "TanStack Query",
    lottieUrl: "https://lottie.host/e4093e44-0442-43f0-9378-889ec9a23505/tADGTaKrlQ.lottie",
    color: "#FF4154",
    bgColor: "from-red-500/10 to-pink-500/10"
  },
  {
    name: "Framer Motion",
    lottieUrl: "https://lottie.host/e4093e44-0442-43f0-9378-889ec9a23505/tADGTaKrlQ.lottie",
    color: "#0055FF",
    bgColor: "from-blue-600/10 to-indigo-500/10"
  },
  {
    name: "Formik",
    lottieUrl: "https://lottie.host/e4093e44-0442-43f0-9378-889ec9a23505/tADGTaKrlQ.lottie",
    color: "#172B4D",
    bgColor: "from-slate-600/10 to-slate-500/10"
  },
  {
    name: "Node.js",
    lottieUrl: "https://lottie.host/e4093e44-0442-43f0-9378-889ec9a23505/tADGTaKrlQ.lottie",
    color: "#339933",
    bgColor: "from-green-600/10 to-green-500/10"
  },
  {
    name: "Express.js",
    lottieUrl: "https://lottie.host/e4093e44-0442-43f0-9378-889ec9a23505/tADGTaKrlQ.lottie",
    color: "#339933",
    bgColor: "from-green-600/10 to-green-500/10"
  },
  {
    name: "Git",
    lottieUrl: "https://lottie.host/e4093e44-0442-43f0-9378-889ec9a23505/tADGTaKrlQ.lottie",
    color: "#339933",
    bgColor: "from-green-600/10 to-green-500/10"
  },
  {
    name: "Tailwind CSS",
    lottieUrl: "https://lottie.host/e4093e44-0442-43f0-9378-889ec9a23505/tADGTaKrlQ.lottie",
    color: "#06B6D4",
    bgColor: "from-cyan-500/10 to-teal-500/10"
  },
  {
    name: "Material-UI",
    lottieUrl: "https://lottie.host/e4093e44-0442-43f0-9378-889ec9a23505/tADGTaKrlQ.lottie",
    color: "#007FFF",
    bgColor: "from-blue-500/10 to-blue-600/10"
  },
  {
    name: "GSAP",
    lottieUrl: "https://lottie.host/e4093e44-0442-43f0-9378-889ec9a23505/tADGTaKrlQ.lottie",
    color: "#88CE02",
    bgColor: "from-lime-500/10 to-green-400/10"
  },
  {
    name: "Web3",
    lottieUrl: "https://lottie.host/e4093e44-0442-43f0-9378-889ec9a23505/tADGTaKrlQ.lottie",
    color: "#F16822",
    bgColor: "from-orange-500/10 to-red-500/10"
  }
];

export function Skills() {
  const [codingAnimation, setCodingAnimation] = useState<any>(null);

  useEffect(() => {
    // Dynamically fetch a lottie JSON for demo purposes
    fetch("https://assets5.lottiefiles.com/packages/lf20_fcfjwiyb.json")
      .then(res => res.json())
      .then(data => setCodingAnimation(data));
  }, []);
  return (
    <Section id="skills" className="bg-black/20">
      <SectionTitle subtitle="ARSENAL_LOADED">TECHNICAL_SKILLS</SectionTitle>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column: Large Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="col-span-1 hidden h-fit lg:flex flex-col items-center justify-center bg-card/40 rounded-xl p-8 border border-white/10 group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
        >
          <div className="flex flex-col gap-5">
            {codingAnimation && (
              <Lottie animationData={codingAnimation} loop={true} className="w-full max-w-sm" />
            )}
            <DotLottieReact
              src="https://lottie.host/e4093e44-0442-43f0-9378-889ec9a23505/tADGTaKrlQ.lottie"
              loop
              autoplay
              className="w-full max-w-sm"
            />
            <p className="text-center text-secondary font-display text-sm">COMPILING...</p>
          </div>
        </motion.div>

        {/* Right Column: Skills Grid */}
        <div className="col-span-1 lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
          {techSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card/40 border border-white/10 p-6 rounded-xl group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                {/* Lottie Animation */}
                <div className="w-16 h-16 flex items-center justify-center">
                  <DotLottieReact
                    src={skill.lottieUrl}
                    loop
                    autoplay
                    className="w-full h-full"
                    onError={() => {
                      console.log(`Failed to load ${skill.name} animation`);
                    }}
                  />
                </div>

                {/* Skill Name */}
                <h3
                  className="text-sm font-display font-bold text-white group-hover:text-primary transition-colors uppercase tracking-wider"
                  style={{
                    textShadow: `0 0 10px ${skill.color}40`
                  }}
                >
                  {skill.name}
                </h3>
              </div>

              {/* Animated border */}
              <div
                className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{
                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-center"
      >
        <p className="text-muted-foreground font-mono text-sm">
          <span className="text-secondary">{'>'}</span> SYSTEMS_OPERATIONAL
          <span className="animate-pulse text-primary ml-2">█</span>
        </p>
      </motion.div>
    </Section>
  );
}
