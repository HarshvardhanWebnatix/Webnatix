"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const navigate = (dir: number) => {
    setIndex((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[index];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-200 px-3.5 py-1 text-xs font-bold text-teal-800 uppercase mb-4">
          Testimonials
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-12">
          What Our Clients <span className="text-teal-600">Are Saying</span>
        </h2>

        <div className="relative rounded-2xl border border-gray-200 bg-white p-8 sm:p-12 shadow-md">
          <Quote size={36} className="text-teal-600/30 mb-4 mx-auto" />
          
          <blockquote className="text-lg sm:text-xl font-medium text-gray-800 leading-relaxed mb-6">
            &ldquo;{current.content}&rdquo;
          </blockquote>

          <div>
            <div className="font-bold text-gray-900">{current.name}</div>
            <div className="text-xs text-gray-500">{current.role}</div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-teal-600 hover:text-teal-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-teal-600" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => navigate(1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-teal-600 hover:text-teal-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
