"use client";

import { useState } from "react";
import { ProjectCard, ProjectData } from "@/components/ProjectCard";
import { FilterBar } from "@/components/FilterBar";
import { motion, AnimatePresence } from "framer-motion";

const projectsData: ProjectData[] = [
  {
    title: "SmartSplit AI",
    description: "An intelligent receipt scanning and automated bill splitting web app using the Gemini Vision API for structured data extraction and P2P debt resolution.",
    tags: ["React", "Vite", "Tailwind", "Python", "Gemini API"],
    category: "AI",
    github: "https://github.com/aaronberlit/smartsplit"
  },
  {
    title: "Drug–Target Prediction",
    description: "Deep learning model predicting interactions between drug compounds and target proteins to accelerate pharmaceutical research.",
    tags: ["Python", "TensorFlow", "Deep Learning", "Bioinformatics"],
    category: "AI",
  },
  {
    title: "Solar Car (ESVC)",
    description: "Developed the telemetry and onboard display systems for an electric solar vehicle competing in the ESVC championship.",
    tags: ["C++", "IoT", "Arduino", "Telemetry"],
    category: "IoT",
  },
  {
    title: "Hospital Management System",
    description: "A comprehensive dashboard for managing patient records, appointment scheduling, and hospital logistics seamlessly.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    category: "Web",
  },
  {
    title: "Number Plate Recognition",
    description: "Computer vision application for automatic license plate detection and optical character recognition (OCR) in real-time.",
    tags: ["Python", "OpenCV", "YOLOv8"],
    category: "AI",
  }
];

export function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter((p) => 
    filter === "All" ? true : p.category === filter
  );

  return (
    <section id="projects" className="w-full min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-neutral-100">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="h-[1px] flex-1 bg-neutral-800"></div>
        </div>
      </motion.div>

      <FilterBar activeCategory={filter} onSelect={setFilter} />

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} index={idx} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
