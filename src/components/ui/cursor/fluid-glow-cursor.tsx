"use client";
// npm install motion for code to work
import React, { useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const fluidGlowCursorCode = `"use client";

import { useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function FluidGlowCursor() {
  const mouse = { x: useMotionValue(-100), y: useMotionValue(-100) };
  const smooth = {
    x: useSpring(mouse.x, { damping: 28, stiffness: 400 }),
    y: useSpring(mouse.y, { damping: 28, stiffness: 400 }),
  };

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.x.set(e.clientX);
      mouse.y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{ x: smooth.x, y: smooth.y }}
      className="pointer-events-none fixed left-0 top-0 z-50 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="absolute -inset-3 rounded-full bg-amber-400/35 blur-md" />
      <div className="relative h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
    </motion.div>
  );
}`;

export function FluidGlowCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInside, setIsInside] = useState(false);
  const mouse = { x: useMotionValue(-100), y: useMotionValue(-100) };
  const smooth = {
    x: useSpring(mouse.x, { damping: 28, stiffness: 400 }),
    y: useSpring(mouse.y, { damping: 28, stiffness: 400 }),
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouse.x.set(e.clientX - rect.left);
    mouse.y.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
      onMouseMove={handleMouseMove}
      className="relative h-64 w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/80 p-8 flex flex-col items-center justify-center text-center cursor-none"
    >
      <p className="text-sm font-mono text-zinc-400">
        Move your cursor inside this container
      </p>
      <span className="mt-2 text-xs text-zinc-600">
        Snappy movement with radiant central dot
      </span>

      {isInside && (
        <motion.div
          style={{ x: smooth.x, y: smooth.y }}
          className="pointer-events-none absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute -inset-3 rounded-full bg-amber-400/35 blur-md" />
          <div className="relative h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
        </motion.div>
      )}
    </div>
  );
}