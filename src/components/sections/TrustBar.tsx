"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const logos = [
  "Acme Corp",
  "Finova",
  "Launchpad",
  "Stackr",
  "Meridian",
  "Nexus",
  "Orbit",
  "Prism",
];

export function TrustBar() {
  return (
    <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-surface)] py-10">
      <Container>
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
          Trusted by leading companies worldwide
        </p>
        <div className="relative overflow-hidden">
          {/* Fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[var(--bg-surface)] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[var(--bg-surface)] to-transparent" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: { repeat: Infinity, duration: 24, ease: "linear" },
            }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={i}
                className="text-sm font-semibold tracking-wide text-[var(--text-muted)] opacity-50"
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
