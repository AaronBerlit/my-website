"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="w-full min-h-screen flex flex-col justify-center max-w-4xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-neutral-100">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="h-[1px] flex-1 bg-neutral-800"></div>
        </div>

        <div className="space-y-6 text-neutral-400 text-lg md:text-xl leading-relaxed">
          <p>
            I am an AI Engineer and Full Stack Developer passionate about building intelligent,
            scalable, and high-performance systems. I bridge the gap between artificial intelligence
            research and production-ready applications.
          </p>
          <p>
            With experience spanning full-stack web development, cloud architectures, and machine
            learning, I thrive in environments where complex problems meet elegant software solutions.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
