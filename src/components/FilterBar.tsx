"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = ["All", "AI", "Web", "IoT"];

interface FilterBarProps {
  activeCategory: string;
  onSelect: (category: string) => void;
}

export function FilterBar({ activeCategory, onSelect }: FilterBarProps) {
  return (
    <div className="flex space-x-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={cn(
            "relative px-4 py-1.5 text-sm font-mono transition-colors rounded-md",
            activeCategory === category ? "text-primary" : "text-neutral-500 hover:text-neutral-300"
          )}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="filter-active"
              className="absolute inset-0 bg-primary/10 border border-primary/30 rounded-md"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </div>
  );
}
