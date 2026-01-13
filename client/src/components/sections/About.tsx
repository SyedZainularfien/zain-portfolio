import { motion } from "framer-motion";
import { Section, SectionTitle } from "../Section";

export function About() {
  return (
    <Section id="about">
      <SectionTitle subtitle="IDENTITY_VERIFIED">ABOUT_ME</SectionTitle>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex justify-start items-center relative h-[700px] w-full"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-secondary/30 shadow-[0_0_50px_rgba(6,182,212,0.2)] animate-pulse" />

          <img
            src="/images/about_me.png"
            alt="Anime Character"
            className="absolute top-0 right-0 h-full w-auto object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] z-10"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="order-1 lg:order-2 space-y-6"
        >
          <div className="p-6 bg-card/30 border border-secondary/20 backdrop-blur-sm rounded-lg relative overflow-hidden">

            <span className="text-secondary text-xl font-bold font-display block mb-2">Hello, World!</span>
            <p className="text-xl leading-relaxed text-gray-300 font-body mb-2">
              I am a passionate <span className="text-white font-bold">Frontend Engineer </span> with over 3 years of experience building fast and reliable web applications. My interest in web development started with curiosity about how interfaces work and grew into a strong focus on the React ecosystem.
            </p>
            {/* <br /> */}
            <p className="text-xl leading-relaxed text-gray-300 font-body">
              I write clean, well-structured code and pay close attention to detail to create smooth and user-friendly experiences. Outside of development work, I stay updated with new technologies and continuously work on improving my skills.
            </p>

            <div className="mt-4 flex gap-4 text-sm font-mono text-muted-foreground capitalize">
              <div className="px-3 py-1 border border-white/10 rounded">LOC: PAK</div>
              <div className="px-3 py-1 border border-white/10 rounded">STATUS: ONLINE</div>
              <div className="px-3 py-1 border border-white/10 rounded">EXP: 3+ YEARS</div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
