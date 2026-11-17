"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Layers,
  Smartphone,
  Layout,
  Cloud,
  ShieldCheck,
  Database,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2,
  Cpu,
  Lock,
  Globe,
  Activity,
  Server,
  Terminal,
  ChevronRight,
  TrendingUp,
  FileCode2,
} from "lucide-react";

interface ServiceShowcase {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  href: string;
  icon: any;
  stats: { label: string; value: string };
  deliverables: string[];
  techStack: string[];
  accentColor: string;
  visualType: "ai" | "software" | "web" | "mobile" | "security" | "data";
}

const SHOWCASE_SERVICES: ServiceShowcase[] = [
  {
    id: "ai-ml",
    number: "01",
    title: "AI & Machine Learning",
    category: "AUTONOMOUS INTELLIGENCE",
    tagline: "Custom LLMs, Predictive Analytics & MLOps Pipelines",
    description:
      "We design and deploy proprietary machine learning architectures, domain-adapted LLMs, and autonomous agent workflows. From raw data ingestion to low-latency inference pipelines, we take AI from concept directly into enterprise production.",
    href: "/services/ai-machine-learning",
    icon: Brain,
    stats: { label: "Inference Latency", value: "< 24ms" },
    deliverables: [
      "Custom Fine-Tuned Large Language Models",
      "Vector Search & Enterprise RAG Pipelines",
      "Predictive Data Modeling & Computer Vision",
      "Continuous MLOps Monitoring & Auto-Retraining",
    ],
    techStack: ["PyTorch", "OpenAI / Claude", "Pinecone", "LangChain", "Kubeflow"],
    accentColor: "#0066cc",
    visualType: "ai",
  },
  {
    id: "custom-software",
    number: "02",
    title: "Custom Software Architecture",
    category: "ENTERPRISE ENGINEERING",
    tagline: "High-Throughput Microservices & Cloud Platforms",
    description:
      "Full-lifecycle software engineering designed to handle enterprise transaction volumes with zero downtime. We build resilient distributed architectures, event-driven backends, and multi-tenant systems engineered for infinite scalability.",
    href: "/services/full-stack-development",
    icon: Layers,
    stats: { label: "System Uptime SLA", value: "99.99%" },
    deliverables: [
      "Event-Driven Microservices Architecture",
      "High-Concurrency Distributed Backends",
      "Automated CI/CD Pipelines & Testing Suites",
      "100% Source Code & Intellectual Property Transfer",
    ],
    techStack: ["Node.js / Go", "Docker", "Kubernetes", "PostgreSQL", "Kafka"],
    accentColor: "#00897b",
    visualType: "software",
  },
  {
    id: "web-cms",
    number: "03",
    title: "Web Platforms & Headless CMS",
    category: "NEXT-GEN WEB",
    tagline: "Ultra-Fast Next.js 16 & Serverless Edge Deployments",
    description:
      "From modern headless CMS ecosystems to high-converting web applications, we engineer code that dominates organic search, achieves 95+ Core Web Vitals, and delivers sub-second global page loads across all edge nodes.",
    href: "/services/website-development",
    icon: Layout,
    stats: { label: "Core Web Vitals", value: "99 / 100" },
    deliverables: [
      "Server-Side Rendered (SSR) Next.js 16 Web Apps",
      "Headless CMS Architecture (Strapi, Sanity, Contentful)",
      "Tailwind CSS v4 & Motion Design Systems",
      "Sub-Second Global Edge Caching & CDN Optimization",
    ],
    techStack: ["Next.js", "React 19", "Tailwind CSS", "TypeScript", "Vercel Edge"],
    accentColor: "#0284c7",
    visualType: "web",
  },
  {
    id: "mobile-apps",
    number: "04",
    title: "Mobile App Development",
    category: "MOBILE ECOSYSTEMS",
    tagline: "Native iOS/Android & Cross-Platform React Native",
    description:
      "Engaging 60fps mobile experiences that users love. Leveraging React Native and native iOS/Android frameworks, we build frictionless mobile apps with biometric authentication, offline synchronization, and instant push updates.",
    href: "/services/mobile-app-development",
    icon: Smartphone,
    stats: { label: "Frame Rate Performance", value: "60 FPS" },
    deliverables: [
      "Cross-Platform React Native & Flutter Apps",
      "Native Swift & Kotlin High-Performance Modules",
      "Offline-First SQLite / WatermelonDB Sync",
      "App Store & Google Play Deployment & Optimization",
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    accentColor: "#6366f1",
    visualType: "mobile",
  },
  {
    id: "cloud-devops",
    number: "05",
    title: "Cloud & DevOps Infrastructure",
    category: "CLOUD MODERNIZATION",
    tagline: "Multi-Cloud Deployments on AWS, Azure & Google Cloud",
    description:
      "Certified cloud architecture, migration, and cost optimization. We architect auto-scaling infrastructure, containerized Kubernetes meshes, and Infrastructure-as-Code (Terraform) to ensure peak resilience under viral load.",
    href: "/services/cloud-solutions",
    icon: Cloud,
    stats: { label: "Cloud Cost Efficiency", value: "-40% Waste" },
    deliverables: [
      "Multi-Region AWS / Azure / GCP Cloud Topologies",
      "Kubernetes (K8s) Cluster Management & Autoscaling",
      "Terraform Infrastructure-as-Code (IaC)",
      "Zero-Downtime Blue/Green Deployment Pipelines",
    ],
    techStack: ["AWS", "Microsoft Azure", "Google Cloud", "Terraform", "Docker"],
    accentColor: "#0066cc",
    visualType: "data",
  },
  {
    id: "cybersecurity",
    number: "06",
    title: "Cybersecurity & Compliance",
    category: "ZERO-TRUST GOVERNANCE",
    tagline: "CMMI Level 3, ISO 27001 & SOC 2 Security Auditing",
    description:
      "Security engineered into every commit. We perform rigorous penetration testing, implement IAM zero-trust token controls, and provide complete compliance governance to guarantee data safety against modern cyber threats.",
    href: "/services/custom-software-integration",
    icon: ShieldCheck,
    stats: { label: "Security Compliance", value: "ISO 27001" },
    deliverables: [
      "Comprehensive Web & API Penetration Testing",
      "Zero-Trust Identity & Access Management (IAM)",
      "GDPR, HIPAA & SOC 2 Audit Readiness",
      "24/7 SIEM Infrastructure Monitoring & Threat Defense",
    ],
    techStack: ["OAuth2 / OIDC", "Cloudflare Zero Trust", "Vault", "WAF", "SonarQube"],
    accentColor: "#10b981",
    visualType: "security",
  },
];

export function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const current = SHOWCASE_SERVICES[activeIdx];

  // Auto-slide through services every 7 seconds, pauses when user hovers or interacts
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SHOWCASE_SERVICES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="relative py-24 sm:py-32 bg-[#F8FAFC] overflow-hidden border-t border-slate-200/80">
      
      {/* Background Technical Grid and Ambient Radial Aura */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#0066cc 1px, transparent 1px), linear-gradient(to right, #0066cc 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/90 px-4 py-1.5 text-[11px] font-bold text-[#0066cc] uppercase tracking-widest mb-4 shadow-2xs backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] animate-pulse" />
            <span>ENGINEERING EXCELLENCE &amp; CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-slate-900 tracking-tight leading-[1.14] mb-4">
            Architecting Tomorrow&apos;s{" "}
            <span className="bg-gradient-to-r from-[#0066cc] to-[#00897b] bg-clip-text text-transparent">
              Digital Infrastructure
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Explore our end-to-end engineering practices, bespoke AI models, and enterprise cloud
            architectures built for measurable business impact.
          </p>
        </div>

        {/* ── Interactive Split Bento Showcase (5 Cols Left Navigator / 7 Cols Right Dynamic Canvas) ── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* ── Left Column: Interactive Capability Navigator (5 Cols) ── */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            {SHOWCASE_SERVICES.map((item, idx) => {
              const isActive = idx === activeIdx;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`group relative text-left rounded-2xl p-4 sm:p-5 transition-all duration-300 cursor-pointer overflow-hidden border ${
                    isActive
                      ? "bg-white border-[#0066cc]/40 shadow-xl shadow-blue-500/10 scale-[1.01]"
                      : "bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  {/* Active Left Indicator Accent Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeServiceBar"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0066cc]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Header Row */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-[#0066cc] text-white shadow-md shadow-blue-500/25 scale-105"
                            : "bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#0066cc]"
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                      
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black uppercase tracking-wider text-[#0066cc]">
                            {item.number}
                          </span>
                          <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      <span
                        className={`hidden sm:inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                          isActive
                            ? "bg-blue-50 text-[#0066cc] border border-blue-200/80"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {item.stats.value}
                      </span>
                      <div
                        className={`h-7 w-7 rounded-full flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-[#0066cc] text-white rotate-90"
                            : "text-slate-300 group-hover:text-slate-600"
                        }`}
                      >
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Teaser on Active */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed pl-14">
                          {item.tagline}
                        </p>
                        
                        {/* Auto-play progress bar */}
                        {!isPaused && (
                          <div className="mt-3.5 ml-14 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                            <motion.div
                              key={activeIdx}
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 7, ease: "linear" }}
                              className="h-full bg-gradient-to-r from-[#0066cc] to-teal-400"
                            />
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* ── Right Column: Living Dynamic Architecture Canvas (7 Cols) ── */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[560px] lg:min-h-[640px] rounded-3xl border border-slate-800 bg-[#071322] text-white p-6 sm:p-9 shadow-2xl flex flex-col justify-between overflow-hidden">
              
              {/* Background Futuristic Console Glow */}
              <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-blue-500/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-teal-500/15 blur-3xl" />

              {/* Console Header Bar */}
              <div className="relative z-10 flex items-center justify-between pb-6 border-b border-slate-800/90">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 pl-2 border-l border-slate-800">
                    webnatix://architecture/{current.id}.node
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-[11px] font-mono font-bold text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    {current.stats.label}: {current.stats.value}
                  </span>
                </div>
              </div>

              {/* Center Dynamic Visualizer Stage */}
              <div className="relative z-10 my-8 flex-1 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6"
                  >
                    
                    {/* Visualizer Header */}
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#38bdf8] uppercase mb-2">
                        <Sparkles size={14} />
                        <span>{current.category} ARCHITECTURE</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                        {current.title}
                      </h3>
                      <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed mt-2.5 max-w-xl">
                        {current.description}
                      </p>
                    </div>

                    {/* Interactive Animated Node Schematic Diagram */}
                    <div className="rounded-2xl border border-slate-800 bg-[#0d1f35]/90 p-5 sm:p-6 backdrop-blur-md">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-2">
                          <Terminal size={14} className="text-[#38bdf8]" />
                          <span>LIVE PIPELINE TOPOLOGY</span>
                        </span>
                        <span className="text-emerald-400 font-bold">100% OPERATIONAL</span>
                      </div>

                      {/* Schematic Flow Nodes */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
                        {current.deliverables.map((deliv, dIdx) => (
                          <div
                            key={dIdx}
                            className="rounded-xl border border-slate-700/60 bg-slate-900/80 p-3 flex flex-col justify-between hover:border-[#38bdf8]/50 transition-colors"
                          >
                            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                              <span>STEP 0{dIdx + 1}</span>
                              <CheckCircle2 size={13} className="text-emerald-400" />
                            </div>
                            <span className="text-xs font-semibold text-slate-200 leading-snug">
                              {deliv}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills in Console */}
                      <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800/80">
                        <span className="text-[11px] font-mono uppercase text-slate-400">Tech Stack:</span>
                        {current.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="rounded-md bg-slate-800 border border-slate-700/80 px-2 py-0.5 text-[11px] font-mono text-[#38bdf8]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Console Footer: Actions & Direct Link */}
              <div className="relative z-10 pt-5 border-t border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <div className="text-xs text-slate-400">Full Architectural Specifications &amp; SLA</div>
                  <div className="text-sm font-bold text-white">
                    Explore Dedicated {current.title} Framework
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    href={current.href}
                    className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] hover:bg-blue-600 px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={15} />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/80 hover:bg-slate-800 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-300 transition-all"
                  >
                    <span>Inquire</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ── Bottom Metric Strip ── */}
        <div className="mt-14 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {[
            { label: "Engineering SLA", val: "99.99%", sub: "Guaranteed Production Uptime" },
            { label: "Code Ownership", val: "100%", sub: "Full IP & Repo Handover" },
            { label: "Average Response", val: "2-3 Hrs", sub: "Confidential Technical Review" },
            { label: "Certified Team", val: "1,200+", sub: "Full-Time Technical Talent" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all hover:border-[#0066cc]/40 hover:shadow-md"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0066cc] tracking-tight">
                {item.val}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {item.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
