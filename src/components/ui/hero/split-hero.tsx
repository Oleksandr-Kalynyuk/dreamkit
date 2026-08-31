"use client";
//npm install motion lucide-react
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, CheckCircle2, Terminal } from "lucide-react";
import { ComponentViewer } from "@/components/shared/component-viewer";

const HERO_CODE = `"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, CheckCircle2, Terminal } from "lucide-react";

export function SplitHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#07080a] py-16 lg:py-24 text-white">
      {/* Background Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-mono text-amber-400"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Hero Component System</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]"
            >
              Ship your landing page <br />
              <span className="text-amber-400">in record time.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-xl text-base text-zinc-400 leading-relaxed"
            >
              A clean 2-column layout designed to showcase your core product value alongside an interactive preview or visual feature card.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#get-started"
                className="group inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-amber-300"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#docs"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-5 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-700 hover:bg-zinc-800"
              >
                <Terminal className="h-4 w-4 text-zinc-500" />
                Documentation
              </a>
            </motion.div>

            {/* Micro feature checklist */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pt-4 text-xs font-medium text-zinc-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-400" />
                <span>React / Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-400" />
                <span>Tailwind CSS v3+</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-400" />
                <span>TypeScript</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Preview Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 backdrop-blur-md shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-amber-400" />
                  <span className="text-xs font-mono text-zinc-400">HeroBlock.tsx</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Ready to copy
                </span>
              </div>

              {/* Code snippet simulation */}
              <div className="space-y-2 font-mono text-xs text-zinc-400 text-left bg-zinc-950/80 p-4 rounded-xl border border-zinc-800/80 overflow-x-auto">
                <p className="text-zinc-600">// Clean component code</p>
                <p><span className="text-purple-400">import</span> &#123; motion &#125; <span className="text-purple-400">from</span> <span className="text-amber-300">"framer-motion"</span>;</p>
                <p className="pt-2"><span className="text-purple-400">export function</span> <span className="text-blue-400">Hero</span>() &#123;</p>
                <p className="pl-4"><span className="text-purple-400">return</span> (</p>
                <p className="pl-8 text-amber-200/90">&lt;<span className="text-rose-400">div</span> <span className="text-zinc-500">className</span>=<span className="text-emerald-300">"grid grid-cols-2"</span>&gt;</p>
                <p className="pl-12 text-zinc-500">&lt;!-- Your content here --&gt;</p>
                <p className="pl-8 text-amber-200/90">&lt;/<span className="text-rose-400">div</span>&gt;</p>
                <p className="pl-4">);</p>
                <p>&#125;</p>
              </div>

              {/* Accent Floating Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 rounded-xl border border-amber-500/30 bg-zinc-900/95 p-3.5 shadow-xl backdrop-blur-xl flex items-center gap-3"
              >
                <div className="h-8 w-8 rounded-lg bg-amber-400/10 flex items-center justify-center border border-amber-400/20">
                  <Sparkles className="h-4 w-4 text-amber-400" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-white">Customizable</p>
                  <p className="text-[10px] text-zinc-400">Zero extra setup</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}`;

function SplitHeroDemo() {
  return (
    <section className="relative overflow-hidden bg-[#07080a] py-16 lg:py-24 text-white rounded-xl border border-zinc-800">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-mono text-amber-400"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Hero Component System</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]"
            >
              Ship your landing page <br />
              <span className="text-amber-400">in record time.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-xl text-base text-zinc-400 leading-relaxed"
            >
              A clean 2-column layout designed to showcase your core product value alongside an interactive preview or visual feature card.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#get-started"
                className="group inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-amber-300"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#docs"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-5 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-700 hover:bg-zinc-800"
              >
                <Terminal className="h-4 w-4 text-zinc-500" />
                Documentation
              </a>
            </motion.div>

            {/* Micro Checklist */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pt-4 text-xs font-medium text-zinc-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-400" />
                <span>React / Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-400" />
                <span>Tailwind CSS v3+</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-400" />
                <span>TypeScript</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 backdrop-blur-md shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-amber-400" />
                  <span className="text-xs font-mono text-zinc-400">HeroBlock.tsx</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Ready to copy
                </span>
              </div>

              {/* Code snippet simulation */}
              <div className="space-y-2 font-mono text-xs text-zinc-400 text-left bg-zinc-950/80 p-4 rounded-xl border border-zinc-800/80 overflow-x-auto">
                <p className="text-zinc-600">{"// Clean component code"}</p>
                <p><span className="text-purple-400">import</span> {"{ motion }"} <span className="text-purple-400">from</span> <span className="text-amber-300">&quot;framer-motion&quot;</span>;</p>
                <p className="pt-2"><span className="text-purple-400">export function</span> <span className="text-blue-400">Hero</span>() {"{"}</p>
                <p className="pl-4"><span className="text-purple-400">return</span> (</p>
                <p className="pl-8 text-amber-200/90">&lt;<span className="text-rose-400">div</span> <span className="text-zinc-500">className</span>=<span className="text-emerald-300">&quot;grid grid-cols-2&quot;</span>&gt;</p>
                <p className="pl-12 text-zinc-500">&lt;!-- Your content here --&gt;</p>
                <p className="pl-8 text-amber-200/90">&lt;/<span className="text-rose-400">div</span>&gt;</p>
                <p className="pl-4">);</p>
                <p>{"}"}</p>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 rounded-xl border border-amber-500/30 bg-zinc-900/95 p-3.5 shadow-xl backdrop-blur-xl flex items-center gap-3"
              >
                <div className="h-8 w-8 rounded-lg bg-amber-400/10 flex items-center justify-center border border-amber-400/20">
                  <Sparkles className="h-4 w-4 text-amber-400" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-white">Customizable</p>
                  <p className="text-[10px] text-zinc-400">Zero extra setup</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function HeroSection() {
  return (
    <ComponentViewer title="Split Hero Block" code={HERO_CODE}>
      <SplitHeroDemo />
    </ComponentViewer>
  );
}