"use client";

import { motion } from "framer-motion";
import { Mail, Globe, Code, TerminalSquare } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="w-full min-h-screen flex flex-col justify-center max-w-4xl mx-auto px-6 py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 text-center justify-center flex-col">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-primary mb-4">
            <TerminalSquare className="w-4 h-4" />
            <span>SYS.MSG: AWAITING_CONNECTION</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-100">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl mx-auto w-full text-center relative z-10"
      >
        <p className="text-neutral-400 text-lg mb-12">
          Whether you have a question, a project idea, or just want to discuss the latest in AI and web architecture, my inbox is always open.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:aaronberlit@gmail.com"
            className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg shadow-[0_0_20px_rgba(13,240,211,0.3)] hover:shadow-[0_0_30px_rgba(13,240,211,0.5)] transition-shadow w-full sm:w-auto justify-center"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/aaronberlit" target="_blank" rel="noopener noreferrer" className="p-4 border border-neutral-800 rounded-lg bg-neutral-900/50 hover:bg-neutral-800 hover:text-white transition-colors text-neutral-400">
              <Code className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/aaronberlit" target="_blank" rel="noopener noreferrer" className="p-4 border border-neutral-800 rounded-lg bg-neutral-900/50 hover:bg-neutral-800 hover:text-white transition-colors text-neutral-400">
              <Globe className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
