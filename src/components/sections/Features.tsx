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
  // ── TAB 1: ENTERPRISE EXCELLENCE ──
  {
    id: "software",
    label: "Enterprise Excellence",
    icon: Layers,
    overline: "24+ YEARS OF GLOBAL EXCELLENCE",
    headlinePrefix: "Enterprise Digital",
    headlineHighlight: "Excellence",
    description:
      "Building high-performance enterprise digital solutions requires proven engineering maturity, certified security, and absolute intellectual property control. We provide the technology engine; you lead your market.",
    accentTag: "CMMI LEVEL 3 MATURITY",
    items: [
      {
        id: "p1",
        title: "100% IP & Code Ownership",
        description:
          "Complete source code, intellectual property, and deployment assets belong entirely to you from day one with zero vendor lock-in.",
      },
      {
        id: "p2",
        title: "24+ Years & 27,000+ Projects",
        description:
          "Founded in 2002, successfully delivering over 27,000 transformative web, mobile, cloud, and AI solutions worldwide.",
      },
      {
        id: "p3",
        title: "1,200+ In-House Engineers",
        description:
          "No unvetted third-party outsourcing. Full-time certified architects, engineers, UI/UX designers, and QA specialists directly on payroll.",
      },
      {
        id: "p4",
        title: "Global Capability Centre (GCC)",
        description:
          "State-of-the-art tech campus in Jaipur working seamlessly alongside client-facing hubs in London, Maryland, Melbourne, and Dubai.",
      },
      {
        id: "p5",
        title: "CMMI Level 3 & Agile Certified",
        description:
          "Standardized agile sprint cadences, peer code reviews, continuous regression testing, and ISO-aligned software engineering quality.",
      },
      {
        id: "p6",
        title: "ISO 27001 & Cyber Essentials Plus",
        description:
          "Military-grade information security protocols, zero-trust infrastructure, and strict compliance standards safeguarding all client data.",
      },
    ],
  },

  // ── TAB 2: DELIVERY & EXECUTION ──
  {
    id: "delivery",
    label: "Delivery & Execution",
    icon: Clock,
    overline: "PRECISION & IMPLEMENTATION",
    headlinePrefix: "Trust in",
    headlineHighlight: "Execution",
    description:
      "Great enterprise software is only as good as its execution. We ensure seamless agile sprints with zero operational downtime, tailored staff onboarding, and transparent project velocity.",
    accentTag: "AGILE DELIVERY STANDARD",
    items: [
      {
        id: "d1",
        title: "On-Time Milestone Delivery",
        description:
          "We adhere to strict sprint timelines and integration roadmaps, delivering releases with predictable velocity and zero unexpected lag.",
      },
      {
        id: "d2",
        title: "Zero Downtime Cloud Deployments",
        description:
          "Continuous integration and continuous deployment (CI/CD) pipelines engineered for safe, zero-downtime production rollouts.",
      },
      {
        id: "d3",
        title: "Dedicated Project Managers & BAs",
        description:
          "Direct daily communication with dedicated scrum masters, technical business analysts, and lead solution architects assigned to your pod.",
      },
      {
        id: "d4",
        title: "24/7 Global Technical Support",
        description:
          "Round-the-clock proactive monitoring and Tier-3 technical support spanning European, American, and APAC business hours.",
      },
      {
        id: "d5",
        title: "Post-Launch Performance Reviews",
        description:
          "We don't vanish after launch. We conduct scheduled telemetry reviews, load-testing audits, and continuous performance tuning.",
      },
    ],
  },

  // ── TAB 3: CORE ENGAGEMENT VALUES ──
  {
    id: "values",
    label: "Core Engagement Values",
    icon: ShieldCheck,
    overline: "THE WEBNATIX PROMISE",
    headlinePrefix: "Our",
    headlineHighlight: "Core Values",
    description:
      "We are more than a software development vendor; we are your long-term technology co-pilot. Our partnership is built on commercial integrity, complete transparency, and measurable ROI.",
    accentTag: "CLIENT-CENTRIC INTEGRITY",
    items: [
      {
        id: "v1",
        title: "Transparency First",
        description:
          "No hidden maintenance surcharges or locked features. Clear transparent sprint estimates, timesheets, and real-time Jira visibility.",
      },
      {
        id: "v2",
        title: "Client-Centric Innovation",
        description:
          "Our engineering roadmaps are driven by your business KPIs, user workflows, and measurable commercial value.",
      },
      {
        id: "v3",
        title: "Flexible Engagement Models",
        description:
          "Choose from dedicated development pods, time & materials, staff augmentation, or fixed-scope turnkey delivery tailored to your budget.",
      },
      {
        id: "v4",
        title: "Enterprise Data Security",
        description:
          "We enforce strict NDA protocols, SOC-2 compliant infrastructure, and encrypted communications safeguarding all client assets.",
      },
      {
        id: "v5",
        title: "Multi-Cloud & Technology Agnostic",
        description:
          "Certified expertise across AWS, Azure, Google Cloud, Salesforce, Microsoft Fabric, and modern headless web architectures.",
      },
      {
        id: "v6",
        title: "Continuous Innovation & R&D",
        description:
          "Ongoing team upskilling in Agentic AI, LLM orchestration, microservices, and next-generation cloud architectures.",
      },
    ],
  },
];

export function Features() {
  const [activeTabId, setActiveTabId] = useState<"software" | "delivery" | "values">("software");
  const [hoveredCardId, setHoveredCardId] = useState<string>("p1"); // Default active card

  const currentTab = WHY_CHOOSE_TABS.find((t) => t.id === activeTabId) || WHY_CHOOSE_TABS[0];

  return (
    <section className="relative py-20 sm:py-28 bg-[#fcfdfd] border-t border-slate-100">
      
      {/* Background Subtle Tech Blueprint Grid with Webnatix Brand Blue */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#0066cc 1px, transparent 1px), linear-gradient(to right, #0066cc 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ── 1. Top Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-slate-900">
            WHY <span className="text-[#0066cc]">CHOOSE US</span>
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
                      ? "bg-[#0066cc] text-white shadow-md shadow-blue-700/20 border border-[#0066cc]"
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
                <div className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0066cc]">
                  {currentTab.overline}
                </div>

                {/* Main Headline */}
                <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.12]">
                  {currentTab.headlinePrefix}{" "}
                  <span className="text-[#0066cc]">{currentTab.headlineHighlight}</span>
                </h3>

                {/* Description Paragraph */}
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal max-w-md pt-1">
                  {currentTab.description}
                </p>

                {/* Subtitle Accent Line matching brand blue */}
                <div className="pt-4 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#0066cc] rounded-full shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    {currentTab.accentTag}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── RIGHT COLUMN: SCROLLABLE CARDS (Scrolls independently while left is static) ── */}
          <div className="lg:col-span-7">
            <div className="max-h-[580px] overflow-y-auto pr-2 sm:pr-3 space-y-4 scroll-smooth scrollbar-thin scrollbar-thumb-blue-600/20 scrollbar-track-slate-100 hover:scrollbar-thumb-blue-600/40">
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
                            ? "border-[#0066cc]/50 bg-white shadow-md shadow-blue-900/5 ring-1 ring-[#0066cc]/25"
                            : "border-slate-200/90 bg-white shadow-xs hover:border-[#0066cc]/40 hover:shadow-sm"
                        }`}
                      >
                        {/* Circle Checkmark Icon with Brand Blue */}
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${
                            isActive
                              ? "bg-[#0066cc] text-white shadow-sm scale-105"
                              : "bg-blue-50 border border-blue-200/70 text-[#0066cc] group-hover:bg-[#0066cc] group-hover:text-white"
                          }`}
                        >
                          <Check size={18} className="stroke-[2.8]" />
                        </div>

                        {/* Card Content */}
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4
                              className={`text-base sm:text-[17px] font-bold transition-colors leading-snug ${
                                isActive ? "text-[#0066cc]" : "text-slate-900 group-hover:text-[#0066cc]"
                              }`}
                            >
                              {card.title}
                            </h4>

                            <ChevronRight
                              size={16}
                              className={`transition-all duration-300 shrink-0 ml-2 ${
                                isActive
                                  ? "text-[#0066cc] translate-x-1 opacity-100"
                                  : "text-slate-300 opacity-60 group-hover:text-[#0066cc] group-hover:opacity-100 group-hover:translate-x-1"
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
