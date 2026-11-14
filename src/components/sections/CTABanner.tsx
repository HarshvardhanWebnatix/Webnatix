"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Send, Headphones } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="py-20 bg-[#0a3532] text-white relative overflow-hidden">
      <div 
        className="pointer-events-none absolute left-1/2 -top-24 -translate-x-1/2 h-[400px] w-[700px] rounded-full opacity-20 blur-[130px]"
        style={{ background: "#2dd4bf" }}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3.5 py-1 text-xs font-semibold text-teal-300 uppercase mb-6">
          Ready to Engineer Something Extraordinary?
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Turn Ambitious Ideas Into <br />
          <span className="text-teal-300">Market-Leading Products</span>
        </h2>

        <p className="text-base sm:text-lg text-teal-100/80 max-w-2xl mx-auto leading-relaxed mb-10">
          Partner with Webnatixx Technologies to build software solutions that win markets, delight users, and drive long-term business growth.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#008974] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-950/40 hover:bg-[#007361] hover:scale-105 transition-all"
          >
            <Headphones size={18} />
            Book Architectural Scoping Call
            <ArrowRight size={16} />
          </Link>

          <a
            href={SITE_CONFIG.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-900/40 px-6 py-3.5 text-sm font-semibold text-white hover:bg-teal-900/80 transition-all"
          >
            <MessageCircle size={18} className="text-[#25D366]" />
            WhatsApp (+91 8619478769)
          </a>

          <a
            href={SITE_CONFIG.telegram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-900/40 px-6 py-3.5 text-sm font-semibold text-white hover:bg-teal-900/80 transition-all"
          >
            <Send size={16} className="text-[#38bdf8]" />
            Telegram
          </a>
        </div>

      </div>
    </section>
  );
}
