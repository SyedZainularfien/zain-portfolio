import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Section } from "../Section";

export function Hero() {
  return (
    <Section id="home" className="pt-32 pb-0 justify-start">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/anime-city.jpg"
          alt="Cyberpunk City"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 h-full">
        {/* Text Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-secondary font-mono tracking-widest mb-2">WELCOME</h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-display text-white leading-tight mb-6 text-glow">
              SYED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                ZAINULARFIEN
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-lg border-l-4 border-primary pl-6 py-2">
              Experienced Frontend Developer Creating Awesome User Interfaces! | Innovator, Problem Solver, and Code Enthusiast
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="projects"
              smooth={true}
              className="px-8 py-4 bg-primary text-white font-display tracking-widest clip-tech hover:bg-primary/80 transition-colors cursor-pointer"
            >
              VIEW_PROJECTS
            </Link>
            <Link
              to="contact"
              smooth={true}
              // className="px-8 py-4 border border-secondary text-secondary font-display tracking-widest clip-tech hover:bg-secondary/10 transition-colors cursor-pointer"
              className="px-8 py-4 bg-white text-black font-display tracking-widest clip-tech hover:bg-white/80 transition-colors cursor-pointer"
            >
              CONTACT_ME
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6"
          >
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-muted-foreground hover:text-white hover:scale-110 transition-all"
              >
                <Icon size={24} />
              </a>
            ))}
          </motion.div>
        </div>
        {/* <div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative h-[500px] w-full"
          >
            <video
              src="/videos/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              preload="auto"
              className="absolute top-40 right-0 h-full w-auto object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] z-10"
              onError={(e) => console.error('Video failed to load:', e)}
              onLoadStart={() => console.log('Video loading started')}
              onCanPlay={() => console.log('Video can play')}
            />

          </motion.div>
        </div> */}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 
             animate-bounce text-muted-foreground z-10"
      >
        <Link to="contact" smooth={true}>
          <ArrowDown size={32} className="cursor-pointer" />
        </Link>
      </motion.div>

    </Section>
  );
}
