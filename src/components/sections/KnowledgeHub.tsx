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
  Sparkles,
} from "lucide-react";

interface HubCard {
  id: string;
  date: string;
  title: string;
  description: string;
  href?: string;
  highlightWords?: string[];
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
    buttonLabel: "View More Blog",
    cards: [
      {
        id: "b1",
        date: "OCT 24, 2024",
        title: "The Future of Decentralized iGaming",
        description:
          "How blockchain technology is solving the transparency gap in modern betting and enterprise software platforms.",
        href: "/services",
      },
      {
        id: "b2",
        date: "OCT 15, 2024",
        title: "Top 5 Marketing Strategies for 2025",
        description:
          "Attracting high-value players and enterprise clients in heavily regulated markets through content, technical SEO, and conversion architecture.",
        href: "/services",
      },
      {
        id: "b3",
        date: "SEP 28, 2024",
        title: "Telegram Casinos: A New Frontier",
        description:
          "Why mobile-first operators and next-gen platforms are moving their entire tech stacks and mini-apps onto messaging ecosystems.",
        href: "/services",
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
        date: "OCT 20, 2024",
        title: "Brazillian Market Regulation Update",
        description:
          "New federal laws regarding fixed-odds betting, KYC verification, and online casino operations are now live across LATAM.",
        href: "/services",
      },
      {
        id: "n2",
        date: "OCT 05, 2024",
        title: "MetaBlock Enters Strategic Partnership",
        description:
          "Expanding our high-throughput engineering reach into global emerging markets alongside certified tier-1 compliance partners.",
        href: "/services",
      },
      {
        id: "n3",
        date: "SEP 12, 2024",
        title: "Global iGaming Summit: Recap",
        description:
          "Insights from the world's leading technical architects on AI-driven risk management, automated fraud detection, and player safety.",
        href: "/services",
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
        date: "OCT 18, 2024",
        title: "Scalable Microservices for High Traffic",
        description:
          "A technical guide on building betting engines and transactional systems that handle 10k+ concurrent requests per second with sub-50ms latency.",
        href: "/services",
      },
      {
        id: "a2",
        date: "OCT 08, 2024",
        title: "Optimizing Payment Gateways for Crypto",
        description:
          "How the ownership model handles decentralized liquidity, multi-currency settlement rails, and automated compliance tracking.",
        href: "/services",
      },
      {
        id: "a3",
        date: "SEP 15, 2024",
        title: "The Role of AI in Fraud Detection",
        description:
          "Leveraging machine learning models to identify syndicate betting patterns, anomalous liquidity withdrawals, and collusion in real time.",
        href: "/services",
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
        date: "AUG 12, 2024",
        title: "Crypto Casino Platform",
        description:
          "A next-gen decentralized crypto casino platform featuring lightning-fast transactions and real-time blockchain transparency.",
        href: "/services",
      },
      {
        id: "c2",
        date: "JUL 28, 2024",
        title: "Global Sportsbook Platform",
        description:
          "A scalable sportsbook solution with real-time odds and localized betting experiences for high concurrency.",
        href: "/services",
      },
      {
        id: "c3",
        date: "JUN 15, 2024",
        title: "Sweepstakes Casino (US Market)",
        description:
          "A fully compliant sweepstakes-based casino platform tailored for regulated markets with gamified rewards.",
        href: "/services",
      },
      {
        id: "c4",
        date: "MAY 22, 2024",
        title: "Mobile Betting App UX Revamp",
        description:
          "Complete redesign of a legacy betting app into a modern, high-performance mobile experience with intuitive navigation.",
        href: "/services",
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
        date: "OCT 22, 2024",
        title: "iGaming 101: A Beginner's Guide",
        description:
          "Master the essentials of the industry, from platform licensing and PAM workflows to PAM integrations and player lifecycle management.",
        href: "/services",
      },
      {
        id: "ac2",
        date: "OCT 12, 2024",
        title: "Advanced Yield Optimization",
        description:
          "A deep dive into mathematical models, RTP algorithms, and behavioral analytics for maximizing operator profitability and retention.",
        href: "/services",
      },
      {
        id: "ac3",
        date: "SEP 30, 2024",
        title: "AML Compliance Certification",
        description:
          "Ensure your platform meets international anti-money laundering standards, KYC verifications, and regulatory audit criteria.",
        href: "/services",
      },
    ],
  },
];

export function KnowledgeHub() {
  const [activeTabId, setActiveTabId] = useState<string>("blog");
  const currentTab = KNOWLEDGE_TABS.find((t) => t.id === activeTabId) || KNOWLEDGE_TABS[0];

  return (
    <section className="relative py-24 sm:py-32 bg-[#041a1c] overflow-hidden text-white border-t border-teal-900/40">
      
      {/* Background Subtle Tech Blueprint Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#00dfa2 1px, transparent 1px), linear-gradient(90deg, #00dfa2 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Atmospheric Ambient Glow Orbs */}
      <div className="pointer-events-none absolute top-0 right-0 w-[700px] h-[700px] bg-teal-500/8 blur-[150px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/8 blur-[130px] rounded-full" />

      <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16 z-10">
        
        {/* ── 1. Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-tight">
            Knowledge <span className="text-[#00dfa2]">Hub</span>
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-teal-100/70 leading-relaxed font-normal max-w-2xl mx-auto">
            Stay ahead with expert insights, technical resources, and real-world case studies from the iGaming, Web3, and enterprise software ecosystem.
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
                      ? "text-white shadow-md shadow-teal-500/25"
                      : "text-teal-100/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeKnowledgeHubTab"
                      className="absolute inset-0 rounded-full bg-[#00a88f]"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                  <Icon size={14} className={`relative z-10 ${isActive ? "text-white" : "text-teal-300/80"}`} />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 3. Cards Grid (3 Cards per Tab) ── */}
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
                className="group relative rounded-3xl border border-teal-900/50 bg-gradient-to-b from-[#0a2327]/80 via-[#061c1f]/85 to-[#041618]/95 backdrop-blur-md p-6 sm:p-7 shadow-xl shadow-black/40 hover:border-teal-400/50 hover:shadow-[0_20px_50px_rgba(0,168,143,0.18)] transition-all duration-400 flex flex-col justify-between hover:-translate-y-2"
              >
                <div>
                  {/* Top Date Badge */}
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-950/70 border border-teal-500/30 px-3 py-1 text-[10.5px] font-bold text-teal-300 uppercase tracking-wider shadow-2xs group-hover:border-teal-400/50 transition-colors">
                    <Clock size={11} className="text-teal-400" />
                    <span>{card.date}</span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl sm:text-[22px] font-bold text-white group-hover:text-[#00dfa2] transition-colors leading-snug mt-4">
                    <Link href={card.href || "/services"} className="hover:underline">
                      {card.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-[13.5px] text-teal-100/70 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Card Bottom Row: Read Story + Circle Icon Button */}
                <div className="mt-7 pt-4 border-t border-teal-900/40 flex items-center justify-between text-xs font-bold">
                  <Link
                    href={card.href || "/services"}
                    className="inline-flex items-center gap-1.5 text-white/90 group-hover:text-[#00dfa2] transition-colors"
                  >
                    <span>Read Story</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href={card.href || "/services"}
                    aria-label={`Read ${card.title}`}
                    className="w-9 h-9 rounded-full bg-teal-950/60 border border-teal-500/40 text-teal-300 flex items-center justify-center shadow-xs group-hover:bg-[#00a88f] group-hover:text-white group-hover:border-[#00a88f] group-hover:scale-110 transition-all duration-300"
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
            className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-950/50 hover:bg-[#00a88f] text-teal-300 hover:text-white hover:border-[#00a88f] px-7 py-3 text-xs font-bold transition-all duration-300 shadow-md shadow-black/30 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>{currentTab.buttonLabel}</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>

    </section>
  );
}
