"use client";

import Link from "next/link";
import { 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  Smartphone, 
  Globe2, 
  Mail, 
  MessageCircle, 
  Send 
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const highlights = [
  {
    icon: ShieldCheck,
    title: "100% Platform",
    sub: "Ownership Model (Full IP)",
  },
  {
    icon: Layers,
    title: "Zero Hidden Fees",
    sub: "Fixed-Price Milestones",
  },
  {
    icon: Sparkles,
    title: "AI-Driven Systems",
    sub: "Next.js & Cloud Native",
  },
  {
    icon: Smartphone,
    title: "SaaS & Mobile Apps",
    sub: "Production-Grade Velocity",
  },
  {
    icon: Globe2,
    title: "Global Timezones",
    sub: "US, APAC & Europe SLA",
  },
];

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAF9]">
      
      {/* ── Main Hero Row (Full bleed split with generous padding) ── */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center min-h-[540px] px-6 sm:px-10 lg:pl-12 xl:pl-20 lg:pr-6 py-12 lg:py-0 gap-8 lg:gap-4 max-w-[1520px] mx-auto">
        
        {/* ── Left Column (48% width) ── */}
        <div className="w-full lg:w-[48%] shrink-0 lg:py-16 text-left">
          
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0 animate-pulse" />
            <span className="text-[11px] font-semibold tracking-widest text-teal-800 uppercase leading-none">
              Software Studio · 100% IP Transferred · AI-Driven
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[48px] xl:text-[54px] font-bold text-gray-900 leading-[1.12] tracking-tight mb-5">
            We Build Digital Products <br />
            That Move <span className="text-teal-600">Businesses Forward.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-gray-500 text-[15px] lg:text-[16px] leading-[1.8] mb-9 max-w-[460px]">
            Global software engineering studio designing and building high-performance websites, SaaS platforms, portals, dashboards, mobile apps, and AI platforms for ambitious businesses.
          </p>

          {/* Action CTAs & Socials */}
          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm transition-all shadow-lg shadow-teal-200 hover:shadow-teal-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Start Project
            </Link>

            <Link
              href="/contact"
              className="px-7 py-3 rounded-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold text-sm transition-all hover:-translate-y-0.5 active:translate-y-0 bg-white"
            >
              Book 20-min Call
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

        {/* ── Right Column (52% width) with the Official WebP Image ── */}
        <div className="w-full lg:w-[52%] flex items-center justify-center lg:justify-end px-4 sm:px-6 lg:px-0 pb-8 lg:pb-0 lg:self-stretch">
          <div className="relative w-full max-w-[720px]">
            <div 
              className="absolute inset-0 rounded-3xl"
              style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(20,184,166,0.18) 0%, transparent 70%)" }}
            />
            <img 
              alt="Webnatixx Technologies Platform Console" 
              title="Webnatixx Technologies Platform Console" 
              width={817} 
              height={483} 
              className="w-full h-auto object-contain relative z-10 drop-shadow-2xl" 
              src="/assets/home/hero/hero-image.webp"
            />
          </div>
        </div>

      </div>

      {/* ── Bottom 5-Column Teal Highlight Strip (Full Bleed) ── */}
      <div className="relative z-10 bg-teal-700 overflow-hidden">
        <div className="flex flex-wrap lg:flex-nowrap max-w-[1520px] mx-auto">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="flex-1 min-w-[50%] lg:min-w-0 relative flex items-center gap-3 px-5 py-[18px] border-r border-white/10 last:border-r-0 cursor-default group overflow-hidden transition-colors hover:bg-teal-800/60"
              >
                <div className="relative w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Icon size={17} className="text-white" />
                </div>
                <div className="relative text-left">
                  <div className="text-[13px] font-semibold text-white leading-tight">
                    {item.title}
                  </div>
                  <p className="text-[11px] text-white/70 mt-0.5 font-medium">
                    {item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
