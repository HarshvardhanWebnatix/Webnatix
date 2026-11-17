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

        {/* ── Right Column (54% width) with the Official WebP Image ── */}
        <div className="w-full lg:w-[54%] flex items-center justify-center lg:justify-end px-2 sm:px-4 lg:px-0 pb-8 lg:pb-0 lg:self-stretch">
          <div className="relative w-full max-w-[920px]">
            <img
              alt="Webnatix Technologies Platform Console"
              title="Webnatix Technologies Platform Console"
              width={817}
              height={483}
              className="w-full h-auto object-contain relative z-10 drop-shadow-xl"
              src="/assets/home/hero/hero-image.png"
            />
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
