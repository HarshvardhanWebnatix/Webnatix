"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  Code2,
  FileCode,
  GitBranch,
  Cpu,
  Server,
  Play,
  Activity,
  Sliders,
  Sparkles,
  Lock,
  ChevronDown,
  FileText,
  DollarSign,
  Laptop,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

// ── 6-Stage Delivery Pipeline ──
const PROCESS_STAGES = [
  {
    step: "01",
    title: "Discovery & Architecture Scoping",
    tagline: "Scoping, Technical Architecture & Fixed Budget",
    duration: "Week 1 - 2",
    icon: FileCode,
    overview:
      "We dive deep into your business requirements, user personas, and compliance landscape. We define clear functional specifications, database models, and an immutable fixed-price delivery roadmap.",
    deliverables: [
      "Software Requirements Specification (SRS)",
      "System Architecture & Microservices Diagram",
      "Database Schema & Entity Relationship (ERD)",
      "Fixed-Price Sprint Milestone Schedule",
      "Signed Non-Disclosure Agreement (NDA)",
    ],
    techTools: ["Miro", "Confluence", "Jira", "Draw.io"],
  },
  {
    step: "02",
    title: "UI/UX Prototyping & Design Systems",
    tagline: "High-Fidelity Wireframes & Interactive Tokens",
    duration: "Week 2 - 4",
    icon: Laptop,
    overview:
      "Transforming business workflows into intuitive, responsive, and accessible user journeys. We construct complete Figma design systems with reusable component tokens aligned with WCAG 2.1 standards.",
    deliverables: [
      "Clickable Interactive Figma Prototypes",
      "Atomic Design System & Component Library",
      "Mobile-Responsive Breakpoint Specs",
      "UX Usability Testing Report",
      "Final Design Sign-off & Asset Export",
    ],
    techTools: ["Figma", "Storybook", "Adobe CC", "Tailwind CSS"],
  },
  {
    step: "03",
    title: "Agile Development & Sprint Cadence",
    tagline: "Two-Week Sprints with Live Milestone Demos",
    duration: "Week 3 - Launch",
    icon: Code2,
    overview:
      "Our 1,200+ in-house engineers build in iterative 2-week agile sprints. You receive live sprint demonstrations every fortnight, working software builds, and transparent Jira burndown velocity reports.",
    deliverables: [
      "Bi-Weekly Working Software Demos",
      "Full Source Code Access via Private Git",
      "Daily Scrum & Asynchronous Standup Notes",
      "Jira Burndown & Velocity Metrics",
      "Peer-Reviewed Pull Request Audits",
    ],
    techTools: ["GitHub / GitLab", "Next.js", "Python / Go", "Docker"],
  },
  {
    step: "04",
    title: "Automated QA & Security Audits",
    tagline: "Zero Defect Tolerance & Strict Penetration Testing",
    duration: "Continuous in Sprint",
    icon: ShieldCheck,
    overview:
      "Quality assurance is integrated into every git commit. Automated unit tests, Playwright end-to-end regression suites, and SonarQube static code analysis run on every build to prevent production bugs.",
    deliverables: [
      "Automated End-to-End Regression Suites",
      "API Performance & Stress Test (k6 / JMeter)",
      "OWASP Top 10 Security Penetration Report",
      "SonarQube Static Code Quality Gates",
      "Multi-Device / Cross-Browser Compatibility Matrix",
    ],
    techTools: ["Playwright", "Cypress", "SonarQube", "Postman", "k6"],
  },
  {
    step: "05",
    title: "Zero-Downtime Deployment & IP Handover",
    tagline: "Blue/Green Cloud Rollouts & 100% IP Transfer",
    duration: "Release Week",
    icon: Server,
    overview:
      "We orchestrate production rollouts with zero operational downtime using automated CI/CD pipelines, containerized Kubernetes clusters, and complete intellectual property ownership handover.",
    deliverables: [
      "Zero-Downtime Blue/Green Production Deployment",
      "Complete Source Code & Git Repository Transfer",
      "Infrastructure-as-Code (Terraform) Scripts",
      "Cloud Root Credentials & Production Runbooks",
      "Signed 100% Intellectual Property Handover",
    ],
    techTools: ["Kubernetes", "AWS / GCP / Azure", "Terraform", "GitHub Actions"],
  },
  {
    step: "06",
    title: "24/7 Observability & SLA Maintenance",
    tagline: "99.99% Uptime Guarantee & Tier-3 Support",
    duration: "Post-Launch SLA",
    icon: Activity,
    overview:
      "Following production go-live, our dedicated support pods provide 24/7 global telemetry monitoring, real-time APM alerting, routine security patches, and continuous feature expansion.",
    deliverables: [
      "24/7 Global Telemetry & APM Monitoring",
      "Guaranteed 99.99% Cloud Uptime SLA",
      "Quarterly Security Audits & Dependency Updates",
      "Dedicated Tier-3 Engineering Support Desk",
      "Continuous Backlog Grooming & Feature Scaling",
    ],
    techTools: ["Datadog", "Prometheus", "Grafana", "Sentry", "PagerDuty"],
  },
];

// ── Sprint Simulator Data ──
const SIMULATOR_TIERS = [
  {
    id: "mvp",
    title: "Startup MVP Build",
    duration: "8 - 10 Weeks",
    sprints: "4 Sprints",
    team: "Lead Architect, 2 Full-Stack Engineers, 1 UI/UX Designer, 1 QA",
    deliverables: "Core Prototype, Auth, Payment Gateways, Cloud Hosting, App Store Submission",
    commitment: "100% Fixed-Price · Predictable Delivery",
  },
  {
    id: "saas",
    title: "High-Growth SaaS Platform",
    duration: "14 - 18 Weeks",
    sprints: "8 Sprints",
    team: "Solution Architect, 4 Senior Developers, DevOps Specialist, UI/UX Lead, Dedicated QA",
    deliverables: "Multi-Tenant Architecture, High-Concurrency APIs, Role-Based Access, Stripe Billing, CI/CD",
    commitment: "Dedicated Pod · Bi-Weekly Milestone Handovers",
  },
  {
    id: "enterprise",
    title: "Enterprise Cloud & AI Modernisation",
    duration: "24+ Weeks",
    sprints: "12+ Sprints",
    team: "Principal Architect, Full Pod (8-12 Certified Engineers), AI/ML Engineer, SecOps Lead",
    deliverables: "Microservices Decomposition, Vector RAG Search, Kubernetes Mesh, ISO 27001 Compliance",
    commitment: "CMMI Level 3 Governance · 24/7 Follow-the-Sun SLA",
  },
];

export default function ProcessPage() {
  const [activeStage, setActiveStage] = useState(0);
  const [activeTier, setActiveTier] = useState<"mvp" | "saas" | "enterprise">("saas");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const selectedTierData = SIMULATOR_TIERS.find((t) => t.id === activeTier) || SIMULATOR_TIERS[1];

  return (
    <div className="bg-[#FAFAF9] min-h-screen text-slate-800">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO: Agile Methodology & Predictable Velocity
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden border-b border-slate-200/80 bg-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0066cc 1px, transparent 1px), linear-gradient(to right, #0066cc 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0066cc] animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest text-[#0066cc] uppercase">
                CMMI LEVEL 3 AGILE METHODOLOGY · 100% PREDICTABLE SPRINT VELOCITY
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.12] text-slate-900">
              How We Engineer &amp; Deliver <br />
              <span className="text-[#0066cc]">With Zero Lag &amp; Full Transparency</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              From initial architectural scoping to automated CI/CD deployments and round-the-clock SLAs, our standardized engineering lifecycle guarantees on-time delivery with zero hidden scope drift.
            </p>

            {/* Top Guarantees Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 max-w-3xl mx-auto text-left">
              {[
                { label: "100% IP Ownership", sub: "Full code transfer" },
                { label: "Fixed-Price Scopes", sub: "Predictable budgets" },
                { label: "2-Week Sprints", sub: "Live demo releases" },
                { label: "99.99% Uptime", sub: "Production SLA" },
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#0066cc] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 leading-tight">{item.label}</div>
                    <div className="text-[11px] text-slate-500 leading-tight mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Request a Scoping Call</span>
                <ArrowRight size={15} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. INTERACTIVE 6-STAGE DELIVERY PIPELINE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-white border-b border-slate-200/80">
        <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-[#0066cc]">
              <Layers size={13} />
              <span>THE 6-STAGE ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900">
              The Full-Lifecycle Delivery Engine
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Click through each stage of our proven software engineering cadence below.
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-12">
            {PROCESS_STAGES.map((st, idx) => {
              const isActive = activeStage === idx;
              const Icon = st.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? "bg-[#0066cc] border-[#0066cc] text-white shadow-lg shadow-blue-600/20 scale-[1.03]"
                      : "bg-slate-50 border-slate-200/90 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold ${isActive ? "text-blue-100" : "text-[#0066cc]"}`}>
                      STAGE {st.step}
                    </span>
                    <Icon size={14} className={isActive ? "text-white" : "text-slate-400"} />
                  </div>
                  <div className="text-xs font-bold leading-tight">{st.title}</div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Showcase */}
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-slate-200 bg-slate-50/70 p-8 sm:p-12 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Stage Info */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#0066cc] text-white flex items-center justify-center font-bold text-sm">
                    {PROCESS_STAGES[activeStage].step}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-[#0066cc] uppercase tracking-wider">
                      {PROCESS_STAGES[activeStage].duration}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-0.5">
                      {PROCESS_STAGES[activeStage].title}
                    </h3>
                  </div>
                </div>

                <div className="text-sm font-semibold text-slate-500 italic">
                  {PROCESS_STAGES[activeStage].tagline}
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {PROCESS_STAGES[activeStage].overview}
                </p>

                {/* Tech Tools */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Tools &amp; Infrastructure
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {PROCESS_STAGES[activeStage].techTools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-2xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Tangible Deliverables */}
              <div className="lg:col-span-6 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100 mb-4">
                  <CheckCircle2 size={16} className="text-[#0066cc]" />
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Tangible Stage Deliverables
                  </span>
                </div>
                <div className="space-y-3">
                  {PROCESS_STAGES[activeStage].deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50/60 border border-slate-100">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0066cc] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {deliv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. SPRINT VELOCITY & ENGAGEMENT SIMULATOR
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-[#FAFAF9] border-b border-slate-200/80">
        <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-[#0066cc]">
              <Sliders size={13} />
              <span>PROJECT SCOPE SIMULATOR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900">
              Interactive Sprint Model Simulator
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Select your project tier below to see how our agile pods structure timelines, sprint cadences, and engineer assignments.
            </p>
          </div>

          {/* Tier Switcher Buttons */}
          <div className="flex items-center justify-center gap-3 mb-10">
            {SIMULATOR_TIERS.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setActiveTier(tier.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                  activeTier === tier.id
                    ? "bg-[#0066cc] border-[#0066cc] text-white shadow-md shadow-blue-500/20 scale-105"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {tier.title}
              </button>
            ))}
          </div>

          {/* Tier Results Card */}
          <motion.div
            key={selectedTierData.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xl space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
              <div>
                <span className="text-xs font-bold text-[#0066cc] uppercase tracking-wider">
                  Engagement Model Blueprint
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  {selectedTierData.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-4 py-2 rounded-xl bg-blue-50 text-[#0066cc] font-bold text-xs border border-blue-100">
                  {selectedTierData.duration}
                </span>
                <span className="px-4 py-2 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-100">
                  {selectedTierData.sprints}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-xs text-slate-500 font-semibold">Assigned Engineering Pod</div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1.5">{selectedTierData.team}</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-xs text-slate-500 font-semibold">Milestone Guarantee</div>
                <div className="text-xs sm:text-sm font-bold text-emerald-700 mt-1.5">{selectedTierData.commitment}</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
              <div className="text-xs text-[#0066cc] font-bold uppercase tracking-wider">Target Scope Deliverables</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1.5 leading-relaxed">
                {selectedTierData.deliverables}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-500 font-medium">
                * All sprints include daily Jira updates, private Git access, and dedicated technical project manager.
              </div>
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20"
              >
                Discuss This Tier
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. PROCESS FAQS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-white border-b border-slate-200/80">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-8">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-bold text-[#0066cc] uppercase tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Common Questions About Our Process
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "How does Webnatix guarantee 100% intellectual property ownership?",
                a: "From day one, all repositories, build scripts, design tokens, and documentation created for your project belong exclusively to your organization. Full IP ownership clauses are embedded into our standard contract.",
              },
              {
                q: "What happens if our project scope changes during development?",
                a: "Our agile sprint cadence accommodates changes seamlessly. We utilize backlog grooming before every 2-week sprint, allowing you to reprioritize features or adjust scope with predictable budget tracking.",
              },
              {
                q: "Can we communicate directly with the software engineers?",
                a: "Yes. In addition to your dedicated Project Manager and Lead Architect, you have direct Slack/Teams access to the engineers working on your pod, with bi-weekly live sprint demonstrations.",
              },
              {
                q: "What testing is performed before production deployment?",
                a: "We run automated unit test suites, integration tests, Playwright/Cypress end-to-end regression runs, SonarQube static code audits, and OWASP penetration checks prior to release.",
              },
            ].map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:text-[#0066cc] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={16}
                      className={`text-slate-400 shrink-0 transition-transform ${isOpen ? "rotate-180 text-[#0066cc]" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. BOTTOM CTA BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0a192f] text-white text-center relative overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Ready to Plan Your Next Release With <br />
            <span className="text-[#38bdf8]">Predictable Agile Velocity?</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Book a complimentary architectural discovery session with our lead solution architects. We will deliver a comprehensive technical roadmap and fixed-price scope within 48 hours.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white text-sm font-bold shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Book Architecture Session
            </Link>
            <Link
              href="/about"
              className="px-8 py-3.5 rounded-full border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-white text-sm font-bold hover:border-slate-600 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Learn More About Webnatix
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
