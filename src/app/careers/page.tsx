"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Briefcase,
  Heart,
  Sparkles,
  Award,
  Globe2,
  GraduationCap,
  MapPin,
  Clock,
  ArrowRight,
  Search,
  CheckCircle2,
  Laptop,
  Coffee,
  ShieldCheck,
  Send,
  X,
  FileText,
  Building2,
  Check,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

// ── Perks & Benefits ──
const PERKS = [
  {
    icon: Sparkles,
    title: "Cutting-Edge Tech Stack",
    desc: "Build with Next.js, TypeScript, Go, Python, PyTorch, Kubernetes, and enterprise vector databases on real enterprise workloads.",
  },
  {
    icon: GraduationCap,
    title: "$2,000 Annual Learning Grant",
    desc: "Dedicated personal budget for tech certifications (AWS, GCP, CMMI, CISA), technical books, and global engineering conferences.",
  },
  {
    icon: Globe2,
    title: "Global Mobility & 5 Hubs",
    desc: "Opportunity to collaborate across client hubs in London, Maryland, Melbourne, Dubai, and our 1,200+ engineer tech campus in Jaipur.",
  },
  {
    icon: Heart,
    title: "Premium Family Healthcare",
    desc: "Comprehensive health, dental, and vision insurance coverage with outpatient benefits and mental wellness support.",
  },
  {
    icon: Laptop,
    title: "Top-Tier Hardware & Setup",
    desc: "Choose between latest Apple MacBook Pro M3/M4 or custom Linux workstations with multi-monitor 4K desktop setups.",
  },
  {
    icon: Award,
    title: "Annual Hackathons & AI Incubation",
    desc: "Quarterly internal hackathons where top engineering concepts receive dedicated internal funding and patent support.",
  },
];

// ── Open Positions ──
interface JobPosition {
  id: string;
  title: string;
  department: "ai" | "fullstack" | "mobile" | "cloud" | "design";
  departmentName: string;
  location: string;
  type: string;
  experience: string;
  skills: string[];
  desc: string;
}

const OPEN_POSITIONS: JobPosition[] = [
  {
    id: "ai-lead",
    title: "Staff AI & Machine Learning Engineer",
    department: "ai",
    departmentName: "AI & Machine Learning",
    location: "London, UK / Hybrid",
    type: "Full-Time",
    experience: "5+ Years Experience",
    skills: ["PyTorch", "LangChain", "Vector DBs", "RAG Pipelines", "MLflow"],
    desc: "Lead the design and production deployment of custom enterprise LLMs, retrieval-augmented generation systems, and autonomous agent workflows.",
  },
  {
    id: "principal-cloud",
    title: "Principal Cloud Architect (Kubernetes / AWS)",
    department: "cloud",
    departmentName: "Cloud & DevOps",
    location: "Jaipur GCC / Hybrid",
    type: "Full-Time",
    experience: "7+ Years Experience",
    skills: ["Kubernetes", "AWS / GCP", "Terraform", "Istio", "CI/CD"],
    desc: "Architect multi-tenant, high-throughput cloud infrastructure maintaining sub-50ms latencies and 99.99% uptime across Tier-1 enterprise applications.",
  },
  {
    id: "lead-fullstack",
    title: "Lead Full-Stack Engineer (Next.js & Go)",
    department: "fullstack",
    departmentName: "Full-Stack Engineering",
    location: "Remote / London / Jaipur",
    type: "Full-Time",
    experience: "4+ Years Experience",
    skills: ["Next.js", "React", "Go / Node.js", "PostgreSQL", "Docker"],
    desc: "Build scalable distributed web platforms, high-performance microservices, and reactive user interfaces adhering to strict Core Web Vitals.",
  },
  {
    id: "senior-mobile",
    title: "Senior Cross-Platform Mobile Engineer (React Native & Flutter)",
    department: "mobile",
    departmentName: "Mobile Engineering",
    location: "Jaipur GCC / Remote",
    type: "Full-Time",
    experience: "4+ Years Experience",
    skills: ["React Native", "Flutter", "Swift / Kotlin", "Biometrics", "Offline Sync"],
    desc: "Create smooth 60fps native-feeling mobile applications for iOS and Android with strict offline data sync and biometric security.",
  },
  {
    id: "lead-uiux",
    title: "Senior UI/UX Design System Specialist",
    department: "design",
    departmentName: "UI/UX & Product Design",
    location: "Dubai / Remote",
    type: "Full-Time",
    experience: "4+ Years Experience",
    skills: ["Figma Tokens", "Design Systems", "WCAG 2.1 AA", "Interactive Prototyping"],
    desc: "Direct our design language, building cohesive design systems, atomic components, and user-centric wireframes for complex enterprise workflows.",
  },
  {
    id: "devsecops-lead",
    title: "Staff DevSecOps & Security Specialist",
    department: "cloud",
    departmentName: "Cloud & DevOps",
    location: "Maryland, US / Remote",
    type: "Full-Time",
    experience: "5+ Years Experience",
    skills: ["ISO 27001", "PenTesting", "SonarQube", "OWASP", "Zero-Trust"],
    desc: "Maintain information security controls across all build pipelines, conduct vulnerability assessments, and uphold CMMI Level 3 quality gates.",
  },
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [applyingJob, setApplyingJob] = useState<JobPosition | null>(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  // Application form fields
  const [candidateData, setCandidateData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    experience: "",
  });

  const filteredJobs = OPEN_POSITIONS.filter((job) => {
    const matchesDept = selectedDept === "all" || job.department === selectedDept;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationSubmitted(true);
    setTimeout(() => {
      setApplicationSubmitted(false);
      setApplyingJob(null);
      setCandidateData({ name: "", email: "", phone: "", linkedin: "", experience: "" });
    }, 2000);
  };

  return (
    <div className="bg-[#FAFAF9] min-h-screen text-slate-800">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION: Life & Engineering at Webnatix
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden border-b border-slate-200/80 bg-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0066cc 1px, transparent 1px), linear-gradient(to right, #0066cc 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0066cc] animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest text-[#0066cc] uppercase">
                JOIN 1,200+ IN-HOUSE ENGINEERS · 5 GLOBAL HUBS
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.12] text-slate-900">
              Build the Future of <br />
              <span className="text-[#0066cc]">Enterprise AI &amp; Cloud Systems</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              We are a team of passionate software engineers, data scientists, cloud architects, and product designers solving tough technical challenges for visionary enterprises worldwide.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 max-w-3xl mx-auto text-left">
              {[
                { val: "1,200+", lbl: "Full-Time Staff" },
                { val: "4.8 / 5", lbl: "Glassdoor Rating" },
                { val: "5 Hubs", lbl: "UK, US, AU, UAE, IN" },
                { val: "Zero", lbl: "Vendor Lock-in" },
              ].map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center sm:text-left">
                  <div className="text-xl font-black text-[#0066cc]">{m.val}</div>
                  <div className="text-xs text-slate-500 font-semibold mt-0.5">{m.lbl}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="#open-roles"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>View Open Positions</span>
                <ArrowRight size={15} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. PERKS & ENGINEERING CULTURE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-white border-b border-slate-200/80">
        <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-[#0066cc]">
              <Heart size={13} />
              <span>LIFE AT WEBNATIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900">
              Why Top Engineers Thrive Here
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We empower our engineers with psychological safety, cutting-edge tools, and generous personal growth investments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERKS.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200/80 bg-slate-50/60 p-7 hover:bg-white hover:border-[#0066cc]/40 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0066cc] mb-5 group-hover:bg-[#0066cc] group-hover:text-white transition-colors shadow-2xs">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors">
                    {perk.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2.5">
                    {perk.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. INTERACTIVE OPEN POSITIONS BOARD
      ───────────────────────────────────────────────────────────── */}
      <section id="open-roles" className="py-24 relative overflow-hidden bg-[#FAFAF9] border-b border-slate-200/80">
        <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-[#0066cc]">
              <Briefcase size={13} />
              <span>CURRENT OPPORTUNITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900">
              Open Engineering &amp; Design Roles
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Find your next career milestone in AI, Cloud, Full-Stack, or Mobile engineering.
            </p>
          </div>

          {/* Search & Department Filters */}
          <div className="max-w-4xl mx-auto mb-10 space-y-4">
            
            {/* Search Input */}
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by role, skill (e.g. Next.js, PyTorch, Kubernetes), or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-[#0066cc] focus:ring-2 focus:ring-blue-500/10 outline-none text-sm text-slate-800 shadow-sm"
              />
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { id: "all", label: "All Roles" },
                { id: "ai", label: "AI & ML" },
                { id: "cloud", label: "Cloud & DevOps" },
                { id: "fullstack", label: "Full-Stack" },
                { id: "mobile", label: "Mobile" },
                { id: "design", label: "UI/UX & Design" },
              ].map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDept(d.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                    selectedDept === d.id
                      ? "bg-[#0066cc] border-[#0066cc] text-white shadow-md shadow-blue-500/15"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

          </div>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-[#0066cc]/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Meta Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0066cc] bg-blue-50 px-2.5 py-1 rounded-full">
                        {job.departmentName}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors leading-snug">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium my-3">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-[#0066cc]" />
                        <span>{job.location}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} className="text-[#0066cc]" />
                        <span>{job.experience}</span>
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {job.desc}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {job.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-100 text-[11px] font-semibold text-slate-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={() => setApplyingJob(job)}
                      className="w-full py-2.5 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] text-white font-bold text-xs shadow-md shadow-blue-500/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Apply For This Role</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8 max-w-xl mx-auto">
              <Briefcase size={36} className="text-slate-300 mx-auto mb-3" />
              <div className="text-base font-bold text-slate-800">No matching positions found</div>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for another keyword or select "All Roles". You can also send a general inquiry below.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. APPLICATION MODAL
      ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {applyingJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200"
            >
              {/* Close Button */}
              <button
                onClick={() => setApplyingJob(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 cursor-pointer"
              >
                <X size={18} />
              </button>

              {applicationSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Application Received!</h3>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                    Thank you for applying for <strong>{applyingJob.title}</strong>. Our technical recruiting team will review your profile and reach out within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0066cc]">
                      FAST-TRACK APPLICATION
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-0.5">
                      {applyingJob.title}
                    </h3>
                    <div className="text-xs text-slate-500">{applyingJob.location} · {applyingJob.type}</div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={candidateData.name}
                        onChange={(e) => setCandidateData({ ...candidateData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:border-[#0066cc] focus:ring-1 focus:ring-blue-500 outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={candidateData.email}
                          onChange={(e) => setCandidateData({ ...candidateData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:border-[#0066cc] focus:ring-1 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+44 7911 123456"
                          value={candidateData.phone}
                          onChange={(e) => setCandidateData({ ...candidateData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:border-[#0066cc] focus:ring-1 focus:ring-blue-500 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">LinkedIn or GitHub Profile *</label>
                      <input
                        type="url"
                        required
                        placeholder="https://linkedin.com/in/johndoe"
                        value={candidateData.linkedin}
                        onChange={(e) => setCandidateData({ ...candidateData, linkedin: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:border-[#0066cc] focus:ring-1 focus:ring-blue-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Total Years of Relevant Experience *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 5 years in Next.js & PyTorch"
                        value={candidateData.experience}
                        onChange={(e) => setCandidateData({ ...candidateData, experience: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:border-[#0066cc] focus:ring-1 focus:ring-blue-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send size={14} />
                      <span>Submit Application</span>
                    </button>
                    <p className="text-[10px] text-slate-400 text-center mt-2">
                      All candidate inquiries are handled strictly under mutual confidential hiring protocols.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ─────────────────────────────────────────────────────────────
          5. GENERAL INQUIRIES & RESUME DROP
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0a192f] text-white text-center relative overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Don't See Your Exact Role? <br />
            <span className="text-[#38bdf8]">We Are Always Hiring Exceptional Talent.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Send your resume, open-source repositories, or architecture portfolio directly to our engineering directors at{" "}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-cyan-400 underline font-semibold">
              {SITE_CONFIG.email}
            </a>
            . We review every profile.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${SITE_CONFIG.email}?subject=General%20Engineering%20Application`}
              className="px-8 py-3.5 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white text-sm font-bold shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Send Open Application
            </a>
            <Link
              href="/about"
              className="px-8 py-3.5 rounded-full border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-white text-sm font-bold hover:border-slate-600 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Learn More About Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
