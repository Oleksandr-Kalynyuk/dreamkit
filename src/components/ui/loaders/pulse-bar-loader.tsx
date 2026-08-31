"use client";

import { motion } from "framer-motion";

export const pulseBarLoaderCode = `"use client";

import { motion } from "framer-motion";

export function PulseBarLoader() {
  const bars = [0, 1, 2, 3, 4];

  return (
    <div className="flex items-center gap-1.5 p-8">
      {bars.map((i) => (
        <motion.div
          key={i}
          animate={{
            scaleY: [0.3, 1, 0.3],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
          className="h-10 w-1.5 rounded-full bg-gradient-to-t from-amber-500 to-amber-300"
        />
      ))}
    </div>
  );
}`;

export function PulseBarLoader() {
  const bars = [0, 1, 2, 3, 4];

  return (
    <div className="flex h-[200px] w-full items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
      <div className="flex items-center gap-1.5">
        {bars.map((i) => (
          <motion.div
            key={i}
            animate={{
              scaleY: [0.3, 1, 0.3],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
            className="h-10 w-1.5 rounded-full bg-gradient-to-t from-amber-500 to-amber-300"
          />
        ))}
      </div>
    </div>
  );
}