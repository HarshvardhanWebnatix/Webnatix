"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Layers,
  Sparkles,
  Smartphone,
  Globe2,
  Mail,
  MessageCircle,
  Send,
  Cpu,
  Activity,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const highlights = [
  {
    icon: ShieldCheck,
    title: "24+ Years",
    sub: "Proven Global Expertise",
  },
  {
    icon: Layers,
    title: "1,200+ Engineers",
    sub: "Full-Time Technical Team",
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    sub: "Future-Ready Platforms",
  },
  {
    icon: Smartphone,
    title: "27,000+ Projects",
    sub: "Delivered Worldwide",
  },
  {
    icon: Globe2,
    title: "Global Hubs",
    sub: "UK, US, AU, UAE & India",
  },
];

export function Hero() {
  const [activeVisual, setActiveVisual] = useState<"architecture" | "console">("architecture");

  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAF9]">

      {/* ── Main Hero Row (Full bleed split with generous padding) ── */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center min-h-[580px] px-4 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-6 gap-8 lg:gap-8 max-w-[1780px] mx-auto">

        {/* ── Left Column (46% width) ── */}
        <div className="w-full lg:w-[46%] shrink-0 lg:py-16 text-left">

          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#0066cc] shrink-0 animate-pulse" />
            <span className="text-[11px] font-semibold tracking-widest text-blue-900 uppercase leading-none">
              24+ Years of Global Excellence · CMMI Level 3 Certified
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[48px] xl:text-[54px] font-bold text-gray-900 leading-[1.12] tracking-tight mb-5">
            Modern Software Development with <br />
            <span className="text-[#0066cc]">AI, Cloud &amp; Data Expertise.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-gray-500 text-[15px] lg:text-[16.5px] leading-[1.8] mb-9 max-w-[560px]">
            Real business outcomes powered by AI &amp; automation. Partnered with startups and Fortune 500 companies to design, develop, and scale high-performance digital systems.
          </p>

          {/* Action CTAs & Socials */}
          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Discuss Your Requirements
            </Link>

            <Link
              href="/casestudies"
              className="px-7 py-3 rounded-full border-2 border-[#0066cc] text-[#0066cc] hover:bg-blue-50 font-semibold text-sm transition-all hover:-translate-y-0.5 active:translate-y-0 bg-white cursor-pointer"
            >
              Explore Case Studies
            </Link>

            {/* Circular Social Buttons */}
            <div className="flex items-center gap-2.5 pl-1">
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-gray-300 bg-white flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-[#25D366]"
              >
                <MessageCircle size={20} />
              </a>

              <a
                href={SITE_CONFIG.telegram}
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-gray-300 bg-white flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-[#229ED9]"
              >
                <Send size={18} />
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-gray-300 bg-white flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-[#EA4335]"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* ── Right Column (54% width) with Interactive 3D Enterprise Console ── */}
        <div className="w-full lg:w-[54%] flex flex-col items-center lg:items-end justify-center px-2 sm:px-4 lg:px-0 pb-8 lg:pb-0 lg:self-stretch">
          
          {/* Top Interactive Switcher Pill */}
          <div className="flex items-center gap-2 bg-white/95 border border-slate-200/90 rounded-full p-1.5 shadow-md shadow-slate-200/50 mb-4 z-20 backdrop-blur-md">
            <button
              onClick={() => setActiveVisual("architecture")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeVisual === "architecture"
                  ? "bg-[#0066cc] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Layers size={13} />
              <span>3D Architecture Stack</span>
            </button>
            <button
              onClick={() => setActiveVisual("console")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeVisual === "console"
                  ? "bg-[#0a192f] text-white shadow-sm ring-1 ring-cyan-400/40"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Cpu size={13} className={activeVisual === "console" ? "text-cyan-400" : ""} />
              <span>3D AI &amp; Telemetry Console</span>
            </button>
          </div>

          {/* 3D Visual Frame */}
          <div className="relative w-full max-w-[920px] rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xl bg-white group transition-all duration-500 hover:shadow-blue-500/10">
            {activeVisual === "architecture" ? (
              <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-hidden">
                <img
                  alt="Webnatix Technologies 3D Layered Architecture Stack"
                  title="Webnatix Technologies 3D Architecture Stack"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  src="/images/webnatix-hero-light-3d.jpg"
                />
                
                {/* Floating Micro-Badge Overlay */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-full px-3 py-1 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[11px] font-bold text-slate-700">Multi-Tier Architecture Ready</span>
                </div>
              </div>
            ) : (
              <div className="relative w-full aspect-[16/9] bg-[#0a192f] overflow-hidden">
                <img
                  alt="Webnatix Technologies 3D Real-Time Telemetry & AI Console"
                  title="Webnatix Technologies 3D Platform Console"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  src="/images/webnatix-hero-3d.jpg"
                />

                {/* Floating Telemetry Micro-Badge Overlay */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#0a192f]/90 backdrop-blur-md border border-cyan-500/30 rounded-full px-3 py-1 shadow-md">
                  <Activity size={12} className="text-cyan-400 animate-pulse" />
                  <span className="text-[11px] font-bold text-cyan-200">Live 99.99% SLA Telemetry</span>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* ── Bottom 5-Column Highlight Strip (Deep Navy Theme) ── */}
      <div className="relative z-10 bg-[#0b2545] overflow-hidden">
        <div className="flex flex-wrap lg:flex-nowrap max-w-[1780px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex-1 min-w-[50%] lg:min-w-0 relative flex items-center gap-3 px-5 py-[18px] border-r border-white/10 last:border-r-0 cursor-default group overflow-hidden transition-colors hover:bg-[#0f2f57]"
              >
                <div className="relative w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Icon size={17} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-[14px] leading-tight group-hover:text-blue-200 transition-colors">
                    {item.title}
                  </div>
                  <div className="text-blue-200/70 text-[12px] leading-tight mt-0.5">
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
