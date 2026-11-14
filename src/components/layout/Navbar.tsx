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
  Sparkles
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
        title: "2.1 Design & Development",
        items: [
          { label: "Website Development", href: "/services#web" },
          { label: "Mobile App Development", href: "/services#mobile" },
          { label: "E-commerce Development", href: "/services#ecommerce" },
          { label: "Software Development", href: "/services#software" },
          { label: "Game Development", href: "/services#game" },
          { label: "API Development", href: "/services#api" },
          { label: "Custom Software Integration", href: "/services#integration" },
        ],
      },
      {
        title: "2.2 Enterprise Solutions",
        items: [
          { label: "CRM Solutions", href: "/services#crm" },
          { label: "Cloud Solutions", href: "/services#cloud" },
          { label: "AI & Machine Learning Solutions", href: "/services#ai-ml" },
          { label: "Salesforce Solutions", href: "/services#salesforce" },
          { label: "HubSpot Solutions", href: "/services#hubspot" },
          { label: "Zoho Solutions", href: "/services#zoho" },
        ],
      },
      {
        title: "2.3 Digital Marketing",
        items: [
          { label: "Search Engine Optimization (SEO)", href: "/services#seo" },
          { label: "Social Media Marketing (SMM)", href: "/services#smm" },
          { label: "Pay-Per-Click Advertising (PPC)", href: "/services#ppc" },
          { label: "Performance Optimization", href: "/services#performance" },
        ],
      },
      {
        title: "2.4 Data Solutions",
        items: [
          { label: "Data Strategy Consulting", href: "/services#data-strategy" },
          { label: "Data Processing Solutions", href: "/services#data-processing" },
          { label: "Data Governance Solutions", href: "/services#data-governance" },
          { label: "Data Storage & Quality Management", href: "/services#data-storage" },
          { label: "Data Analytics & Visualization", href: "/services#data-analytics" },
          { label: "Cloud Data Migration & Power BI", href: "/services#power-bi" },
        ],
      },
      {
        title: "2.5 AI & Emerging Technologies",
        items: [
          { label: "Custom AI Development", href: "/services#custom-ai" },
          { label: "AI Consulting & Strategy", href: "/services#ai-consulting" },
          { label: "AI Business Intelligence", href: "/services#ai-bi" },
          { label: "Large Language Model (LLM) Solutions", href: "/services#llm" },
          { label: "AI-Powered Customer Experience", href: "/services#ai-cx" },
          { label: "Agentic AI Solutions", href: "/services#agentic-ai" },
          { label: "Blockchain Development", href: "/services#blockchain" },
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
          { label: "Sports & Gaming", href: "/industries#sports" },
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
      
      {/* ── 1. Top Green Utility Bar ── */}
      <div className="hidden bg-[#0a3532] text-xs text-white/90 lg:block">
        <div className="mx-auto flex min-h-9 max-w-[1480px] items-center justify-between gap-x-2 px-3 sm:px-5 lg:px-6 py-1.5">
          
          {/* Left contact info */}
          <div className="flex items-center gap-x-2 xl:gap-x-4 shrink-0">
            <div className="flex items-center gap-3 xl:gap-5">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-1.5 transition-colors hover:text-white text-gray-200"
              >
                <Mail size={13} className="text-[#2dd4bf]" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <span className="text-white/30">|</span>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-1.5 transition-colors hover:text-white text-gray-200"
              >
                <PhoneCall size={13} className="text-[#2dd4bf]" />
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
                <Calendar size={13} className="text-[#2dd4bf]" />
                Schedule a Consultation
              </Link>

              {/* Request a Quote Pill */}
              <button
                onClick={() => window.dispatchEvent(new Event("open-lead-modal"))}
                className="inline-flex items-center gap-1.5 bg-white text-[#0a3532] font-bold text-[11px] px-3.5 py-1 rounded-full shadow-sm hover:bg-gray-100 transition-colors ml-1 cursor-pointer"
              >
                <Rocket size={12} className="text-[#008974]" />
                Request a Quote
              </button>
            </div>
          </div>

          {/* Right Regions & Language */}
          <div className="flex items-center gap-2.5 text-[11.5px] text-gray-300">
            <span>North America</span>
            <span>·</span>
            <span>Europe</span>
            <span>·</span>
            <span>APAC</span>
            <span>·</span>
            <span>Middle East</span>
            <span className="text-white/30">|</span>
            <span className="flex items-center gap-1 cursor-pointer hover:text-white">
              <Globe size={11} /> Global Delivery
            </span>
          </div>

        </div>
      </div>

      {/* ── 2. Main White Navigation Bar ── */}
      <div className="relative mx-auto flex h-20 max-w-[1480px] items-center justify-between gap-0 px-3 sm:px-6">
        
        {/* Brand Logo with exact official Webnatix logo */}
        <Link href="/" className="group flex items-center gap-3 shrink-0" aria-label="Webnatixx Technologies — Home">
          <img 
            src="/assets/navbar/webnatix-logo.png" 
            alt="Webnatixx Technologies" 
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="flex flex-col">
            <span className="text-lg font-extrabold text-slate-900 leading-tight tracking-tight">
              WebNatixx <span className="text-[#008974] font-medium text-xs">Technologies</span>
            </span>
            <span className="text-[9.5px] uppercase font-bold tracking-widest text-slate-400">
              IT Consulting &amp; Technology Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden flex-1 items-center justify-center xl:flex">
          <ul className="flex items-center gap-1">
            {HEADER_NAV_DATA.map((item) => {
              const isOpen = activeMenu === item.key;
              return (
                <li
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.key)}
                >
                  <button className={cn(
                    "relative flex items-center gap-1 rounded-md px-3 py-2 text-[13.5px] font-semibold transition-colors hover:text-[#008974] whitespace-nowrap",
                    isOpen ? "text-[#008974]" : "text-gray-800"
                  )}>
                    <span>{item.label}</span>
                    <ChevronDown
                      size={13}
                      className={cn(
                        "transition-transform duration-200 mt-0.5 text-gray-400",
                        isOpen && "rotate-180 text-[#008974]"
                      )}
                    />
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
            className="inline-flex items-center gap-2 rounded-full bg-[#008974] px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-[#008974]/20 hover:bg-[#007361] hover:shadow-lg transition-all active:scale-95 cursor-pointer"
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

      {/* ── 3. Desktop Hover Mega-Menus (Rendered conditionally below navbar) ── */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.16 }}
            className="absolute left-0 right-0 top-full z-50 w-full border-t border-gray-100 bg-white shadow-2xl"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="mx-auto max-w-[1480px] px-6 py-8">
              
              {/* MEGA MENU: SERVICES (5 Columns) */}
              {activeMenu === "services" && (
                <div>
                  <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-800">
                      Explore Full Technology &amp; Engineering Services
                    </span>
                    <Link 
                      href="/services" 
                      onClick={() => setActiveMenu(null)}
                      className="text-xs font-semibold text-[#008974] hover:underline flex items-center gap-1"
                    >
                      View All Services Overview <ArrowRight size={13} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-5 gap-6">
                    {HEADER_NAV_DATA[0].categories?.map((cat, idx) => (
                      <div key={idx} className="space-y-3">
                        <div className="text-xs font-extrabold text-gray-900 border-b border-teal-100 pb-1.5 text-teal-900">
                          {cat.title}
                        </div>
                        <ul className="space-y-1.5">
                          {cat.items.map((sub, sIdx) => (
                            <li key={sIdx}>
                              <Link
                                href={sub.href}
                                onClick={() => setActiveMenu(null)}
                                className="block text-[12px] font-medium text-gray-600 hover:text-[#008974] transition-colors py-0.5 leading-snug hover:translate-x-0.5 transform duration-150"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* MEGA MENU: INDUSTRIES (3 Columns) */}
              {activeMenu === "industries" && (
                <div>
                  <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-800">
                      Domain Expertise Across Regulated &amp; High-Growth Sectors
                    </span>
                    <Link 
                      href="/industries" 
                      onClick={() => setActiveMenu(null)}
                      className="text-xs font-semibold text-[#008974] hover:underline flex items-center gap-1"
                    >
                      Explore All Industries <ArrowRight size={13} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-8">
                    {HEADER_NAV_DATA[1].categories?.map((cat, idx) => (
                      <div key={idx} className="space-y-3">
                        <div className="text-xs font-extrabold text-gray-900 border-b border-teal-100 pb-1.5 text-teal-900">
                          {cat.title}
                        </div>
                        <ul className="space-y-2">
                          {cat.items.map((sub, sIdx) => (
                            <li key={sIdx}>
                              <Link
                                href={sub.href}
                                onClick={() => setActiveMenu(null)}
                                className="block text-[12.5px] font-medium text-gray-600 hover:text-[#008974] transition-colors hover:translate-x-0.5 transform duration-150"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* MEGA MENU: TECHNOLOGIES (3 Columns) */}
              {activeMenu === "technologies" && (
                <div>
                  <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-800">
                      Modern Full-Stack, Mobile, Cloud &amp; Enterprise Platforms
                    </span>
                    <Link 
                      href="/technologies" 
                      onClick={() => setActiveMenu(null)}
                      className="text-xs font-semibold text-[#008974] hover:underline flex items-center gap-1"
                    >
                      View Full Technology Matrix <ArrowRight size={13} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-8">
                    {HEADER_NAV_DATA[2].categories?.map((cat, idx) => (
                      <div key={idx} className="space-y-3">
                        <div className="text-xs font-extrabold text-gray-900 border-b border-teal-100 pb-1.5 text-teal-900">
                          {cat.title}
                        </div>
                        <ul className="space-y-2">
                          {cat.items.map((sub, sIdx) => (
                            <li key={sIdx}>
                              <Link
                                href={sub.href}
                                onClick={() => setActiveMenu(null)}
                                className="block text-[12.5px] font-medium text-gray-600 hover:text-[#008974] transition-colors hover:translate-x-0.5 transform duration-150"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STANDARD DROPDOWN: INDUSTRY INSIGHTS */}
              {activeMenu === "resources" && (
                <div className="max-w-md mx-auto">
                  <div className="text-xs font-bold uppercase tracking-widest text-teal-800 mb-3 pb-1 border-b border-gray-100">
                    5. Industry Insights &amp; Resources
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {HEADER_NAV_DATA[3].items?.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveMenu(null)}
                        className="rounded-lg p-2.5 text-xs font-medium text-gray-700 hover:bg-teal-50 hover:text-[#008974] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* STANDARD DROPDOWN: COMPANY */}
              {activeMenu === "company" && (
                <div className="max-w-md mx-auto">
                  <div className="text-xs font-bold uppercase tracking-widest text-teal-800 mb-3 pb-1 border-b border-gray-100">
                    6. Company &amp; Engineering Collective
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {HEADER_NAV_DATA[4].items?.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveMenu(null)}
                        className="rounded-lg p-2.5 text-xs font-medium text-gray-700 hover:bg-teal-50 hover:text-[#008974] transition-colors"
                      >
                        {item.label}
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
                          <div className="text-[11px] font-bold text-teal-800 uppercase">{c.title}</div>
                          <div className="pl-2 space-y-1">
                            {c.items.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                href={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="block text-xs text-gray-600 hover:text-[#008974] py-0.5"
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
                          className="block text-xs text-gray-600 hover:text-[#008974] py-0.5"
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
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-[#008974] py-3 text-sm font-bold text-white shadow-md"
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
