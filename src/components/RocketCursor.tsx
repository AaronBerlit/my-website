"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Pure inline-SVG spaceship — no PNG, no background issues. */
function ShipSVG({ boosting }: { boosting: boolean }) {
  return (
    <svg
      width="36"
      height="44"
      viewBox="0 0 36 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hull" x1="18" y1="0" x2="18" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#d4dde8" />
          <stop offset="55%"  stopColor="#8a99aa" />
          <stop offset="100%" stopColor="#4a5668" />
        </linearGradient>
        <linearGradient id="wing-l" x1="0" y1="22" x2="12" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#6b7b8d" />
          <stop offset="100%" stopColor="#3a4555" />
        </linearGradient>
        <linearGradient id="wing-r" x1="36" y1="22" x2="24" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#6b7b8d" />
          <stop offset="100%" stopColor="#3a4555" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* === Thruster flame (only when boosting) === */}
      {boosting && (
        <motion.g
          initial={{ scaleY: 0.5, opacity: 0 }}
          animate={{ scaleY: [0.7, 1.2, 0.7], opacity: [0.9, 0.5, 0.9] }}
          transition={{ duration: 0.22, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "18px 42px" }}
        >
          <ellipse cx="18" cy="46" rx="3.5" ry="7" fill="rgba(13,240,211,0.85)" />
          <ellipse cx="18" cy="44" rx="2"   ry="4" fill="rgba(180,255,248,0.7)" />
        </motion.g>
      )}

      {/* === Engine nozzle === */}
      <path d="M14 37 L18 43 L22 37" fill="#2d3848" stroke="#0df0d3" strokeWidth="0.8" />

      {/* === Left wing === */}
      <path d="M18 22 L2 38 L4 40 L14 36 Z" fill="url(#wing-l)" stroke="#5a6a7a" strokeWidth="0.6" />

      {/* === Right wing === */}
      <path d="M18 22 L34 38 L32 40 L22 36 Z" fill="url(#wing-r)" stroke="#5a6a7a" strokeWidth="0.6" />

      {/* === Main fuselage === */}
      <path d="M18 1 L11 18 L10 36 L18 40 L26 36 L25 18 Z" fill="url(#hull)" stroke="#7a8a9a" strokeWidth="0.8" />

      {/* === Cockpit window === */}
      <ellipse cx="18" cy="14" rx="4" ry="6" fill="#0df0d3" opacity="0.25" filter="url(#glow)" />
      <ellipse cx="18" cy="13" rx="2.5" ry="4" fill="#b0f8f0" opacity="0.55" />
      <ellipse cx="17" cy="12" rx="1"   ry="1.5" fill="white" opacity="0.4" />

      {/* === Cyan accent stripe down fuselage === */}
      <line x1="18" y1="20" x2="18" y2="36" stroke="#0df0d3" strokeWidth="0.7" opacity="0.35" />

      {/* === Side engine pods === */}
      <rect x="11" y="26" width="3" height="8" rx="1.5" fill="#3a4555" stroke="#0df0d3" strokeWidth="0.6" />
      <rect x="22" y="26" width="3" height="8" rx="1.5" fill="#3a4555" stroke="#0df0d3" strokeWidth="0.6" />
      <circle cx="12.5" cy="33" r="1.2" fill="#0df0d3" opacity="0.7" />
      <circle cx="23.5" cy="33" r="1.2" fill="#0df0d3" opacity="0.7" />
    </svg>
  );
}

export function RocketCursor() {
  const [boosting, setBoosting] = useState(false);
  const [visible, setVisible]   = useState(false);

  const cursorX = useMotionValue(-300);
  const cursorY = useMotionValue(-300);
  const xSpring = useSpring(cursorX, { damping: 22, stiffness: 380 });
  const ySpring = useSpring(cursorY, { damping: 22, stiffness: 380 });

  const prev = useRef({ x: 0, y: 0, t: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      setVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const now = Date.now();
      const dt = now - prev.current.t;
      if (dt > 0) {
        const spd =
          Math.hypot(e.clientX - prev.current.x, e.clientY - prev.current.y) / dt;
        setBoosting(spd > 0.45);
      }
      prev.current = { x: e.clientX, y: e.clientY, t: now };
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{ x: xSpring, y: ySpring }}
    >
      {/* offset so tip of nose = cursor hotspot; rotate so nose points up-right */}
      <motion.div
        style={{
          marginLeft: -18,
          marginTop: -22,
          transform: "rotate(-45deg)",
          filter: boosting
            ? "drop-shadow(0 0 8px rgba(13,240,211,0.95))"
            : "drop-shadow(0 0 4px rgba(13,240,211,0.50))",
        }}
        animate={boosting ? { scale: [1, 1.05, 1] } : { scale: 1 }}
        transition={boosting ? { duration: 0.2, repeat: Infinity } : {}}
      >
        <ShipSVG boosting={boosting} />
      </motion.div>
    </motion.div>
  );
}
