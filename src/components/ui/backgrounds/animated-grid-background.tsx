"use client";
// npm install motion in console of your project for code to work if you haven't downloaded it yet
import { motion } from "framer-motion";

export const animatedGridBackgroundCode = `"use client";

import { motion } from "framer-motion";

export function AnimatedGridBackground() {
  return (
    <div className="relative flex h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -top-12 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-12 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"
      />

      <div className="relative z-10 text-center space-y-2">
        <h3 className="text-xl font-bold tracking-tight text-white">Ambient Mesh Grid</h3>
        <p className="text-xs text-zinc-400 font-mono">Continuous fluid background gradient loops</p>
      </div>
    </div>
  );
}`;

export function AnimatedGridBackground() {
  return (
    <div className="relative flex h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -top-12 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-12 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"
      />

      <div className="relative z-10 text-center space-y-2">
        <h3 className="text-xl font-bold tracking-tight text-white">Ambient Mesh Grid</h3>
        <p className="text-xs text-zinc-400 font-mono">Continuous fluid background gradient loops</p>
      </div>
    </div>
  );
}