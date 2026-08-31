"use client";
// npm install motion in console of your project for code to work if you haven't downloaded it yet
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export const dotPatternBackgroundCode = `"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export function DotPatternBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative flex h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />

      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate\`
            radial-gradient(
              450px circle at \${mouseX}px \${mouseY}px,
              rgba(251, 191, 36, 0.15),
              transparent 80%
            )
          \`,
        }}
      />

      <div className="relative z-10 text-center space-y-2">
        <h3 className="text-xl font-bold tracking-tight text-white">Dot Matrix Reveal</h3>
        <p className="text-xs text-zinc-400 font-mono">Hover around to activate radial illumination</p>
      </div>
    </div>
  );
}`;

export function DotPatternBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative flex h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />

      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(251, 191, 36, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 text-center space-y-2">
        <h3 className="text-xl font-bold tracking-tight text-white">Dot Matrix Reveal</h3>
        <p className="text-xs text-zinc-400 font-mono">Hover around to activate radial illumination</p>
      </div>
    </div>
  );
}