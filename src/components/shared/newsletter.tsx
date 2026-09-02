"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

import { SectionLabel } from "@/components/shared/section-label";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          honeypot,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage(
        data.message || "Check your inbox to confirm your email!"
      );
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    }
  }

  return (
    <section className="relative overflow-hidden bg-[#070709] px-6 py-24 text-white sm:py-28">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 rounded-full bg-amber-300/[0.035] blur-[130px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20">
          {/* LEFT SIDE */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <SectionLabel index="03">NEWSLETTER</SectionLabel>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: 0.08,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.035em] sm:text-4xl"
            >
              Stay close to what&apos;s{" "}
              <span className="italic text-amber-400">
                next.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: 0.15,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 max-w-sm text-sm leading-6 text-zinc-500"
            >
              Get notified about new components, major updates,
              and the launch of DreamKit Pro.
            </motion.p>

            {/* Small feature points */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: 0.22,
                duration: 0.55,
              }}
              className="mt-8 space-y-3"
            >
              <div className="flex items-center gap-3 text-xs text-zinc-500">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02]">
                  <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                </span>
                New components & releases
              </div>

              <div className="flex items-center gap-3 text-xs text-zinc-500">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02]">
                  <Mail className="h-3.5 w-3.5 text-zinc-400" />
                </span>
                Important DreamKit updates
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              delay: 0.12,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Top accent line */}
            <div className="absolute -top-px left-0 h-px w-24 bg-gradient-to-r from-amber-400/60 to-transparent" />

            <div className="border-y border-white/[0.08] py-8 sm:py-10">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                  Early access
                </span>

                <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-zinc-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
                  DreamKit
                </span>
              </div>

              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2,
                  duration: 0.55,
                }}
                className="flex flex-col gap-4 sm:flex-row sm:gap-3"
              >
                {/* Invisible Honeypot Field */}
                <input
                  type="text"
                  name="b_name"
                  tabIndex={-1}
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Email input */}
                <div className="group relative flex h-14 flex-1 sm:h-12">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600 transition-colors duration-300 group-focus-within:text-amber-400/70" />

                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    disabled={status === "loading"}
                    aria-label="Email address"
                    className="h-full w-full rounded-xl border border-white/[0.09] bg-white/[0.025] pl-11 pr-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-amber-400/30 focus:bg-white/[0.035] focus:ring-1 focus:ring-amber-400/10 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex h-14 w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white px-5 text-sm font-semibold text-black transition-all duration-300 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50 sm:h-12 sm:w-auto sm:px-6"
                >
                  {status === "loading" ? (
                    "Joining..."
                  ) : (
                    <>
                      Notify me
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </>
                  )}
                </motion.button>
              </motion.form>

              {/* Status message */}
              <AnimatePresence mode="wait">
                {status !== "idle" && (
                  <motion.div
                    key={status}
                    initial={{
                      opacity: 0,
                      y: 6,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -6,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className={`mt-4 text-xs font-medium ${
                      status === "error"
                        ? "text-red-400"
                        : "text-amber-400"
                    }`}
                  >
                    {message}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.35,
                  duration: 0.5,
                }}
                className="mt-5 text-[11px] leading-5 text-zinc-600"
              >
                No spam. Only important DreamKit updates.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}