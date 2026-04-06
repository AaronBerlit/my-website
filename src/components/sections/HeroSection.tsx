"use client";

import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col items-center justify-center">
      <div className="relative z-10 text-center flex flex-col items-center max-w-3xl mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-primary mb-6 shadow-lg shadow-primary/5"
        >
          <Terminal className="w-4 h-4" />
          <span>EIN CODE DIGITAL LAB // SYSTEM INIT</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-neutral-100 drop-shadow-lg"
        >
          Aaron <span className="text-primary">Berlit</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl leading-relaxed"
        >
          AI Engineer & Full Stack Developer. Building intelligent systems, 
          scalable web applications, and experimental digital tools.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-6"
        >
          <Link 
            href="#projects" 
            className="group relative px-6 py-3 font-mono text-sm bg-primary text-primary-foreground font-bold rounded-md overflow-hidden transition-transform hover:scale-105"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="px-6 py-3 font-mono text-sm border border-neutral-700 text-neutral-300 rounded-md hover:bg-neutral-900 hover:border-neutral-500 transition-all hover:text-white"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
