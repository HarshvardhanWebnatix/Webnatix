"use client";

import { useState, useEffect, useRef } from "react";
import {
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  Lock,
  ArrowRight,
  FileText,
  Activity,
  Globe,
  Wallet,
  Users,
  Eye,
  CheckCircle2,
  Sliders,
  DollarSign,
  TrendingUp,
  RefreshCw,
  Coins,
  Link as LinkIcon,
  Bot,
  Radio,
} from "lucide-react";
import Link from "next/link";

interface OrbitItem {
  id: string;
  title: string;
  tag?: string;
  icon: any;
  value?: string;
  subtitle?: string;
  tooltip?: string;
  previewType?: "bar" | "line" | "toggle" | "balance" | "badge";
}

interface TabData {
  id: "core" | "security" | "advanced";
  tabLabel: string;
  tabIcon: any;
  title: string;
  highlight: string;
  description: string;
  centerBadge: string;
  centerIcon: any;
  theme: "light" | "dark" | "teal";
  orbitRadius: number;
  items: OrbitItem[];
}

const ARCHITECTURE_TABS: TabData[] = [
  // ── TAB 1: CORE ARCHITECTURE ──
  {
    id: "core",
    tabLabel: "Core Architecture",
    tabIcon: Layers,
    title: "Core Modules",
    highlight: "The Operational Brain",
    description:
      "The Core Modules handle the day-to-day lifecycle of enterprise platforms, from user acquisition and multi-tenant authentication to automated high-volume transaction processing.",
    centerBadge: "OPERATIONAL BRAIN",
    centerIcon: ShieldCheck,
    theme: "light",
    orbitRadius: 230,
    items: [
      {
        id: "wallet",
        title: "Wallet & Payment System",
        tag: "MODULE",
        icon: Wallet,
        previewType: "line",
        subtitle: "Multi-currency gateway & automated payouts",
        tooltip: "Automated real-time ledger supporting 135+ fiat currencies and instant crypto settlements.",
      },
      {
        id: "agent",
        title: "Multi-layer Agent System",
        tag: "MODULE",
        icon: Globe,
        previewType: "toggle",
        subtitle: "Session limits & automated load-shedding",
        tooltip: "Distributed microservices orchestrator with dynamic autoscaling under viral traffic surges.",
      },
      {
        id: "pam",
        title: "PAM (Player Account Management)",
        tag: "MODULE",
        icon: Users,
        previewType: "badge",
        subtitle: "Unified identity, SSO & role governance",
        tooltip: "Single Sign-On (SSO), biometric verification, and granular role-based access control.",
      },
      {
        id: "crm",
        title: "Player CRM & Loyalty Engine",
        tag: "MODULE",
        icon: Activity,
        previewType: "bar",
        subtitle: "Automated retention & VIP segmentation",
        tooltip: "Predictive engagement engine driving +40% higher lifetime value through automated rewards.",
      },
      {
        id: "cms",
        title: "CMS (Central Management System)",
        tag: "MODULE",
        icon: Sliders,
        previewType: "balance",
        value: "$124,580",
        subtitle: "Real-time revenue & balance telemetry",
        tooltip: "High-concurrency administrative control center with instant operational auditing.",
      },
    ],
  },

  // ── TAB 2: SECURITY & RISK (Dark Theme Match to Image 2) ──
  {
    id: "security",
    tabLabel: "Security & Risk",
    tabIcon: ShieldCheck,
    title: "Security & Protection",
    highlight: "The Fortress",
    description:
      "In enterprise engineering, trust is everything. These zero-trust systems act as a 24/7 digital security detail to prevent losses, eliminate vulnerabilities, and ensure fair play.",
    centerBadge: "SECURITY",
    centerIcon: Lock,
    theme: "dark",
    orbitRadius: 230,
    items: [
      {
        id: "collusion",
        title: "Anti-Collusion System",
        tag: "SECURITY",
        icon: Users,
        tooltip:
          "Specifically for multiplayer or high-stakes platforms, this detects if two or more players or bots are working together to cheat others.",
      },
      {
        id: "risk",
        title: "Risk Management AI & RTP Engine",
        tag: "SECURITY",
        icon: Cpu,
        tooltip:
          "Machine learning monitors evaluating exposure, edge anomalies, and real-time financial solvency across millions of daily bets.",
      },
      {
        id: "fraud",
        title: "Player Protection & Fraud Detection",
        tag: "SECURITY",
        icon: Eye,
        tooltip:
          "Zero-latency heuristic engine detecting chargeback attempts, multi-accounting, proxy spoofing, and bot-driven fraud.",
      },
      {
        id: "kyc",
        title: "KYC & AML Compliance System",
        tag: "SECURITY",
        icon: Lock,
        tooltip:
          "Automated biometric identity verification, sanction list screening, and automated PEP checks with 99.4% first-pass accuracy.",
      },
      {
        id: "responsible",
        title: "Responsible Gaming System",
        tag: "SECURITY",
        icon: ShieldCheck,
        tooltip:
          "Tools like self-exclusion, deposit thresholds, session time limits, and 'reality checks' to protect players from problem gambling.",
      },
    ],
  },

  // ── TAB 3: ADVANCED TECH (Future-Proof Layer Match to Image 3) ──
  {
    id: "advanced",
    tabLabel: "Advanced Tech",
    tabIcon: Zap,
    title: "Advanced Tech",
    highlight: "Future-Proof Layer",
    description:
      "This layer ensures the platform can handle 100,000+ simultaneous users, maintains sub-50ms latency, and stays ahead of market trends like Autonomous AI and Web3.",
    centerBadge: "FUTURE PROOF",
    centerIcon: Zap,
    theme: "teal",
    orbitRadius: 215,
    items: [
      {
        id: "web3",
        title: "Web3 Integration",
        tag: "ADVANCED",
        icon: LinkIcon,
        tooltip:
          "Smart contract infrastructure supporting non-custodial crypto payments, on-chain RNG verification, and tokenized player assets.",
      },
      {
        id: "ai-engine",
        title: "AI Intelligence & Blockchain Engine",
        tag: "ADVANCED",
        icon: Cpu,
        tooltip:
          "Autonomous agent swarms executing real-time data analysis, predictive game recommendations, and automated risk hedging.",
      },
      {
        id: "geo",
        title: "Geo-Blocking System",
        tag: "ADVANCED",
        icon: Globe,
        tooltip:
          "Military-grade IP geolocation, VPN/proxy blocker, and jurisdiction-based compliance licensing routing.",
      },
      {
        id: "crypto",
        title: "Multi-Currency & Crypto Rails",
        tag: "ADVANCED",
        icon: Coins,
        tooltip:
          "Instant deposits and zero-gas withdrawals across Bitcoin, Ethereum, Solana, USDT, and localized fiat gateways.",
      },
    ],
  },
];

export function CircularArchitecture() {
  const [activeTabId, setActiveTabId] = useState<"core" | "security" | "advanced">("core");
  const [angleOffset, setAngleOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeTooltipId, setActiveTooltipId] = useState<string | null>("collusion");

  const currentTab = ARCHITECTURE_TABS.find((t) => t.id === activeTabId) || ARCHITECTURE_TABS[0];
  const itemsCount = currentTab.items.length;

  // Continuous smooth circular rotation loop
  useEffect(() => {
    let rafId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isPaused) {
        // Slow majestic orbital rotation (revolves 360 degrees every ~36 seconds)
        setAngleOffset((prev) => (prev + delta * 0.17) % (Math.PI * 2));
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  // Adjust theme variables
  const isDark = currentTab.theme === "dark";

  return (
    <section
      className={`py-24 relative overflow-hidden transition-colors duration-500 border-t ${
        isDark
          ? "bg-[#061019] text-white border-slate-800"
          : "bg-gradient-to-b from-white via-emerald-50/20 to-white text-slate-900 border-slate-100"
      }`}
    >
      {/* Subtle Background Radial Aura */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className={`w-[600px] h-[600px] rounded-full blur-3xl transition-opacity duration-700 ${
            isDark
              ? "bg-emerald-500/10 opacity-70"
              : "bg-teal-400/15 opacity-60"
          }`}
        />
      </div>

      <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
        
        {/* ── 1. Top Pill Tab Switcher ── */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/90 p-1.5 shadow-md shadow-slate-200/50 backdrop-blur-md mb-8">
          {ARCHITECTURE_TABS.map((tab) => {
            const isActive = activeTabId === tab.id;
            const Icon = tab.tabIcon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTabId(tab.id);
                  setActiveTooltipId(tab.id === "security" ? "collusion" : null);
                }}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#00897b] text-white shadow-sm scale-[1.02]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <Icon size={14} className={isActive ? "text-white" : "text-slate-400"} />
                <span>{tab.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* ── 2. Headline & Copy ── */}
        <div className="max-w-3xl mx-auto space-y-3 mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-tight">
            {currentTab.title}{" "}
            <span
              className={`bg-clip-text text-transparent ${
                isDark
                  ? "bg-gradient-to-r from-teal-300 to-emerald-400"
                  : "bg-gradient-to-r from-teal-600 to-emerald-600"
              }`}
            >
              {currentTab.highlight}
            </span>
          </h2>
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            {currentTab.description}
          </p>
        </div>

        {/* ── 3. Circular Moving System Container ── */}
        <div
          className="relative mx-auto w-full max-w-[800px] h-[580px] sm:h-[640px] flex items-center justify-center select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setActiveTooltipId(null);
          }}
        >
          {/* Animated SVG Concentric Orbit Rings */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="-300 -300 600 600"
          >
            {/* Outer Orbit Ring */}
            <circle
              cx="0"
              cy="0"
              r={currentTab.orbitRadius}
              fill="none"
              stroke={isDark ? "rgba(16, 185, 129, 0.2)" : "rgba(0, 137, 123, 0.2)"}
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
            {/* Inner Subtle Guide Ring */}
            <circle
              cx="0"
              cy="0"
              r={currentTab.orbitRadius * 0.55}
              fill="none"
              stroke={isDark ? "rgba(16, 185, 129, 0.12)" : "rgba(0, 137, 123, 0.12)"}
              strokeWidth="1"
            />
            {/* Moving Pulsing Dot on Orbit */}
            <circle
              r="4"
              fill={isDark ? "#34d399" : "#00897b"}
              transform={`rotate(${(angleOffset * 180) / Math.PI}) translate(${currentTab.orbitRadius}, 0)`}
            />
          </svg>

          {/* Central Glowing Shield / Hub */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Center Outer Concentric Radar Halo */}
            <div
              className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 flex flex-col items-center justify-center p-3 text-center transition-all ${
                isDark
                  ? "border-teal-500/40 bg-slate-900 shadow-[0_0_50px_rgba(20,184,166,0.3)] text-teal-300"
                  : "border-teal-400 bg-white shadow-[0_0_45px_rgba(0,137,123,0.22)] text-teal-700"
              }`}
            >
              <currentTab.centerIcon size={34} className="mb-1 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-wider leading-none">
                {currentTab.centerBadge}
              </span>
            </div>
            {/* Ethereal Outer Ring Wave */}
            <div
              className={`absolute inset-0 rounded-full scale-125 border pointer-events-none animate-ping ${
                isDark ? "border-teal-400/20" : "border-teal-500/20"
              }`}
            />
          </div>

          {/* ── Circular Moving Content Cards ── */}
          {currentTab.items.map((item, idx) => {
            // Compute orbital position on circle
            const angle = (idx / itemsCount) * 2 * Math.PI + angleOffset;
            const x = Math.cos(angle) * currentTab.orbitRadius;
            const y = Math.sin(angle) * currentTab.orbitRadius;

            const isTooltipOpen = activeTooltipId === item.id;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="absolute z-20 transition-transform duration-75 ease-linear cursor-pointer"
                style={{
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                }}
                onClick={() => setActiveTooltipId(isTooltipOpen ? null : item.id)}
                onMouseEnter={() => {
                  setIsPaused(true);
                  setActiveTooltipId(item.id);
                }}
              >
                {/* ── The Orbiting Card ── */}
                <div
                  className={`group relative rounded-2xl border p-3.5 sm:p-4 text-left transition-all duration-200 ${
                    isDark
                      ? "border-slate-800 bg-[#0b1722]/95 text-slate-100 shadow-xl hover:border-teal-400 hover:shadow-teal-500/20 hover:scale-105"
                      : "border-slate-200/90 bg-white/95 text-slate-900 shadow-lg hover:border-teal-500 hover:shadow-teal-500/15 hover:scale-105"
                  } ${isTooltipOpen ? "ring-2 ring-teal-400 border-teal-400 scale-105" : ""}`}
                  style={{ width: "210px" }}
                >
                  {/* Card Header Tag & Icon */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[9.5px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isDark ? "bg-teal-950 text-teal-400" : "bg-teal-50 text-teal-700"
                      }`}
                    >
                      {item.tag || "SYSTEM"}
                    </span>
                    <Icon size={14} className={isDark ? "text-teal-400" : "text-teal-600"} />
                  </div>

                  {/* Title */}
                  <h4 className="text-xs font-bold leading-snug line-clamp-2">
                    {item.title}
                  </h4>

                  {/* Optional Value or Mini Graphic */}
                  {item.value && (
                    <div className="mt-2 text-base font-black text-teal-600">
                      {item.value}
                    </div>
                  )}

                  {/* Preview UI: Bar Graphic */}
                  {item.previewType === "bar" && (
                    <div className="mt-2.5 flex items-end gap-1 h-5 pt-1">
                      <div className="w-2.5 h-2 bg-teal-400/60 rounded-xs" />
                      <div className="w-2.5 h-3.5 bg-teal-500 rounded-xs" />
                      <div className="w-2.5 h-4 bg-teal-600 rounded-xs" />
                      <div className="w-2.5 h-3 bg-teal-400/80 rounded-xs" />
                      <div className="w-2.5 h-5 bg-teal-500 rounded-xs" />
                    </div>
                  )}

                  {/* Preview UI: Line Graphic */}
                  {item.previewType === "line" && (
                    <div className="mt-2.5 w-full h-3 border-b-2 border-teal-500/80 rounded-xs flex items-center justify-between px-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                    </div>
                  )}

                  {/* Preview UI: Toggle Controls */}
                  {item.previewType === "toggle" && (
                    <div className="mt-2 pt-1 flex items-center justify-between text-[10px] text-slate-400 font-semibold border-t border-slate-100 dark:border-slate-800">
                      <span>Rate Limit</span>
                      <span className="text-emerald-500 font-bold">ACTIVE</span>
                    </div>
                  )}

                  {/* ── Active Hover / Click Tooltip Popup ── */}
                  {isTooltipOpen && item.tooltip && (
                    <div
                      className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 rounded-2xl p-3.5 shadow-2xl text-xs z-50 pointer-events-none transition-all animate-pulse-scale ${
                        isDark
                          ? "bg-slate-900 border border-teal-500/50 text-slate-200"
                          : "bg-slate-950 border border-slate-800 text-white"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold text-teal-400 mb-1">
                        <CheckCircle2 size={13} />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                        {item.tooltip}
                      </p>
                      {/* Triangle Pointer */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-6 border-x-transparent border-t-6 ${
                          isDark ? "border-t-slate-900" : "border-t-slate-950"
                        }`}
                      />
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

        {/* ── 4. Bottom Action Buttons ── */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-4 relative z-10">
          <Link
            href="/services/full-stack-development"
            className="inline-flex items-center gap-2 rounded-xl bg-[#00897b] px-6 py-3 text-xs font-bold text-white shadow-lg shadow-teal-700/20 hover:bg-[#00796b] hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <span>View Architecture</span>
            <ArrowRight size={14} />
          </Link>

          <button
            onClick={() => window.dispatchEvent(new Event("open-lead-modal"))}
            className={`inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-xs font-bold transition-all cursor-pointer ${
              isDark
                ? "border-slate-700 bg-slate-800/80 text-white hover:bg-slate-800 hover:border-slate-600"
                : "border-slate-200 bg-white text-slate-800 hover:border-teal-500 hover:text-teal-700 shadow-2xs"
            }`}
          >
            <FileText size={14} />
            <span>Request Docs</span>
          </button>
        </div>

      </div>
    </section>
  );
}
