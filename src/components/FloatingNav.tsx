"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const sections = [
  { id: "hero",       label: "Home",       img: "/planet_earth.png",  glow: "rgba(30,144,255,0.7)"  },
  { id: "about",      label: "About",      img: "/planet_saturn.png", glow: "rgba(210,160,90,0.7)"  },
  { id: "experience", label: "Experience", img: "/planet_moon.png",   glow: "rgba(200,200,200,0.6)" },
  { id: "projects",   label: "Projects",   img: "/planet_comet.png",  glow: "rgba(0,200,255,0.7)"   },
  { id: "skills",     label: "Skills",     img: "/planet_sun.png",    glow: "rgba(255,160,0,0.7)"   },
  { id: "contact",    label: "Contact",    img: "/planet_nebula.png", glow: "rgba(160,80,255,0.7)"  },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const pageYOffset = window.scrollY;
      let next = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && pageYOffset >= el.offsetTop - window.innerHeight / 3) {
          next = s.id;
        }
      }
      setActiveSection(next);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  };

  return (
    <>
      {/* keyframe for very slow Y-axis spin illusion via hue-rotate + slight scale pulse */}
      <style>{`
        @keyframes planet-spin {
          0%   { transform: rotate(0deg) scale(1);    filter: brightness(1);   }
          50%  { transform: rotate(180deg) scale(1.04); filter: brightness(1.08); }
          100% { transform: rotate(360deg) scale(1);  filter: brightness(1);   }
        }
        @keyframes planet-spin-fast {
          0%   { transform: rotate(0deg);   }
          100% { transform: rotate(360deg); }
        }
        .planet-idle  { animation: planet-spin 18s linear infinite; }
        .planet-active{ animation: planet-spin  7s linear infinite; }
      `}</style>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-5 items-end">
        {sections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center gap-3 cursor-pointer"
              aria-label={section.label}
            >
              {/* label on hover / active */}
              <span
                className={`text-xs font-mono tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? "text-white opacity-100"
                    : "text-neutral-500 opacity-0 group-hover:opacity-100"
                }`}
              >
                {section.label}
              </span>

              {/* planet container */}
              <motion.div
                className="relative"
                animate={{ scale: isActive ? 1.3 : 1, opacity: isActive ? 1 : 0.5 }}
                whileHover={{ scale: 1.45, opacity: 1 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
              >
                {/* circular clip + spin */}
                <div
                  className={`w-9 h-9 rounded-full overflow-hidden ${isActive ? "planet-active" : "planet-idle"}`}
                  style={{
                    boxShadow: isActive
                      ? `0 0 0 1.5px ${section.glow}, 0 0 16px ${section.glow}`
                      : "0 0 0 1px rgba(255,255,255,0.08)",
                  }}
                >
                  <Image
                    src={section.img}
                    alt={section.label}
                    width={36}
                    height={36}
                    className="w-full h-full object-cover"
                    unoptimized
                    priority={section.id === "hero"}
                  />
                </div>

                {/* outer glow ring when active */}
                {isActive && (
                  <motion.div
                    layoutId="active-ring"
                    className="absolute rounded-full pointer-events-none"
                    style={{
                      inset: -5,
                      border: `1.5px solid ${section.glow}`,
                      boxShadow: `0 0 18px ${section.glow}`,
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </motion.div>
            </button>
          );
        })}
      </div>
    </>
  );
}
