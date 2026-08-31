import Link from "next/link";
import {
  MousePointerClick,
  Sparkles,
  Layout,
  Box,
  SquareDot,
  Loader2,
  ArrowRight,
} from "lucide-react";

import { countComponents } from "@/lib/component-counts";

const categories = [
  {
    title: "Buttons",
    description:
      "Animated glow borders, shimmer effects, and hover interactions.",
    icon: MousePointerClick,
    href: "/components/buttons",
    folder: "buttons",
  },
  {
    title: "Hero Sections",
    description:
      "High-impact SaaS landing headers with dynamic lighting.",
    icon: Layout,
    href: "/components/hero",
    folder: "hero",

  },
  {
    title: "Cards & Bento Grid",
    description:
      "Glassmorphism, spotlight borders, and tilt interactions.",
    icon: Box,
    href: "/components/cards",
    folder: "cards",
  },
  {
    title: "Backgrounds",
    description:
      "Noise textures, animated mesh gradients, and grid overlays.",
    icon: SquareDot,
    href: "/components/backgrounds",
    folder: "backgrounds",
  },
  {
    title: "Cursor Effects",
    description:
      "Smooth magnetic cursors and trailing particle effects.",
    icon: Sparkles,
    href: "/components/cursor",
    folder: "cursor",
  },
  {
    title: "Loaders & Spinners",
    description:
      "Minimalist neon loaders and progress indicators.",
    icon: Loader2,
    href: "/components/loaders",
    folder: "loaders",
  },
];

export default async function ComponentsOverviewPage() {
  const categoriesWithCounts = await Promise.all(
    categories.map(async (category) => {
      const count = await countComponents(category.folder);

      return {
        ...category,
        count,
      };
    }),
  );

  return (
    <div className="mx-auto max-w-6xl space-y-8 py-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Component Library
        </h1>

        <p className="mt-1 text-sm text-zinc-400">
          Explore production-ready animated components for React & Next.js.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categoriesWithCounts.map((category) => {
          const Icon = category.icon;

          return (
            <Link
              key={category.title}
              href={category.href}
              className="group flex flex-col justify-between space-y-4 rounded-2xl border border-zinc-800/80 bg-zinc-950 p-5 transition-all duration-300 hover:border-zinc-700 hover:shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-2.5 text-white transition-colors group-hover:bg-white group-hover:text-black">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/*BADGE SECTION*/}
                  {/*
                  {category.badge && (
                    <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                      {category.badge}
                    </span>
                  )}
                    */}
                </div>

                <h3 className="text-base font-semibold text-white group-hover:text-zinc-200">
                  {category.title}
                </h3>

                <p className="text-xs leading-relaxed text-zinc-400">
                  {category.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-zinc-900 pt-2 text-xs font-medium text-zinc-500">
                <span>
                  {category.count}{" "}
                  {category.count === 1 ? "item" : "items"}
                </span>

                <span className="flex items-center gap-1 text-zinc-300 transition-all group-hover:translate-x-1 group-hover:text-white">
                  View
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}