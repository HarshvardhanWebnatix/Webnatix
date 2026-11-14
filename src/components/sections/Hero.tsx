"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background effects — no neon, just subtle warm radial */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,169,110,0.07) 0%, transparent 65%)",
        }}
      />
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <Container className="relative z-10 pt-28 pb-20 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          <span className="text-xs font-medium tracking-wide text-[var(--accent)]">
            Engineering the Digital Future
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mx-auto max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-6xl lg:text-7xl"
        >
          We Build Software
          <br />
          <GradientText>That Scales With You</GradientText>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]"
        >
          Webnatix is a full-stack product studio building high-performance web
          apps, mobile products, and scalable platforms for ambitious companies.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg" href="/contact">
            Start a Project
            <ArrowRight size={18} />
          </Button>
          <Button variant="secondary" size="lg" href="/work">
            View Our Work
          </Button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-10 border-t border-[var(--border-subtle)] pt-12"
        >
          {[
            { value: "150+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "50+", label: "Global Clients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-[var(--text-primary)]">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-[var(--text-muted)]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-[var(--text-muted)]"
        >
          <ChevronDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  );
}
