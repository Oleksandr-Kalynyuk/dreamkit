"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  Command,
  CreditCard,
  Layers3,
  Lock,
  MoreHorizontal,
  MousePointer2,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import { SectionLabel } from "@/components/shared/section-label";

type LiveShowcaseProps = {
  compact?: boolean;
};

type CompactSlide = {
  key: string;
  number: string;
  label: string;
  title: string;
  description: string;
};

type FullSlide = {
  key: string;
  number: string;
  label: string;
  title: string;
  description: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

const compactSlides: CompactSlide[] = [
  {
    key: "shimmer",
    number: "01",
    label: "Micro interaction",
    title: "Production-ready interactions.",
    description:
      "Small details designed to make interfaces feel finished without overwhelming the experience.",
  },
  {
    key: "spotlight",
    number: "02",
    label: "Cursor engine",
    title: "Lighting that follows the user.",
    description:
      "Dynamic spotlight effects that react to movement and add depth without heavy visual noise.",
  },
  {
    key: "gradient",
    number: "03",
    label: "Typography",
    title: "Motion with restraint.",
    description:
      "Kinetic text effects that draw attention without turning every heading into an animation.",
  },
  {
    key: "notify",
    number: "04",
    label: "Feedback",
    title: "Notifications with presence.",
    description:
      "Stacked activity states inspired by the polished details of modern productivity apps.",
  },
  {
    key: "marquee",
    number: "05",
    label: "Continuous motion",
    title: "Infinite motion, without the noise.",
    description:
      "A clean looping ribbon for logos, technologies, testimonials, or product metadata.",
  },
];

const fullSlides: FullSlide[] = [
  {
    key: "analytics",
    number: "01",
    label: "Analytics",
    title: "Interfaces that communicate instantly.",
    description:
      "Useful motion, hierarchy and feedback working together inside a real product surface.",
  },
  {
    key: "command",
    number: "02",
    label: "Command palette",
    title: "Everything one shortcut away.",
    description:
      "Search-heavy experiences become faster when navigation feels like part of the product itself.",
  },
  {
    key: "pricing",
    number: "03",
    label: "Pricing",
    title: "Conversion details matter.",
    description:
      "Micro-interactions can make pricing, plans and calls to action feel significantly more intentional.",
  },
  {
    key: "activity",
    number: "04",
    label: "Activity",
    title: "Feedback should feel alive.",
    description:
      "Small state changes create the feeling that a product is responding to the person using it.",
  },
  {
    key: "system",
    number: "05",
    label: "System UI",
    title: "Polish belongs everywhere.",
    description:
      "Even the quietest dashboard surfaces can benefit from motion, depth and precise visual rhythm.",
  },
];

/* ---------------------------------------------------------------- */
/* Compact demos                                                     */
/* ---------------------------------------------------------------- */

function CompactShimmer() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 rounded-full bg-amber-300/[0.045] blur-3xl" />

      <button
        type="button"
        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-amber-300/20 bg-[#0B0B0E] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_50px_rgba(0,0,0,0.35)]"
      >
        <motion.span
          aria-hidden
          className="absolute inset-0"
          animate={{ opacity: [0.04, 0.11, 0.04] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(251,191,36,.42), transparent 65%)",
            filter: "blur(18px)",
          }}
        />

        <motion.span
          aria-hidden
          className="absolute inset-0"
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(251,191,36,.22) 50deg, transparent 110deg, rgba(255,255,255,.07) 180deg, transparent 250deg)",
            maskImage:
              "linear-gradient(transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(transparent, black 20%, black 80%, transparent)",
          }}
        />

        <Sparkles className="relative z-10 h-4 w-4 text-amber-300" />

        <span className="relative z-10">DreamKit Aurora</span>
      </button>
    </div>
  );
}

function CompactSpotlight() {
  const [position, setPosition] = useState({
    x: 50,
    y: 50,
  });

  return (
    <div
      className="w-[280px]"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();

        setPosition({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        });
      }}
    >
      <motion.div
        whileHover={{ y: -3 }}
        transition={{
          duration: 0.3,
          ease: EASE,
        }}
        className="relative overflow-hidden rounded-[20px] border border-white/[0.08] p-5 transition-colors duration-300 hover:border-amber-300/20"
        style={{
          background: `radial-gradient(220px circle at ${position.x}% ${position.y}%, rgba(251,191,36,.12), transparent 68%), #0B0B0E`,
        }}
      >
        <div className="pointer-events-none absolute inset-[1px] rounded-[19px] border border-white/[0.035]" />

        <div className="flex items-center justify-between">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-300/15 bg-amber-300/[0.07]">
            <MousePointer2 className="h-4 w-4 text-amber-300" />
          </div>

          <span className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-[10px] text-zinc-500">
            Interactive
          </span>
        </div>

        <p className="mt-5 text-sm font-semibold text-zinc-100">
          Spotlight Engine
        </p>

        <p className="mt-1.5 text-xs leading-5 text-zinc-500">
          Move your cursor around the surface.
        </p>
      </motion.div>
    </div>
  );
}

function CompactGradient() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1 text-[10px] uppercase tracking-[0.08em] text-zinc-500">
        <Zap className="h-3 w-3 text-amber-300" />
        Kinetic type
      </div>

      <motion.h3
        className="bg-gradient-to-r from-white via-amber-200 to-zinc-500 bg-clip-text text-center text-3xl font-bold tracking-[-0.04em] text-transparent sm:text-4xl"
        style={{ backgroundSize: "220% auto" }}
        animate={{
          backgroundPositionX: ["0%", "220%"],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        Built to be noticed.
      </motion.h3>
    </div>
  );
}

function CompactNotifications() {
  const notifications = [
    {
      title: "Component copied",
      detail: "Aurora Button",
    },
    {
      title: "Performance score",
      detail: "100 / 100",
    },
    {
      title: "GitHub star",
      detail: "Someone starred DreamKit",
    },
  ];

  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStep((current) => (current + 1) % notifications.length);
    }, 1700);

    return () => window.clearInterval(timer);
  }, [notifications.length]);

  return (
    <div className="relative h-[172px] w-[300px]">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/[0.03]" />

      <div className="absolute inset-x-0 top-0 flex justify-center">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={step}
            initial={{
              opacity: 0,
              y: 12,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -8,
              scale: 0.985,
            }}
            transition={{
              duration: 0.35,
              ease: EASE,
            }}
            className="w-full rounded-2xl border border-white/[0.08] bg-[#0D0D11]/95 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,.42)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-300/15 bg-amber-300/[0.06]">
                <Bell className="h-4 w-4 text-amber-300" />
              </div>

              <div className="min-w-0 text-left">
                <p className="truncate text-xs font-medium text-zinc-200">
                  {notifications[step].title}
                </p>

                <p className="mt-1 truncate text-[10px] text-zinc-600">
                  {notifications[step].detail}
                </p>
              </div>

              <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-x-7 bottom-0">
        <div className="grid grid-cols-3 gap-2">
          <div className="h-8 rounded-lg border border-white/[0.05] bg-white/[0.02]" />
          <div className="h-8 rounded-lg border border-white/[0.05] bg-white/[0.02]" />
          <div className="h-8 rounded-lg border border-white/[0.05] bg-white/[0.02]" />
        </div>
      </div>
    </div>
  );
}

function CompactMarquee() {
  const tags = [
    "Next.js",
    "Tailwind",
    "Framer Motion",
    "TypeScript",
    "60 FPS",
  ];

  return (
    <div className="w-[330px]">
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0A0A0D] py-3">
        <motion.div
          className="flex w-max gap-2.5 px-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...tags, ...tags].map((tag, index) => (
            <div
              key={`${tag}-${index}`}
              className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3.5 py-2 text-xs text-zinc-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              {tag}
            </div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-[#0A0A0D] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-[#0A0A0D] to-transparent" />
      </div>
    </div>
  );
}

function CompactDemo({
  type,
}: {
  type: string;
}) {
  switch (type) {
    case "shimmer":
      return <CompactShimmer />;

    case "spotlight":
      return <CompactSpotlight />;

    case "gradient":
      return <CompactGradient />;

    case "notify":
      return <CompactNotifications />;

    case "marquee":
      return <CompactMarquee />;

    default:
      return null;
  }
}

/* ---------------------------------------------------------------- */
/* Full showcase scenes                                              */
/* ---------------------------------------------------------------- */

function AnalyticsScene() {
  return (
    <div className="w-full max-w-[390px]">
      <div className="rounded-[22px] border border-white/[0.08] bg-[#0B0B0F] p-5 shadow-[0_24px_70px_rgba(0,0,0,.38)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.14em] text-zinc-600">
              Revenue
            </p>

            <p className="mt-1 text-2xl font-semibold tracking-[-0.04em] text-zinc-100">
              $84,240
            </p>
          </div>

          <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/10 bg-emerald-400/[0.05] px-2.5 py-1 text-[10px] text-emerald-300">
            <TrendingUp className="h-3 w-3" />
            +18.4%
          </div>
        </div>

        <div className="mt-6 flex h-28 items-end gap-2">
          {[42, 56, 49, 74, 68, 82, 76, 94, 88, 100, 92, 108].map(
            (height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.035,
                  ease: EASE,
                }}
                className="flex-1 rounded-t-md bg-gradient-to-t from-amber-300/10 to-amber-300/60"
              />
            ),
          )}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4 text-[10px] text-zinc-600">
          <span>Last 30 days</span>

          <span className="flex items-center gap-1">
            <BarChart3 className="h-3 w-3" />
            Live data
          </span>
        </div>
      </div>
    </div>
  );
}

function CommandScene() {
  return (
    <div className="w-full max-w-[390px]">
      <div className="overflow-hidden rounded-[22px] border border-white/[0.09] bg-[#0B0B0F] shadow-[0_24px_80px_rgba(0,0,0,.42)]">
        <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
          <Search className="h-4 w-4 text-zinc-600" />

          <span className="text-sm text-zinc-300">
            Search anything...
          </span>

          <kbd className="ml-auto rounded-md border border-white/[0.08] px-1.5 py-0.5 text-[9px] text-zinc-600">
            ESC
          </kbd>
        </div>

        <div className="p-2">
          {[
            {
              icon: Layers3,
              label: "Components",
              meta: "24 results",
            },
            {
              icon: Sparkles,
              label: "Aurora Button",
              meta: "Component",
            },
            {
              icon: CreditCard,
              label: "Pricing Block",
              meta: "Block",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  x: -8,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.08,
                  ease: EASE,
                }}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 ${
                  index === 0
                    ? "bg-white/[0.045]"
                    : "bg-transparent"
                }`}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.025]">
                  <Icon className="h-4 w-4 text-zinc-400" />
                </div>

                <div>
                  <p className="text-xs font-medium text-zinc-200">
                    {item.label}
                  </p>

                  <p className="mt-0.5 text-[10px] text-zinc-600">
                    {item.meta}
                  </p>
                </div>

                {index === 0 && (
                  <ArrowRight className="ml-auto h-3.5 w-3.5 text-zinc-600" />
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="flex items-center gap-2 border-t border-white/[0.06] px-4 py-3 text-[10px] text-zinc-600">
          <Command className="h-3 w-3" />
          Navigate
          <span className="text-zinc-800">•</span>
          Enter
          <span className="text-zinc-800">•</span>
          Open
        </div>
      </div>
    </div>
  );
}

function PricingScene() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="w-full max-w-[390px]">
      <div className="rounded-[22px] border border-white/[0.08] bg-[#0B0B0F] p-5 shadow-[0_24px_80px_rgba(0,0,0,.4)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-zinc-100">
              DreamKit Pro Coming Soon
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              For serious interface work.
            </p>
          </div>

          <div className="rounded-full border border-amber-300/10 bg-amber-300/[0.05] px-2.5 py-1 text-[10px] text-amber-300">
            Early access
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] p-1">
          <button
            type="button"
            onClick={() => setAnnual(false)}
            className={`flex-1 rounded-lg py-2 text-xs transition-colors ${
              !annual
                ? "bg-white/[0.08] text-white"
                : "text-zinc-600"
            }`}
          >
            Monthly
          </button>

          <button
            type="button"
            onClick={() => setAnnual(true)}
            className={`flex-1 rounded-lg py-2 text-xs transition-colors ${
              annual
                ? "bg-white/[0.08] text-white"
                : "text-zinc-600"
            }`}
          >
            Annual
          </button>
        </div>

        <div className="mt-6 flex items-end justify-between">
          <div>
            <span className="text-4xl font-semibold tracking-[-0.05em] text-white">
              ${annual ? "..." : "..."}
            </span>

            <span className="ml-1 text-xs text-zinc-600">
              / {annual ? "year" : "month"}
            </span>
          </div>

          <span className="flex items-center gap-1 text-[10px] text-emerald-300/80">
            <Check className="h-3 w-3" />
            Lifetime updates
          </span>
        </div>

        <button
          type="button"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
        >
          Get full access
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function ActivityScene() {
  const activities = [
    {
      icon: Sparkles,
      title: "New component copied",
      description: "Aurora Button",
    },
    {
      icon: Users,
      title: "New team member",
      description: "joined your workspace",
    },
    {
      icon: Zap,
      title: "Build completed",
      description: "32 seconds ago",
    },
  ];

  return (
    <div className="w-full max-w-[390px]">
      <div className="rounded-[22px] border border-white/[0.08] bg-[#0B0B0F] p-5 shadow-[0_24px_70px_rgba(0,0,0,.38)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-zinc-100">
              Activity
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              Everything happening in one place.
            </p>
          </div>

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.07] text-zinc-600"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-5 space-y-2">
          {activities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <motion.div
                key={activity.title}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.35,
                  ease: EASE,
                }}
                className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-amber-300/10 bg-amber-300/[0.05]">
                  <Icon className="h-4 w-4 text-amber-300" />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-zinc-200">
                    {activity.title}
                  </p>

                  <p className="mt-0.5 truncate text-[10px] text-zinc-600">
                    {activity.description}
                  </p>
                </div>

                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function SystemScene() {
  return (
    <div className="w-full max-w-[390px]">
      <div className="rounded-[22px] border border-white/[0.08] bg-[#0B0B0F] p-5 shadow-[0_24px_70px_rgba(0,0,0,.4)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/10 bg-emerald-400/[0.05]">
              <Activity className="h-5 w-5 text-emerald-300" />
            </div>

            <div>
              <p className="text-sm font-semibold text-zinc-100">
                All systems operational
              </p>

              <p className="mt-1 text-[10px] text-zinc-600">
                Updated a few seconds ago
              </p>
            </div>
          </div>

          <div className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2">
          {[
            ["API", "99.99%"],
            ["Web", "100%"],
            ["Database", "99.98%"],
            ["Workers", "100%"],
          ].map(([label, value], index) => (
            <motion.div
              key={label}
              initial={{
                opacity: 0,
                y: 5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.3,
              }}
              className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-zinc-600">
                  {label}
                </span>

                <Lock className="h-3 w-3 text-zinc-700" />
              </div>

              <p className="mt-2 text-sm font-semibold text-zinc-200">
                {value}
              </p>

              <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.05]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    delay: 0.15 + index * 0.08,
                    duration: 0.6,
                    ease: EASE,
                  }}
                  className="h-full rounded-full bg-emerald-400/60"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SceneDemo({
  type,
}: {
  type: string;
}) {
  switch (type) {
    case "analytics":
      return <AnalyticsScene />;

    case "command":
      return <CommandScene />;

    case "pricing":
      return <PricingScene />;

    case "activity":
      return <ActivityScene />;

    case "system":
      return <SystemScene />;

    default:
      return null;
  }
}

/* ---------------------------------------------------------------- */
/* Main                                                              */
/* ---------------------------------------------------------------- */

export function LiveShowcase({
  compact = false,
}: LiveShowcaseProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const slides = compact ? compactSlides : fullSlides;

  /**
   * If the mode ever changes while the component is mounted,
   * keep the selected index inside the current slide range
   * without calling setState from an effect.
   */
  const activeIndex =
    slides.length > 0 ? index % slides.length : 0;

  const active = slides[activeIndex];

  useEffect(() => {
    if (reduceMotion || slides.length === 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [reduceMotion, slides.length]);

  if (!active) {
    return null;
  }

  if (compact) {
    return (
      <div className="relative w-full">
        <div className="overflow-hidden rounded-[30px] border border-white/[0.09] bg-[#09090C] shadow-[0_30px_100px_rgba(0,0,0,0.48)]">
          {/* Window chrome */}
          <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-400/55" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/55" />
              <span className="h-2 w-2 rounded-full bg-green-400/55" />
            </div>

            <div className="rounded-full border border-white/[0.06] bg-white/[0.025] px-3 py-1 text-[9px] uppercase tracking-[0.15em] text-zinc-600">
              DreamKit / Live
            </div>

            <div className="text-[9px] tabular-nums text-zinc-700">
              {active.number} /{" "}
              {String(slides.length).padStart(2, "0")}
            </div>
          </div>

          {/* Fixed stage */}
          <div className="relative h-[430px] overflow-hidden px-5 py-5 sm:px-7">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(420px 240px at 50% 52%, rgba(201,160,99,0.045), transparent 72%)",
              }}
            />

            <div className="relative flex h-full flex-col">
              <div className="shrink-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.key}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 8,
                            filter: "blur(6px)",
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                      filter: "blur(6px)",
                    }}
                    transition={{
                      duration: 0.3,
                      ease: EASE,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] text-amber-300/60">
                        {active.number}
                      </span>

                      <span className="text-[9px] uppercase tracking-[0.16em] text-amber-300/70">
                        {active.label}
                      </span>
                    </div>

                    <h3 className="mt-1 max-w-sm text-lg font-semibold tracking-[-0.03em] text-zinc-100">
                      {active.title}
                    </h3>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Fixed visual area */}
              <div className="flex min-h-0 flex-1 items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.key}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 0.95,
                            y: 10,
                            filter: "blur(8px)",
                          }
                    }
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.02,
                      y: -8,
                      filter: "blur(8px)",
                    }}
                    transition={{
                      duration: 0.4,
                      ease: EASE,
                    }}
                    className="flex w-full items-center justify-center"
                  >
                    <CompactDemo type={active.key} />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="shrink-0">
                <p className="max-w-sm text-xs leading-5 text-zinc-600">
                  {active.description}
                </p>

                <div className="mt-4 flex gap-1.5">
                  {slides.map((slide, slideIndex) => (
                    <button
                      key={slide.key}
                      type="button"
                      onClick={() => setIndex(slideIndex)}
                      aria-label={`Show ${slide.label}`}
                      className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.07]"
                    >
                      {slideIndex < activeIndex && (
                        <span className="absolute inset-0 bg-amber-300/60" />
                      )}

                      {slideIndex === activeIndex && (
                        <motion.span
                          key={activeIndex}
                          className="absolute inset-y-0 left-0 rounded-full bg-amber-300"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: 5,
                            ease: "linear",
                          }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#070709] px-6 py-24 text-white sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 rounded-full bg-amber-300/[0.025] blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <SectionLabel index="02">Interface reel</SectionLabel>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
            Components are only the beginning.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500 sm:text-base">
            DreamKit is built to become a complete visual system — from tiny
            interactions to the product surfaces they live inside.
          </p>
        </div>

        <div className="mt-12 rounded-[30px] border border-white/[0.08] bg-[#09090C] p-5 shadow-[0_30px_100px_rgba(0,0,0,.35)] sm:p-7">
          <div className="grid min-h-[390px] gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.key}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 12,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -12,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: EASE,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-amber-300/70">
                      {active.number}
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.16em] text-zinc-600">
                      {active.label}
                    </span>
                  </div>

                  <h3 className="mt-4 max-w-md text-2xl font-semibold tracking-[-0.035em] text-zinc-100 sm:text-3xl">
                    {active.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500">
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Fixed presentation stage */}
            <div className="relative flex min-h-[340px] min-w-0 items-center justify-center overflow-hidden rounded-[22px] border border-white/[0.06] bg-[#08080B]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(480px 300px at 50% 55%, rgba(201,160,99,.04), transparent 72%)",
                }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.key}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 0.94,
                          y: 14,
                          filter: "blur(10px)",
                        }
                  }
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.025,
                    y: -10,
                    filter: "blur(10px)",
                  }}
                  transition={{
                    duration: 0.42,
                    ease: EASE,
                  }}
                  className="relative flex h-full w-full items-center justify-center p-5 sm:p-8"
                >
                  <SceneDemo type={active.key} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-7">
            <div className="flex gap-2">
              {slides.map((slide, slideIndex) => (
                <button
                  key={slide.key}
                  type="button"
                  onClick={() => setIndex(slideIndex)}
                  aria-label={`Show ${slide.label}`}
                  className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]"
                >
                  {slideIndex < activeIndex && (
                    <span className="absolute inset-0 bg-amber-300/60" />
                  )}

                  {slideIndex === activeIndex && (
                    <motion.span
                      key={activeIndex}
                      className="absolute inset-y-0 left-0 rounded-full bg-amber-300"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 5,
                        ease: "linear",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.12em] text-zinc-700">
              <span>Real interface patterns</span>
              <span>Auto play · 5 sec</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}