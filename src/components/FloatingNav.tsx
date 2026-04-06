"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Home", icon: "🌎" },
  { id: "about", label: "About", icon: "🪐" },
  { id: "experience", label: "Experience", icon: "🌕" },
  { id: "projects", label: "Projects", icon: "☄️" },
  { id: "skills", label: "Skills", icon: "🌞" },
  { id: "contact", label: "Contact", icon: "🌌" },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const pageYOffset = window.scrollY;
      let newActiveSection = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          // Offset by a portion of screen height to activate earlier
          if (pageYOffset >= offsetTop - window.innerHeight / 3) {
            newActiveSection = section.id;
          }
        }
      }

      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 items-end">
      {sections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center gap-4"
          >
            <span
              className={`text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
                isActive ? "text-white opacity-100" : "text-neutral-500 opacity-0 group-hover:opacity-100"
              }`}
            >
              {section.label}
            </span>
            <div className="relative w-8 h-8 flex items-center justify-center text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              <motion.div
                initial={false}
                animate={{
                  scale: isActive ? 1.3 : 1,
                  opacity: isActive ? 1 : 0.5,
                }}
                whileHover={{ rotate: 360, scale: 1.5 }}
                transition={{ 
                  type: "spring", stiffness: 300, damping: 20, 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" } 
                }}
                className={`transition-all duration-300 filter ${isActive ? "grayscale-0" : "grayscale"}`}
              >
                {section.icon}
              </motion.div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
