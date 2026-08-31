"use client";

import React from "react";

interface SectionLabelProps {
  index: string; // e.g. "02"
  children: React.ReactNode;
}

// Small mono "catalog entry" label reused across every section —
// this is the one signature thread tying Hero / Live Preview / FAQ / Footer
// together as one visual system instead of four unrelated blocks.
export function SectionLabel({ index, children }: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-400/90">
      <span className="text-zinc-600">{index}</span>
      <span className="h-px w-4 bg-amber-400/60" />
      <span className="text-zinc-400">{children}</span>
    </div>
  );
}