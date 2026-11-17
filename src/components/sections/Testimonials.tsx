"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  stars: number;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "sofia",
    name: "Sofia Reyes",
    role: "COO",
    company: "NovaCasino Group",
    content:
      "Their team delivered a bug-free launch with outstanding UI/UX design. Player onboarding conversion rates doubled in the first month. The technical support is absolutely world-class.",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80",
    stars: 5,
  },
  {
    id: "james",
    name: "James Thornton",
    role: "CEO",
    company: "DelWave Media",
    content:
      "Webnatix transformed our business. Their turnkey platform had us live in under 6 weeks with full compliance and a seamless player experience. The rapid deployment was genuinely impressive.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80",
    stars: 5,
  },
  {
    id: "marcus",
    name: "Marcus Webb",
    role: "Founder",
    company: "SpinVerse Global",
    content:
      "The white-label solution gave us a premium product on day one. Integration with 3,000+ games and APIs was seamless and the compliance framework passed regulatory audits without a single revision.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80",
    stars: 5,
  },
  {
    id: "elena",
    name: "Elena Rostova",
    role: "VP of Technology",
    company: "Apex Gaming Ltd",
    content:
      "From database schema to real-time agent workflows, they architected everything flawlessly. Zero latency spikes under high transaction concurrency. Highly recommend Webnatix for any ambitious operator.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&auto=format&fit=crop&q=80",
    stars: 5,
  },
  {
    id: "david",
    name: "David Koenig",
    role: "VP of Engineering",
    company: "Logistics Network",
    content:
      "Working with Webnatix felt like having a senior Principal Engineering collective embedded right inside our company. Clean code, 99.99% uptime SLA, and 100% intellectual property handed over.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&auto=format&fit=crop&q=80",
    stars: 5,
  },
  {
    id: "alexandre",
    name: "Alexandre Vance",
    role: "Co-Founder",
    company: "Fintech SaaS",
    content:
      "Webnatix delivered our complete multi-tenant platform 2 weeks ahead of schedule. The code quality, speed, and architectural clarity were exceptional from day one.",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=160&auto=format&fit=crop&q=80",
    stars: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = TESTIMONIALS_DATA.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Smooth Auto-Sliding every 4.5 seconds (pauses smoothly on mouse hover or touch)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Calculate normalized relative position offset for each card (-half .. +half)
  const getDiff = (idx: number) => {
    let diff = idx - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section className="relative py-24 sm:py-28 overflow-hidden bg-gradient-to-b from-[#eaf6f3] via-[#f3faf7] to-[#e8f6f2] border-t border-teal-100/70">
      {/* Background Soft Radiant Aura */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-[750px] h-[520px] rounded-full bg-teal-200/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
        {/* Top Tag matching the reference screenshot */}
        <div className="inline-block mb-3">
          <span className="text-[11px] sm:text-xs font-bold text-[#00897b] tracking-[0.25em] uppercase">
            TESTIMONIALS
          </span>
        </div>

        {/* Section Headline matching screenshot */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-tight mb-4">
          What Our <span className="text-[#00897b]">Operators</span> Say
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12 sm:mb-16">
          Direct feedback from global operators praising our rapid deployment
          strategies and unwavering compliance stability.
        </p>

        {/* ── Testimonials Sliding Carousel Container ── */}
        <div
          className="relative mx-auto w-full max-w-[1280px] h-[340px] sm:h-[320px] flex items-center justify-center overflow-hidden select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {TESTIMONIALS_DATA.map((item, idx) => {
            const diff = getDiff(idx);
            const isCenter = diff === 0;
            const isVisible = Math.abs(diff) <= 1;

            return (
              <motion.div
                key={item.id}
                animate={{
                  x: `${diff * 108}%`,
                  scale: isCenter ? 1 : 0.92,
                  opacity: isCenter ? 1 : Math.abs(diff) === 1 ? 0.45 : 0,
                  zIndex: isCenter ? 20 : Math.abs(diff) === 1 ? 10 : 0,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1], // silky-smooth exponential deceleration
                }}
                onClick={() => {
                  if (diff === -1) handlePrev();
                  if (diff === 1) handleNext();
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -40) handleNext();
                  else if (info.offset.x > 40) handlePrev();
                }}
                className={`absolute w-[90vw] max-w-[420px] sm:max-w-[440px] h-[280px] sm:h-[290px] rounded-3xl bg-white p-7 sm:p-8 flex flex-col justify-between transition-shadow duration-300 ${
                  isCenter
                    ? "shadow-[0_20px_60px_rgba(0,137,123,0.12)] border border-teal-100/90 cursor-grab active:cursor-grabbing"
                    : isVisible
                    ? "border border-slate-200/70 shadow-md cursor-pointer hover:opacity-70"
                    : "pointer-events-none"
                }`}
              >
                {/* Top: Stylized Quotation Mark SVG */}
                <div>
                  <div
                    className={`transition-colors duration-300 mb-3 flex items-center ${
                      isCenter ? "text-[#10b981]" : "text-teal-300/40"
                    }`}
                  >
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Testimonial Quote Text */}
                  <blockquote className="text-left text-slate-700 text-sm sm:text-[14.5px] leading-relaxed font-normal">
                    &ldquo;{item.content}&rdquo;
                  </blockquote>
                </div>

                {/* Bottom Row: Client Avatar, Name/Role, and 5 Star Rating */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100/90">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200/80 shadow-xs flex-shrink-0"
                    />
                    <div className="min-w-0 text-left">
                      <div className="font-bold text-slate-900 text-sm leading-tight truncate">
                        {item.name}
                      </div>
                      <div className="text-[12px] text-slate-500 font-medium truncate">
                        {item.role}, {item.company}
                      </div>
                    </div>
                  </div>

                  {/* 5 Bright Golden Stars */}
                  <div className="flex items-center gap-0.5 text-amber-400 flex-shrink-0 ml-2">
                    {[...Array(item.stars)].map((_, starIdx) => (
                      <svg
                        key={starIdx}
                        className="w-3.5 h-3.5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Navigation Controls: < [Dots/Pills] > ── */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-3 sm:gap-4">
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-teal-200/80 bg-white/95 text-slate-600 hover:text-teal-700 hover:border-teal-400 hover:shadow-md flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Pagination Indicators (Active is Elongated Pill, Inactive are Dots) */}
          <div className="flex items-center gap-2 px-1">
            {TESTIMONIALS_DATA.map((_, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "w-7 h-2.5 bg-[#00897b] rounded-full shadow-xs"
                      : "w-2.5 h-2.5 bg-teal-200/70 hover:bg-teal-300 rounded-full"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              );
            })}
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-teal-200/80 bg-white/95 text-slate-600 hover:text-teal-700 hover:border-teal-400 hover:shadow-md flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
