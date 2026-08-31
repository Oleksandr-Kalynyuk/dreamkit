"use client";
// npm install lucide-react (if your project is on React) in console of your project for code to work if you haven't downloaded it yet
import { Zap } from "lucide-react";

export const glowPulseButtonCode = `<div className="group relative">
  <div className="absolute -inset-0.5 animate-pulse rounded-xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 blur opacity-60 transition duration-500 group-hover:opacity-100" />

  <button className="relative flex cursor-pointer items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-6 py-3 text-sm font-medium text-white">
    <Zap className="h-4 w-4 fill-purple-400 text-purple-400" />
    DreamKit
  </button>
</div>`;

export function GlowPulseButton() {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 animate-pulse rounded-xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 blur opacity-60 transition duration-500 group-hover:opacity-100" />

      <button className="relative flex cursor-pointer items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-6 py-3 text-sm font-medium text-white">
        <Zap className="h-4 w-4 fill-purple-400 text-purple-400" />
        DreamKit
      </button>
    </div>
  );
}