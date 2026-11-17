"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Clock,
  ShieldCheck,
  Check,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface WhyChooseCard {
  id: string;
  title: string;
  description: string;
}

interface WhyChooseTab {
  id: "platform" | "delivery" | "values";
  label: string;
  icon: any;
  overline: string;
  headline: string;
  headlineHighlight: string;
  description: string;
  accentTag: string;
  cards: WhyChooseCard[];
}

const WHY_CHOOSE_TABS: WhyChooseTab[] = [
  // ── TAB 1: PLATFORM EXCELLENCE ──
  {
    id: "platform",
    label: "Platform Excellence",
    icon: Layers,
    overline: "UNMATCHED ENGINEERING STANDARDS",
    headline: "Engineering",
    headlineHighlight: "Excellence",
    description:
      "Building a globally competitive digital brand requires a foundation of security, scalability, and absolute operational freedom. We provide the enterprise infrastructure; you provide the vision.",
    accentTag: "PLATFORM RELIABILITY & SCALE",
    cards: [
      {
        id: "p1",
        title: "Ownership advantage",
        description:
          "100% full platform ownership model with complete source code and IP transfer, giving you total control over your business without vendor lock-in.",
      },
      {
        id: "p2",
        title: "Transparent milestone pricing",
        description:
          "Maximize your profits and predictability with an absolute zero hidden fees policy and milestone-governed deliverables.",
      },
      {
        id: "p3",
        title: "High-velocity deployment",
        description:
          "Rapid deployment frameworks and automated CI/CD pipelines ensure your turnkey business or software goes live in just 4–8 weeks.",
      },
      {
        id: "p4",
        title: "Enterprise tech strength",
        description:
          "Enterprise-grade, highly scalable microservices architecture built on containerized cloud nodes to seamlessly handle peak concurrency.",
      },
      {
        id: "p5",
        title: "CMMI Level 3 & ISO 27001 maturity",
        description:
          "Standardized agile sprints, peer code reviews, continuous regression testing, and military-grade encryption built into every deploy.",
      },
    ],
  },

  // ── TAB 2: DELIVERY & EXECUTION ──
  {
    id: "delivery",
    label: "Delivery & Execution",
    icon: Clock,
    overline: "DELIVERY & IMPLEMENTATION",
    headline: "Trust in",
    headlineHighlight: "Execution",
    description:
      "Great software is only as good as its implementation. We ensure a smooth transition with zero operational downtime, rigorous staff training, and a deployment strategy that fits your growth schedule.",
    accentTag: "SLA-BACKED VELOCITY",
    cards: [
      {
        id: "d1",
        title: "On-Time Deployment",
        description:
          "We adhere to strict sprint timelines for setup, migration, and integration, ensuring your platform goes live exactly when planned without technical delays.",
      },
      {
        id: "d2",
        title: "Zero Downtime Updates",
        description:
          "Updates and security patches are deployed during off-hours with blue-green rolling deploys to ensure operations are never interrupted during peak traffic.",
      },
      {
        id: "d3",
        title: "Dedicated Technical Specialists",
        description:
          "Our senior technical architects guide your team through hands-on training tailored to your specific platform workflow and back-office management.",
      },
      {
        id: "d4",
        title: "24/7 Operational Support",
        description:
          "We provide round-the-clock technical support and SIEM monitoring to resolve any critical issues instantly, ensuring your platform never stops performing.",
      },
      {
        id: "d5",
        title: "Post-Launch Performance Reviews",
        description:
          "We don't vanish after launch. We conduct scheduled check-ins to optimize system performance, remove bottlenecks, and ensure you utilize the latest features.",
      },
    ],
  },

  // ── TAB 3: CORE VALUES ──
  {
    id: "values",
    label: "Core Webnatix Values",
    icon: ShieldCheck,
    overline: "THE WEBNATIX PROMISE",
    headline: "Our Core",
    headlineHighlight: "Values",
    description:
      "We are more than a vendor; we are your technology partner. Our business is built on integrity, transparency, and a relentless drive to see our clients succeed in competitive global markets.",
    accentTag: "INTEGRITY & CLIENT TRUST",
    cards: [
      {
        id: "v1",
        title: "Transparency First",
        description:
          "No hidden fees or locked features. We believe in clear pricing, open Slack/Teams communication, and honest updates about platform capabilities and roadmap.",
      },
      {
        id: "v2",
        title: "Operator-Centric Innovation",
        description:
          "Our roadmap is driven by feedback from real enterprise founders and CTOs, ensuring we build features that solve actual operational challenges.",
      },
      {
        id: "v3",
        title: "Long-Term Partnership",
        description:
          "We don't just sell software; we partner with your growth, scaling our cloud architecture and microservices as your client base and market reach expand.",
      },
      {
        id: "v4",
        title: "Data Security & Privacy",
        description:
          "We enforce enterprise-grade security protocols (ISO 27001, GDPR, and SOC 2) to protect your business data and user information from any external threats.",
      },
      {
        id: "v5",
        title: "Compliance Focus",
        description:
          "Our platform's compliance-first architecture helps your business meet regulatory demands and pass third-party audits while maintaining high operational efficiency.",
      },
      {
        id: "v6",
        title: "Continuous Improvement",
        description:
          "We are constantly learning and improving our software based on client feedback, telemetry benchmarks, and the latest emerging technologies.",
      },
    ],
  },
];

export function Features() {
  const [activeTabId, setActiveTabId] = useState<"platform" | "delivery" | "values">("platform");
  const currentTab = WHY_CHOOSE_TABS.find((t) => t.id === activeTabId) || WHY_CHOOSE_TABS[0];

  return (
    <section className="relative py-24 sm:py-28 bg-[#fbfdfc] overflow-hidden border-t border-slate-100">
      
      {/* Background Subtle Tech Blueprint Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#00897b 1px, transparent 1px), linear-gradient(to right, #00897b 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Ambient Radial Aura */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-[850px] h-[550px] rounded-full bg-teal-50/70 blur-3xl opacity-80" />
      </div>

      <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ── 1. Top Section Header matching Screenshot ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-slate-900">
            WHY <span className="text-[#00897b]">CHOOSE US</span>
          </h2>

          {/* ── 2. Top Category Switcher Tabs ── */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {WHY_CHOOSE_TABS.map((tab) => {
              const isActive = activeTabId === tab.id;
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-[13px] font-bold transition-all cursor-pointer ${
                    isActive
                      ? "text-white shadow-md shadow-teal-700/20"
                      : "border border-slate-200/90 bg-white/90 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeWhyChooseUsTab"
                      className="absolute inset-0 rounded-full bg-[#00897b]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <Icon size={14} className={`relative z-10 ${isActive ? "text-white" : "text-slate-400"}`} />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 3. Split Layout: Left Sticky Content | Right Scrollable Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── LEFT COLUMN: STICKY (stays pinned while right side scrolls) ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 self-start space-y-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Overline Tag */}
                <div className="inline-block text-[11px] font-black uppercase tracking-widest text-[#00897b]">
                  {currentTab.overline}
                </div>

                {/* Main Headline */}
                <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.14]">
                  {currentTab.headline}{" "}
                  <span className="text-[#00897b]">{currentTab.headlineHighlight}</span>
                </h3>

                {/* Description Paragraph */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg">
                  {currentTab.description}
                </p>

                {/* Subtitle Accent Line */}
                <div className="pt-2 flex items-center gap-3">
                  <span className="w-10 h-0.5 bg-[#00897b] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {currentTab.accentTag}
                  </span>
                </div>

                {/* Action CTA */}
                <div className="pt-4 flex items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#00897b] hover:bg-[#00796b] text-white px-5 py-3 text-xs font-bold shadow-md shadow-teal-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span>Schedule Architecture Scoping</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── RIGHT COLUMN: SCROLLABLE CARDS (List of feature cards) ── */}
          <div className="lg:col-span-7 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, staggerChildren: 0.08 }}
                className="space-y-4"
              >
                {currentTab.cards.map((card, idx) => (
                  <div
                    key={card.id}
                    className={`group rounded-2xl border p-5 sm:p-6 transition-all duration-300 flex items-start gap-4 ${
                      idx === 0
                        ? "border-[#00897b]/40 bg-white shadow-md shadow-teal-900/5 ring-1 ring-[#00897b]/20"
                        : "border-slate-200/90 bg-white shadow-xs hover:border-[#00897b]/40 hover:shadow-md"
                    }`}
                  >
                    {/* Circle Checkmark Icon */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300 ${
                        idx === 0
                          ? "bg-[#00897b] text-white shadow-xs"
                          : "bg-teal-50 border border-teal-200/70 text-[#00897b] group-hover:bg-[#00897b] group-hover:text-white"
                      }`}
                    >
                      <Check size={18} className="stroke-[2.5]" />
                    </div>

                    {/* Card Content */}
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base sm:text-[17px] font-bold text-slate-900 group-hover:text-[#00897b] transition-colors leading-snug">
                          {card.title}
                        </h4>
                        <ChevronRight
                          size={16}
                          className="text-slate-300 group-hover:text-[#00897b] group-hover:translate-x-1 transition-all shrink-0 ml-2"
                        />
                      </div>
                      <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

    </section>
  );
}

// Named alias for clean import
export { Features as WhyChooseUs };
