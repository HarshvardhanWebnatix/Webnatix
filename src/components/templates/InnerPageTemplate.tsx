"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Play,
  Lock,
  MessageCircle,
  Send,
  ChevronDown,
  Layers,
  Cpu,
  Code2,
  Server,
  Trophy,
  Gamepad2,
  Globe,
  Sparkles,
  Zap,
  PhoneCall,
  Clock,
  Check,
} from "lucide-react";
import { InnerPageData } from "@/data/inner-pages";

interface InnerPageTemplateProps {
  data: InnerPageData;
}

export function InnerPageTemplate({ data }: InnerPageTemplateProps) {
  // Form submission state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  // Center visual icon selector
  const renderCenterIcon = () => {
    const size = 36;
    switch (data.heroVisual.centerIcon) {
      case "trophy":
        return <Trophy size={size} className="text-amber-400" />;
      case "gamepad":
        return <Gamepad2 size={size} className="text-purple-400" />;
      case "code":
        return <Code2 size={size} className="text-blue-400" />;
      case "cpu":
        return <Cpu size={size} className="text-cyan-400" />;
      case "server":
        return <Server size={size} className="text-emerald-400" />;
      case "layers":
        return <Layers size={size} className="text-indigo-400" />;
      default:
        return <ShieldCheck size={size} className="text-[#e52320]" />;
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("lead-inquiry-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-800">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (Left: Text Data | Right: Animated Tech Visual)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 border-b border-slate-100 overflow-hidden">
        {/* Subtle Tech Grid Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0066cc 1px, transparent 1px), linear-gradient(to right, #0066cc 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-medium">
            {data.breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-2">
                {idx > 0 && <span className="text-slate-300">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#0066cc] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-slate-700 font-semibold">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Data Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Category Tag */}
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#e52320]">
                <span className="h-0.5 w-4 bg-[#e52320]" />
                <span>{data.category}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-slate-900 tracking-tight leading-[1.16]">
                {data.title}
              </h1>

              {/* Paragraph Description */}
              <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed max-w-2xl font-normal">
                {data.description}
              </p>

              {/* Key Features Checkmark Badges */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {data.badges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/80 px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:border-[#0066cc]/40 hover:bg-white transition-all"
                  >
                    <CheckCircle2 size={13} className="text-[#0066cc] shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#e52320] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/25 hover:bg-[#c91c19] hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight size={16} />
                </button>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 hover:border-[#0066cc] hover:text-[#0066cc] hover:shadow-xs transition-all"
                >
                  <Play size={13} className="text-[#e52320] fill-[#e52320]" />
                  <span>View All Services</span>
                </Link>
              </div>

            </div>

            {/* Right Visual Column (Animated Interactive Tech Visual Card) */}
            <div className="lg:col-span-5 flex justify-center">
              
              {/* Floating Container with Smooth Float & Scale Keyframe Animations */}
              <div className="w-full max-w-[500px] animate-float-slow">
                
                {/* Glowing Outer Card with Neon Accent Halo */}
                <div className="relative rounded-3xl border border-slate-800 bg-[#090e1a] p-7 shadow-2xl overflow-hidden animate-pulse-scale">
                  
                  {/* Neon Glow Aura behind Central Icon */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-[#e52320]/20 blur-3xl animate-glow-pulse" />
                  </div>

                  {/* Card Header */}
                  <div className="relative z-10 flex items-center justify-between pb-6 border-b border-slate-800/80">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-950/40 px-3 py-1 text-[11px] font-bold text-red-400">
                      <Zap size={11} className="text-red-400 animate-pulse" />
                      <span>{data.heroVisual.tag}</span>
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      {data.heroVisual.sla}
                    </span>
                  </div>

                  {/* Card Center: Illuminated Core with Nodes */}
                  <div className="relative z-10 py-10 flex flex-col items-center justify-center">
                    
                    {/* 4 Connected Floating Corner Nodes */}
                    <div className="w-full grid grid-cols-2 gap-4 mb-4">
                      {/* Top Left Node */}
                      <div className="flex items-center gap-2 text-[11.5px] font-semibold text-slate-300 bg-slate-900/80 border border-slate-800 rounded-xl px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
                        <span className="truncate">{data.heroVisual.nodes[0]?.label || "Architecture"}</span>
                      </div>
                      {/* Top Right Node */}
                      <div className="flex items-center gap-2 text-[11.5px] font-semibold text-slate-300 bg-slate-900/80 border border-slate-800 rounded-xl px-3 py-2 justify-end">
                        <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
                        <span className="truncate">{data.heroVisual.nodes[1]?.label || "Security"}</span>
                      </div>
                    </div>

                    {/* Central Illuminated Node Shield */}
                    <div className="relative my-4 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-red-500/50 shadow-[0_0_35px_rgba(229,35,32,0.35)] flex flex-col items-center justify-center transition-transform hover:scale-110 duration-300">
                        {renderCenterIcon()}
                      </div>
                      {/* Concentric Radar Ring */}
                      <div className="absolute inset-0 rounded-2xl border border-red-500/20 scale-125 animate-ping pointer-events-none" />
                    </div>

                    {/* Bottom 2 Connected Corner Nodes */}
                    <div className="w-full grid grid-cols-2 gap-4 mt-4">
                      {/* Bottom Left Node */}
                      <div className="flex items-center gap-2 text-[11.5px] font-semibold text-slate-300 bg-slate-900/80 border border-slate-800 rounded-xl px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                        <span className="truncate">{data.heroVisual.nodes[2]?.label || "Performance"}</span>
                      </div>
                      {/* Bottom Right Node */}
                      <div className="flex items-center gap-2 text-[11.5px] font-semibold text-slate-300 bg-slate-900/80 border border-slate-800 rounded-xl px-3 py-2 justify-end">
                        <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />
                        <span className="truncate">{data.heroVisual.nodes[3]?.label || "Integration"}</span>
                      </div>
                    </div>

                  </div>

                  {/* Card Footer */}
                  <div className="relative z-10 pt-5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <CheckCircle2 size={13} className="text-red-400" />
                      <span>{data.heroVisual.bottomLeft}</span>
                    </div>
                    <span className="text-red-400 uppercase tracking-wide">
                      {data.heroVisual.bottomRight}
                    </span>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. LOWER SECTION (Left: Sticky Form | Right: Scrollable Data)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 relative">
        <div className="mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* ── LEFT COLUMN: STICKY INQUIRY FORM ── */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
              <div
                id="lead-inquiry-form"
                className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xl shadow-slate-200/50 relative overflow-hidden"
              >
                {/* Form Top Header */}
                <div className="border-b border-slate-100 pb-4 mb-5">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-[11px] font-extrabold text-[#e52320] uppercase mb-2">
                    <Zap size={11} className="text-[#e52320]" />
                    <span>QUICK INQUIRY</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    Build Your Custom Project
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Connect with technical architects for scope and estimation.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-10 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">Inquiry Received</h4>
                    <p className="text-xs text-slate-500">
                      Our senior engineering lead will reach out within 2 hours with initial scope and NDA.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-blue-100 focus:outline-hidden transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-blue-100 focus:outline-hidden transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                        PHONE NUMBER *
                      </label>
                      <div className="flex gap-2">
                        <div className="rounded-xl border border-slate-200 bg-slate-50/80 px-2.5 py-2.5 text-xs font-semibold text-slate-700 flex items-center gap-1.5 shrink-0">
                          <span>🇮🇳</span>
                          <span>+91</span>
                        </div>
                        <input
                          type="tel"
                          required
                          placeholder="Phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-blue-100 focus:outline-hidden transition-all"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                        MESSAGE *
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Brief project scope or requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-blue-100 focus:outline-hidden transition-all resize-none"
                      />
                    </div>

                    {/* NDA Trust Statement */}
                    <div className="rounded-xl border border-amber-200/60 bg-amber-50/60 p-2.5 flex items-start gap-2">
                      <Lock size={13} className="text-amber-600 shrink-0 mt-0.5" />
                      <p className="text-[10.5px] text-amber-800 leading-snug font-medium">
                        <span className="font-bold">100% Confidential:</span> Mutual Non-Disclosure Agreement (NDA) Protected.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-xl bg-[#e52320] py-3 text-xs font-bold text-white shadow-md shadow-red-500/20 hover:bg-[#c91c19] hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>{isSubmitting ? "Submitting..." : "Get Free Consultation"}</span>
                      <ArrowRight size={14} />
                    </button>

                    {/* Direct Quick Chat Links */}
                    <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-slate-500 font-semibold border-t border-slate-100">
                      <a
                        href="https://wa.me/918619478769"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 hover:text-emerald-600 transition-colors"
                      >
                        <MessageCircle size={13} className="text-emerald-500" />
                        <span>WhatsApp</span>
                      </a>
                      <span className="text-slate-300">•</span>
                      <a
                        href="https://t.me/webnatix"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 hover:text-sky-500 transition-colors"
                      >
                        <Send size={13} className="text-sky-500" />
                        <span>Telegram: @webnatix</span>
                      </a>
                    </div>

                  </form>
                )}

              </div>
            </div>

            {/* ── RIGHT COLUMN: SCROLLABLE RICH CONTENT ── */}
            <div className="lg:col-span-8 space-y-14">
              
              {/* SECTION 1: DETAILED OVERVIEW */}
              <div className="space-y-5">
                <div className="flex items-center gap-2">
                  <span className="h-6 w-1 bg-[#e52320] rounded-full" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {data.overview.heading}
                  </h2>
                </div>

                <div className="space-y-4 text-slate-600 leading-relaxed text-[15px]">
                  {data.overview.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Key Takeaway Callout Box */}
                <div className="rounded-2xl border-l-4 border-l-[#e52320] border border-red-100 bg-red-50/40 p-5 shadow-2xs">
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-medium">
                    {data.overview.keyTakeaway}
                  </p>
                </div>
              </div>

              {/* SECTION 2: ENTERPRISE SERVICES GRID */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-6 w-1 bg-[#0066cc] rounded-full" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {data.servicesGrid.heading}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {data.servicesGrid.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="group rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm hover:border-[#0066cc]/40 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-[#e52320] shrink-0" />
                          <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {item.points && item.points.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                          {item.points.map((pt, pIdx) => (
                            <div key={pIdx} className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] shrink-0" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 3: TECHNOLOGY ARCHITECTURE STACK */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-6 w-1 bg-[#e52320] rounded-full" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {data.techStack.heading}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.techStack.categories.map((cat, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4.5 space-y-3"
                    >
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                        <Layers size={13} className="text-[#0066cc]" />
                        <span>{cat.name}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.tools.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-2xs"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 4: AGILE PROCESS ROADMAP */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-6 w-1 bg-[#0066cc] rounded-full" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {data.process.heading}
                  </h2>
                </div>

                <div className="space-y-3">
                  {data.process.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/90 bg-white p-4.5 flex items-start gap-4 shadow-2xs hover:border-[#0066cc]/40 transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066cc] border border-blue-100 flex items-center justify-center font-extrabold text-sm shrink-0">
                        {step.number}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-900">
                          {step.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 5: WHY GLOBAL ENTERPRISES CHOOSE WEBNATIXX */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-6 w-1 bg-[#e52320] rounded-full" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {data.whyChooseUs.heading}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.whyChooseUs.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs space-y-2 hover:border-[#0066cc]/40 hover:shadow-sm transition-all"
                    >
                      {item.stat && (
                        <div className="text-2xl font-extrabold text-[#0066cc] tracking-tight">
                          {item.stat}
                        </div>
                      )}
                      <h4 className="text-xs font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-[11.5px] text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 6: FAQS ACCORDION */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-6 w-1 bg-[#0066cc] rounded-full" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-3">
                  {data.faqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-2xs transition-all"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-full flex items-center justify-between p-4.5 text-left text-xs font-bold text-slate-800 hover:text-[#0066cc] transition-colors cursor-pointer"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            size={16}
                            className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                              isOpen ? "rotate-180 text-[#0066cc]" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4.5 pb-4 pt-1 text-xs text-slate-500 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. BOTTOM CONVERSION CTA BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16 text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/40 px-3.5 py-1 text-xs font-bold text-red-400 uppercase tracking-widest">
            <Sparkles size={12} className="text-red-400" />
            <span>Ready to Build Your Solution?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Schedule an Architecture Consultation Today
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Discuss your requirements with senior technical architects. Receive a comprehensive scope, architecture plan, and fixed-price roadmap.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 rounded-xl bg-[#e52320] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/25 hover:bg-[#c91c19] hover:shadow-xl transition-all cursor-pointer"
            >
              <span>Get Free Technical Consultation</span>
              <ArrowRight size={16} />
            </button>
            <a
              href="tel:+918619478769"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-3.5 text-sm font-bold text-white hover:bg-slate-800 hover:border-slate-600 transition-all"
            >
              <PhoneCall size={14} className="text-slate-300" />
              <span>Call: +91 8619478769</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
