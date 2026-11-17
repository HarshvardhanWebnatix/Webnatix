"use client";

import Link from "next/link";
import {
  Activity,
  Cpu,
  ShieldCheck,
  Server,
  Zap,
  ArrowRight,
  CheckCircle2,
  Lock,
  Layers,
  Sparkles,
} from "lucide-react";

export function EnterpriseConsoleShowcase() {
  return (
    <section className="relative py-24 bg-[#0a192f] text-white overflow-hidden border-t border-b border-slate-800">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(to right, #38bdf8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold text-cyan-300 shadow-sm backdrop-blur-md">
            <Activity size={13} className="text-cyan-400 animate-pulse" />
            <span>ENTERPRISE OBSERVABILITY &amp; CLOUD TELEMETRY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-tight">
            High-Throughput Digital Systems{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              Engineered for Global Scale
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            From autonomous AI agents and vector pipelines to distributed microservices handling peak traffic, our mission-critical platform console maintains uninterrupted 99.99% uptime.
          </p>
        </div>

        {/* 3D Visual Showcase & Capabilities Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: 3D Console Render (Option 1) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 bg-slate-950/60 shadow-2xl shadow-cyan-900/20 group">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src="/images/webnatix-hero-3d.jpg"
                  alt="Webnatix Technologies Real-Time Enterprise 3D Console"
                  title="Webnatix Enterprise Platform Console"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              {/* Glassmorphic Metrics Footer */}
              <div className="grid grid-cols-3 divide-x divide-white/10 bg-slate-900/90 backdrop-blur-md border-t border-white/10 p-4 text-center">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Delivered Projects</div>
                  <div className="text-lg sm:text-xl font-bold text-white mt-0.5">27,000+</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">In-House Engineers</div>
                  <div className="text-lg sm:text-xl font-bold text-cyan-400 mt-0.5">1,200+</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Proven SLA Uptime</div>
                  <div className="text-lg sm:text-xl font-bold text-emerald-400 mt-0.5">99.99%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Architected for Enterprise Demands
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We design and maintain complex digital systems with zero vendor lock-in, complete source code handover, and audited security certifications.
              </p>
            </div>

            <div className="space-y-3.5">
              {[
                {
                  icon: Cpu,
                  title: "Autonomous AI & Neural Workflows",
                  desc: "Custom LLMs, enterprise RAG pipelines, and multi-agent systems tailored to proprietary data.",
                },
                {
                  icon: Server,
                  title: "High-Concurrency Microservices",
                  desc: "Distributed Kubernetes & Docker architectures engineered for sub-50ms API latencies.",
                },
                {
                  icon: ShieldCheck,
                  title: "CMMI Level 3 & ISO 27001 Security",
                  desc: "Strict cyber-defense posture, automated CI/CD regression suites, and 100% IP ownership.",
                },
                {
                  icon: Activity,
                  title: "24/7 Global Observability",
                  desc: "Continuous proactive telemetry across UK, US, Australia, UAE, and India delivery centres.",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white leading-tight">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-400 leading-relaxed mt-1">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/technologies"
                className="px-6 py-2.5 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20 hover:-translate-y-0.5"
              >
                Explore Technology Stack
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-slate-200 text-xs font-bold transition-all hover:border-slate-600 hover:-translate-y-0.5"
              >
                Schedule Technical Consultation
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
