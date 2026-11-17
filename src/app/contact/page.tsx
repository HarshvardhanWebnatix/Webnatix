"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Globe2,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Sparkles,
  Lock,
  Building2,
  Check,
  Zap,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

// ── Client Testimonials Data ──
const TESTIMONIALS = [
  {
    quote:
      "Mobile app development and cloud migration were handled smoothly. Strong technical skills, clear communication, and dependable post-launch support stood out throughout the engagement.",
    author: "Sarah Mitchell",
    role: "Director of Operations",
    company: "HealthFirst Clinics",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote:
      "Webnatix engineered our high-concurrency microservices platform under an aggressive 12-week timeline. Their agile sprint cadence and zero-downtime deployment saved us months of engineering time.",
    author: "David Vance",
    role: "VP of Engineering",
    company: "FinTech Scale",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote:
      "The dedicated engineering pod functioned like our internal team. Code quality is top-notch, CMMI Level 3 processes were evident, and 100% IP ownership was transferred seamlessly.",
    author: "Elena Rostova",
    role: "Chief Technology Officer",
    company: "Apex Global Logistics",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80",
  },
];

export default function ContactUsPage() {
  // Form submission state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    message: "",
    protectNda: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Testimonials Carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="bg-[#FAFAF9] min-h-screen text-slate-800">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SPLIT: Technical Scoping Headline & Floating Form Card
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden border-b border-slate-200/80 bg-white">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            
            {/* ── Left Column: Value Proposition & Social Proof ── */}
            <div className="lg:col-span-7 space-y-7 text-left">
              
              {/* Overline Tag */}
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 shadow-xs">
                <span className="text-[11px] font-extrabold tracking-wider text-[#0066cc] uppercase font-mono">
                  # ENTERPRISE TECHNICAL SCOPING
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.12] text-slate-900">
                Let's Build Something <br />
                <span className="text-[#0066cc]">Extraordinary</span> Together
              </h1>

              {/* Subheadline */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                Book a free technical consultation or send us your project brief. Our lead software architects will analyze your requirements and deliver a complete scope breakdown within 24 hours.
              </p>

              {/* 3 Horizontal Guarantee Items */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#0066cc] mb-2">
                    <Clock size={16} />
                  </div>
                  <div className="text-sm font-bold text-slate-900 leading-tight">24h Fast Response</div>
                  <div className="text-xs text-slate-500 leading-relaxed">
                    Detailed technical scope breakdown within 24 hours.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#0066cc] mb-2">
                    <ShieldCheck size={16} />
                  </div>
                  <div className="text-sm font-bold text-slate-900 leading-tight">Strict NDA Guard</div>
                  <div className="text-xs text-slate-500 leading-relaxed">
                    Your idea and code are protected under mutual NDA.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#0066cc] mb-2">
                    <Globe2 size={16} />
                  </div>
                  <div className="text-sm font-bold text-slate-900 leading-tight">Global Delivery</div>
                  <div className="text-xs text-slate-500 leading-relaxed">
                    Empowering startups &amp; enterprises in 20+ countries.
                  </div>
                </div>
              </div>

              {/* Verified Platforms Social Proof */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                  <ShieldCheck size={14} className="text-[#0066cc]" />
                  <span>RECOGNIZED &amp; VERIFIED BY TOP GLOBAL PLATFORMS</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { platform: "Clutch", rating: "4.9 / 5", label: "Top Software Firm" },
                    { platform: "Trustpilot", rating: "4.8 / 5", label: "Verified Business" },
                    { platform: "Google", rating: "4.9 / 5", label: "5-Star Enterprise" },
                    { platform: "GoodFirms", rating: "4.8 / 5", label: "Top Developer" },
                  ].map((p, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl border border-slate-200 bg-white text-center shadow-2xs hover:border-[#0066cc]/40 transition-colors"
                    >
                      <div className="text-sm font-extrabold text-slate-900">{p.platform}</div>
                      <div className="flex items-center justify-center gap-0.5 my-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={11} fill="currentColor" />
                        ))}
                      </div>
                      <div className="text-xs font-bold text-slate-800">{p.rating}</div>
                      <div className="text-[10.5px] text-slate-400 mt-0.5">{p.label}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ── Right Column: Floating Contact Form Card ── */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-2xl overflow-hidden">
                
                {/* Royal Blue Gradient Top Border Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0066cc] via-sky-400 to-[#0066cc]" />

                {/* Form Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0066cc]">
                    FREE CONSULTATION
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold border border-emerald-200">
                    SLA: 24 HOURS
                  </span>
                </div>

                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Send Us a Message
                </h2>
                <p className="text-xs text-slate-500 mt-1 mb-6">
                  Leave your details below. We process all inquiries under mutual NDA within 24h.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Inquiry Received!</h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Our senior solutions architect will review your project brief and deliver a preliminary technical breakdown within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          countryCode: "+91",
                          message: "",
                          protectNda: true,
                        });
                      }}
                      className="mt-4 px-6 py-2 rounded-full border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs text-slate-900 focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs text-slate-900 focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>

                    {/* Phone Number with Country Code */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        PHONE NUMBER *
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={formData.countryCode}
                          onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                          className="px-3 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs font-bold text-slate-700 focus:border-[#0066cc] outline-none"
                        >
                          <option value="+91">🇮🇳 +91</option>
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+971">🇦🇪 +971</option>
                          <option value="+61">🇦🇺 +61</option>
                          <option value="+49">🇩🇪 +49</option>
                        </select>
                        <input
                          type="tel"
                          required
                          placeholder="92520 52623"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs text-slate-900 focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        MESSAGE *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs text-slate-900 focus:bg-white focus:border-[#0066cc] focus:ring-2 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400 resize-none"
                      />
                    </div>

                    {/* NDA Checkbox */}
                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="nda-check"
                        checked={formData.protectNda}
                        onChange={(e) => setFormData({ ...formData, protectNda: e.target.checked })}
                        className="w-4 h-4 rounded text-[#0066cc] focus:ring-[#0066cc] border-slate-300 cursor-pointer"
                      />
                      <label htmlFor="nda-check" className="text-xs text-slate-600 font-medium cursor-pointer">
                        Protect Under Mutual NDA
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] active:bg-[#004080] text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                      >
                        <Send size={15} />
                        <span>{isSubmitting ? "Processing..." : "Send Message"}</span>
                      </button>
                    </div>

                    {/* Footer Reassurances */}
                    <p className="text-[11px] text-slate-400 text-center pt-1">
                      We respond within 24 hours. NDA available on request.
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                      <span className="flex items-center gap-1">
                        <Lock size={12} className="text-emerald-600" />
                        <span>100% Confidential NDA</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Zap size={12} className="text-[#0066cc]" />
                        <span>2-Hour Rapid Ingestion</span>
                      </span>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. DIRECT CHANNELS & HOW WE ENGAGE (Exact Split UI)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-[#FAFAF9] border-b border-slate-200/80">
        <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            
            {/* ── Left Column: Direct Channels ── */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0066cc] block mb-1">
                  DIRECT CHANNELS
                </span>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  Reach Out Directly
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 max-w-lg">
                  Whether you have a fully scoped PRD or just an early concept, we are ready to assist you in scoping, estimating, and scaling your software solution.
                </p>
              </div>

              {/* 4 Direct Channel Cards */}
              <div className="space-y-3">
                
                {/* Email */}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 bg-white hover:border-[#0066cc]/40 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066cc] flex items-center justify-center shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">EMAIL US</div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors">
                        {SITE_CONFIG.email}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Expect a reply within 2 business hours</div>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-[#0066cc] group-hover:translate-x-0.5 transition-all" />
                </a>

                {/* Call or WhatsApp */}
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 bg-white hover:border-[#0066cc]/40 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066cc] flex items-center justify-center shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">CALL OR WHATSAPP</div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors">
                        {SITE_CONFIG.phone}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Mon–Fri from 9am to 7pm IST</div>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-[#0066cc] group-hover:translate-x-0.5 transition-all" />
                </a>

                {/* Corporate Office */}
                <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 bg-white">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066cc] flex items-center justify-center shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">CORPORATE OFFICE</div>
                      <div className="text-sm font-bold text-slate-900">
                        Plot No 13, Kalyan City, Rampura Road, Patrakar Extension, Mansarovar, Jaipur, Rajasthan 302020
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Jaipur, India Tech Hub</div>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 bg-white">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066cc] flex items-center justify-center shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">OPERATING HOURS</div>
                      <div className="text-sm font-bold text-slate-900">
                        Monday – Friday, 9:00 AM – 6:00 PM IST
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">24/7 Monitoring for enterprise clients</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Webnatix Midnight Navy Architecture Callout Banner */}
              <div className="rounded-3xl bg-gradient-to-br from-[#0a192f] via-[#0b2545] to-[#0066cc] p-6 text-white shadow-xl space-y-3 border border-blue-500/20">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                  <Sparkles size={13} className="text-cyan-400" />
                  <span>NEED IMMEDIATE GUIDANCE?</span>
                </span>
                <h3 className="text-xl font-black text-white">
                  Schedule an Architecture Call
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed max-w-md">
                  Speak directly with a Principal AI &amp; Full-Stack Architect to evaluate your technical feasibility.
                </p>
                <div className="pt-1">
                  <a
                    href={SITE_CONFIG.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0066cc] hover:bg-blue-50 font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle size={14} className="text-[#25D366]" />
                    <span>Chat on WhatsApp</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>

            </div>

            {/* ── Right Column: How We Engage ── */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0066cc] block mb-1">
                  OUR PROCESS
                </span>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  How We Engage
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 max-w-lg">
                  From initial project ingestion to deployment, our engineering workflow ensures strict confidentiality, rapid turnaround, and senior architectural oversight.
                </p>
              </div>

              {/* 4 Process Cards */}
              <div className="space-y-3.5">
                {[
                  {
                    step: "1",
                    title: "Scoping & System Architecture",
                    desc: "Mutual NDA signed within 2 hours. Senior PM and technical architects review your requirements or PRD.",
                  },
                  {
                    step: "2",
                    title: "Tech Stack & Cost Estimation",
                    desc: "Fixed-price or agile sprint budget delivered with full milestone breakdown in 24 hours.",
                  },
                  {
                    step: "3",
                    title: "Dedicated Engineering Squad",
                    desc: "Full-stack, AI, and cloud engineers commence sprint kickoff with daily updates and CI/CD pipelines.",
                  },
                  {
                    step: "4",
                    title: "Production Deployment & SLA",
                    desc: "Hardened cloud release with 24/7 uptime monitoring, code transfer, and ongoing maintenance SLA.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#0066cc]/40 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 text-[#0066cc] flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                        {item.step}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          {item.step}. {item.title}
                        </div>
                        <div className="text-xs text-slate-600 leading-relaxed mt-1">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. GLOBAL PRESENCE: Development & Client Hubs
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-white border-b border-slate-200/80">
        <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
          
          <div className="max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0066cc] block">
              GLOBAL PRESENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Development &amp; Client Hubs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            {/* Card 1: India HQ */}
            <div className="p-7 rounded-3xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-[#0066cc]/40 hover:shadow-xl transition-all">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0066cc] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/60">
                PRIMARY DEVELOPMENT CENTER
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-4">
                India Tech Headquarters
              </h3>
              <div className="text-xs font-bold text-slate-500 mt-0.5">Jaipur, Rajasthan</div>
              <p className="text-xs text-slate-600 leading-relaxed mt-3">
                Plot No 13, Kalyan City, Rampura Road, Patrakar Extension, Mansarovar, Jaipur 302020
              </p>
            </div>

            {/* Card 2: North America */}
            <div className="p-7 rounded-3xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-[#0066cc]/40 hover:shadow-xl transition-all">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0066cc] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/60">
                CLIENT RELATIONS
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-4">
                North America Desk
              </h3>
              <div className="text-xs font-bold text-slate-500 mt-0.5">Delaware / New York / Maryland</div>
              <p className="text-xs text-slate-600 leading-relaxed mt-3">
                Enterprise Client Services &amp; Strategic Consulting, East Coast Technology Corridor, USA
              </p>
            </div>

            {/* Card 3: UK & EU */}
            <div className="p-7 rounded-3xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-[#0066cc]/40 hover:shadow-xl transition-all">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0066cc] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/60">
                EU OPERATIONS
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-4">
                UK &amp; European Union
              </h3>
              <div className="text-xs font-bold text-slate-500 mt-0.5">London &amp; Tech Hubs</div>
              <p className="text-xs text-slate-600 leading-relaxed mt-3">
                Regional Business Support &amp; Agile Ingestion, Central London, United Kingdom
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. VISIT OUR TECH HEADQUARTERS & GOOGLE MAPS EMBED
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-[#FAFAF9] border-b border-slate-200/80">
        <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="max-w-3xl mb-12 space-y-2 text-left">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0066cc] block">
              WEBNATIX TECH LOCATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Visit Our Tech Headquarters
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Located in the primary tech hub of Jaipur, India. Schedule an in-person meeting or connect virtually with our leadership team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Info Card */}
            <div className="lg:col-span-4 rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-md flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0066cc] animate-pulse" />
                    <span className="text-xs font-bold text-slate-900 uppercase">WEBNATIX TECH HQ</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold border border-emerald-200">
                    Open Center
                  </span>
                </div>

                {/* Corporate Address */}
                <div className="space-y-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">CORPORATE ADDRESS</div>
                  <div className="text-sm font-bold text-slate-900">Webnatix Technologies</div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    Plot No 13, Kalyan City, Rampura Road, Patrakar Extension, Mansarovar, Jaipur, Rajasthan 302020, India
                  </p>
                </div>

                {/* Working Hours */}
                <div className="space-y-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">WORKING HOURS</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">Monday – Friday: 9:00 AM – 6:00 PM IST</div>
                  <div className="text-[11px] text-slate-500">24/7 Monitoring for active enterprise contracts</div>
                </div>

                {/* Direct Helpline */}
                <div className="space-y-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">DIRECT HELPLINE</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">{SITE_CONFIG.phone}</div>
                  <div className="text-[11px] text-slate-500">{SITE_CONFIG.email}</div>
                </div>

                {/* Google Verified Status */}
                <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#0066cc]">Google Profile</span>
                    <span className="flex items-center text-amber-400 text-xs font-bold">
                      ★ 4.9 / 5
                    </span>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase text-blue-700 bg-blue-100/60 px-2 py-0.5 rounded-full">
                    Verified
                  </span>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <a
                  href="https://www.google.com/search?kgmid=%2Fg%2F11q9sswrkv&hl=en-IN&q=WebNatix%20Technologies&shem=epsd1%2Cesd2e%2Cltae%2Crimspwouoe%2Csdpie&shndl=30&source=sh%2Fx%2Floc%2Fosrp%2Fm5%2F1&kgs=fd297568d0ad3c85"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                >
                  <span>View Official Google Business Listing</span>
                  <ExternalLink size={13} />
                </a>

                <a
                  href="https://maps.google.com/?q=WebNatix+Technologies"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl border border-slate-300 hover:border-[#0066cc] text-slate-700 hover:text-[#0066cc] font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Get Driving Directions</span>
                  <MapPin size={13} />
                </a>
              </div>
            </div>

            {/* Right: Embedded Google Maps Iframe */}
            <div className="lg:col-span-8 rounded-3xl overflow-hidden border border-slate-200 shadow-md min-h-[420px] bg-slate-100 relative">
              <iframe
                title="WebNatix Technologies Official Location Google Map"
                src="https://maps.google.com/maps?q=WebNatix%20Technologies&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. CLIENT REVIEWS: What Our Clients Say
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-white border-b border-slate-200/80">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-8">
          
          <div className="mb-10 text-left">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0066cc] block mb-1">
              CLIENT REVIEWS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What Our Clients Say
            </h2>
          </div>

          {/* Testimonial Box */}
          <div className="relative rounded-3xl border border-slate-200 bg-slate-50/60 p-8 sm:p-12 shadow-md">
            
            {/* Decorative Big Quote */}
            <Quote
              size={64}
              className="absolute top-8 right-8 text-blue-100/60 pointer-events-none"
            />

            {/* Stars */}
            <div className="flex items-center gap-1 text-amber-400 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            {/* Quote Body */}
            <p className="text-lg sm:text-xl font-semibold text-slate-800 leading-relaxed mb-8 relative z-10">
              "{TESTIMONIALS[currentTestimonial].quote}"
            </p>

            {/* Author & Controls Footer */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-200/80">
              <div className="flex items-center gap-3.5">
                <img
                  src={TESTIMONIALS[currentTestimonial].avatar}
                  alt={TESTIMONIALS[currentTestimonial].author}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {TESTIMONIALS[currentTestimonial].author}
                  </div>
                  <div className="text-xs text-slate-500">
                    {TESTIMONIALS[currentTestimonial].role},{" "}
                    <span className="font-semibold text-slate-700">
                      {TESTIMONIALS[currentTestimonial].company}
                    </span>
                  </div>
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous review"
                  className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next review"
                  className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
