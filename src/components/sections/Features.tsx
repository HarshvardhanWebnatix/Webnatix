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
} from "lucide-react";

interface WhyChooseCard {
  id: string;
  title: string;
  description: string;
}

interface WhyChooseTab {
  id: "software" | "delivery" | "values";
  label: string;
  icon: any;
  overline: string;
  headlinePrefix: string;
  headlineHighlight: string;
  description: string;
  accentTag: string;
  items: WhyChooseCard[];
}

const WHY_CHOOSE_TABS: WhyChooseTab[] = [
  // ── TAB 1: PLATFORM EXCELLENCE ──
  {
    id: "software",
    label: "Platform Excellence",
    icon: Layers,
    overline: "UNMATCHED PLATFORM STANDARDS",
    headlinePrefix: "iGaming & Tech",
    headlineHighlight: "Excellence",
    description:
      "Building a globally competitive digital brand requires a foundation of security, scalability, and absolute operational freedom. We provide the infrastructure; you provide the vision.",
    accentTag: "PLATFORM RELIABILITY",
    items: [
      {
        id: "p1",
        title: "Ownership advantage",
        description:
          "100% full platform ownership model giving you total control over your business.",
      },
      {
        id: "p2",
        title: "No GGR",
        description:
          "Maximize your profits with an absolute zero Gross Gaming Revenue share policy.",
      },
      {
        id: "p3",
        title: "Speed",
        description:
          "Rapid deployment frameworks ensure your turnkey business goes live in just 4–8 weeks.",
      },
      {
        id: "p4",
        title: "Tech strength",
        description:
          "Enterprise-grade, highly scalable microservices architecture built to seamlessly handle peak concurrency.",
      },
      {
        id: "p5",
        title: "Support",
        description:
          "Unwavering 24/7 technical and operational support delivered by seasoned industry veterans.",
      },
      {
        id: "p6",
        title: "CMMI Level 3 Maturity",
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
    headlinePrefix: "Trust in",
    headlineHighlight: "Execution",
    description:
      "Great software is only as good as its implementation. We ensure a smooth transition with zero operational downtime, rigorous staff training, and a deployment strategy that fits your growth schedule.",
    accentTag: "PLATFORM RELIABILITY",
    items: [
      {
        id: "d1",
        title: "On-Time Deployment",
        description:
          "We adhere to strict timelines for setup and integration, ensuring your platform goes live exactly when planned without technical delays.",
      },
      {
        id: "d2",
        title: "Zero Downtime Updates",
        description:
          "Updates and patches are deployed during off-hours to ensure your operations are never interrupted during peak player activity.",
      },
      {
        id: "d3",
        title: "Dedicated Onboarding Specialists",
        description:
          "Our experts guide your team through hands-on training tailored to your specific platform workflow and back-office management.",
      },
      {
        id: "d4",
        title: "24/7 Operational Support",
        description:
          "We provide round-the-clock support to resolve any critical issues instantly, ensuring your platform never stops performing.",
      },
      {
        id: "d5",
        title: "Post-Launch Performance Reviews",
        description:
          "We don't vanish after launch. We conduct scheduled check-ins to optimize system performance and ensure you're utilizing the latest platform features.",
      },
    ],
  },

  // ── TAB 3: CORE VALUES ──
  {
    id: "values",
    label: "Core MetaBlock Values",
    icon: ShieldCheck,
    overline: "THE METABLOCK PROMISE",
    headlinePrefix: "Our",
    headlineHighlight: "Core Values",
    description:
      "We are more than a vendor; we are your technology partner. Our business is built on integrity, transparency, and a relentless drive to see our clients succeed in the competitive market.",
    accentTag: "PLATFORM RELIABILITY",
    items: [
      {
        id: "v1",
        title: "Transparency First",
        description:
          "No hidden fees or locked features. We believe in clear pricing and honest communication about our platform's capabilities and roadmap.",
      },
      {
        id: "v2",
        title: "Operator-Centric Innovation",
        description:
          "Our roadmap is driven by feedback from real operators, ensuring we build features that solve actual operational challenges.",
      },
      {
        id: "v3",
        title: "Long-Term Partnership",
        description:
          "We don't just sell software; we partner with your growth, scaling our solutions as your player base and market reach expand.",
      },
      {
        id: "v4",
        title: "Data Security & Player Privacy",
        description:
          "We enforce enterprise-grade security protocols to protect your business data and player information from any external threats.",
      },
      {
        id: "v5",
        title: "Compliance Focus",
        description:
          "Our platform's compliance-first architecture helps your business meet regulatory demands while maintaining high operational efficiency.",
      },
      {
        id: "v6",
        title: "Continuous Improvement",
        description:
          "We are constantly learning and improving our software based on operator feedback and the latest industry trends.",
      },
    ],
  },
];

export function Features() {
  const [activeTabId, setActiveTabId] = useState<"software" | "delivery" | "values">("software");
  const [hoveredCardId, setHoveredCardId] = useState<string>("p4"); // Default active card

  const currentTab = WHY_CHOOSE_TABS.find((t) => t.id === activeTabId) || WHY_CHOOSE_TABS[0];

  return (
    <section className="relative py-20 sm:py-28 bg-[#fcfdfd] border-t border-slate-100">
      
      {/* Background Subtle Tech Blueprint Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#00897b 1px, transparent 1px), linear-gradient(to right, #00897b 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ── 1. Top Section Header ── */}
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
                  onClick={() => {
                    setActiveTabId(tab.id);
                    setHoveredCardId(tab.items[0]?.id || "");
                  }}
                  className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-[13px] font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#00897b] text-white shadow-md shadow-teal-700/20 border border-[#00897b]"
                      : "border border-slate-200/90 bg-white/90 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <Icon size={14} className={isActive ? "text-white" : "text-slate-400"} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 3. Split Layout: Left Static Content | Right Scrollable Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* ── LEFT COLUMN: STATIC / STICKY (Pins completely and does NOT move) ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 self-start space-y-4 pt-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {/* Overline Tag */}
                <div className="text-[11px] font-black uppercase tracking-[0.2em] text-[#00897b]">
                  {currentTab.overline}
                </div>

                {/* Main Headline */}
                <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.12]">
                  {currentTab.headlinePrefix}{" "}
                  <span className="text-[#00897b]">{currentTab.headlineHighlight}</span>
                </h3>

                {/* Description Paragraph */}
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal max-w-md pt-1">
                  {currentTab.description}
                </p>

                {/* Subtitle Accent Line matching screenshot */}
                <div className="pt-4 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#00897b] rounded-full shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    {currentTab.accentTag}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── RIGHT COLUMN: SCROLLABLE CARDS (Scrolls independently while left is static) ── */}
          <div className="lg:col-span-7">
            <div className="max-h-[580px] overflow-y-auto pr-2 sm:pr-3 space-y-4 scroll-smooth scrollbar-thin scrollbar-thumb-teal-600/20 scrollbar-track-slate-100 hover:scrollbar-thumb-teal-600/40">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTab.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  {currentTab.items.map((card) => {
                    const isActive = hoveredCardId === card.id;

                    return (
                      <div
                        key={card.id}
                        onMouseEnter={() => setHoveredCardId(card.id)}
                        onClick={() => setHoveredCardId(card.id)}
                        className={`group rounded-2xl border p-5 sm:p-6 transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                          isActive
                            ? "border-[#00897b]/50 bg-white shadow-md shadow-teal-900/5 ring-1 ring-[#00897b]/25"
                            : "border-slate-200/90 bg-white shadow-xs hover:border-[#00897b]/40 hover:shadow-sm"
                        }`}
                      >
                        {/* Circle Checkmark Icon */}
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${
                            isActive
                              ? "bg-[#00897b] text-white shadow-sm scale-105"
                              : "bg-teal-50 border border-teal-200/70 text-[#00897b] group-hover:bg-[#00897b] group-hover:text-white"
                          }`}
                        >
                          <Check size={18} className="stroke-[2.8]" />
                        </div>

                        {/* Card Content */}
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4
                              className={`text-base sm:text-[17px] font-bold transition-colors leading-snug ${
                                isActive ? "text-[#00897b]" : "text-slate-900 group-hover:text-[#00897b]"
                              }`}
                            >
                              {card.title}
                            </h4>

                            <ChevronRight
                              size={16}
                              className={`transition-all duration-300 shrink-0 ml-2 ${
                                isActive
                                  ? "text-[#00897b] translate-x-1 opacity-100"
                                  : "text-slate-300 opacity-60 group-hover:text-[#00897b] group-hover:opacity-100 group-hover:translate-x-1"
                              }`}
                            />
                          </div>

                          <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed font-normal">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

// Named alias for clean import
export { Features as WhyChooseUs };
