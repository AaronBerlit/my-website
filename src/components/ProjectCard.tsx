"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, Folder } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  link?: string;
  category: "AI" | "Web" | "IoT" | "Other";
}

export function ProjectCard({ project, index = 0 }: { project: ProjectData, index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col justify-between h-full p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden hover:border-primary/50 transition-colors backdrop-blur-sm"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Folder className="w-24 h-24 text-primary" />
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-neutral-950 border border-neutral-800 rounded-md">
            <Folder className="w-6 h-6 text-primary" />
          </div>
          <div className="flex gap-3 text-neutral-400">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Code className="w-5 h-5" />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-neutral-100 mb-2 group-hover:text-primary transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-4">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs font-mono px-2 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-neutral-300">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
