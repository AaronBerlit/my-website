"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Summer Intern",
    company: "EOUS Solutions Delivery (Kochi)",
    duration: "May 2025 - Jun 2025",
    description: "Tested and validated R&D project focusing on performance and reliability. Worked heavily with Microsoft Azure and web development ecosystems."
  },
  {
    role: "Technical Team Member",
    company: "REVA Solar Racing (Chennai)",
    duration: "May 2024 - Present",
    description: "Leading electrical and GLV system design, testing, and integration. Drove team collaboration to secure 7th place in ESVC'25 and 12th place in SEVC'26."
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full min-h-screen flex flex-col justify-center max-w-4xl mx-auto px-6 py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-neutral-100">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="h-[1px] flex-1 bg-neutral-800"></div>
        </div>
      </motion.div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 absolute left-0 md:left-1/2 -translate-x-1/2 shadow-sm text-primary z-10">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>

            <div className="w-[calc(100%-4rem)] ml-auto md:ml-0 md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900/80 transition-colors backdrop-blur-sm z-10">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-2 gap-2">
                <h3 className="font-bold text-lg text-neutral-100">{exp.role}</h3>
                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded inline-block w-fit">{exp.duration}</span>
              </div>
              <p className="text-sm text-neutral-400 font-mono mb-4">{exp.company}</p>
              <p className="text-neutral-300 leading-relaxed text-sm">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
