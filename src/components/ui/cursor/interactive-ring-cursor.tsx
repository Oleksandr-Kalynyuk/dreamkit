"use client";
// npm install motion for code to work
import React, { useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const interactiveRingCursorCode = `"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function InteractiveRingCursor() {
  const [hovered, setHovered] = useState(false);
  const mouse = { x: useMotionValue(-100), y: useMotionValue(-100) };
  const smooth = {
    x: useSpring(mouse.x, { damping: 25, stiffness: 300 }),
    y: useSpring(mouse.y, { damping: 25, stiffness: 300 }),
  };

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouse.x.set(e.clientX);
      mouse.y.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovered(!!target?.closest("button, a, input, [data-hover]"));
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <motion.div
        style={{ x: mouse.x, y: mouse.y }}
        className="pointer-events-none fixed left-0 top-0 z-50 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400"
      />
      <motion.div
        style={{ x: smooth.x, y: smooth.y }}
        animate={{
          scale: hovered ? 2.2 : 1,
          borderColor: hovered ? "rgba(251, 191, 36, 0.8)" : "rgba(255, 255, 255, 0.3)",
          backgroundColor: hovered ? "rgba(251, 191, 36, 0.1)" : "transparent",
        }}
        className="pointer-events-none fixed left-0 top-0 z-50 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 transition-colors"
      />
    </>
  );
}`;

export function InteractiveRingCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInside, setIsInside] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const mouse = { x: useMotionValue(-100), y: useMotionValue(-100) };
  const smooth = {
    x: useSpring(mouse.x, { damping: 25, stiffness: 300 }),
    y: useSpring(mouse.y, { damping: 25, stiffness: 300 }),
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
      onMouseLeave={() => {
        setIsInside(false);
        setIsHovered(false);
      }}
      onMouseMove={handleMouseMove}
      className="relative h-64 w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/80 p-8 flex flex-col items-center justify-center gap-4 cursor-none"
    >
      <p className="text-sm font-mono text-zinc-400">
        Hover over the button to test magnetic focus
      </p>

      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-none rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-2 text-xs font-medium text-white hover:border-amber-400/50 transition-colors"
      >
        Hover Me
      </button>

      {isInside && (
        <>
          <motion.div
            style={{ x: mouse.x, y: mouse.y }}
            className="pointer-events-none absolute left-0 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400"
          />
          <motion.div
            style={{ x: smooth.x, y: smooth.y }}
            animate={{
              scale: isHovered ? 1.5 : 1,
              borderColor: isHovered ? "rgba(251, 191, 36, 0.8)" : "rgba(255, 255, 255, 0.3)",
              backgroundColor: isHovered ? "rgba(251, 191, 36, 0.1)" : "transparent",
            }}
            className="pointer-events-none absolute left-0 top-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 transition-colors"
          />
        </>
      )}
    </div>
  );
}