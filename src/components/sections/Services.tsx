"use client";

import { 
  Layout, 
  Layers, 
  Gauge, 
  Smartphone, 
  Brain, 
  Workflow, 
  ArrowUpRight 
} from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";

const iconMap = [
  Layout,
  Layers,
  Gauge,
  Smartphone,
  Brain,
  Workflow,
];

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1 text-[11px] font-bold text-teal-800 uppercase mb-3">
            Core Engineering Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            We Engineer Digital Products That <span className="text-[#008974]">Drive Real Impact</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            From high-growth startup MVPs to enterprise-grade cloud ecosystems, we engineer software designed for speed, scale, and long-term business value.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((item, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#008974]/40 hover:shadow-xl hover:shadow-slate-200/50 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#008974] group-hover:bg-[#008974] group-hover:text-white transition-colors duration-200">
                    <Icon size={24} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 flex items-center justify-between">
                    {item.title}
                    <ArrowUpRight size={18} className="text-slate-300 group-hover:text-[#008974] transition-colors" />
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {item.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="rounded-md bg-slate-50 border border-slate-200/80 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
