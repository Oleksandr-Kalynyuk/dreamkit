"use client";

import { motion } from "framer-motion";

export const orbitSpinnerLoaderCode = `"use client";

import { motion } from "framer-motion";

export function OrbitSpinnerLoader() {
  return (
    <div className="relative flex items-center justify-center p-8">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="relative h-14 w-14 rounded-full border-2 border-transparent border-t-amber-400 border-r-amber-500/40"
      >
        <div className="absolute inset-0 rounded-full blur-sm bg-gradient-to-tr from-amber-500/20 to-transparent" />
      </motion.div>

      <motion.div
        animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-4 w-4 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]"
      />
    </div>
  );
}`;

export function OrbitSpinnerLoader() {
  return (
    <div className="flex h-[200px] w-full items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="relative h-14 w-14 rounded-full border-2 border-transparent border-t-amber-400 border-r-amber-500/40"
        >
          <div className="absolute inset-0 rounded-full blur-sm bg-gradient-to-tr from-amber-500/20 to-transparent" />
        </motion.div>

        <motion.div
          animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute h-4 w-4 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]"
        />
      </div>
    </div>
  );
}