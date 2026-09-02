"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";

import { SectionLabel } from "@/components/shared/section-label";

const faqs = [
  {
    q: "How does DreamKit work?",
    a: "You copy the source code directly into your own React / Next.js project. There is no npm package to install, no runtime dependency, and zero vendor lock-in. You have 100% control over the code.",
  },
  {
    q: "Can I use DreamKit in commercial projects?",
    a: "Yes. You can use all available components in unlimited personal and commercial projects, client work, SaaS applications, and landing pages without paying royalties.",
  },
  {
    q: "What is the license model for DreamKit?",
    a: "DreamKit operates under a custom UI license. You are free to use and modify the code in your own applications. However, you cannot redistribute, re-license, or re-sell the raw component source code as a competing UI library or template kit.",
  },
  {
    q: "What tech stack is required?",
    a: "DreamKit is built for React, Next.js (App Router), TypeScript, and Tailwind CSS. Motion components rely on Framer Motion and Lucide Icons, with any extra dependency clearly listed on the component page.",
  },
  {
    q: "Will there be paid or Pro components?",
    a: "Yes. Core components remain free to use, while complex hero blocks, multi-step SaaS templates, and advanced motion effects will eventually be available under a Pro access tier.",
  },
  {
    q: "How can I support the project?",
    a: "You can support independent development through Ko-Fi or by starring the repo on GitHub. Direct support helps accelerate new component releases and updates.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[#070709] px-6 py-24 text-white sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[500px] -translate-x-1/2 rounded-full bg-amber-300/[0.025] blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <SectionLabel index="04">FAQ</SectionLabel>

            <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              Everything you actually need to know.
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-500">
              No marketing maze. Just the practical details around using,
              customizing and integrating DreamKit.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 text-xs text-zinc-600">
              More questions?
              <a
                href="https://x.com/sasha_k4lynyuk"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-zinc-300 transition-colors hover:text-white"
              >
                Ask on X
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="border-t border-white/[0.08]">
            {faqs.map((item, index) => {
              const isOpen = open === index;

              return (
                <div
                  key={item.q}
                  className="border-b border-white/[0.08]"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-5 py-6 text-left"
                  >
                    <span className="max-w-xl text-sm font-medium text-zinc-200 transition-colors group-hover:text-white sm:text-base">
                      {item.q}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-500 transition-all duration-300 group-hover:border-white/[0.16] group-hover:text-zinc-200">
                      <Plus
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.32,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 pr-10 text-sm leading-6 text-zinc-500">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}