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

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter((p) => 
    filter === "All" ? true : p.category === filter
  );

  return (
    <div className="max-w-6xl mx-auto min-h-screen pb-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4 font-mono">
          <span className="text-primary mr-2">{">"}</span>Projects
        </h1>
        <p className="text-neutral-400 font-mono text-sm max-w-2xl">
          A collection of algorithms, applications, and system integrations.
        </p>
      </header>

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
    </div>
  );
}
