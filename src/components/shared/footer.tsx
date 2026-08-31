"use client";

import { useEffect, useRef } from "react";
import Image from "next/image"
import Link from "next/link";
import gsap from "gsap";
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  Shield,
  FileText,
} from "lucide-react";

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const columns = [
  {
    title: "Product",
    links: [
      { label: "Components", href: "/components" },
      { label: "Blocks", href: "/blocks" },
      { label: "Templates", href: "/templates" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "/docs" },
      {
        label: "GitHub",
        href: "https://github.com/your-username/dreamkit-ui",
        external: true,
      },
      { label: "Changelog", href: "/changelog" },
    ],
  },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy",
    icon: Shield,
  },
  {
    label: "Terms of Service",
    href: "/terms",
    icon: FileText,
  },
];

export function Footer() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (mediaQuery.matches) {
      gsap.set(headingRef.current, {
        opacity: 1,
        y: 0,
      });

      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 32,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => context.revert();
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#070709] px-6 pb-8 pt-20 text-white sm:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-56 w-[620px] -translate-x-1/2 rounded-full bg-amber-300/[0.025] blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Closing statement */}
        <div ref={headingRef} className="max-w-4xl">
          <div className="text-[10px] uppercase tracking-[0.18em] text-amber-300/70">
            Beyond UI
          </div>

          <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-zinc-100 sm:text-6xl">
            Build something{" "}
            <span className="font-normal italic text-amber-300">
              worth remembering.
            </span>
          </h2>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/components"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#F5F4EF] px-5 text-sm font-semibold text-[#08080A] transition-colors hover:bg-white"
            >
              Explore DreamKit

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>

            <p className="max-w-md text-sm leading-6 text-zinc-600">
              Production-ready animated components for React and Next.js.
              Open-source foundations with a growing premium layer.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-white/[0.07]" />

        {/* Main footer */}
        <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="text-lg font-semibold tracking-[-0.02em]">
              DreamKit{" "}
              <span className="text-amber-300">UI</span>
            </div>

            <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-600">
              Production-ready animated components for React and Next.js,
              designed to be copied, adapted, and owned.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://x.com/sasha_k4lynyuk"
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-500 transition-all duration-300 hover:border-white/[0.15] hover:text-white"
              >
                <XIcon className="h-3.5 w-3.5" />
              </a>

              <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20 transition-all"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            </div>
          </div>

          {/* Product */}
          {columns.map((column) => (
            <div key={column.title}>
              <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-600">
                {column.title}
              </div>

              <ul className="mt-5 space-y-3">
                {column.links.map((link) => {
                  if (link.external) {
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-white"
                        >
                          {link.label}

                          <ArrowUpRight className="h-3 w-3 text-zinc-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-300" />
                        </a>
                      </li>
                    );
                  }

                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-500 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal */}
        <div className="mt-14 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-4 sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-medium text-zinc-400">
                Legal & privacy
              </p>

              <p className="mt-1 max-w-xl text-[11px] leading-5 text-zinc-700">
                Information about how DreamKit handles data and the terms
                governing use of the platform and its components.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {legalLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.07] bg-black/10 px-3 py-2 text-xs text-zinc-500 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.035] hover:text-zinc-200"
                  >
                    <Icon className="h-3.5 w-3.5 text-zinc-600 transition-colors group-hover:text-amber-300" />

                    {link.label}

                    <ArrowRight className="h-3 w-3 text-zinc-700 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col gap-4 border-t border-white/[0.07] pt-6 text-[10px] uppercase tracking-[0.12em] text-zinc-700 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} DreamKit UI
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-zinc-400"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-zinc-400"
            >
              Terms
            </Link>

            <span>Made with intent.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}