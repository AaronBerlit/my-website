"use client";

import { motion } from "framer-motion";

const skills = [
  "Java", "Python", "C", "C++", 
  "React", "FastAPI", "TensorFlow", "OpenCV", 
  "OracleSQL", "Azure DevOps", "LangChain", "LangGraph"
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function SkillsSection() {
  return (
    <section id="skills" className="w-full min-h-screen flex flex-col justify-center max-w-4xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-neutral-100">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="h-[1px] flex-1 bg-neutral-800"></div>
        </div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap gap-4"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            variants={itemVariants}
            className="px-6 py-3 border border-neutral-800 bg-neutral-900/50 rounded-md font-mono text-neutral-300 hover:border-primary hover:text-primary transition-colors cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
