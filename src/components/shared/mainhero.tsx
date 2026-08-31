"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Sparkles,
  Copy,
  Layers3,
  Zap,
} from "lucide-react";

import { LiveShowcase } from "@/components/shared/live-showcase";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function MainHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#070709] text-[#F5F4EF]">
      {/* Ambient light */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[720px]"
        style={{
          background:
            "radial-gradient(700px 420px at 50% -12%, rgba(201,160,99,0.11), transparent 70%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-[18%] top-[26%] h-64 w-64 rounded-full bg-amber-300/[0.035] blur-[120px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[22%] h-72 w-72 rounded-full bg-white/[0.025] blur-[130px]"
      />

      {/* Very subtle film grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.028]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 0.7px, transparent 0.7px)",
          backgroundSize: "7px 7px",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-8 sm:px-8 sm:pb-28 sm:pt-10 lg:px-10 lg:pb-32">
        
        {/* Hero grid */}
        <div className="mx-auto grid max-w-7xl items-center gap-14 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:pt-24">
          {/* LEFT */}
          <div className="max-w-2xl">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE }}
            >
              <Link
                href="/components"
                className="group inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.025] px-3.5 py-1.5 text-xs text-zinc-400 transition-all duration-300 hover:border-amber-400/20 hover:bg-amber-400/[0.035] hover:text-zinc-200"
              >
                <span className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                  Now shipping
                </span>

                <span className="h-3 w-px bg-white/10" />

                <span>12+ free components</span>

                <ArrowRight className="h-3.5 w-3.5 text-zinc-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-amber-300" />
              </Link>
            </motion.div>

            <div className="mt-8 overflow-hidden">
              <motion.h1
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="font-[family-name:var(--font-display)] text-[clamp(3.2rem,5.5vw,6.3rem)] font-semibold leading-[0.98] tracking-[-0.055em]"
              >
                <span className="block text-zinc-100">
                  Build interfaces
                </span>

                <span className="mt-1 block text-zinc-400">
                  <span className="text-zinc-200">people</span>{" "}
                  <span className="font-[family-name:var(--font-display)] font-normal italic text-amber-300">
                    remember.
                  </span>
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
              className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8"
            >
              Production-ready animated components for React and Next.js.
              Copy the code, make it yours, and ship without a dependency on
              DreamKit at runtime.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: EASE }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/components"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#F5F4EF] px-6 text-sm font-semibold text-[#08080A] transition-all duration-300 hover:bg-white hover:shadow-[0_0_35px_rgba(255,255,255,0.08)]"
              >
                Explore components
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>

              <a
                href="https://github.com/your-username/dreamkit-ui"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.025] px-6 text-sm font-medium text-zinc-200 transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.05]"
              >
                <Users className="h-4 w-4" />
                View on GitHub
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.42 }}
              className="mt-9 grid max-w-xl grid-cols-3 gap-3 sm:gap-4"
            >
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.018] p-3.5">
                <Copy className="h-4 w-4 text-zinc-300" />
                <p className="mt-3 text-xs font-medium text-zinc-200">
                  Copy & paste
                </p>
                <p className="mt-1 text-[11px] leading-4 text-zinc-500">
                  Own the source.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-white/[0.018] p-3.5">
                <Layers3 className="h-4 w-4 text-zinc-300" />
                <p className="mt-3 text-xs font-medium text-zinc-200">
                  Built to scale
                </p>
                <p className="mt-1 text-[11px] leading-4 text-zinc-500">
                  Components, blocks, templates.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-white/[0.018] p-3.5">
                <Zap className="h-4 w-4 text-amber-300" />
                <p className="mt-3 text-xs font-medium text-zinc-200">
                  Motion first
                </p>
                <p className="mt-1 text-[11px] leading-4 text-zinc-500">
                  Crafted for interaction.
                </p>
              </div>
            </motion.div>

            {/* tiny bottom statement */}
            <motion.p
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.56 }}
              className="mt-7 text-[11px] uppercase tracking-[0.14em] text-zinc-600"
            >
              Open source foundation · premium layer in progress
            </motion.p>
          </div>

          {/* RIGHT — live product */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 36,
                    scale: 0.98,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: EASE,
            }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[36px] bg-amber-300/[0.025] blur-3xl" />

            <div className="relative">
              <LiveShowcase compact />
            </div>

            <div className="mt-3 flex items-center justify-between px-1 text-[10px] uppercase tracking-[0.14em] text-zinc-600">
              <span>Live component preview</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}