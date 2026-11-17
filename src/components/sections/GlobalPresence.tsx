"use client";

import { useState } from "react";
import { InteractiveGlobe, GLOBAL_OFFICES } from "@/components/ui/InteractiveGlobe";
import { Globe2, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const globalMetrics = [
  {
    value: "24+",
    label: "Years in Business",
  },
  {
    value: "1,200+",
    label: "Full-Time Technical Team",
  },
  {
    value: "27,000+",
    label: "Projects Completed Globally",
  },
];

export function GlobalPresence() {
  const [selectedCity, setSelectedCity] = useState<string>("India (R&D)");

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      
      {/* Subtle tech background grid */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "linear-gradient(#0066cc 1px, transparent 1px), linear-gradient(to right, #0066cc 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }}
      />

      <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ── Left Column: About Webnatixx Content (6 cols) ── */}
          <div className="lg:col-span-6 space-y-7 text-left">
            
            {/* Top Tag Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-[11px] font-bold text-[#0066cc] uppercase">
              <span className="h-1.5 w-5 rounded-full bg-[#0066cc]" />
              <span>WHO WE ARE</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.16]">
              Your Trusted Global <br className="hidden sm:inline" />
              <span className="text-[#0066cc]">Technology Partner</span>
            </h2>

            {/* Copy Paragraphs */}
            <p className="text-base text-slate-600 leading-relaxed">
              Dotsquares works with businesses across the globe to design, develop, and manage high-quality digital solutions. With certified experts and proven delivery capabilities, we help you build systems that are efficient, scalable, and ready for future growth.
            </p>

            <p className="text-[14.5px] text-slate-500 leading-relaxed">
              With over 24+ years of expertise in digital transformation, 1,200+ technology professionals, 15,000+ clients, and 27,000+ successful projects delivered globally, Dotsquares combines technical expertise, scalable delivery models, and industry-focused solutions.
            </p>

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {globalMetrics.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white p-4.5 shadow-sm transition-all hover:border-[#0066cc]/40 hover:shadow-md"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0066cc] tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-[11.5px] font-medium text-slate-500 mt-1 leading-snug">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ── Right Column: Interactive 3D Earth Globe (6 cols) ── */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* 3D Globe Card Container */}
            <div className="relative rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white via-white to-blue-50/20 p-3 sm:p-5 shadow-xl overflow-hidden flex flex-col items-center justify-center min-h-[560px] sm:min-h-[600px] lg:min-h-[640px]">
              
              {/* Floating Top Badge */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 rounded-full border border-slate-200/80 bg-white/95 px-3.5 py-1.5 shadow-sm backdrop-blur-sm flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-slate-700 tracking-wide uppercase">
                  Global Presence · 6 Strategic Hubs
                </span>
              </div>

              {/* Interactive 3D Globe Canvas Container */}
              <div className="w-full h-[500px] sm:h-[550px] lg:h-[590px] relative z-10 flex items-center justify-center">
                <InteractiveGlobe
                  selectedCity={selectedCity}
                  onSelectCity={setSelectedCity}
                />
              </div>

              {/* Bottom Interactive Control Hint */}
              <div className="absolute bottom-3.5 z-20 inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/90 px-3.5 py-1 text-[11px] font-semibold text-slate-500 shadow-xs backdrop-blur-xs">
                <span>🖱️ Click &amp; drag to rotate 360° · Scroll to zoom</span>
              </div>

            </div>

            {/* Bottom Offices Strip (Clicking any city flies the 3D globe to it) */}
            <div className="pt-1">
              <div className="text-[10.5px] font-extrabold uppercase tracking-widest text-slate-400 mb-2.5">
                OUR GLOBAL OFFICES &amp; HUBS (CLICK TO LOCATE)
              </div>
              <div className="flex flex-wrap gap-2">
                {GLOBAL_OFFICES.map((loc, idx) => {
                  const isActive = selectedCity === loc.city;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedCity(loc.city)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                        isActive
                          ? "border border-[#0066cc] bg-blue-50 text-[#0066cc] shadow-sm font-bold scale-[1.03]"
                          : "border border-slate-200 bg-white text-slate-700 shadow-2xs hover:border-[#0066cc] hover:text-[#0066cc]"
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-[#0066cc] ring-2 ring-blue-300" : "bg-slate-400"}`} />
                      <span>{loc.city}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
