"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Newspaper,
  FileText,
  BarChart3,
  GraduationCap,
  ArrowRight,
  ArrowUpRight,
  Clock,
} from "lucide-react";

interface HubCard {
  id: string;
  date: string;
  title: string;
  description: string;
  href?: string;
}

interface HubTab {
  id: "blog" | "news" | "articles" | "case-studies" | "academy";
  label: string;
  icon: any;
  buttonLabel: string;
  cards: HubCard[];
}

const KNOWLEDGE_TABS: HubTab[] = [
  // ── 1. BLOG ──
  {
    id: "blog",
    label: "Blog",
    icon: BookOpen,
    buttonLabel: "View More Blogs",
    cards: [
      {
        id: "b1",
        date: "NOV 14, 2024",
        title: "Generative AI & LLMs in Enterprise Workflows",
        description:
          "How Fortune 500 enterprises are moving from AI proof-of-concepts to secure, private on-premise RAG architectures.",
        href: "/services/ai-machine-learning",
      },
      {
        id: "b2",
        date: "OCT 28, 2024",
        title: "Monolith to Microservices: A Modern Roadmap",
        description:
          "Practical architectural strategies for breaking legacy enterprise monoliths into resilient, event-driven cloud services.",
        href: "/services/full-stack-development",
      },
      {
        id: "b3",
        date: "OCT 10, 2024",
        title: "Small Language Models (SLMs) vs Large LLMs",
        description:
          "Why domain-specialized lightweight models are cutting enterprise compute overhead by 70% while improving response accuracy.",
        href: "/services/ai-machine-learning",
      },
    ],
  },

  // ── 2. NEWS ──
  {
    id: "news",
    label: "News",
    icon: Newspaper,
    buttonLabel: "View More News",
    cards: [
      {
        id: "n1",
        date: "NOV 02, 2024",
        title: "CMMI Level 3 & ISO 27001 Re-Certification",
        description:
          "Dotsquares successfully completes rigorous international audits, validating our software quality and cybersecurity protocols.",
        href: "/about",
      },
      {
        id: "n2",
        date: "OCT 16, 2024",
        title: "Global Capability Centre Expansion in Jaipur",
        description:
          "Unveiling our upgraded state-of-the-art tech campus housing 1,200+ full-time engineers and specialized AI innovation labs.",
        href: "/about",
      },
      {
        id: "n3",
        date: "SEP 20, 2024",
        title: "Forbes Technology Council Keynote on Digital Agility",
        description:
          "Executive perspectives on sustainable engineering scaling, cloud economics, and building resilient distributed teams.",
        href: "/about",
      },
    ],
  },

  // ── 3. ARTICLES ──
  {
    id: "articles",
    label: "Articles",
    icon: FileText,
    buttonLabel: "View More Articles",
    cards: [
      {
        id: "a1",
        date: "OCT 24, 2024",
        title: "Scalable Cloud Architecture for High-Traffic SaaS",
        description:
          "A technical guide on load-balancing, Redis caching tiers, and multi-region database replication for sub-50ms latency.",
        href: "/services/devops-cloud",
      },
      {
        id: "a2",
        date: "OCT 05, 2024",
        title: "Integrating Microsoft Fabric with Enterprise Data Lakes",
        description:
          "Eliminating enterprise data silos through Power BI, real-time analytics pipelines, and automated Azure DevOps governance.",
        href: "/services/data-strategy",
      },
      {
        id: "a3",
        date: "SEP 18, 2024",
        title: "The Role of AI in Fraud Detection & Risk Analysis",
        description:
          "Leveraging machine learning models to identify transaction anomalies, unauthorized access, and suspicious activity in real time.",
        href: "/services/ai-machine-learning",
      },
    ],
  },

  // ── 4. CASE STUDIES ──
  {
    id: "case-studies",
    label: "Case Studies",
    icon: BarChart3,
    buttonLabel: "View More Case Studies",
    cards: [
      {
        id: "c1",
        date: "NOV 08, 2024",
        title: "17-Portal Enterprise Migration to Drupal 10",
        description:
          "Centralizing a multinational industrial manufacturing group's global web infrastructure with multi-language and multi-region CMS capabilities.",
        href: "/services/website-development",
      },
      {
        id: "c2",
        date: "OCT 19, 2024",
        title: "Multi-Brand Travel Platform Modernization",
        description:
          "Scaling booking engine throughput for UK travel conglomerates with microservices, live API aggregators, and zero-downtime cutover.",
        href: "/services/full-stack-development",
      },
      {
        id: "c3",
        date: "SEP 12, 2024",
        title: "FinTech Digital Banking & KYC Automation",
        description:
          "Engineering a compliant, high-security banking dashboard with biometric verification, automated credit scoring, and ISO 20022 messaging.",
        href: "/services/full-stack-development",
      },
      {
        id: "c4",
        date: "AUG 26, 2024",
        title: "Cloud Data Warehouse & Power BI Analytics Hub",
        description:
          "Unifying distributed ERP and CRM data streams into Microsoft Azure, delivering real-time executive visibility across 12 countries.",
        href: "/services/data-strategy",
      },
    ],
  },

  // ── 5. ACADEMY ──
  {
    id: "academy",
    label: "Academy",
    icon: GraduationCap,
    buttonLabel: "View More Academy",
    cards: [
      {
        id: "ac1",
        date: "OCT 30, 2024",
        title: "Enterprise Cloud Migration: The Step-by-Step Playbook",
        description:
          "Master the 6 R's of cloud modernization, cost optimization frameworks, and zero-downtime workload cutover methodologies.",
        href: "/services/devops-cloud",
      },
      {
        id: "ac2",
        date: "OCT 14, 2024",
        title: "Agile Scrum Mastery for Technical Leaders",
        description:
          "Best practices for sprint velocity forecasting, CI/CD pipeline automation, and running distributed cross-functional teams.",
        href: "/services",
      },
      {
        id: "ac3",
        date: "SEP 25, 2024",
        title: "Cybersecurity Compliance & OWASP Top 10 Standards",
        description:
          "Practical training for software engineers on vulnerability mitigation, container security, and regulatory audit compliance.",
        href: "/services",
      },
    ],
  },
];

export function KnowledgeHub() {
  const [activeTabId, setActiveTabId] = useState<string>("blog");
  const currentTab = KNOWLEDGE_TABS.find((t) => t.id === activeTabId) || KNOWLEDGE_TABS[0];

  return (
    <section className="relative py-24 sm:py-32 bg-[#06101e] overflow-hidden text-white border-t border-blue-900/40">
      
      {/* Background Subtle Tech Blueprint Grid matching Webnatix Brand Blue */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#0066cc 1px, transparent 1px), linear-gradient(90deg, #0066cc 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Atmospheric Ambient Glow Orbs */}
      <div className="pointer-events-none absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 blur-[150px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/8 blur-[130px] rounded-full" />

      <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16 z-10">
        
        {/* ── 1. Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-tight">
            Knowledge <span className="text-[#38bdf8]">Hub</span>
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-blue-100/70 leading-relaxed font-normal max-w-2xl mx-auto">
            Stay ahead with expert insights, technical resources, and enterprise case studies from the global software engineering, AI, and cloud ecosystem.
          </p>

          {/* ── 2. Top 5 Category Tabs ── */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md max-w-max mx-auto shadow-lg shadow-black/30">
            {KNOWLEDGE_TABS.map((tab) => {
              const isActive = activeTabId === tab.id;
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "text-white shadow-md shadow-blue-500/25"
                      : "text-blue-100/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeKnowledgeHubTab"
                      className="absolute inset-0 rounded-full bg-[#0066cc]"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                  <Icon size={14} className={`relative z-10 ${isActive ? "text-white" : "text-sky-300/80"}`} />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 3. Cards Grid (3-4 Cards per Tab) ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto"
          >
            {currentTab.cards.map((card) => (
              <div
                key={card.id}
                className="group relative rounded-3xl border border-blue-900/50 bg-gradient-to-b from-[#0c203b]/80 via-[#08182d]/85 to-[#050f1e]/95 backdrop-blur-md p-6 sm:p-7 shadow-xl shadow-black/40 hover:border-sky-400/50 hover:shadow-[0_20px_50px_rgba(0,102,204,0.22)] transition-all duration-400 flex flex-col justify-between hover:-translate-y-2"
              >
                <div>
                  {/* Top Date Badge */}
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 px-3 py-1 text-[10.5px] font-bold text-sky-300 uppercase tracking-wider shadow-2xs group-hover:border-sky-400/50 transition-colors">
                    <Clock size={11} className="text-sky-400" />
                    <span>{card.date}</span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl sm:text-[22px] font-bold text-white group-hover:text-[#38bdf8] transition-colors leading-snug mt-4">
                    <Link href={card.href || "/services"} className="hover:underline">
                      {card.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-[13.5px] text-blue-100/70 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Card Bottom Row: Read Story + Circle Icon Button */}
                <div className="mt-7 pt-4 border-t border-blue-900/40 flex items-center justify-between text-xs font-bold">
                  <Link
                    href={card.href || "/services"}
                    className="inline-flex items-center gap-1.5 text-white/90 group-hover:text-[#38bdf8] transition-colors"
                  >
                    <span>Read Story</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href={card.href || "/services"}
                    aria-label={`Read ${card.title}`}
                    className="w-9 h-9 rounded-full bg-blue-950/60 border border-blue-500/40 text-sky-300 flex items-center justify-center shadow-xs group-hover:bg-[#0066cc] group-hover:text-white group-hover:border-[#0066cc] group-hover:scale-110 transition-all duration-300"
                  >
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── 4. Bottom View More CTA Button ── */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-950/50 hover:bg-[#0066cc] text-sky-300 hover:text-white hover:border-[#0066cc] px-7 py-3 text-xs font-bold transition-all duration-300 shadow-md shadow-black/30 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>{currentTab.buttonLabel}</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>

    </section>
  );
}
