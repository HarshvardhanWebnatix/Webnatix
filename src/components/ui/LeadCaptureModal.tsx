"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Star,
  Paperclip,
  Lock,
  ArrowRight
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const testimonials = [
  {
    quote:
      "Webnatix delivered our complete multi-tenant SaaS platform 2 weeks ahead of schedule. Clear processes, technical precision, and rapid response times throughout.",
    name: "James Okafor",
    role: "CTO, FinVault Technologies",
    rating: "5.0",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Their architectural scoping and AI integration gave our venture a massive competitive edge. True engineering partners, not just contractors.",
    name: "Sarah Jenkins",
    role: "Founder, NeuraScale AI",
    rating: "5.0",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80",
  },
];

export function LeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [ndaChecked, setNdaChecked] = useState(true);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Trigger automatically 3 seconds after landing on every refresh
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Also listen for a global custom event to open manually (e.g. from "Request a Quote")
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-lead-modal", handleOpen);
    return () => window.removeEventListener("open-lead-modal", handleOpen);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
      setSubmitted(false);
    }, 2500);
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">

          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl rounded-[28px] bg-[#f8faf9] p-5 sm:p-8 md:p-10 shadow-2xl border border-white z-10 my-auto"
          >

            {/* Top Close Button (Royal Blue Accent) */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 sm:right-6 sm:top-6 flex h-9 w-9 items-center justify-center rounded-full bg-[#0066cc] text-white shadow-md hover:bg-[#0052a3] hover:scale-105 transition-all"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            {/* Modal Heading Header */}
            <div className="text-center mb-6 sm:mb-8 pr-8 sm:pr-0">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-gray-900 tracking-tight leading-tight">
                Like What You Found?{" "}
                <span className="text-[#0066cc]">Let&apos;s Build Your Vision</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1.5 max-w-xl mx-auto">
                You&apos;ve reviewed our expertise. Now let&apos;s discuss how we can engineer your next market-leading platform.
              </p>
            </div>

            {/* Split Content Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

              {/* ── Left Column: Trust & Social Proof (5 cols) ── */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-5">

                {/* Testimonial Card with Arrows */}
                <div className="relative rounded-2xl bg-white p-5 border border-gray-100 shadow-sm">

                  {/* Previous / Next buttons */}
                  <button
                    onClick={prevTestimonial}
                    className="absolute -left-2.5 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-[#0066cc] text-white shadow hover:bg-[#0052a3] transition-colors"
                    aria-label="Previous quote"
                  >
                    <ChevronLeft size={15} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="absolute -right-2.5 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-[#0066cc] text-white shadow hover:bg-[#0052a3] transition-colors"
                    aria-label="Next quote"
                  >
                    <ChevronRight size={15} />
                  </button>

                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonials[activeTestimonial].avatar}
                      alt={testimonials[activeTestimonial].name}
                      className="h-12 w-12 rounded-full object-cover border-2 border-[#0066cc] shadow-sm mb-2.5"
                    />
                    <p className="text-xs text-gray-600 italic leading-relaxed mb-3 line-clamp-3">
                      &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                    </p>
                    <div className="font-bold text-xs text-gray-900">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-[10px] text-gray-400 font-medium">
                      {testimonials[activeTestimonial].role}
                    </div>

                    {/* Verified badge */}
                    <div className="mt-2.5 inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold text-[#0066cc] border border-blue-200">
                      <span className="flex text-amber-400">
                        {"★★★★★"}
                      </span>
                      <span>Verified Review</span>
                    </div>
                  </div>
                </div>

                {/* Deliverables & Quick Contacts */}
                <div className="grid grid-cols-2 gap-3 text-xs pt-1">

                  {/* Deliverables */}
                  <div>
                    <div className="text-[11px] font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      Our Deliverables
                    </div>
                    <ul className="space-y-1.5 text-gray-600 text-[11px]">
                      {[
                        "Free Consultation",
                        "Clear Pricing",
                        "Exact Timeline",
                        "Secure Code",
                        "Dedicated Support",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 size={13} className="text-[#0066cc] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Have a Question? Let's Talk! */}
                  <div>
                    <div className="text-[11px] font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      Have a Question?
                    </div>
                    <div className="space-y-1.5 text-gray-600 text-[11px]">
                      <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-1.5 hover:text-[#0066cc] transition-colors">
                        <Phone size={12} className="text-[#0066cc] shrink-0" />
                        <span className="truncate">{SITE_CONFIG.phone}</span>
                      </a>
                      <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-1.5 hover:text-[#0066cc] transition-colors">
                        <Mail size={12} className="text-[#0066cc] shrink-0" />
                        <span className="truncate">{SITE_CONFIG.email}</span>
                      </a>
                      <div className="flex items-start gap-1.5 text-gray-500">
                        <MapPin size={12} className="text-[#0066cc] shrink-0 mt-0.5" />
                        <span className="leading-tight text-[10px]">US · APAC · Europe Global Studio</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Reviewed & Trusted By Badges */}
                <div className="pt-2 border-t border-gray-200/80">
                  <div className="text-[9.5px] uppercase font-bold text-gray-400 tracking-wider mb-2 text-center">
                    REVIEWED &amp; TRUSTED BY
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center text-gray-700">
                    <div className="bg-white rounded-lg p-1.5 border border-gray-100 shadow-2xs">
                      <div className="font-extrabold text-[11px]">Clutch</div>
                      <div className="text-[10px] text-[#0066cc] font-bold">4.9 ★</div>
                    </div>
                    <div className="bg-white rounded-lg p-1.5 border border-gray-100 shadow-2xs">
                      <div className="font-extrabold text-[11px]">Trustpilot</div>
                      <div className="text-[10px] text-[#0066cc] font-bold">4.8 ★</div>
                    </div>
                    <div className="bg-white rounded-lg p-1.5 border border-gray-100 shadow-2xs">
                      <div className="font-extrabold text-[11px]">Google</div>
                      <div className="text-[10px] text-[#0066cc] font-bold">4.9 ★</div>
                    </div>
                    <div className="bg-white rounded-lg p-1.5 border border-gray-100 shadow-2xs">
                      <div className="font-extrabold text-[11px]">GoodFirms</div>
                      <div className="text-[10px] text-[#0066cc] font-bold">4.8 ★</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* ── Right Column: The Inquiry Form (7 cols) ── */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-white p-5 sm:p-6 border border-gray-100 shadow-sm h-full flex flex-col justify-between">

                  {submitted ? (
                    <div className="py-12 flex flex-col items-center justify-center text-center">
                      <div className="h-14 w-14 rounded-full bg-blue-50 text-[#0066cc] flex items-center justify-center mb-4">
                        <CheckCircle2 size={32} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Inquiry Received!</h3>
                      <p className="text-xs text-gray-500 mt-1 max-w-xs">
                        Our lead architect will review your scope and get in touch within 30 minutes.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3.5">

                      {/* Response Time Badge */}
                      <p className="text-xs text-gray-700 font-medium">
                        We respond promptly, typically{" "}
                        <span className="text-[#0066cc] font-bold underline decoration-blue-300">
                          within 30 minutes
                        </span>
                        , to kick-start your project.
                      </p>

                      {/* Full Name */}
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter Full Name"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-[#0066cc] focus:bg-white focus:ring-1 focus:ring-[#0066cc] transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="Enter Email"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-[#0066cc] focus:bg-white focus:ring-1 focus:ring-[#0066cc] transition-all"
                        />
                      </div>

                      {/* Phone Number with country indicator */}
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <div className="flex rounded-xl border border-gray-200 bg-gray-50/50 overflow-hidden focus-within:border-[#0066cc] focus-within:bg-white focus-within:ring-1 focus-within:ring-[#0066cc] transition-all">
                          <div className="flex items-center gap-1.5 px-3 border-r border-gray-200 bg-gray-100/70 text-xs font-semibold text-gray-700">
                            <span>🇮🇳</span>
                            <span>+91</span>
                          </div>
                          <input
                            type="tel"
                            required
                            placeholder="Enter phone number"
                            className="w-full bg-transparent px-3 py-2.5 text-xs text-gray-800 placeholder-gray-400 outline-none"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 mb-1">
                          Project Requirements &amp; Scope
                        </label>
                        <textarea
                          rows={2}
                          placeholder="Describe what you are looking to build (SaaS, Web App, Portal, AI, Mobile)..."
                          className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-3.5 py-2 text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-[#0066cc] focus:bg-white focus:ring-1 focus:ring-[#0066cc] transition-all resize-none"
                        />
                      </div>

                      {/* File Upload Row */}
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 mb-1">
                          Add Spec File / RFP (Optional)
                        </label>
                        <div className="flex items-center gap-2">
                          <label className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-700 transition-colors">
                            <Paperclip size={13} className="text-gray-500" />
                            + Add File
                            <input
                              type="file"
                              className="hidden"
                              onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                  setSelectedFile(e.target.files[0].name);
                                }
                              }}
                            />
                          </label>
                          <span className="text-[11px] text-gray-400 truncate max-w-[200px]">
                            {selectedFile || "No file chosen"}
                          </span>
                        </div>
                      </div>

                      {/* NDA Checkbox */}
                      <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer select-none pt-1">
                        <input
                          type="checkbox"
                          checked={ndaChecked}
                          onChange={(e) => setNdaChecked(e.target.checked)}
                          className="rounded border-gray-300 text-[#0066cc] focus:ring-[#0066cc] h-3.5 w-3.5"
                        />
                        <span>Protect Under NDA (Mutual Non-Disclosure Agreement)</span>
                      </label>

                      {/* Submit Button & Security Note */}
                      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                        <button
                          type="submit"
                          className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#0066cc] px-8 py-3 text-xs font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-[#0052a3] hover:shadow-xl transition-all active:scale-95"
                        >
                          <span>Let&apos;s Connect</span>
                          <ArrowRight size={14} />
                        </button>
                        <div className="flex items-center gap-1 text-[10px] text-gray-400">
                          <Lock size={11} className="text-gray-400" />
                          <span>100% confidential.</span>
                        </div>
                      </div>

                    </form>
                  )}

                </div>
              </div>

            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
