"use client";
// npm install lucide-react (if your project is on React) in console of your project for code to work if you haven't downloaded it yet
import { ArrowRight } from "lucide-react";

export const interactiveSlideButtonCode = `<button className="group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-zinc-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
  <span>DreamKit</span>

  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</button>`;

export function InteractiveSlideButton() {
  return (
    <button className="group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-zinc-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
      <span>DreamKit</span>

      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
}