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
  theme: "light" | "dark" | "blue";
  orbitRadius: number;
  items: OrbitItem[];
}

const ARCHITECTURE_TABS: TabData[] = [
  // ── TAB 1: CORE ARCHITECTURE (Software & Digital Foundation) ──
  {
    id: "core",
    tabLabel: "Core Architecture",
    tabIcon: Layers,
    title: "Core Engineering",
    highlight: "The Digital Foundation",
    description:
      "Our Core Engineering layer delivers the full lifecycle of enterprise software, from high-performance web and mobile platforms to bespoke CRM workflows and high-throughput APIs.",
    centerBadge: "DIGITAL FOUNDATION",
    centerIcon: ShieldCheck,
    theme: "light",
    orbitRadius: 230,
    items: [
      {
        id: "software",
        title: "Custom Software Architecture",
        tag: "ENGINEERING",
        icon: Sliders,
        previewType: "balance",
        value: "27,000+ Deliv.",
        subtitle: "Scoping, microservices & SLA support",
        tooltip: "End-to-end custom software built from the ground up, tailored to how your business actually runs.",
      },
      {
        id: "web-cms",
        title: "Web & Headless CMS",
        tag: "ENGINEERING",
        icon: Globe,
        previewType: "line",
        subtitle: "React, Next.js, Drupal & .NET",
        tooltip: "Standards-compliant, accessible code with green Core Web Vitals and lightning-fast load times.",
      },
      {
        id: "mobile-apps",
        title: "Mobile App Development",
        tag: "ENGINEERING",
        icon: Activity,
        previewType: "bar",
        subtitle: "iOS, Android, React Native & Flutter",
        tooltip: "Native and cross-platform apps built for high retention, smooth 60fps UX, and seamless backend API sync.",
      },
      {
        id: "crm-erp",
        title: "CRM & ERP Solutions",
        tag: "ENGINEERING",
        icon: Users,
        previewType: "badge",
        subtitle: "Salesforce, Zoho, HubSpot & Custom",
        tooltip: "Certified partner implementations, automated pipelines, legacy migrations, and custom enterprise modules.",
      },
      {
        id: "api-gateway",
        title: "High-Throughput API Gateway",
        tag: "ENGINEERING",
        icon: Wallet,
        previewType: "toggle",
        subtitle: "REST, GraphQL & ERP Integration",
        tooltip: "Seamless data exchange between legacy systems and modern cloud services with sub-50ms latency.",
      },
    ],
  },

  // ── TAB 2: SECURITY & GOVERNANCE (Dark Theme / Fortress) ──
  {
    id: "security",
    tabLabel: "Security & Risk",
    tabIcon: ShieldCheck,
    title: "Security & Governance",
    highlight: "The Enterprise Fortress",
    description:
      "Security and quality are built into every phase of development. We combine CMMI Level 3 quality processes with international data security standards to protect your digital assets.",
    centerBadge: "SECURITY & QUALITY",
    centerIcon: Lock,
    theme: "dark",
    orbitRadius: 230,
    items: [
      {
        id: "cmmi",
        title: "CMMI Level 3 Framework",
        tag: "GOVERNANCE",
        icon: ShieldCheck,
        tooltip:
          "Standardized process maturity, structured agile sprints, peer code reviews, and automated regression testing.",
      },
      {
        id: "iso27001",
        title: "ISO 27001 & Data Encryption",
        tag: "SECURITY",
        icon: Lock,
        tooltip:
          "End-to-end data encryption at rest and in transit, strict access control, and audited security postures.",
      },
      {
        id: "pentest",
        title: "Penetration Testing & Remediation",
        tag: "SECURITY",
        icon: Eye,
        tooltip:
          "Comprehensive ethical hacking and vulnerability assessments across web apps, APIs, and network perimeters.",
      },
      {
        id: "compliance",
        title: "GDPR & SOC 2 Compliance",
        tag: "COMPLIANCE",
        icon: Users,
        tooltip:
          "Full regulatory adherence for European, US, and global data privacy mandates with complete audit logging.",
      },
      {
        id: "siem",
        title: "SIEM & 24/7 Threat Monitoring",
        tag: "SECURITY",
        icon: Cpu,
        tooltip:
          "Continuous threat intelligence, automated intrusion prevention, and 24/7 technical incident response.",
      },
    ],
  },

  // ── TAB 3: ADVANCED TECH (AI & Cloud Solutions) ──
  {
    id: "advanced",
    tabLabel: "Advanced Tech",
    tabIcon: Zap,
    title: "AI & Cloud Solutions",
    highlight: "Future-Ready Layer",
    description:
      "We build and deploy custom ML models, LLM-powered applications, and multi-cloud architectures across AWS, Microsoft Azure, and Google Cloud.",
    centerBadge: "FUTURE PROOF",
    centerIcon: Zap,
    theme: "blue",
    orbitRadius: 215,
    items: [
      {
        id: "custom-ai",
        title: "Custom LLMs & Machine Learning",
        tag: "AI & ML",
        icon: Cpu,
        tooltip:
          "Predictive analytics, NLP pipelines, computer vision, and domain-adapted LLMs built on your proprietary data.",
      },
      {
        id: "cloud-devops",
        title: "Multi-Cloud DevOps (AWS/Azure/GCP)",
        tag: "CLOUD",
        icon: Globe,
        tooltip:
          "Certified cloud architects managing containerized Kubernetes clusters, Terraform IaC, and auto-scaling.",
      },
      {
        id: "data-warehouse",
        title: "Data Warehousing (Snowflake / BigQuery)",
        tag: "DATA",
        icon: Coins,
        tooltip:
          "Real-time ETL/ELT streaming pipelines with Kafka and Spark, power BI dashboards, and unified data lakes.",
      },
      {
        id: "agentic-ai",
        title: "Autonomous Agent Automation",
        tag: "AUTOMATION",
        icon: LinkIcon,
        tooltip:
          "Intelligent multi-agent systems executing autonomous operations, customer support, and workflow automation.",
      },
    ],
  },
];

export function CircularArchitecture() {
  const [activeTabId, setActiveTabId] = useState<"core" | "security" | "advanced">("core");
  const [angleOffset, setAngleOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeTooltipId, setActiveTooltipId] = useState<string | null>("collusion");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTab = ARCHITECTURE_TABS.find((t) => t.id === activeTabId) || ARCHITECTURE_TABS[0];
  const itemsCount = currentTab.items.length;

  // Continuous smooth circular rotation loop
  useEffect(() => {
    if (!mounted) return;
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
  }, [isPaused, mounted]);

  // Adjust theme variables
  const isDark = currentTab.theme === "dark";

  return (
    <section
      className={`py-24 relative overflow-hidden transition-colors duration-500 border-t ${
        isDark
          ? "bg-[#061019] text-white border-slate-800"
          : "bg-gradient-to-b from-white via-blue-50/20 to-white text-slate-900 border-slate-100"
      }`}
    >
      {/* Subtle Background Radial Aura */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className={`w-[600px] h-[600px] rounded-full blur-3xl transition-opacity duration-700 ${
            isDark
              ? "bg-blue-600/10 opacity-70"
              : "bg-blue-400/15 opacity-60"
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
                    ? "bg-[#0066cc] text-white shadow-sm scale-[1.02]"
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
                  ? "bg-gradient-to-r from-blue-300 to-sky-400"
                  : "bg-gradient-to-r from-blue-600 to-[#0066cc]"
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
              stroke={isDark ? "rgba(56, 189, 248, 0.2)" : "rgba(0, 102, 204, 0.2)"}
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
            {/* Inner Subtle Guide Ring */}
            <circle
              cx="0"
              cy="0"
              r={currentTab.orbitRadius * 0.55}
              fill="none"
              stroke={isDark ? "rgba(56, 189, 248, 0.12)" : "rgba(0, 102, 204, 0.12)"}
              strokeWidth="1"
            />
            {/* Moving Pulsing Dot on Orbit */}
            <circle
              r="4"
              fill={isDark ? "#38bdf8" : "#0066cc"}
              transform={`rotate(${(angleOffset * 180) / Math.PI}) translate(${currentTab.orbitRadius}, 0)`}
            />
          </svg>

          {/* Central Glowing Shield / Hub */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Center Outer Concentric Radar Halo */}
            <div
              className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 flex flex-col items-center justify-center p-3 text-center transition-all ${
                isDark
                  ? "border-blue-500/40 bg-slate-900 shadow-[0_0_50px_rgba(0,102,204,0.3)] text-sky-300"
                  : "border-blue-400 bg-white shadow-[0_0_45px_rgba(0,102,204,0.22)] text-[#0066cc]"
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
                isDark ? "border-blue-400/20" : "border-blue-500/20"
              }`}
            />
          </div>

          {/* ── Circular Moving Content Cards ── */}
          {currentTab.items.map((item, idx) => {
            // Compute orbital position on circle (deterministic before mount, animated after mount)
            const angle = (idx / itemsCount) * 2 * Math.PI + (mounted ? angleOffset : 0);
            const x = Number((Math.cos(angle) * currentTab.orbitRadius).toFixed(2));
            const y = Number((Math.sin(angle) * currentTab.orbitRadius).toFixed(2));

            const isTooltipOpen = activeTooltipId === item.id;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                suppressHydrationWarning
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
                      ? "border-slate-800 bg-[#0b1722]/95 text-slate-100 shadow-xl hover:border-sky-400 hover:shadow-blue-500/20 hover:scale-105"
                      : "border-slate-200/90 bg-white/95 text-slate-900 shadow-lg hover:border-[#0066cc] hover:shadow-blue-500/15 hover:scale-105"
                  } ${isTooltipOpen ? "ring-2 ring-sky-400 border-sky-400 scale-105" : ""}`}
                  style={{ width: "210px" }}
                >
                  {/* Card Header Tag & Icon */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[9.5px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isDark ? "bg-blue-950 text-sky-400" : "bg-blue-50 text-[#0066cc]"
                      }`}
                    >
                      {item.tag || "SYSTEM"}
                    </span>
                    <Icon size={14} className={isDark ? "text-sky-400" : "text-[#0066cc]"} />
                  </div>

                  {/* Title */}
                  <h4 className="text-xs font-bold leading-snug line-clamp-2">
                    {item.title}
                  </h4>

                  {/* Optional Value or Mini Graphic */}
                  {item.value && (
                    <div className="mt-2 text-base font-black text-[#0066cc]">
                      {item.value}
                    </div>
                  )}

                  {/* Preview UI: Bar Graphic */}
                  {item.previewType === "bar" && (
                    <div className="mt-2.5 flex items-end gap-1 h-5 pt-1">
                      <div className="w-2.5 h-2 bg-sky-400/60 rounded-xs" />
                      <div className="w-2.5 h-3.5 bg-blue-500 rounded-xs" />
                      <div className="w-2.5 h-4 bg-[#0066cc] rounded-xs" />
                      <div className="w-2.5 h-3 bg-sky-400/80 rounded-xs" />
                      <div className="w-2.5 h-5 bg-[#0066cc] rounded-xs" />
                    </div>
                  )}

                  {/* Preview UI: Line Graphic */}
                  {item.previewType === "line" && (
                    <div className="mt-2.5 w-full h-3 border-b-2 border-blue-500/80 rounded-xs flex items-center justify-between px-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc]" />
                    </div>
                  )}

                  {/* Preview UI: Toggle Controls */}
                  {item.previewType === "toggle" && (
                    <div className="mt-2 pt-1 flex items-center justify-between text-[10px] text-slate-400 font-semibold border-t border-slate-100 dark:border-slate-800">
                      <span>Rate Limit</span>
                      <span className="text-[#0066cc] font-bold">ACTIVE</span>
                    </div>
                  )}

                  {/* ── Active Hover / Click Tooltip Popup ── */}
                  {isTooltipOpen && item.tooltip && (
                    <div
                      className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 rounded-2xl p-3.5 shadow-2xl text-xs z-50 pointer-events-none transition-all animate-pulse-scale ${
                        isDark
                          ? "bg-slate-900 border border-blue-500/50 text-slate-200"
                          : "bg-slate-950 border border-slate-800 text-white"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold text-sky-400 mb-1">
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
            className="inline-flex items-center gap-2 rounded-xl bg-[#0066cc] px-6 py-3 text-xs font-bold text-white shadow-lg shadow-blue-700/20 hover:bg-[#0052a3] hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <span>View Architecture</span>
            <ArrowRight size={14} />
          </Link>

          <button
            onClick={() => window.dispatchEvent(new Event("open-lead-modal"))}
            className={`inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-xs font-bold transition-all cursor-pointer ${
              isDark
                ? "border-slate-700 bg-slate-800/80 text-white hover:bg-slate-800 hover:border-slate-600"
                : "border-slate-200 bg-white text-slate-800 hover:border-[#0066cc] hover:text-[#0066cc] shadow-2xs"
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
