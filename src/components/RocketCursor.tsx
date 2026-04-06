"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function RocketCursor() {
  const [isIgnited, setIsIgnited] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Custom cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring physics for following
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  // Velocity tracking refs
  const prevPosition = useRef({ x: 0, y: 0, time: 0 });

  useEffect(() => {
    // Check if device supports hover (ignores touch screens)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveMouse = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      const currentTime = Date.now();
      const currentX = e.clientX;
      const currentY = e.clientY;
      
      // Update framer motion values
      cursorX.set(currentX);
      cursorY.set(currentY);

      // Calculate velocity
      const dt = currentTime - prevPosition.current.time;
      if (dt > 0) {
        const dx = currentX - prevPosition.current.x;
        const dy = currentY - prevPosition.current.y;
        const speed = Math.sqrt(dx * dx + dy * dy) / dt;
        
        // Ignite if speed exceeds threshold (px per ms)
        if (speed > 0.5) {
          setIsIgnited(true);
        } else {
          setIsIgnited(false);
        }
      }

      prevPosition.current = { x: currentX, y: currentY, time: currentTime };
    };

    const mouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveMouse);
    document.addEventListener("mouseleave", mouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", moveMouse);
      document.addEventListener("mouseleave", mouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <div className="relative -ml-4 -mt-4 text-3xl select-none" style={{ transform: 'rotate(-45deg)' }}>
        🚀
        {isIgnited && (
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-2xl"
          >
            🔥
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
