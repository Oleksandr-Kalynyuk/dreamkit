"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";

import { SectionLabel } from "@/components/shared/section-label";

type ChangelogEntry = {
  version: string;
  date: string;
  type: "New" | "Improved" | "Fixed" | "Removed";
  title: string;
  description: string;
  changes: string[];
};

const changelog: ChangelogEntry[] = [
  {
    version: "0.3.0",
    date: "September 3, 2026",
    type: "New",
    title: "DreamKit Changelog",
    description:
      "Introduced the first public changelog and prepared DreamKit for continuous updates.",
    changes: [
      "Added Changelog page",
      "Improved project structure",
      "Prepared the foundation for future releases",
    ],
  },
  {
    version: "0.2.0",
    date: "September 2, 2026",
    type: "New",
    title: "Email Waitlist",
    description:
      "Added an email waitlist so users can stay informed about major DreamKit updates and the upcoming Pro release.",
    changes: [
      "Email confirmation flow",
      "Newsletter subscription",
      "Submission rate limiting",
      "Honeypot protection",
    ],
  },
  {
    version: "0.1.0",
    date: "August 31, 2026",
    type: "New",
    title: "DreamKit Public Release",
    description:
      "DreamKit is now publicly available with its first collection of animated and interactive UI components.",
    changes: [
      "Background components",
      "Animated buttons",
      "Interactive cards",
      "Cursor effects",
      "Hero section",
      "Loader components",
    ],
  },
];

const typeStyles = {
  New: "text-amber-300 border-amber-300/20 bg-amber-300/[0.06]",
  Improved: "text-blue-300 border-blue-300/20 bg-blue-300/[0.06]",
  Fixed: "text-emerald-300 border-emerald-300/20 bg-emerald-300/[0.06]",
  Removed: "text-red-300 border-red-300/20 bg-red-300/[0.06]",
};

export function Changelog() {
  return (
    <section className="relative overflow-hidden bg-[#070709] px-6 py-24 text-white sm:py-28">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[620px] -translate-x-1/2 rounded-full bg-amber-300/[0.025] blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SectionLabel index="03">CHANGELOG</SectionLabel>

          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-zinc-100 sm:text-5xl">
            What is new in{" "}
            <span className="font-normal italic text-amber-300">
              DreamKit.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-500 sm:text-base">
            A chronological log of new components, improvements, fixes and
            changes across DreamKit.
          </p>
        </motion.div>

        {/* Changelog */}
        <div className="mt-16">
          {changelog.map((entry, index) => (
            <motion.article
              key={`${entry.version}-${entry.title}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border-t border-white/[0.08] py-10 last:border-b"
            >
              <div className="grid gap-8 lg:grid-cols-[180px_1fr] lg:gap-16">
                {/* Meta */}
                <div className="flex flex-row items-center gap-4 lg:block">
                  <div className="text-sm font-medium text-zinc-300">
                    v{entry.version}
                  </div>

                  <div className="text-xs text-zinc-600 lg:mt-2">
                    {entry.date}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] ${typeStyles[entry.type]}`}
                    >
                      {entry.type}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-zinc-100 sm:text-3xl">
                    {entry.title}
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
                    {entry.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {entry.changes.map((change) => (
                      <li
                        key={change}
                        className="flex items-start gap-3 text-sm text-zinc-400"
                      >
                        <Plus className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-700" />
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 pt-10 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs text-zinc-600">
            DreamKit is actively evolving.
          </p>

          <a
            href="https://github.com/Oleksandr-Kalynyuk/dreamkit"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs text-zinc-500 transition-colors hover:text-zinc-200"
          >
            Follow development on GitHub
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}