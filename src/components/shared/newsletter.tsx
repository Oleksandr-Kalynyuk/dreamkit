"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
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
          honeypot 
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage(data.message || "Check your inbox to confirm your email!");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  }

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/80 px-5 py-12 text-center backdrop-blur-md sm:px-10 sm:py-16"
        >
          {/* Ambient Amber Glow (DreamKit Style) */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-2xl">
            {/* DreamKit Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400"
            >
              <span>✦</span> Stay in the loop
            </motion.div>

            {/* Title with DreamKit Yellow Accent */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Be the first to <span className="text-amber-400 italic">know.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mx-auto mt-4 max-w-xl text-sm leading-6 text-neutral-400 sm:text-base"
            >
              Get notified about new components, major updates, and the launch of DreamKit Pro.
            </motion.p>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:max-w-xl sm:flex-row"
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

              {/* Improved Input with higher height & text-base for mobile touch */}
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                disabled={status === "loading"}
                aria-label="Email address"
                className="h-13 sm:h-12 w-full flex-1 rounded-xl border border-white/10 bg-neutral-900/90 px-4 text-base sm:text-sm text-white outline-none placeholder:text-neutral-500 transition focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 disabled:cursor-not-allowed disabled:opacity-50"
              />

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="h-13 sm:h-12 w-full sm:w-auto shrink-0 rounded-xl bg-white px-6 text-sm font-semibold text-black transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "loading" ? "Joining..." : "Notify me →"}
              </motion.button>
            </motion.form>

            <AnimatePresence mode="wait">
              {status !== "idle" && (
                <motion.p
                  key={status}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className={`mt-4 text-xs font-medium ${
                    status === "error" ? "text-red-400" : "text-amber-400"
                  }`}
                >
                  {message}
                </motion.p>
              )}
            </AnimatePresence>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-5 text-xs text-neutral-500"
            >
              No spam. Only important DreamKit updates.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}