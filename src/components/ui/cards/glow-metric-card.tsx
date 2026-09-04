"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

interface GlowMetricCardProps {
  value?: string;
  label?: string;
  description?: string;
}

export function GlowMetricCard({
  value = "84.7%",
  label = "Conversion rate",
  description = "Compared to the previous period",
}: GlowMetricCardProps) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="group relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0c] p-6 text-white"
    >
      {/* Background glow */}
      <motion.div
        variants={{
          initial: {
            opacity: 0.35,
            scale: 0.8,
          },
          hover: {
            opacity: 0.7,
            scale: 1.1,
          },
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl"
      />

      {/* Top line */}
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-600">
            Performance
          </p>

          <motion.p
            variants={{
              initial: { y: 0 },
              hover: { y: -2 },
            }}
            transition={{ duration: 0.3 }}
            className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-zinc-100"
          >
            {value}
          </motion.p>
        </div>

        <motion.div
          variants={{
            initial: {
              rotate: 0,
              scale: 1,
            },
            hover: {
              rotate: 8,
              scale: 1.08,
            },
          }}
          transition={{ duration: 0.3 }}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-300/10 bg-amber-300/[0.06]"
        >
          <TrendingUp className="h-4 w-4 text-amber-300" />
        </motion.div>
      </div>

      {/* Divider */}
      <div className="relative z-10 my-5 h-px bg-white/[0.07]" />

      {/* Bottom */}
      <div className="relative z-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-zinc-300">
            {label}
          </p>

          <p className="mt-1 text-xs leading-5 text-zinc-600">
            {description}
          </p>
        </div>

        <motion.div
          variants={{
            initial: {
              x: 0,
              opacity: 0.45,
            },
            hover: {
              x: 3,
              opacity: 1,
            },
          }}
          transition={{ duration: 0.25 }}
        >
          <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-amber-300" />
        </motion.div>
      </div>

      {/* Bottom accent */}
      <motion.div
        variants={{
          initial: {
            scaleX: 0,
            opacity: 0,
          },
          hover: {
            scaleX: 1,
            opacity: 1,
          },
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute bottom-0 left-6 right-6 h-px origin-left bg-amber-300/40"
      />
    </motion.div>
  );
}

export const glowMetricCardCode = `"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

interface GlowMetricCardProps {
  value?: string;
  label?: string;
  description?: string;
}

export function GlowMetricCard({
  value = "84.7%",
  label = "Conversion rate",
  description = "Compared to the previous period",
}: GlowMetricCardProps) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="group relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0c] p-6 text-white"
    >
      {/* Background glow */}
      <motion.div
        variants={{
          initial: {
            opacity: 0.35,
            scale: 0.8,
          },
          hover: {
            opacity: 0.7,
            scale: 1.1,
          },
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl"
      />

      {/* Top line */}
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-600">
            Performance
          </p>

          <motion.p
            variants={{
              initial: { y: 0 },
              hover: { y: -2 },
            }}
            transition={{ duration: 0.3 }}
            className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-zinc-100"
          >
            {value}
          </motion.p>
        </div>

        <motion.div
          variants={{
            initial: {
              rotate: 0,
              scale: 1,
            },
            hover: {
              rotate: 8,
              scale: 1.08,
            },
          }}
          transition={{ duration: 0.3 }}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-300/10 bg-amber-300/[0.06]"
        >
          <TrendingUp className="h-4 w-4 text-amber-300" />
        </motion.div>
      </div>

      {/* Divider */}
      <div className="relative z-10 my-5 h-px bg-white/[0.07]" />

      {/* Bottom */}
      <div className="relative z-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-zinc-300">
            {label}
          </p>

          <p className="mt-1 text-xs leading-5 text-zinc-600">
            {description}
          </p>
        </div>

        <motion.div
          variants={{
            initial: {
              x: 0,
              opacity: 0.45,
            },
            hover: {
              x: 3,
              opacity: 1,
            },
          }}
          transition={{ duration: 0.25 }}
        >
          <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-amber-300" />
        </motion.div>
      </div>

      {/* Bottom accent */}
      <motion.div
        variants={{
          initial: {
            scaleX: 0,
            opacity: 0,
          },
          hover: {
            scaleX: 1,
            opacity: 1,
          },
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute bottom-0 left-6 right-6 h-px origin-left bg-amber-300/40"
      />
    </motion.div>
  );
}
`;