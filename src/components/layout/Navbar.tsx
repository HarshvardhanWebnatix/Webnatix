"use client";

import Link from "next/link";
import {
  Mail,
  MessageCircle,
  Send,
  Calendar,
  ChevronDown,
  Menu,
  X,
  Headphones,
  Rocket,
  Globe,
  PhoneCall,
  Code2,
  Building2,
  Cpu,
  BookOpen,
  Users,
  ArrowRight,
  Sparkles,
  Layers,
  Database,
  TrendingUp,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Monitor,
  Smartphone,
  Server,
  Zap
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

// ─── EXACT SITEMAP & DEVELOPMENT ROADMAP DATA ─────────────────────

export const HEADER_NAV_DATA = [
  {
    key: "services",
    label: "Services",
    href: "/services",
    isMega: true,
    categories: [
      {
        title: "Design & Development",
        items: [
          { label: "Website Development", href: "/services/website-development" },
          { label: "Mobile App Development", href: "/services/mobile-app-development" },
          { label: "E-commerce Development", href: "/services/ecommerce-development" },
          { label: "Software Development", href: "/services/full-stack-development" },
          { label: "Game Development", href: "/casino-game-development" },
          { label: "API Development", href: "/services/api-development" },
          { label: "Custom Software Integration", href: "/services/custom-software-integration" },
        ],
      },
      {
        title: "Enterprise Solutions",
        items: [
          { label: "CRM Solutions", href: "/services/crm-solutions" },
          { label: "Cloud Solutions", href: "/services/cloud-solutions" },
          { label: "AI & Machine Learning Solutions", href: "/services/ai-machine-learning" },
          { label: "Salesforce Solutions", href: "/services/salesforce-solutions" },
          { label: "HubSpot Solutions", href: "/services/hubspot-solutions" },
          { label: "Zoho Solutions", href: "/services/zoho-solutions" },
        ],
      },
      {
        title: "Digital Marketing",
        items: [
          { label: "Search Engine Optimization (SEO)", href: "/services/search-engine-optimization" },
          { label: "Social Media Marketing (SMM)", href: "/services/social-media-marketing" },
          { label: "Pay-Per-Click Advertising (PPC)", href: "/services/pay-per-click" },
          { label: "Performance Optimization", href: "/services/performance-optimization" },
        ],
      },
      {
        title: "Data Solutions",
        items: [
          { label: "Data Strategy Consulting", href: "/services/data-strategy" },
          { label: "Data Processing Solutions", href: "/services/data-processing" },
          { label: "Data Governance Solutions", href: "/services/data-governance" },
          { label: "Data Storage & Quality Management", href: "/services/data-storage" },
          { label: "Data Analytics & Visualization", href: "/services/data-analytics" },
          { label: "Cloud Data Migration & Power BI", href: "/services/cloud-data-migration" },
        ],
      },
      {
        title: "AI & Emerging Technologies",
        items: [
          { label: "Custom AI Development", href: "/services/custom-ai" },
          { label: "AI Consulting & Strategy", href: "/services/ai-consulting" },
          { label: "AI Business Intelligence", href: "/services/ai-business-intelligence" },
          { label: "Large Language Model (LLM) Solutions", href: "/services/llm-solutions" },
          { label: "AI-Powered Customer Experience", href: "/services/ai-customer-experience" },
          { label: "Agentic AI Solutions", href: "/services/agentic-ai" },
          { label: "Blockchain Development", href: "/services/blockchain-development" },
        ],
      },
    ],
  },
  {
    key: "industries",
    label: "Industries",
    href: "/industries",
    isMega: true,
    categories: [
      {
        title: "Finance & Enterprise",
        items: [
          { label: "Banking & Payments", href: "/industries#banking" },
          { label: "Finance & Wealth Tech", href: "/industries#finance" },
          { label: "Mortgage & Lending", href: "/industries#mortgage" },
          { label: "Insurance & Legal Tech", href: "/industries#insurance" },
          { label: "Consulting & Corporate", href: "/industries#consulting" },
        ],
      },
      {
        title: "Consumer & Commerce",
        items: [
          { label: "Retail & E-commerce", href: "/industries#retail" },
          { label: "FMCG & Consumer Goods", href: "/industries#fmcg" },
          { label: "Food & Beverage", href: "/industries#food-beverage" },
          { label: "Travel & Hospitality", href: "/industries#travel" },
          { label: "Media & Entertainment", href: "/industries#media" },
          { label: "Sports & Media", href: "/industries#sports" },
        ],
      },
      {
        title: "Healthcare & Essential",
        items: [
          { label: "Healthcare & Life Sciences", href: "/industries#healthcare" },
          { label: "E-learning & Education", href: "/industries#education" },
          { label: "Real Estate & PropTech", href: "/industries#real-estate" },
          { label: "Logistics & Supply Chain", href: "/industries#logistics" },
          { label: "Automotive & Aviation", href: "/industries#automotive" },
          { label: "Energy, Utilities & Oil/Gas", href: "/industries#energy" },
        ],
      },
    ],
  },
  {
    key: "technologies",
    label: "Technologies",
    href: "/technologies",
    isMega: true,
    categories: [
      {
        title: "Mobile App Technologies",
        items: [
          { label: "iOS Development (Swift)", href: "/technologies#ios" },
          { label: "Android Development (Kotlin)", href: "/technologies#android" },
          { label: "React Native", href: "/technologies#react-native" },
          { label: "Flutter Cross-Platform", href: "/technologies#flutter" },
        ],
      },
      {
        title: "Custom & Full-Stack",
        items: [
          { label: "MERN & MEAN Stack", href: "/technologies#mern" },
          { label: "React.js & Next.js Full-Stack", href: "/technologies#nextjs" },
          { label: "Node.js, Python & .NET", href: "/technologies#python" },
          { label: "PHP, Laravel & Angular", href: "/technologies#laravel" },
          { label: "Java Full-Stack & Spring", href: "/technologies#java" },
        ],
      },
      {
        title: "CMS, E-com & CRM",
        items: [
          { label: "Shopify Development", href: "/technologies#shopify" },
          { label: "WordPress & Custom CMS", href: "/technologies#wordpress" },
          { label: "HubSpot CMS & Solutions", href: "/technologies#hubspot-cms" },
          { label: "Salesforce Platform", href: "/technologies#salesforce" },
          { label: "Zoho Business Suite", href: "/technologies#zoho" },
        ],
      },
    ],
  },
  {
    key: "resources",
    label: "Industry Insights",
    href: "/resources",
    isMega: false,
    items: [
      { label: "Blog & Technical Articles", href: "/resources/blog" },
      { label: "Technology Insights", href: "/resources/insights" },
      { label: "Industry News & Trends", href: "/resources/news" },
      { label: "Case Studies & Success Stories", href: "/work" },
      { label: "Whitepapers & Reports", href: "/resources/whitepapers" },
      { label: "Guides & Developer Resources", href: "/resources/guides" },
    ],
  },
  {
    key: "company",
    label: "Company",
    href: "/about",
    isMega: false,
    items: [
      { label: "About Us", href: "/about" },
      { label: "Our Team & Leadership", href: "/about#team" },
      { label: "Our Expertise", href: "/about#expertise" },
      { label: "Our Development Process", href: "/about#process" },
      { label: "Careers & Openings", href: "/about#careers" },
      { label: "Strategic Partnerships", href: "/about#partnerships" },
    ],
  },
];

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 w-full bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
      onMouseLeave={() => setActiveMenu(null)}
    >

      {/* ── 1. Top Utility Bar ── */}
      <div className="hidden bg-[#0a192f] text-xs text-white/90 lg:block">
        <div className="mx-auto flex min-h-9 max-w-[1780px] items-center justify-between gap-x-2 px-4 sm:px-8 lg:px-12 xl:px-16 py-1.5">

          {/* Left contact info */}
          <div className="flex items-center gap-x-2 xl:gap-x-4 shrink-0">
            <div className="flex items-center gap-3 xl:gap-5">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-1.5 transition-colors hover:text-white text-gray-200"
              >
                <Mail size={13} className="text-[#38bdf8]" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <span className="text-white/30">|</span>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-1.5 transition-colors hover:text-white text-gray-200"
              >
                <PhoneCall size={13} className="text-[#38bdf8]" />
                <span>{SITE_CONFIG.phone}</span>
              </a>
              <span className="text-white/30">|</span>
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-white text-gray-200"
              >
                <MessageCircle size={13} className="text-[#25D366]" />
                WhatsApp
              </a>
              <span className="text-white/30">|</span>
              <a
                href={SITE_CONFIG.telegram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-white text-gray-200"
              >
                <Send size={13} className="text-[#38bdf8]" />
                Telegram
              </a>
              <span className="text-white/30">|</span>
              <Link
                href="/contact"
                className="flex items-center gap-1.5 transition-colors hover:text-white text-gray-200"
              >
                <Calendar size={13} className="text-[#38bdf8]" />
                Schedule a Consultation
              </Link>

              {/* Request a Quote Pill */}
              <button
                onClick={() => window.dispatchEvent(new Event("open-lead-modal"))}
                className="inline-flex items-center gap-1.5 bg-[#0066cc] text-white font-bold text-[11px] px-3.5 py-1 rounded-full shadow-sm hover:bg-[#0052a3] transition-colors ml-1 cursor-pointer"
              >
                <Rocket size={12} className="text-white" />
                Request a Quote
              </button>
            </div>
          </div>

          {/* Right Regions & Language */}
          <div className="flex items-center gap-2.5 text-[11.5px] text-gray-300">
            <span>North America</span>
            <span className="text-white/20">|</span>
            <span>Europe</span>
            <span className="text-white/20">|</span>
            <span>APAC</span>
            <span className="text-white/20">|</span>
            <span>Middle East</span>
            <span className="text-white/30">|</span>
            <span className="flex items-center gap-1 cursor-pointer hover:text-white">
              <Globe size={11} /> Global Delivery
            </span>
          </div>

        </div>
      </div>

      {/* ── 2. Main White Navigation Bar ── */}
      <div className="relative mx-auto flex h-20 max-w-[1780px] items-center justify-between gap-0 px-4 sm:px-8 lg:px-12 xl:px-16">

        {/* Brand Logo with exact official Webnatix logo */}
        <Link href="/" className="group flex items-center gap-3 shrink-0" aria-label="Webnatix Technologies — Home">
          <img
            src="/assets/navbar/webnatix-logo.png"
            alt="Webnatix Technologies"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="flex flex-col">
            <span className="text-lg font-extrabold text-slate-900 leading-tight tracking-tight">
              Webnatix <span className="text-[#0066cc] font-semibold text-xs">Technologies</span>
            </span>
            <span className="text-[9.5px] uppercase font-bold tracking-widest text-slate-400">
              IT Consulting &amp; Technology Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden flex-1 items-center justify-center xl:flex">
          <ul className="flex items-center gap-1 list-none">
            {HEADER_NAV_DATA.map((item) => {
              const isOpen = activeMenu === item.key;
              return (
                <li
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.key)}
                >
                  <button className={cn(
                    "relative flex items-center gap-1 rounded-md px-3.5 py-2.5 text-[13.5px] font-semibold transition-colors whitespace-nowrap",
                    isOpen ? "text-[#0066cc]" : "text-gray-800 hover:text-[#0066cc]"
                  )}>
                    <span>{item.label}</span>
                    <ChevronDown
                      size={13}
                      className={cn(
                        "transition-transform duration-200 mt-0.5 text-gray-400",
                        isOpen && "rotate-180 text-[#0066cc]"
                      )}
                    />
                    {isOpen && (
                      <span className="absolute -bottom-2.5 left-2 right-2 h-0.5 bg-[#0066cc] rounded-full" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Contact Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => window.dispatchEvent(new Event("open-lead-modal"))}
            className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#0052a3] hover:shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <Headphones size={15} />
            Request a Quote
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 xl:hidden ml-auto sm:ml-2"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* ── 3. Desktop Hover Mega-Menus (Exact Floating Card matching metablock UI) ── */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full z-50 pt-2 pb-8 px-4 sm:px-6 lg:px-8 pointer-events-auto"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="mx-auto max-w-[1620px] rounded-3xl bg-white p-6 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-200/90">

              {/* ═══════════════ MEGA MENU: SERVICES ═══════════════ */}
              {activeMenu === "services" && (
                <div className="space-y-6">
                  {/* Top Bar Label */}
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0066cc]">
                      Explore Full Technology &amp; Engineering Services
                    </span>
                    <Link
                      href="/services"
                      onClick={() => setActiveMenu(null)}
                      className="text-xs font-semibold text-[#0066cc] hover:underline flex items-center gap-1"
                    >
                      View All Services Overview <ArrowRight size={13} />
                    </Link>
                  </div>

                  {/* Top Grid: 3 Categories + 1 Showcase Card */}
                  <div className="grid grid-cols-12 gap-7 items-stretch">
                    
                    {/* Column 1: CORE PLATFORMS */}
                    <div className="col-span-3 space-y-3">
                      <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-[#0066cc]">
                          <Layers size={13} />
                        </span>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0066cc]">
                          CORE PLATFORMS
                        </span>
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Web & SaaS Platforms", sub: "Next.js · React · Cloud Native", href: "/services/website-development", isNew: false },
                          { title: "Mobile App Development", sub: "iOS · Android · Cross-Platform", href: "/services/mobile-app-development", isNew: false },
                          { title: "Enterprise Full Stack", sub: "Multi-tenant · Scalable Architecture", href: "/services/full-stack-development", isNew: true },
                          { title: "Custom APIs & Microservices", sub: "Distributed · Sub-50ms SLA", href: "/services/api-development", isNew: false },
                          { title: "E-Commerce Engines", sub: "Shopify · Custom Checkout", href: "/services/ecommerce-development", isNew: false },
                        ].map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="group/item flex items-start justify-between py-2 px-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-[13px] font-bold text-gray-900 group-hover/item:text-[#0066cc] transition-colors leading-tight">
                                  {item.title}
                                </span>
                                {item.isNew && (
                                  <span className="rounded bg-emerald-500/10 text-emerald-600 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider leading-none">
                                    NEW
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-gray-400 mt-0.5 font-medium leading-tight">
                                {item.sub}
                              </p>
                            </div>
                            <ChevronRight size={13} className="text-gray-300 mt-1 shrink-0 group-hover/item:text-[#0066cc] group-hover/item:translate-x-0.5 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: AI & EMERGING TECH */}
                    <div className="col-span-3 space-y-3">
                      <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-purple-50 text-purple-600">
                          <Cpu size={13} />
                        </span>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0066cc]">
                          AI &amp; EMERGING TECH
                        </span>
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Custom AI & LLM Systems", sub: "RAG · Fine-Tuning · Vectors", href: "/services#custom-ai", isNew: true },
                          { title: "Agentic AI Automation", sub: "Autonomous Business Bots", href: "/services#agentic-ai", isNew: false },
                          { title: "AI Business Intelligence", sub: "Predictive Analytics & ML", href: "/services#ai-bi", isNew: false },
                          { title: "Blockchain & Web3", sub: "Smart Contracts · Cryptographic", href: "/services#blockchain", isNew: false },
                          { title: "Legacy Modernization", sub: "Code refactoring & Cloud Migration", href: "/services#software", isNew: false },
                        ].map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="group/item flex items-start justify-between py-2 px-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-[13px] font-bold text-gray-900 group-hover/item:text-[#0066cc] transition-colors leading-tight">
                                  {item.title}
                                </span>
                                {item.isNew && (
                                  <span className="rounded bg-emerald-500/10 text-emerald-600 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider leading-none">
                                    NEW
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-gray-400 mt-0.5 font-medium leading-tight">
                                {item.sub}
                              </p>
                            </div>
                            <ChevronRight size={13} className="text-gray-300 mt-1 shrink-0 group-hover/item:text-[#0066cc] group-hover/item:translate-x-0.5 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 3: DATA & ENTERPRISE + BUSINESS GROWTH */}
                    <div className="col-span-3 space-y-3">
                      <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-50 text-indigo-600">
                          <Database size={13} />
                        </span>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0066cc]">
                          DATA &amp; ENTERPRISE
                        </span>
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Data Strategy & Governance", sub: "Quality & ETL Pipelines", href: "/services#data-strategy", isNew: false },
                          { title: "Data Analytics & Power BI", sub: "Real-time Dashboards", href: "/services#power-bi", isNew: false },
                          { title: "Cloud DevOps & Architecture", sub: "AWS · GCP · Docker · K8s", href: "/services#cloud", isNew: false },
                        ].map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="group/item flex items-start justify-between py-2 px-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-[13px] font-bold text-gray-900 group-hover/item:text-[#0066cc] transition-colors leading-tight">
                                  {item.title}
                                </span>
                              </div>
                              <p className="text-[11px] text-gray-400 mt-0.5 font-medium leading-tight">
                                {item.sub}
                              </p>
                            </div>
                            <ChevronRight size={13} className="text-gray-300 mt-1 shrink-0 group-hover/item:text-[#0066cc] group-hover/item:translate-x-0.5 transition-all" />
                          </Link>
                        ))}

                        {/* Business & Growth Subgroup */}
                        <div className="pt-2 mt-2 border-t border-slate-100">
                          <div className="text-[10px] font-extrabold uppercase tracking-wider text-rose-500 mb-1 flex items-center gap-1">
                            <TrendingUp size={11} /> BUSINESS &amp; GROWTH SYSTEMS
                          </div>
                          {[
                            { title: "SEO & Speed Engineering", sub: "Core Web Vitals & Conversion", href: "/services#seo" },
                            { title: "CRM & Salesforce Suite", sub: "HubSpot · Salesforce · Zoho", href: "/services#crm" },
                          ].map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="group/item flex items-start justify-between py-1.5 px-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                            >
                              <div>
                                <div className="text-[12.5px] font-bold text-gray-900 group-hover/item:text-[#0066cc] transition-colors">
                                  {item.title}
                                </div>
                                <p className="text-[10.5px] text-gray-400 mt-0.5 leading-tight">
                                  {item.sub}
                                </p>
                              </div>
                              <ChevronRight size={13} className="text-gray-300 mt-1 shrink-0 group-hover/item:text-[#0066cc] group-hover/item:translate-x-0.5 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Column 4: Right Featured Showcase Card (Matches metablock preview card) */}
                    <div className="col-span-3">
                      <div className="h-full rounded-2xl bg-[#0a192f] border border-slate-800 p-4 text-white flex flex-col justify-between relative overflow-hidden">
                        
                        {/* Top Console Image Header */}
                        <div>
                          <div className="rounded-xl overflow-hidden bg-slate-950 p-2 border border-slate-800/80 mb-3">
                            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-1.5 border-b border-slate-800 mb-2">
                              <span className="flex items-center gap-1 text-slate-300 font-bold">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                SOFTWARE ENGINE
                              </span>
                              <span className="text-emerald-400">99.99% SLA</span>
                            </div>
                            <img
                              src="/assets/home/hero/hero-image.png"
                              alt="Software Platform Console"
                              className="w-full h-24 object-cover rounded-lg opacity-90"
                            />
                          </div>

                          <h4 className="text-sm font-extrabold text-white leading-snug">
                            Scalable Digital Architecture &amp; SaaS
                          </h4>
                          <p className="text-[11.5px] text-slate-300 mt-1.5 leading-relaxed">
                            Turnkey engineering, high-throughput microservices &amp; bespoke AI solutions built for global scale.
                          </p>
                        </div>

                        {/* Card CTAs */}
                        <div className="pt-4 space-y-2">
                          <button
                            onClick={() => {
                              setActiveMenu(null);
                              window.dispatchEvent(new Event("open-lead-modal"));
                            }}
                            className="w-full py-2.5 px-4 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-blue-900/40 transition-all cursor-pointer"
                          >
                            <span>Start Project</span>
                            <ArrowRight size={13} />
                          </button>
                          <Link
                            href="/contact"
                            onClick={() => setActiveMenu(null)}
                            className="w-full py-1.5 text-center text-[11px] font-semibold text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                          >
                            <span>Schedule Consultation</span>
                            <Calendar size={12} className="text-[#38bdf8]" />
                          </Link>
                        </div>

                      </div>
                    </div>

                  </div>

                  {/* Middle Trust Bar ("TRUSTED BY 500+ OPERATORS / FOUNDERS") */}
                  <div className="pt-2">
                    <div className="relative flex items-center justify-center mb-3">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-100" />
                      </div>
                      <div className="relative bg-white px-3 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 flex items-center gap-1">
                        <ShieldCheck size={12} className="text-[#0066cc]" />
                        <span>TRUSTED BY 500+ CLIENTS &amp; TECH LEADERS</span>
                      </div>
                    </div>

                    {/* Infinite Smooth Right-to-Left Marquee */}
                    <div className="relative overflow-hidden w-full py-1">
                      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent" />
                      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent" />
                      <div className="animate-marquee-rtl flex items-center gap-3">
                        {[
                          { name: "Next.js 16", sub: "React App Router" },
                          { name: "AWS Cloud", sub: "Cloud Infrastructure" },
                          { name: "Google Cloud", sub: "Compute & Vertex AI" },
                          { name: "PostgreSQL", sub: "Enterprise Data" },
                          { name: "Docker & K8s", sub: "Containerization" },
                          { name: "OpenAI", sub: "AI Models & LLM" },
                          { name: "Supabase", sub: "Realtime Backend" },
                          { name: "TypeScript", sub: "Type-Safe Architecture" },
                          // Duplicated for seamless loop
                          { name: "Next.js 16", sub: "React App Router" },
                          { name: "AWS Cloud", sub: "Cloud Infrastructure" },
                          { name: "Google Cloud", sub: "Compute & Vertex AI" },
                          { name: "PostgreSQL", sub: "Enterprise Data" },
                          { name: "Docker & K8s", sub: "Containerization" },
                          { name: "OpenAI", sub: "AI Models & LLM" },
                          { name: "Supabase", sub: "Realtime Backend" },
                          { name: "TypeScript", sub: "Type-Safe Architecture" },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="rounded-xl border border-slate-100 bg-slate-50/80 px-3.5 py-1.5 flex items-center gap-2 whitespace-nowrap hover:bg-white hover:border-[#0066cc]/40 hover:shadow-xs transition-all cursor-default"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] shrink-0" />
                            <span className="text-xs font-bold text-slate-800">{item.name}</span>
                            <span className="text-[10px] text-slate-400 font-medium pl-1 border-l border-slate-200">
                              {item.sub}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Quick-Action Bar (4 Interactive Cards) */}
                  <div className="grid grid-cols-4 gap-4 pt-1">
                    {[
                      {
                        title: "Request Demo",
                        sub: "30-min architecture walkthrough",
                        icon: Rocket,
                        color: "bg-blue-50 text-[#0066cc]",
                        action: () => window.dispatchEvent(new Event("open-lead-modal")),
                      },
                      {
                        title: "Capabilities Tour",
                        sub: "Full-stack portfolio & solutions",
                        icon: Layers,
                        color: "bg-purple-50 text-purple-600",
                        href: "/services",
                      },
                      {
                        title: "Get Pricing",
                        sub: "Transparent fixed-price quote",
                        icon: Sparkles,
                        color: "bg-red-50 text-[#e52320]",
                        action: () => window.dispatchEvent(new Event("open-lead-modal")),
                      },
                      {
                        title: "Talk to Expert",
                        sub: "Direct senior technical advisor call",
                        icon: Headphones,
                        color: "bg-emerald-50 text-emerald-600",
                        href: "/contact",
                      },
                    ].map((card, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setActiveMenu(null);
                          if (card.action) card.action();
                        }}
                        className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-3.5 flex items-center gap-3.5 hover:bg-white hover:border-[#0066cc]/40 hover:shadow-md transition-all cursor-pointer group"
                      >
                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform", card.color)}>
                          <card.icon size={18} />
                        </div>
                        <div className="text-left overflow-hidden">
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors truncate">
                            {card.title}
                          </div>
                          <div className="text-[10.5px] text-slate-400 truncate">
                            {card.sub}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {/* ═══════════════ MEGA MENU: INDUSTRIES ═══════════════ */}
              {activeMenu === "industries" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0066cc]">
                      Domain Expertise Across Regulated &amp; High-Growth Sectors
                    </span>
                    <Link
                      href="/industries"
                      onClick={() => setActiveMenu(null)}
                      className="text-xs font-semibold text-[#0066cc] hover:underline flex items-center gap-1"
                    >
                      Explore All Industries <ArrowRight size={13} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-12 gap-7 items-stretch">
                    
                    {/* Col 1 */}
                    <div className="col-span-3 space-y-3">
                      <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-[#0066cc]">
                          <Building2 size={13} />
                        </span>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0066cc]">
                          FINANCE &amp; ENTERPRISE
                        </span>
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Banking & Payments", sub: "Wallets, ISO 20022 & Core Banking", href: "/industries#banking" },
                          { title: "Finance & Wealth Tech", sub: "Portfolio & Robo-Advisory Engines", href: "/industries#finance" },
                          { title: "Mortgage & Lending", sub: "Automated Origination & Risk", href: "/industries#mortgage" },
                          { title: "Insurance Tech", sub: "Underwriting & Policy Portals", href: "/industries#insurance" },
                          { title: "Consulting & Corporate", sub: "Enterprise Dashboards & ERP", href: "/industries#consulting" },
                        ].map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="group/item flex items-start justify-between py-2 px-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="text-[13px] font-bold text-gray-900 group-hover/item:text-[#0066cc] transition-colors leading-tight">
                                {item.title}
                              </div>
                              <p className="text-[11px] text-gray-400 mt-0.5 font-medium leading-tight">
                                {item.sub}
                              </p>
                            </div>
                            <ChevronRight size={13} className="text-gray-300 mt-1 shrink-0 group-hover/item:text-[#0066cc] group-hover/item:translate-x-0.5 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Col 2 */}
                    <div className="col-span-3 space-y-3">
                      <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-purple-50 text-purple-600">
                          <Globe size={13} />
                        </span>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0066cc]">
                          CONSUMER &amp; COMMERCE
                        </span>
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Retail & E-commerce", sub: "Headless Cart & Omnichannel", href: "/industries#retail" },
                          { title: "FMCG & Consumer Goods", sub: "Direct-to-Consumer & Inventory", href: "/industries#fmcg" },
                          { title: "Food & Beverage", sub: "Ordering & Cloud Kitchen Ops", href: "/industries#food-beverage" },
                          { title: "Travel & Hospitality", sub: "Dynamic Booking & Itineraries", href: "/industries#travel" },
                          { title: "Sports & Media", sub: "Real-time Telemetry & Engagement", href: "/industries#sports" },
                        ].map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="group/item flex items-start justify-between py-2 px-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="text-[13px] font-bold text-gray-900 group-hover/item:text-[#0066cc] transition-colors leading-tight">
                                {item.title}
                              </div>
                              <p className="text-[11px] text-gray-400 mt-0.5 font-medium leading-tight">
                                {item.sub}
                              </p>
                            </div>
                            <ChevronRight size={13} className="text-gray-300 mt-1 shrink-0 group-hover/item:text-[#0066cc] group-hover/item:translate-x-0.5 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Col 3 */}
                    <div className="col-span-3 space-y-3">
                      <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                          <ShieldCheck size={13} />
                        </span>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0066cc]">
                          HEALTHCARE &amp; ESSENTIAL
                        </span>
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Healthcare & Life Sciences", sub: "HIPAA-Ready Telehealth & EHR", href: "/industries#healthcare", isNew: true },
                          { title: "E-learning & Education", sub: "LMS, Interactive Classrooms", href: "/industries#education" },
                          { title: "Real Estate & PropTech", sub: "Escrow, Listings & 3D Tours", href: "/industries#real-estate" },
                          { title: "Logistics & Supply Chain", sub: "IoT Tracking, Fleet Routing", href: "/industries#logistics" },
                          { title: "Energy & Utilities", sub: "Smart Grid & Telemetry Systems", href: "/industries#energy" },
                        ].map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="group/item flex items-start justify-between py-2 px-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-[13px] font-bold text-gray-900 group-hover/item:text-[#0066cc] transition-colors leading-tight">
                                  {item.title}
                                </span>
                                {item.isNew && (
                                  <span className="rounded bg-emerald-500/10 text-emerald-600 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider leading-none">
                                    NEW
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-gray-400 mt-0.5 font-medium leading-tight">
                                {item.sub}
                              </p>
                            </div>
                            <ChevronRight size={13} className="text-gray-300 mt-1 shrink-0 group-hover/item:text-[#0066cc] group-hover/item:translate-x-0.5 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Col 4: Showcase Card */}
                    <div className="col-span-3">
                      <div className="h-full rounded-2xl bg-[#0a192f] border border-slate-800 p-4 text-white flex flex-col justify-between relative overflow-hidden">
                        <div>
                          <div className="rounded-xl overflow-hidden bg-slate-950 p-2 border border-slate-800/80 mb-3">
                            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-1.5 border-b border-slate-800 mb-2">
                              <span className="text-blue-300 font-bold">INDUSTRY BLUEPRINTS</span>
                              <span className="text-emerald-400">Compliance Ready</span>
                            </div>
                            <img
                              src="/assets/home/hero/hero-image.png"
                              alt="Industry Architecture"
                              className="w-full h-24 object-cover rounded-lg opacity-90"
                            />
                          </div>
                          <h4 className="text-sm font-extrabold text-white leading-snug">
                            Regulatory-Ready Domain Software
                          </h4>
                          <p className="text-[11.5px] text-slate-300 mt-1.5 leading-relaxed">
                            Tailored software engineered for strict compliance, high volume transactions, and regional security frameworks.
                          </p>
                        </div>
                        <div className="pt-4 space-y-2">
                          <button
                            onClick={() => {
                              setActiveMenu(null);
                              window.dispatchEvent(new Event("open-lead-modal"));
                            }}
                            className="w-full py-2.5 px-4 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-blue-900/40 transition-all cursor-pointer"
                          >
                            <span>Discuss Your Sector</span>
                            <ArrowRight size={13} />
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Middle Trust Bar */}
                  <div className="pt-2">
                    <div className="relative flex items-center justify-center mb-3">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-100" />
                      </div>
                      <div className="relative bg-white px-3 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 flex items-center gap-1">
                        <ShieldCheck size={12} className="text-[#0066cc]" />
                        <span>GLOBAL COMPLIANCE &amp; ACCREDITED PROTOCOLS</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-6 gap-3">
                      {["SOC-2 Type II", "ISO 27001", "HIPAA Ready", "GDPR Certified", "PCI-DSS Level 1", "OWASP Top 10"].map((badge, idx) => (
                        <div key={idx} className="rounded-xl border border-slate-100 bg-slate-50/70 p-2 text-center text-xs font-bold text-slate-700">
                          {badge}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Quick-Action Cards */}
                  <div className="grid grid-cols-4 gap-4 pt-1">
                    {[
                      { title: "Schedule Scoping Call", sub: "Domain engineer consultation", icon: Calendar, color: "bg-blue-50 text-[#0066cc]" },
                      { title: "Industry Case Studies", sub: "Real-world scale benchmarks", icon: BookOpen, color: "bg-purple-50 text-purple-600" },
                      { title: "Request Security Whitepaper", sub: "Confidential architecture audit", icon: ShieldCheck, color: "bg-red-50 text-[#e52320]" },
                      { title: "Talk to Architect", sub: "Direct senior technical advisor call", icon: Headphones, color: "bg-emerald-50 text-emerald-600" },
                    ].map((card, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setActiveMenu(null);
                          window.dispatchEvent(new Event("open-lead-modal"));
                        }}
                        className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-3.5 flex items-center gap-3.5 hover:bg-white hover:border-[#0066cc]/40 hover:shadow-md transition-all cursor-pointer group"
                      >
                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform", card.color)}>
                          <card.icon size={18} />
                        </div>
                        <div className="text-left overflow-hidden">
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors truncate">{card.title}</div>
                          <div className="text-[10.5px] text-slate-400 truncate">{card.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {/* ═══════════════ MEGA MENU: TECHNOLOGIES ═══════════════ */}
              {activeMenu === "technologies" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0066cc]">
                      Modern Full-Stack, Mobile, Cloud &amp; Enterprise Platforms
                    </span>
                    <Link
                      href="/technologies"
                      onClick={() => setActiveMenu(null)}
                      className="text-xs font-semibold text-[#0066cc] hover:underline flex items-center gap-1"
                    >
                      View Full Technology Matrix <ArrowRight size={13} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-12 gap-7 items-stretch">
                    
                    {/* Col 1 */}
                    <div className="col-span-3 space-y-3">
                      <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-[#0066cc]">
                          <Smartphone size={13} />
                        </span>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0066cc]">
                          MOBILE APP TECH
                        </span>
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "iOS Development", sub: "Swift, SwiftUI & Metal Performance", href: "/technologies#ios" },
                          { title: "Android Development", sub: "Kotlin, Compose & Material Design", href: "/technologies#android" },
                          { title: "React Native", sub: "Cross-Platform with Native Parity", href: "/technologies#react-native" },
                          { title: "Flutter Framework", sub: "Fast Multi-Platform Compiled Apps", href: "/technologies#flutter" },
                        ].map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="group/item flex items-start justify-between py-2 px-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="text-[13px] font-bold text-gray-900 group-hover/item:text-[#0066cc] transition-colors leading-tight">
                                {item.title}
                              </div>
                              <p className="text-[11px] text-gray-400 mt-0.5 font-medium leading-tight">
                                {item.sub}
                              </p>
                            </div>
                            <ChevronRight size={13} className="text-gray-300 mt-1 shrink-0 group-hover/item:text-[#0066cc] group-hover/item:translate-x-0.5 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Col 2 */}
                    <div className="col-span-3 space-y-3">
                      <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-purple-50 text-purple-600">
                          <Code2 size={13} />
                        </span>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0066cc]">
                          FULL-STACK &amp; BACKEND
                        </span>
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Next.js & React 19", sub: "Edge Runtime, SSR & RSC", href: "/technologies#nextjs", isNew: true },
                          { title: "Node.js & TypeScript", sub: "High-Throughput Microservices", href: "/technologies#mern" },
                          { title: "Python & FastAPI", sub: "AI Models, PyTorch & Celery", href: "/technologies#python" },
                          { title: "PHP & Laravel", sub: "Robust REST & GraphQL APIs", href: "/technologies#laravel" },
                          { title: "Java & Spring Boot", sub: "Enterprise Fault-Tolerant Clusters", href: "/technologies#java" },
                        ].map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="group/item flex items-start justify-between py-2 px-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-[13px] font-bold text-gray-900 group-hover/item:text-[#0066cc] transition-colors leading-tight">
                                  {item.title}
                                </span>
                                {item.isNew && (
                                  <span className="rounded bg-emerald-500/10 text-emerald-600 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider leading-none">
                                    NEW
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-gray-400 mt-0.5 font-medium leading-tight">
                                {item.sub}
                              </p>
                            </div>
                            <ChevronRight size={13} className="text-gray-300 mt-1 shrink-0 group-hover/item:text-[#0066cc] group-hover/item:translate-x-0.5 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Col 3 */}
                    <div className="col-span-3 space-y-3">
                      <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-50 text-indigo-600">
                          <Layers size={13} />
                        </span>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0066cc]">
                          CMS, CRM &amp; CLOUD
                        </span>
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Shopify & Hydrogen", sub: "Custom Theme & Checkout APIs", href: "/technologies#shopify" },
                          { title: "WordPress & Headless CMS", sub: "Custom Gutenberg & Decoupled", href: "/technologies#wordpress" },
                          { title: "HubSpot Solutions", sub: "Custom Integrations & Marketing", href: "/technologies#hubspot-cms" },
                          { title: "Salesforce & Zoho", sub: "Lightning Web Components & CRM", href: "/technologies#salesforce" },
                        ].map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="group/item flex items-start justify-between py-2 px-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <div className="text-[13px] font-bold text-gray-900 group-hover/item:text-[#0066cc] transition-colors leading-tight">
                                {item.title}
                              </div>
                              <p className="text-[11px] text-gray-400 mt-0.5 font-medium leading-tight">
                                {item.sub}
                              </p>
                            </div>
                            <ChevronRight size={13} className="text-gray-300 mt-1 shrink-0 group-hover/item:text-[#0066cc] group-hover/item:translate-x-0.5 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Col 4: Showcase Card */}
                    <div className="col-span-3">
                      <div className="h-full rounded-2xl bg-[#0a192f] border border-slate-800 p-4 text-white flex flex-col justify-between relative overflow-hidden">
                        <div>
                          <div className="rounded-xl overflow-hidden bg-slate-950 p-2 border border-slate-800/80 mb-3">
                            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-1.5 border-b border-slate-800 mb-2">
                              <span className="text-blue-300 font-bold">TECH STACK ENGINE</span>
                              <span className="text-emerald-400">Zero Lock-in</span>
                            </div>
                            <img
                              src="/assets/home/hero/hero-image.png"
                              alt="Technology Matrix"
                              className="w-full h-24 object-cover rounded-lg opacity-90"
                            />
                          </div>
                          <h4 className="text-sm font-extrabold text-white leading-snug">
                            100% Code &amp; IP Ownership
                          </h4>
                          <p className="text-[11.5px] text-slate-300 mt-1.5 leading-relaxed">
                            No proprietary frameworks or lock-in. Full modern codebase transfer upon project milestones.
                          </p>
                        </div>
                        <div className="pt-4 space-y-2">
                          <button
                            onClick={() => {
                              setActiveMenu(null);
                              window.dispatchEvent(new Event("open-lead-modal"));
                            }}
                            className="w-full py-2.5 px-4 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-blue-900/40 transition-all cursor-pointer"
                          >
                            <span>Request Architecture Review</span>
                            <ArrowRight size={13} />
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Middle Trust Bar */}
                  <div className="pt-2">
                    <div className="relative flex items-center justify-center mb-3">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-100" />
                      </div>
                      <div className="relative bg-white px-3 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 flex items-center gap-1">
                        <ShieldCheck size={12} className="text-[#0066cc]" />
                        <span>CLOUD NATIVE DEPLOYMENTS &amp; PARTNERSHIPS</span>
                      </div>
                    </div>
                    
                    {/* Infinite Smooth Right-to-Left Marquee */}
                    <div className="relative overflow-hidden w-full py-1">
                      {/* Left & Right gradient edge fades */}
                      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent" />
                      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent" />
                      <div className="animate-marquee-rtl flex items-center gap-3">
                        {[
                          { name: "AWS Partner", detail: "Cloud Infrastructure" },
                          { name: "Google Cloud", detail: "BigQuery & Vertex AI" },
                          { name: "Microsoft Azure", detail: "Enterprise Cloud" },
                          { name: "Vercel Enterprise", detail: "Edge & Next.js" },
                          { name: "Cloudflare Edge", detail: "Zero Trust & CDN" },
                          { name: "Kubernetes (K8s)", detail: "Microservices" },
                          { name: "Docker", detail: "Containerization" },
                          { name: "Supabase", detail: "Postgres & Realtime" },
                          { name: "OpenAI", detail: "Enterprise LLM" },
                          { name: "Terraform", detail: "Infra as Code" },
                          { name: "Datadog", detail: "Telemetry & APM" },
                          { name: "Snowflake", detail: "Data Cloud" },
                          // Duplicate array for seamless infinite looping
                          { name: "AWS Partner", detail: "Cloud Infrastructure" },
                          { name: "Google Cloud", detail: "BigQuery & Vertex AI" },
                          { name: "Microsoft Azure", detail: "Enterprise Cloud" },
                          { name: "Vercel Enterprise", detail: "Edge & Next.js" },
                          { name: "Cloudflare Edge", detail: "Zero Trust & CDN" },
                          { name: "Kubernetes (K8s)", detail: "Microservices" },
                          { name: "Docker", detail: "Containerization" },
                          { name: "Supabase", detail: "Postgres & Realtime" },
                          { name: "OpenAI", detail: "Enterprise LLM" },
                          { name: "Terraform", detail: "Infra as Code" },
                          { name: "Datadog", detail: "Telemetry & APM" },
                          { name: "Snowflake", detail: "Data Cloud" },
                        ].map((badge, idx) => (
                          <div
                            key={idx}
                            className="rounded-xl border border-slate-100 bg-slate-50/80 px-3.5 py-1.5 flex items-center gap-2 whitespace-nowrap shadow-2xs hover:bg-white hover:border-[#0066cc]/40 hover:shadow-xs transition-all cursor-default"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span className="text-xs font-bold text-slate-800">{badge.name}</span>
                            <span className="text-[10px] text-slate-400 font-medium pl-1 border-l border-slate-200">
                              {badge.detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Quick-Action Cards */}
                  <div className="grid grid-cols-4 gap-4 pt-1">
                    {[
                      { title: "Request Tech Stack Audit", sub: "Analyze legacy vs modern speed", icon: Rocket, color: "bg-blue-50 text-[#0066cc]" },
                      { title: "View Tech Stacks", sub: "Full breakdown of frameworks", icon: Layers, color: "bg-purple-50 text-purple-600" },
                      { title: "Fixed Price Scope", sub: "Predictable engineering budget", icon: Sparkles, color: "bg-red-50 text-[#e52320]" },
                      { title: "Talk to Engineer", sub: "Direct senior technical advisor call", icon: Headphones, color: "bg-emerald-50 text-emerald-600" },
                    ].map((card, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setActiveMenu(null);
                          window.dispatchEvent(new Event("open-lead-modal"));
                        }}
                        className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-3.5 flex items-center gap-3.5 hover:bg-white hover:border-[#0066cc]/40 hover:shadow-md transition-all cursor-pointer group"
                      >
                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform", card.color)}>
                          <card.icon size={18} />
                        </div>
                        <div className="text-left overflow-hidden">
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors truncate">{card.title}</div>
                          <div className="text-[10.5px] text-slate-400 truncate">{card.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {/* ═══════════════ DROPDOWN: INDUSTRY INSIGHTS ═══════════════ */}
              {activeMenu === "resources" && (
                <div className="space-y-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0066cc]">
                      Industry Insights &amp; Engineering Research
                    </span>
                    <Link
                      href="/resources"
                      onClick={() => setActiveMenu(null)}
                      className="text-xs font-semibold text-[#0066cc] hover:underline flex items-center gap-1"
                    >
                      View All Articles <ArrowRight size={13} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { title: "Technical Blog", desc: "Deep-dives into architecture, AI systems, and Next.js scale.", href: "/resources/blog", icon: BookOpen },
                      { title: "Case Studies & Work", desc: "Real-world engineering case studies with measurable ROI.", href: "/work", icon: Rocket },
                      { title: "Whitepapers & Guides", desc: "Engineering best practices, cloud migration & security.", href: "/resources/whitepapers", icon: ShieldCheck },
                    ].map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveMenu(null)}
                        className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5 hover:bg-white hover:border-[#0066cc]/40 hover:shadow-md transition-all group"
                      >
                        <div className="h-9 w-9 rounded-xl bg-blue-50 text-[#0066cc] flex items-center justify-center mb-3 group-hover:bg-[#0066cc] group-hover:text-white transition-colors">
                          <item.icon size={18} />
                        </div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors">
                          {item.title}
                        </div>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* ═══════════════ DROPDOWN: COMPANY ═══════════════ */}
              {activeMenu === "company" && (
                <div className="space-y-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0066cc]">
                      Company &amp; Engineering Collective
                    </span>
                    <Link
                      href="/about"
                      onClick={() => setActiveMenu(null)}
                      className="text-xs font-semibold text-[#0066cc] hover:underline flex items-center gap-1"
                    >
                      About Webnatixx <ArrowRight size={13} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { title: "About Webnatixx", desc: "Our mission, engineering philosophy, and client-first mindset.", href: "/about", icon: Building2 },
                      { title: "Our Process & Milestones", desc: "Transparent agile development with fixed-price commitments.", href: "/about#process", icon: CheckCircle2 },
                      { title: "Careers & Leadership", desc: "Join our global team of senior engineers and tech leaders.", href: "/about#careers", icon: Users },
                    ].map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveMenu(null)}
                        className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5 hover:bg-white hover:border-[#0066cc]/40 hover:shadow-md transition-all group"
                      >
                        <div className="h-9 w-9 rounded-xl bg-blue-50 text-[#0066cc] flex items-center justify-center mb-3 group-hover:bg-[#0066cc] group-hover:text-white transition-colors">
                          <item.icon size={18} />
                        </div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors">
                          {item.title}
                        </div>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 4. Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-gray-200 bg-white px-6 py-6 shadow-2xl xl:hidden overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-3">
              {HEADER_NAV_DATA.map((item) => (
                <div key={item.key} className="border-b border-gray-100 pb-2">
                  <div className="text-sm font-bold text-gray-900 py-1">{item.label}</div>

                  {item.categories && (
                    <div className="pl-2 space-y-2 pt-1">
                      {item.categories.map((c, cIdx) => (
                        <div key={cIdx}>
                          <div className="text-[11px] font-bold text-[#0066cc] uppercase">{c.title}</div>
                          <div className="pl-2 space-y-1">
                            {c.items.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="block text-xs text-gray-600 hover:text-[#0066cc] py-0.5"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.items && (
                    <div className="pl-3 space-y-1 pt-1">
                      {item.items.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-xs text-gray-600 hover:text-[#0066cc] py-0.5"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-[#0066cc] py-3 text-sm font-bold text-white shadow-md"
                >
                  <Headphones size={16} /> Request a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
