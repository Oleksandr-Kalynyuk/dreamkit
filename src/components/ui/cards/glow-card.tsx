"use client";
// npm install lucide-react (if your project is on React) in console of your project for code to work if you haven't downloaded it yet
// npm insall motion
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";

export const glowCardCode = `"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";

export function GlowCard() {
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
      className="group relative max-w-sm rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl transition-colors hover:border-zinc-700/80"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate\`
            radial-gradient(
              400px circle at \${mouseX}px \${mouseY}px,
              rgba(251, 191, 36, 0.12),
              transparent 80%
            )
          \`,
        }}
      />

      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400">
          <Sparkles className="h-5 w-5" />
        </div>
        <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[11px] font-mono text-zinc-400">
          Feature
        </span>
      </div>

      <div className="mt-6 space-y-2 text-left">
        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-amber-300">
          Smart Visual Engine
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed">
          High-performance micro-interactions built with Framer Motion. Engineered for clean conversion paths.
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-zinc-800/80 pt-4 text-xs font-medium text-zinc-400">
        <span className="text-zinc-500">Zero Dependencies</span>
        <button className="inline-flex items-center gap-1 text-white transition-colors group-hover:text-amber-400">
          Explore demo
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}`;

export function GlowCard() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className="flex justify-center p-4">
      <div
        onMouseMove={handleMouseMove}
        className="group relative w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl transition-colors hover:border-zinc-700/80"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                rgba(251, 191, 36, 0.12),
                transparent 80%
              )
            `,
          }}
        />

        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[11px] font-mono text-zinc-400">
            Feature
          </span>
        </div>

        <div className="mt-6 space-y-2 text-left">
          <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-amber-300">
            Smart Visual Engine
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            High-performance micro-interactions built with Framer Motion. Engineered for clean conversion paths.
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-zinc-800/80 pt-4 text-xs font-medium text-zinc-400">
          <span className="text-zinc-500">Zero Dependencies</span>
          <button className="inline-flex items-center gap-1 text-white transition-colors group-hover:text-amber-400">
            Explore demo
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}