"use client";

import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 text-center">
          {STATS.map((item, idx) => (
            <div key={idx} className="p-4">
              <div className="text-3xl sm:text-5xl font-extrabold text-[#0066cc] tracking-tight">
                {item.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-semibold text-slate-600">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
