"use client";

import React, { useState } from "react";
import { Check, Copy, Lock, Sparkles } from "lucide-react";

interface ComponentViewerProps {
  title: string;
  code: string;
  children: React.ReactNode;
  isPro?: boolean;
  isNew?: boolean;
}

export function ComponentViewer({
  title,
  code,
  children,
  isPro = false,
  isNew = false,
}: ComponentViewerProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full min-w-0 border border-zinc-800 rounded-2xl bg-zinc-950/80 overflow-hidden mb-8">
      {/* Upper Navigation Bar */}
      <div className="flex items-center justify-between border-b border-zinc-800/80 px-4 py-3 bg-zinc-900/40 gap-4 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-3 min-w-0">
          {/* Tabs */}
          <div className="flex bg-zinc-900 p-1 rounded-lg border border-zinc-800 text-xs font-medium shrink-0">
            <button
              onClick={() => setActiveTab("preview")}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeTab === "preview"
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === "code"
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {isPro && <Lock className="w-3 h-3 text-amber-400" />}
              Code
            </button>
          </div>

          <span className="text-sm font-semibold text-zinc-300 truncate">
            {title}
          </span>

          {isNew && (
            <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full shrink-0">
              NEW
            </span>
          )}
          {isPro && (
            <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full flex items-center gap-1 shrink-0">
              <Sparkles className="w-2.5 h-2.5" /> PRO
            </span>
          )}
        </div>

        {/* Copy Code button (works on both Preview & Code tabs) */}
        {!isPro ? (
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg transition-colors shrink-0 ml-auto"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        ) : (
          <button
            disabled
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-zinc-600 bg-zinc-900/50 border border-zinc-800/50 rounded-lg cursor-not-allowed shrink-0 ml-auto"
          >
            <Lock className="w-3.5 h-3.5 text-amber-400/50" />
            <span>PRO Only</span>
          </button>
        )}
      </div>

      {/* Main Container Body */}
      <div className="p-6 sm:p-8 w-full min-w-0">
        {activeTab === "preview" ? (
          <div className="w-full min-h-55 flex items-center justify-center rounded-xl bg-black/40 border border-zinc-900/60 p-6">
            {children}
          </div>
        ) : isPro ? (
          <div className="w-full min-h-55 flex flex-col items-center justify-center text-center rounded-xl bg-zinc-900/20 border border-zinc-800/50 p-6">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mb-3 border border-amber-500/20">
              <Lock className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-sm font-semibold text-white">
              DreamKit PRO Component
            </h3>
            <p className="text-xs text-zinc-400 max-w-xs mt-1 mb-4">
              Unlock source code, TypeScript types, and Framer Motion animations for this element.
            </p>
            <button className="px-4 py-2 text-xs font-semibold bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">
              Get All-Access
            </button>
          </div>
        ) : (
          <div className="w-full min-w-0 max-h-95 overflow-x-auto rounded-xl bg-zinc-950 p-4 border border-zinc-900 font-mono text-xs text-zinc-300">
            <pre className="whitespace-pre overflow-x-auto">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}