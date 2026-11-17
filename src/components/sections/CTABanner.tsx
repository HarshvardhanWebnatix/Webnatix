"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Send, Headphones } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="py-20 bg-[#0a192f] text-white relative overflow-hidden">
      <div className="mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16 text-center relative z-10">

        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300 uppercase mb-6">
          Get Customized Solutions, Recommendations &amp; Estimates
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Ready to Build Your Next <br />
          <span className="text-[#38bdf8]">Digital Solution?</span>
        </h2>

        <p className="text-base sm:text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed mb-10">
          Discuss your requirement with our certified technical architects. We prioritize prompt communication and respond within 2-3 business hours confidentially.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-950/40 hover:bg-[#0052a3] hover:scale-105 transition-all"
          >
            <Headphones size={18} />
            Discuss Your Requirements
            <ArrowRight size={16} />
          </Link>

          <a
            href={SITE_CONFIG.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-[#0d223f] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#122e54] transition-all"
          >
            <MessageCircle size={18} className="text-[#25D366]" />
            WhatsApp (+44 1273 575190)
          </a>

          <a
            href="tel:+441273575190"
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-[#0d223f] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#122e54] transition-all"
          >
            <Send size={16} className="text-[#38bdf8]" />
            Call UK (+44 1273 575190)
          </a>
        </div>

      </div>
    </section>
  );
}
