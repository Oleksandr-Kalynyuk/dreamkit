"use client";
// npm install lucide-react (if your project is on React) in console of your project for code to work if you haven't downloaded it yet
// npm insall motion
import { motion } from "framer-motion";
import { TrendingUp, Activity, Check } from "lucide-react";

export const metricStatCardCode = `"use client";

import { motion } from "framer-motion";
import { TrendingUp, Activity, Check } from "lucide-react";

export function MetricStatCard() {
  return (
    <div className="relative max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-md shadow-xl text-left">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Live Metrics</span>
        </div>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          <TrendingUp className="h-3 w-3" />
          +24.8%
        </span>
      </div>

      <div className="mt-5">
        <p className="text-xs text-zinc-500 font-medium">Conversion Rate</p>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-3xl font-extrabold text-white tracking-tight">98.4%</span>
          <span className="text-xs text-zinc-400 font-mono">/ optimal</span>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <div className="flex justify-between text-[11px] font-mono text-zinc-400">
          <span>Target Reach</span>
          <span className="text-amber-400">98 / 100</span>
        </div>
        <div className="h-2 w-full rounded-full bg-zinc-800 overflow-hidden p-0.5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "98%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
          />
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
        <div className="flex items-center gap-1.5">
          <Check className="h-3.5 w-3.5 text-amber-400" />
          <span>Auto-Synced</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-500">
          <Activity className="h-3.5 w-3.5 text-zinc-400" />
          <span>12ms lat</span>
        </div>
      </div>
    </div>
  );
}`;

export function MetricStatCard() {
  return (
    <div className="flex justify-center p-4">
      <div className="relative w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-md shadow-xl text-left">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Live Metrics</span>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            <TrendingUp className="h-3 w-3" />
            +24.8%
          </span>
        </div>

        <div className="mt-5">
          <p className="text-xs text-zinc-500 font-medium">Conversion Rate</p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white tracking-tight">98.4%</span>
            <span className="text-xs text-zinc-400 font-mono">/ optimal</span>
          </div>
        </div>

        <div className="mt-5 space-y-2">
          <div className="flex justify-between text-[11px] font-mono text-zinc-400">
            <span>Target Reach</span>
            <span className="text-amber-400">98 / 100</span>
          </div>
          <div className="h-2 w-full rounded-full bg-zinc-800 overflow-hidden p-0.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "98%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
            />
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-amber-400" />
            <span>Auto-Synced</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-500">
            <Activity className="h-3.5 w-3.5 text-zinc-400" />
            <span>12ms lat</span>
          </div>
        </div>
      </div>
    </div>
  );
}