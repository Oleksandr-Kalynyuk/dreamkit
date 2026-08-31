"use client";

import Link from "next/link";
import { ArrowLeft, Coffee, Heart, Sparkles, Users } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description: string;
  kofiUrl?: string;
  patreonUrl?: string;
  xUrl?: string;
}

export function ComingSoon({
  title,
  description,
  kofiUrl = "https://ko-fi.com/sasha4k",
  patreonUrl = "https://patreon.com/your_handle",
  xUrl = "https://x.com/sasha_k4lynyuk",
}: ComingSoonProps) {
  return (
    <div className="relative flex min-h-[75vh] flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* М'який задній фоновий градієнт для преміального вигляду */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-72 w-72 rounded-full bg-amber-500/5 blur-[120px]" />

      {/* Бейдж статусу */}
      <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1 text-xs font-mono text-amber-400 backdrop-blur-sm">
        <Sparkles className="h-3.5 w-3.5" />
        <span>Work in Progress</span>
      </div>
      
      {/* Заголовок та опис */}
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h1>
      <p className="mt-3 max-w-lg text-sm text-zinc-400 leading-relaxed sm:text-base">
        {description}
      </p>

      {/* Блок із кнопками підтримки */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md sm:max-w-none">
        {/* Ko-Fi — Головна акцентна кнопка */}
        <a
          href={kofiUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gray-100/10 border border-gray-500/20 px-5 py-2.5 text-xs font-semibold text-amber-300 transition-all duration-200 hover:bg-gray-50/20 hover:text-amber-400 hover:scale-[1.01]"
        >
          <Coffee className="h-4 w-4 text-amber-400" />
          Support me on Ko-Fi
        </a>

        {/* X (Twitter) */}
        <a
          href={xUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-2.5 text-xs font-medium text-zinc-300 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
        >
          <Users className="h-4 w-4 text-zinc-400" />
          Follow on X
        </a>
      </div>

      {/* Посилання повернення */}
      <Link
        href="/components"
        className="mt-12 inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-200 transition-colors group"
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
        Back to free components
      </Link>
    </div>
  );
}