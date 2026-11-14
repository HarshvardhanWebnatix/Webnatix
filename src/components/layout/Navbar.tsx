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
  PhoneCall
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "High-Performance Web Platforms", href: "/services#web" },
      { label: "SaaS Platforms & Products", href: "/services#saas" },
      { label: "Enterprise Portals & Dashboards", href: "/services#portals" },
      { label: "Mobile App Development", href: "/services#mobile" },
      { label: "AI & Autonomous Workflows", href: "/services#ai" },
      { label: "Cloud & Legacy Modernization", href: "/services#cloud" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Startup & Founder MVP Launch", href: "/solutions#mvp" },
      { label: "Enterprise Systems Architecture", href: "/solutions#enterprise" },
      { label: "Multi-Tenant Cloud Portals", href: "/solutions#multi-tenant" },
      { label: "API Integrations & Microservices", href: "/solutions#api" },
    ],
  },
  {
    label: "Engineering Stack",
    href: "/services#stack",
    children: [
      { label: "Next.js & React Frameworks", href: "/services#stack" },
      { label: "Node.js, Python & Go Backends", href: "/services#stack" },
      { label: "PostgreSQL & Vector Databases", href: "/services#stack" },
      { label: "AWS & Kubernetes DevOps", href: "/services#stack" },
    ],
  },
  {
    label: "Why Webnatixx",
    href: "/about",
    children: [
      { label: "100% Code & IP Ownership", href: "/about#ownership" },
      { label: "Fixed-Price Milestone Delivery", href: "/about#milestones" },
      { label: "Zero Vendor Lock-in", href: "/about#freedom" },
      { label: "Global 24/7 Timezone Coverage", href: "/about#coverage" },
    ],
  },
  {
    label: "Our Process",
    href: "/about#process",
    children: [
      { label: "Phase 1: Architecture & Scoping", href: "/about#process" },
      { label: "Phase 2: Sprint Engineering", href: "/about#process" },
      { label: "Phase 3: QA & Security Audit", href: "/about#process" },
      { label: "Phase 4: Launch & Handover", href: "/about#process" },
    ],
  },
  {
    label: "Selected Work",
    href: "/work",
    children: [
      { label: "Fintech SaaS Platform", href: "/work" },
      { label: "Enterprise Logistics Portal", href: "/work" },
      { label: "AI Customer Agent Suite", href: "/work" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Webnatixx Studio", href: "/about" },
      { label: "Engineering Collective", href: "/about#team" },
      { label: "Careers", href: "/about#careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

function NavDropdown({ item }: { item: (typeof NAV_ITEMS)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative group shrink-0"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="relative flex items-center gap-0.5 rounded-md px-2.5 py-2 text-[13px] font-semibold transition-colors hover:text-[#008974] text-gray-800 whitespace-nowrap">
        <span>{item.label}</span>
        <ChevronDown
          size={12}
          className={cn(
            "transition-transform duration-200 text-gray-400 mt-0.5",
            open && "rotate-180 text-[#008974]"
          )}
        />
      </button>

      <AnimatePresence>
        {open && item.children && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full z-50 mt-1 min-w-[240px] rounded-xl border border-gray-100 bg-white p-2 shadow-xl"
          >
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block rounded-lg px-3 py-2 text-xs font-medium text-gray-600 transition-colors hover:bg-teal-50 hover:text-[#008974]"
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.06)]">
      
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
                Book 20-min Call
              </Link>

              {/* Start Project Pill */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 bg-white text-[#0a3532] font-bold text-[11px] px-3.5 py-1 rounded-full shadow-sm hover:bg-gray-100 transition-colors ml-1"
              >
                <Rocket size={12} className="text-[#008974]" />
                Start Your Project
              </Link>
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
            <span>Singapore</span>
            <span className="text-white/30">|</span>
            <span className="flex items-center gap-1 cursor-pointer hover:text-white">
              <Globe size={11} /> EN ▾
            </span>
          </div>

        </div>
      </div>

      {/* ── 2. Main White Navigation Bar ── */}
      <div className="mx-auto flex h-20 max-w-[1480px] items-center justify-between gap-0 px-3 sm:px-6">
        
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
              Software Engineering Studio
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden flex-1 items-center justify-center xl:flex">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavDropdown key={item.label} item={item} />
            ))}
          </ul>
        </nav>

        {/* Right Contact Button */}
        <div className="hidden sm:flex items-center shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#008974] px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-[#008974]/20 hover:bg-[#007361] hover:shadow-lg transition-all active:scale-95"
          >
            <Headphones size={15} />
            Start Project
          </Link>
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-gray-200 bg-white px-6 py-6 shadow-2xl xl:hidden overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-gray-100 pb-2">
                  <div className="text-sm font-bold text-gray-900 py-1">{item.label}</div>
                  {item.children && (
                    <div className="pl-3 space-y-1 pt-1">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-xs text-gray-600 hover:text-[#008974] py-1"
                        >
                          {c.label}
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
                  <Headphones size={16} /> Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
