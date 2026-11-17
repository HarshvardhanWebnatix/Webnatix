"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Layers,
  Users,
  Award,
  Globe2,
  Building2,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Cpu,
  Clock,
  Sparkles,
  Lock,
  ChevronRight,
  MapPin,
  ExternalLink,
  PhoneCall,
  Mail,
  Zap,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

// ── 24-Year Milestone Journey Data ──
const TIMELINE_MILESTONES = [
  {
    year: "2002",
    title: "Foundation & Inception",
    desc: "Founded with a clear vision: delivering bespoke, high-reliability software architectures with zero vendor lock-in.",
    badge: "Origin",
    stats: "First 50 Enterprise Deployments",
  },
  {
    year: "2008",
    title: "UK Hub & European Expansion",
    desc: "Opened our European headquarters in London, serving Tier-1 financial, retail, and logistics enterprises.",
    badge: "Global Growth",
    stats: "London Office Established",
  },
  {
    year: "2014",
    title: "Mobile & ISO 27001 Certification",
    desc: "Pioneered native iOS & Android practices. Achieved ISO 27001 information security certification across all engineering pods.",
    badge: "Security Standard",
    stats: "ISO 27001 Certified",
  },
  {
    year: "2018",
    title: "CMMI Level 3 & GCC Campus",
    desc: "Achieved CMMI Level 3 maturity assessment. Expanded our Jaipur Global Capability Centre to 500+ full-time technical staff.",
    badge: "Quality Maturity",
    stats: "CMMI Level 3 Assessed",
  },
  {
    year: "2021",
    title: "North America & APAC Delivery Hubs",
    desc: "Expanded client service hubs in Maryland (US) and Melbourne (Australia) with 24/7 follow-the-sun technical support.",
    badge: "Global Scale",
    stats: "5 International Hubs",
  },
  {
    year: "2024-2026",
    title: "Enterprise AI & Cloud Transformation",
    desc: "Surpassed 1,200+ in-house engineers and 27,000+ deployments. Scaled production-grade Generative AI, RAG pipelines, and autonomous agent swarms.",
    badge: "AI Frontier",
    stats: "1,200+ Engineers · 27,000+ Projects",
  },
];

// ── Global Hubs Data ──
const GLOBAL_HUBS = [
  {
    id: "uk",
    city: "London",
    country: "United Kingdom",
    role: "European Headquarters & Strategy",
    address: "Central London Tech Corridor, UK",
    badge: "Client Hub",
    timezone: "GMT / BST (UTC+1)",
    focus: "Strategic Architecture, Financial Tech & Advisory",
  },
  {
    id: "us",
    city: "Maryland",
    country: "United States",
    role: "North American Regional Office",
    address: "Bethesda / Greater Washington Area, MD",
    badge: "Client Hub",
    timezone: "EST / EDT (UTC-5)",
    focus: "Enterprise Cloud, Healthcare & GovTech",
  },
  {
    id: "au",
    city: "Melbourne",
    country: "Australia",
    role: "APAC Regional Headquarters",
    address: "Collins Street Financial Precinct, Melbourne",
    badge: "Client Hub",
    timezone: "AEST / AEDT (UTC+10)",
    focus: "Fintech, Logistics & Omnichannel Commerce",
  },
  {
    id: "uae",
    city: "Dubai",
    country: "United Arab Emirates",
    role: "Middle East Technology Center",
    address: "Dubai Internet City, UAE",
    badge: "Client Hub",
    timezone: "GST (UTC+4)",
    focus: "High-Throughput Digital Platforms & Smart Cities",
  },
  {
    id: "gcc",
    city: "Jaipur",
    country: "India",
    role: "Global Capability Centre (GCC Campus)",
    address: "Webnatix Technology Park, Jaipur",
    badge: "1,200+ In-House Engineers",
    timezone: "IST (UTC+5:30)",
    focus: "Full-Lifecycle Engineering, AI R&D & 24/7 NOC",
  },
];

// ── Core Values Data ──
const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "100% IP & Code Ownership",
    desc: "Complete source code, CI/CD scripts, database schemas, and documentation are transferred to you without licensing restrictions or hidden lock-ins.",
  },
  {
    icon: Award,
    title: "CMMI Level 3 Engineering Rigor",
    desc: "Standardized agile sprint cadences, automated test suites, rigorous peer code reviews, and structured release governance on every repository.",
  },
  {
    icon: Zap,
    title: "Sub-50ms Performance Focus",
    desc: "We write clean, efficient, modern code designed for lightning Core Web Vitals, optimal resource utilization, and rapid user interactions.",
  },
  {
    icon: Users,
    title: "Zero Third-Party Outsourcing",
    desc: "Every engineer, architect, and QA tester is an in-house, full-time Webnatix professional working under verified information security controls.",
  },
  {
    icon: Lock,
    title: "Military-Grade Data Security",
    desc: "ISO 27001:2013 and Cyber Essentials Plus certified protocols ensuring zero-trust data segregation, encrypted storage, and strict NDA compliance.",
  },
  {
    icon: Sparkles,
    title: "Continuous Innovation & AI Labs",
    desc: "Our internal R&D testbed continuously benchmarks custom LLMs, vector search architectures, and microservice meshes to keep your business ahead.",
  },
];

// ── Leadership Team Data ──
const LEADERSHIP_PROFILES = [
  {
    name: "Vikram Rathore",
    role: "Managing Director & Co-Founder",
    experience: "24+ Years Leadership",
    bio: "Pioneered Webnatix from its founding in 2002 into a global technology powerhouse serving Fortune 500s and high-growth disruptors.",
    badge: "Executive Leadership",
  },
  {
    name: "James Thornton",
    role: "VP of Global Solutions (UK & Europe)",
    experience: "19+ Years Enterprise IT",
    bio: "Directs client advisory and strategic enterprise accounts across London, Frankfurt, and Zurich with deep focus on financial systems.",
    badge: "Advisory & Strategy",
  },
  {
    name: "Ananya Sharma",
    role: "Chief Technology Officer (CTO)",
    experience: "16+ Years Architecture",
    bio: "Oversees 1,200+ engineers, driving cloud-native Kubernetes architectures, microservices standards, and enterprise AI implementations.",
    badge: "Technical Architecture",
  },
  {
    name: "Michael Sterling",
    role: "Head of Cloud & Cybersecurity",
    experience: "14+ Years Infrastructure",
    bio: "Leads multi-cloud DevOps, Zero-Trust network topologies, and ISO 27001 regulatory compliance across all client deployments.",
    badge: "DevOps & Security",
  },
];

export default function AboutPage() {
  const [selectedMilestone, setSelectedMilestone] = useState(TIMELINE_MILESTONES[TIMELINE_MILESTONES.length - 1]);
  const [selectedHub, setSelectedHub] = useState(GLOBAL_HUBS[4]); // Default to GCC Campus

  return (
    <div className="bg-[#FAFAF9] min-h-screen text-slate-800">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: 24+ Years & Scale Overview
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#0066cc] animate-pulse" />
                <span className="text-[11px] font-bold tracking-widest text-[#0066cc] uppercase">
                  ESTABLISHED 2002 · 24+ YEARS OF GLOBAL EXCELLENCE
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.12] text-slate-900">
                Engineering Digital Excellence <br />
                <span className="text-[#0066cc]">at Worldwide Scale</span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                Webnatix Technologies is an international IT consulting and software engineering firm. With over <strong className="text-slate-900">1,200+ in-house certified engineers</strong> and <strong className="text-slate-900">27,000+ delivered projects</strong>, we partner with visionary startups and global leaders to build scalable cloud platforms, mobile applications, and enterprise AI ecosystems.
              </p>

              {/* Stats Highlights Pill Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  { value: "24+", label: "Years in Business" },
                  { value: "1,200+", label: "Full-Time Staff" },
                  { value: "27,000+", label: "Delivered Deployments" },
                  { value: "CMMI 3", label: "Quality Maturity" },
                ].map((stat, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-left">
                    <div className="text-2xl font-black text-[#0066cc]">{stat.value}</div>
                    <div className="text-xs text-slate-500 font-semibold mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/process"
                  className="px-7 py-3 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Our Process</span>
                  <ArrowRight size={15} />
                </Link>

                <Link
                  href="/careers"
                  className="px-7 py-3 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Join Our Team</span>
                  <Users size={15} className="text-[#0066cc]" />
                </Link>
              </div>

            </div>

            {/* Right Visual: 3D Layered Architecture Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-2xl group">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/images/webnatix-hero-light-3d.jpg"
                    alt="Webnatix Technologies Engineering Collective"
                    title="Webnatix Technologies Scale"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                
                {/* Overlay Badge */}
                <div className="p-5 bg-gradient-to-r from-slate-900 to-[#0a192f] text-white flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-cyan-300">Global Capability Centre (GCC)</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Jaipur · London · Maryland · Melbourne · Dubai</div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-extrabold uppercase border border-cyan-500/30">
                    ISO 27001
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. INTERACTIVE 24-YEAR MILESTONE TIMELINE (2002 - 2026)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-white border-b border-slate-200/80">
        <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-[#0066cc]">
              <Clock size={13} />
              <span>THE WEBNATIX TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900">
              Two Decades of Continuous Innovation
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Click on each epoch below to explore how we evolved from a founding agile pod in 2002 into a 1,200+ engineer enterprise transformation leader.
            </p>
          </div>

          {/* Timeline Tab Bar */}
          <div className="flex items-center justify-center overflow-x-auto pb-4 mb-10 gap-2 sm:gap-4 no-scrollbar">
            {TIMELINE_MILESTONES.map((m) => {
              const isSelected = selectedMilestone.year === m.year;
              return (
                <button
                  key={m.year}
                  onClick={() => setSelectedMilestone(m)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 border ${
                    isSelected
                      ? "bg-[#0066cc] border-[#0066cc] text-white shadow-lg shadow-blue-600/20 scale-105"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-white" : "bg-[#0066cc]"}`} />
                  <span>{m.year}</span>
                </button>
              );
            })}
          </div>

          {/* Active Milestone Display Card */}
          <motion.div
            key={selectedMilestone.year}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="max-w-4xl mx-auto rounded-3xl border border-slate-200/90 bg-slate-50/80 p-8 sm:p-12 shadow-xl relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-6">
              <div>
                <span className="text-xs font-bold text-[#0066cc] uppercase tracking-wider">
                  Epoch {selectedMilestone.year} · {selectedMilestone.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  {selectedMilestone.title}
                </h3>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-bold text-slate-700 shrink-0">
                {selectedMilestone.stats}
              </div>
            </div>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              {selectedMilestone.desc}
            </p>
          </motion.div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. GLOBAL CAPABILITY CENTRE (GCC) & INTERNATIONAL HUBS
      ───────────────────────────────────────────────────────────── */}
      <section id="global" className="py-24 relative overflow-hidden bg-[#FAFAF9] border-b border-slate-200/80">
        <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-[#0066cc]">
              <Globe2 size={13} />
              <span>GLOBAL FOOTPRINT &amp; GCC CAMPUS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900">
              Local Strategy, Global Engineering Muscle
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Client engagement teams in London, Maryland, Melbourne, and Dubai work seamlessly with our 1,200+ engineer Global Capability Centre in Jaipur.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Hub Selectors */}
            <div className="lg:col-span-5 space-y-3">
              {GLOBAL_HUBS.map((hub) => {
                const isSelected = selectedHub.id === hub.id;
                return (
                  <div
                    key={hub.id}
                    onClick={() => setSelectedHub(hub)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-white border-[#0066cc] shadow-md shadow-blue-500/10 scale-[1.02]"
                        : "bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                          isSelected ? "bg-[#0066cc] text-white" : "bg-slate-100 text-slate-700"
                        }`}>
                          <MapPin size={15} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">{hub.city}, {hub.country}</div>
                          <div className="text-xs text-slate-500">{hub.role}</div>
                        </div>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isSelected ? "bg-blue-50 text-[#0066cc]" : "bg-slate-100 text-slate-500"
                      }`}>
                        {hub.badge}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Hub Detail Card */}
            <div className="lg:col-span-7">
              <motion.div
                key={selectedHub.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-xl space-y-6"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold text-[#0066cc] uppercase tracking-wider">
                      Regional Node Overview
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                      {selectedHub.city}, {selectedHub.country}
                    </h3>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>Operational</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-xs text-slate-500 font-semibold">Location / Address</div>
                    <div className="text-sm font-bold text-slate-800 mt-1">{selectedHub.address}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-xs text-slate-500 font-semibold">Timezone / Cadence</div>
                    <div className="text-sm font-bold text-slate-800 mt-1">{selectedHub.timezone}</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
                  <div className="text-xs text-[#0066cc] font-bold uppercase tracking-wider">Core Practice Specialization</div>
                  <div className="text-sm font-bold text-slate-900 mt-1">{selectedHub.focus}</div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="px-6 py-2.5 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20"
                  >
                    Contact This Hub
                  </Link>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="px-6 py-2.5 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    <PhoneCall size={13} className="text-[#0066cc]" />
                    <span>Call Regional Advisor</span>
                  </a>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. CORE ENGINEERING VALUES & DNA
      ───────────────────────────────────────────────────────────── */}
      <section id="values" className="py-24 relative overflow-hidden bg-white border-b border-slate-200/80">
        <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-[#0066cc]">
              <ShieldCheck size={13} />
              <span>THE WEBNATIX STANDARD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900">
              Engineered on Principles, Not Compromises
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every system we deliver adheres to non-negotiable software craftsmanship standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200/80 bg-slate-50/60 p-7 hover:bg-white hover:border-[#0066cc]/40 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066cc] mb-5 group-hover:bg-[#0066cc] group-hover:text-white transition-colors shadow-2xs">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2.5">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. LEADERSHIP & TECHNICAL GOVERNANCE
      ───────────────────────────────────────────────────────────── */}
      <section id="team" className="py-24 relative overflow-hidden bg-[#FAFAF9] border-b border-slate-200/80">
        <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-[#0066cc]">
              <Users size={13} />
              <span>LEADERSHIP &amp; ARCHITECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900">
              Seasoned Enterprise Technologists
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our steering committee brings decades of hands-on experience guiding Fortune 500 digital transformations and high-throughput SaaS architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_PROFILES.map((leader, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-[#0066cc]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-sky-50 border border-blue-200/60 flex items-center justify-center font-bold text-xl text-[#0066cc] mb-4">
                    {leader.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0066cc] bg-blue-50 px-2 py-0.5 rounded-full">
                    {leader.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2">{leader.name}</h3>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">{leader.role}</div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-3">
                    {leader.bio}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-4 text-[11px] font-bold text-slate-400">
                  {leader.experience}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. CERTIFICATIONS & COMPLIANCE
      ───────────────────────────────────────────────────────────── */}
      <section id="certifications" className="py-20 relative overflow-hidden bg-white border-b border-slate-200/80">
        <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#0066cc] mb-3">
            VERIFIED INDUSTRY CREDENTIALS
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-10">
            Recognized by Global Standards Bodies
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "CMMI Level 3", sub: "Maturity Assessed" },
              { title: "ISO 27001", sub: "Information Security" },
              { title: "Cyber Essentials+", sub: "UK MoD Aligned" },
              { title: "AWS Partner", sub: "Cloud Architecture" },
              { title: "Microsoft Gold", sub: "Cloud & Solutions" },
              { title: "Google Cloud", sub: "Data & Vertex AI" },
            ].map((badge, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 text-center hover:bg-white hover:border-[#0066cc] hover:shadow-md transition-all cursor-default"
              >
                <div className="text-sm font-bold text-slate-900">{badge.title}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{badge.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. BOTTOM CALL TO ACTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0a192f] text-white text-center relative overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Ready to Build With a Proven <br />
            <span className="text-[#38bdf8]">24-Year Technology Partner?</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Discuss your upcoming product, enterprise modernisation, or dedicated engineering team with our senior solutions architects.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white text-sm font-bold shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Discuss Your Project
            </Link>
            <Link
              href="/process"
              className="px-8 py-3.5 rounded-full border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-white text-sm font-bold hover:border-slate-600 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              View Our Agile Process
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
