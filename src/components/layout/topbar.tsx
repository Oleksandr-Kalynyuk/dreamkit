"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import Link from "next/link";

import {
  ArrowRight,
  Box,
  Component,
  Layers3,
  Layout,
  Loader2,
  MousePointer2,
  Search,
  Sparkles,
  SquareDot,
  X,
} from "lucide-react";

type SearchComponent = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  href: string;
  fileName: string;
};

const CATEGORY_ICONS: Record<
  string,
  typeof Component
> = {
  buttons: Component,
  cards: Box,
  hero: Layout,
  cursor: MousePointer2,
  backgrounds: SquareDot,
  loaders: Loader2,
  navbar: Layers3,
  pricing: Layers3,
  progress: Loader2,
  forms: Component,
  faq: Sparkles,
  footer: Layers3,
};

function getCategoryIcon(categorySlug: string) {
  return CATEGORY_ICONS[categorySlug] ?? Component;
}

function getPlatformShortcut() {
  if (typeof navigator === "undefined") {
    return "Ctrl K";
  }

  const platform = navigator.platform?.toLowerCase() ?? "";

  const isApple =
    /mac|iphone|ipad|ipod/.test(platform) ||
    /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);

  return isApple ? "⌘ K" : "Ctrl K";
}

function scoreResult(
  item: SearchComponent,
  query: string,
) {
  if (!query) {
    return 0;
  }

  const normalizedQuery = query.trim().toLowerCase();
  const title = item.title.toLowerCase();
  const category = item.category.toLowerCase();
  const slug = item.slug.toLowerCase();

  if (title === normalizedQuery) {
    return 100;
  }

  if (title.startsWith(normalizedQuery)) {
    return 80;
  }

  if (slug.startsWith(normalizedQuery)) {
    return 70;
  }

  if (title.includes(normalizedQuery)) {
    return 60;
  }

  if (slug.includes(normalizedQuery)) {
    return 50;
  }

  if (category.includes(normalizedQuery)) {
    return 40;
  }

  const words = normalizedQuery.split(/\s+/).filter(Boolean);

  const matchingWords = words.filter(
    (word) =>
      title.includes(word) ||
      slug.includes(word) ||
      category.includes(word),
  );

  return matchingWords.length > 0
    ? 20 + matchingWords.length
    : -1;
}

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [components, setComponents] = useState<
    SearchComponent[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const shortcut = useMemo(
    () => getPlatformShortcut(),
    [],
  );

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setQuery("");
  }, []);

  const loadComponents = useCallback(async () => {
    if (hasLoaded) {
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch("/api/components", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(
          `Component API returned ${response.status}`,
        );
      }

      const data = (await response.json()) as SearchComponent[];

      setComponents(data);
      setHasLoaded(true);
    } catch (error) {
      console.error(
        "Failed to load DreamKit components:",
        error,
      );

      setComponents([]);
    } finally {
      setIsLoading(false);
    }
  }, [hasLoaded]);

  const openSearch = useCallback(() => {
    setIsOpen(true);
    void loadComponents();
  }, [loadComponents]);

  /*
   * Global keyboard shortcuts:
   *
   * macOS / iPad with keyboard:
   * ⌘ + K
   *
   * Windows / Linux:
   * Ctrl + K
   *
   * Escape:
   * close search
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      if (
        (event.metaKey || event.ctrlKey) &&
        key === "k"
      ) {
        event.preventDefault();
        openSearch();
        return;
      }

      if (key === "escape" && isOpen) {
        event.preventDefault();
        handleClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [handleClose, isOpen, openSearch]);

  /*
   * Lock page scrolling while search is open.
   */
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 30);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return components.slice(0, 8);
    }

    return components
      .map((item) => ({
        item,
        score: scoreResult(item, normalizedQuery),
      }))
      .filter((result) => result.score >= 0)
      .sort((a, b) => {
        if (b.score !== a.score) {
          return b.score - a.score;
        }

        return a.item.title.localeCompare(
          b.item.title,
        );
      })
      .map((result) => result.item)
      .slice(0, 12);
  }, [components, query]);

  return (
    <>
      {/* ------------------------------------------------------ */}
      {/* Top navigation                                         */}
      {/* ------------------------------------------------------ */}

      <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-white/[0.07] bg-[#070709]/85 px-5 backdrop-blur-xl sm:px-6">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="group flex items-baseline gap-1.5"
          >
            <span className="text-lg font-semibold tracking-[-0.025em] text-zinc-100 transition-colors group-hover:text-white">
              DreamKit
            </span>

            <span className="text-lg font-semibold tracking-[-0.025em] text-amber-300">
              UI
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-500 lg:flex">
            <Link
              href="/components"
              className="transition-colors hover:text-zinc-100"
            >
              Components
            </Link>

            <Link
              href="/blocks"
              className="transition-colors hover:text-zinc-100"
            >
              Blocks
            </Link>

            <Link
              href="/templates"
              className="transition-colors hover:text-zinc-100"
            >
              Templates
            </Link>

            <Link
              href="/pricing"
              className="transition-colors hover:text-zinc-100"
            >
              Pricing
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Search trigger */}
          <button
            type="button"
            onClick={openSearch}
            aria-label="Open component search"
            className="group hidden h-9 items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 text-zinc-500 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.045] hover:text-zinc-300 sm:flex"
          >
            <Search className="h-3.5 w-3.5" />

            <span className="text-xs">
              Search components...
            </span>

            <kbd className="rounded-md border border-white/[0.07] bg-black/20 px-1.5 py-0.5 font-mono text-[10px] text-zinc-600 transition-colors group-hover:text-zinc-400">
              {shortcut}
            </kbd>
          </button>

          {/* Mobile search */}
          <button
            type="button"
            onClick={openSearch}
            aria-label="Open component search"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-zinc-500 transition-colors hover:text-white sm:hidden"
          >
            <Search className="h-4 w-4" />
          </button>

          <div className="hidden h-6 w-px bg-white/[0.07] sm:block" />

          <Link
            href="/pricing"
            className="inline-flex h-9 items-center rounded-xl bg-[#F5F4EF] px-4 text-xs font-semibold text-[#08080A] transition-all duration-300 hover:bg-white"
          >
            Get All-Access
          </Link>
        </div>
      </header>

      {/* ------------------------------------------------------ */}
      {/* Command palette                                        */}
      {/* ------------------------------------------------------ */}

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[10vh] sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-label="DreamKit component search"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close search"
            className="fixed inset-0 cursor-default bg-black/70 backdrop-blur-md"
            onClick={handleClose}
          />

          {/* Palette */}
          <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[24px] border border-white/[0.1] bg-[#0B0B0F] shadow-[0_30px_120px_rgba(0,0,0,0.65)]">
            {/* Search input */}
            <div className="flex items-center gap-3 border-b border-white/[0.07] px-4">
              <Search className="h-4 w-4 shrink-0 text-zinc-500" />

              <input
                ref={inputRef}
                value={query}
                onChange={(event) =>
                  setQuery(event.target.value)
                }
                placeholder="Search components..."
                type="text"
                autoComplete="off"
                spellCheck={false}
                className="h-14 min-w-0 flex-1 bg-transparent text-sm text-zinc-100 outline-none placeholder:text-zinc-600"
              />

              {query.length > 0 && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-white/[0.05] hover:text-zinc-300"
                >
                  <X className="h-4 w-4" />
                </button>
              )}

              <kbd className="hidden rounded-md border border-white/[0.08] bg-white/[0.025] px-2 py-1 font-mono text-[10px] text-zinc-600 sm:block">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[min(60vh,480px)] overflow-y-auto p-2">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-14">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/[0.1] border-t-amber-300" />

                  <p className="mt-4 text-xs text-zinc-600">
                    Loading DreamKit components...
                  </p>
                </div>
              ) : filteredItems.length > 0 ? (
                <div className="space-y-1">
                  {filteredItems.map((item) => {
                    const Icon = getCategoryIcon(
                      item.categorySlug,
                    );

                    return (
                      <Link
                        key={`${item.categorySlug}-${item.slug}`}
                        href={item.href}
                        onClick={handleClose}
                        className="group flex items-center justify-between rounded-2xl border border-transparent px-3 py-3 transition-all duration-200 hover:border-white/[0.06] hover:bg-white/[0.035]"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] transition-colors group-hover:border-amber-300/10 group-hover:bg-amber-300/[0.05]">
                            <Icon className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-amber-300" />
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-zinc-200 transition-colors group-hover:text-white">
                              {item.title}
                            </p>

                            <div className="mt-1 flex items-center gap-2 text-[10px] text-zinc-600">
                              <span>
                                {item.category}
                              </span>

                              <span className="h-1 w-1 rounded-full bg-zinc-800" />

                              <span className="font-mono">
                                {item.fileName}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="ml-4 flex shrink-0 items-center gap-1 text-xs text-zinc-700 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-zinc-400 group-hover:opacity-100">
                          Open
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025]">
                    <Search className="h-4 w-4 text-zinc-700" />
                  </div>

                  <p className="mt-4 text-sm text-zinc-400">
                    No components found
                  </p>

                  <p className="mt-1 max-w-xs text-xs leading-5 text-zinc-700">
                    Try another name, category, or keyword.
                  </p>

                  {query && (
                    <p className="mt-3 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-[10px] text-zinc-600">
                      &quot;{query}&quot;
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-white/[0.07] bg-white/[0.015] px-4 py-3 text-[10px] text-zinc-700">
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline">
                  {components.length} components indexed
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-zinc-800 sm:block" />

                <span>
                  {shortcut} to search
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-zinc-800 sm:block" />

                <span>ESC to close</span>
              </div>

              <span className="font-mono text-amber-300/50">
                DreamKit
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}