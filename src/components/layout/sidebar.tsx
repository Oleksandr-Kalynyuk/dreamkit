"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  SquarePlus,
  Users, 
  Layout, 
  MousePointerClick, 
  Box, 
  SquareDot, 
  Loader2, 
  Search 
} from "lucide-react";

const navItems = [
  { name: "Follow on X for more", href: "https://x.com/sasha_k4lynyuk", target: "_blank", icon: Users },
  { name: "Hero", href: "/components/hero", icon: Layout },
  { name: "Cursor", href: "/components/cursor", icon: MousePointerClick },
  { name: "Buttons", href: "/components/buttons", icon: SquarePlus },
  { name: "Cards", href: "/components/cards", icon: Box },
  { name: "Backgrounds", href: "/components/backgrounds", icon: SquareDot },
  { name: "Loaders", href: "/components/loaders", icon: Loader2 },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 h-[calc(100vh-4rem)] sticky top-16 border-r border-zinc-800/80 bg-zinc-950/50 p-4 flex flex-col justify-between overflow-y-auto hidden sm:flex">
      <div className="space-y-4">

        {/* Navigation Links */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                target={item.target} /* Передаємо _blank, якщо він є в об'єкті */
                rel={item.target === "_blank" ? "noopener noreferrer" : undefined} /* Захист для зовнішніх посилань */
                className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-zinc-800 text-white font-semibold"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
                }`}
              >
                <Icon className="w-4 h-4 text-zinc-400" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Card */}
      <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/60 flex items-center gap-3">
        <div className="flex flex-col">
          <span className="text-xs font-medium text-white">DreamKit Alpha</span>
          <span className="text-[10px] text-zinc-500">Build in public.</span>
        </div>
      </div>
    </aside>
  );
}