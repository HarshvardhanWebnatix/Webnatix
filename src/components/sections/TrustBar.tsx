"use client";

import { motion } from "framer-motion";

const partners = [
  "Next.js",
  "Amazon Web Services",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "TypeScript",
  "Stripe",
  "OpenAI",
  "Tailwind CSS",
  "Supabase",
  "Google Cloud",
  "Redis",
];

export function TrustBar() {
  return (
    <section className="bg-slate-50 py-10 border-b border-slate-200">
      <div className="mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-slate-400">
          Built on Modern Production-Grade Engineering Stacks
        </p>

        <div className="relative overflow-hidden">
          {/* Subtle fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-slate-50 to-transparent" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: { repeat: Infinity, duration: 25, ease: "linear" },
            }}
            className="flex gap-14 whitespace-nowrap items-center"
          >
            {[...partners, ...partners].map((name, i) => (
              <span
                key={i}
                className="text-sm font-bold tracking-wide text-slate-400 hover:text-[#008974] transition-colors cursor-pointer"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
