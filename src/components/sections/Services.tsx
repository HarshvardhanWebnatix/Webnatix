"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Layers,
  Smartphone,
  Layout,
  Workflow,
  Cloud,
  Users,
  Database,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
  ShoppingBag,
  CheckCircle2,
  Code2,
  ChevronRight,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  category: "all" | "ai" | "engineering" | "web-mobile" | "enterprise";
  icon: any;
  title: string;
  badge: string;
  href: string;
  description: string;
  tags: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ai-machine-learning",
    category: "ai",
    icon: Brain,
    title: "AI & Machine Learning",
    badge: "Custom LLMs",
    href: "/services/ai-machine-learning",
    description:
      "We build and deploy custom ML models, LLM-powered applications, and intelligent automation systems tailored to your data and business logic. From predictive analytics and NLP pipelines to computer vision and recommendation engines.",
    tags: ["Custom LLMs", "Predictive Analytics", "NLP Pipelines", "MLOps"],
  },
  {
    id: "software-development",
    category: "engineering",
    icon: Layers,
    title: "Custom Software Development",
    badge: "CMMI Level 3",
    href: "/services/full-stack-development",
    description:
      "We build custom software from the ground up, tailored to how your business actually runs. Scoping, architecture, full build cycle through to deployment and long-term SLA support.",
    tags: ["Full Lifecycle", "Enterprise Architecture", "Microservices", "SLA Support"],
  },
  {
    id: "mobile-app-development",
    category: "web-mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    badge: "iOS & Android",
    href: "/services/mobile-app-development",
    description:
      "Native iOS and Android or cross-platform using React Native and Flutter. We handle UX architecture, back-end API integration, device testing, and store submission with 60fps gesture-driven performance.",
    tags: ["iOS & Android", "React Native", "Flutter", "API Integration"],
  },
  {
    id: "web-development",
    category: "web-mobile",
    icon: Layout,
    title: "Web Development & Headless CMS",
    badge: "Core Web Vitals",
    href: "/services/website-development",
    description:
      "From headless CMS builds and React/Next.js applications to enterprise Drupal and .NET platforms. Clean, standards-compliant code with accessibility, sub-second latency, and Core Web Vitals baked in.",
    tags: ["React & Next.js", "Headless CMS", "Enterprise .NET", "SEO Dominance"],
  },
  {
    id: "ecommerce-development",
    category: "enterprise",
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    badge: "Shopify Plus",
    href: "/services/ecommerce-development",
    description:
      "Ecommerce platforms that convert on Magento, BigCommerce, WooCommerce, Shopify Plus, or fully bespoke. Product catalogue structure, checkout flow, automated inventory sync, and payment gateways.",
    tags: ["Shopify Plus", "Magento", "BigCommerce", "Custom Checkout"],
  },
  {
    id: "cloud-solutions",
    category: "engineering",
    icon: Cloud,
    title: "Cloud Solutions & DevOps",
    badge: "AWS & Azure",
    href: "/services/cloud-solutions",
    description:
      "AWS, Azure, and Google Cloud planning, migration, and management. High-concurrency containerized Kubernetes topologies that stay resilient, secure, and cost-effective as your business expands.",
    tags: ["AWS Select Tier", "Microsoft Azure", "Google Cloud", "Kubernetes"],
  },
  {
    id: "crm-solutions",
    category: "enterprise",
    icon: Users,
    title: "CRM Solutions",
    badge: "Salesforce & Zoho",
    href: "/services/crm-solutions",
    description:
      "Salesforce, Zoho, and HubSpot implementation and customization, plus bespoke CRM systems for complex enterprise workflows. Custom module development, workflow automation, and legacy migration.",
    tags: ["Salesforce Partner", "Zoho Authorized", "HubSpot Solutions", "Workflow Automation"],
  },
  {
    id: "api-integration",
    category: "engineering",
    icon: Workflow,
    title: "API Dev & Systems Integration",
    badge: "Sub-50ms Latency",
    href: "/services/api-development",
    description:
      "We develop and integrate APIs that connect the systems you rely on so data moves freely with zero friction. Public-facing endpoints, legacy ERP bridges, and real-time event-driven webhooks.",
    tags: ["REST & GraphQL", "ERP Connectors", "Payment Gateways", "Zero Latency"],
  },
  {
    id: "data-engineering",
    category: "ai",
    icon: Database,
    title: "Data Engineering & Analytics",
    badge: "Snowflake & BigQuery",
    href: "/services/data-strategy",
    description:
      "ETL/ELT pipelines, modern cloud data warehouses on Snowflake, BigQuery, or Redshift, and real-time streaming architectures with Kafka and Spark for unified analytics and Power BI dashboards.",
    tags: ["Snowflake", "BigQuery", "ETL Pipelines", "Power BI & Tableau"],
  },
  {
    id: "cybersecurity",
    category: "enterprise",
    icon: ShieldCheck,
    title: "Cybersecurity & Compliance",
    badge: "ISO 27001 & SOC 2",
    href: "/services/custom-software-integration",
    description:
      "Penetration testing across web applications, APIs, and cloud infrastructure. Actionable remediation, IAM access control, data encryption, and continuous SIEM threat monitoring.",
    tags: ["Penetration Testing", "ISO 27001", "GDPR & SOC 2", "SIEM Monitoring"],
  },
];

const CATEGORIES = [
  { id: "all", label: "All Capabilities" },
  { id: "ai", label: "AI & Data Solutions" },
  { id: "engineering", label: "Software & Cloud" },
  { id: "web-mobile", label: "Web & Mobile Apps" },
  { id: "enterprise", label: "Enterprise & CRM" },
] as const;

function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link
        href={item.href}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0066cc]/40 hover:shadow-[0_22px_50px_rgba(0,102,204,0.1)] block"
      >
        {/* Interactive Mouse Spotlight Glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 102, 204, 0.07), transparent 75%)`,
          }}
        />

        {/* Top Gliding Accent Gradient Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0066cc] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-3xl" />

        <div>
          {/* Card Top Row: Glowing Icon Badge & Right Action Pill */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50/50 text-[#0066cc] border border-blue-100/90 shadow-2xs transition-all duration-300 group-hover:scale-105 group-hover:bg-[#0066cc] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/25">
              <Icon size={26} className="transition-transform duration-300 group-hover:rotate-3" />
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200/70 px-2.5 py-1 text-[10.5px] font-bold text-slate-500 group-hover:bg-blue-50 group-hover:text-[#0066cc] group-hover:border-blue-200 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {item.badge}
              </span>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-400 shadow-2xs transition-all duration-300 group-hover:border-[#0066cc] group-hover:bg-[#0066cc] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={17} />
              </div>
            </div>
          </div>

          {/* Service Title */}
          <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#0066cc] transition-colors leading-snug tracking-tight mb-3">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed mb-6 font-normal line-clamp-4">
            {item.description}
          </p>
        </div>

        {/* Bottom Interactive Tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
          {item.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="rounded-lg bg-slate-50 border border-slate-200/80 px-2.5 py-1 text-[11px] font-semibold text-slate-600 transition-colors group-hover:border-blue-200 group-hover:bg-blue-50/50 group-hover:text-blue-900"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}

export function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices =
    activeCategory === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-slate-50/40 to-white overflow-hidden border-t border-slate-100">
      {/* Background Subtle Tech Ambient Grids & Auras */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#0066cc 1px, transparent 1px), linear-gradient(to right, #0066cc 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] rounded-full bg-blue-400/8 blur-3xl" />

      <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/90 px-4 py-1.5 text-[11px] font-bold text-[#0066cc] uppercase tracking-widest mb-4 shadow-2xs backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] animate-pulse" />
            <span>BRIDGING INNOVATION &amp; EXCELLENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-slate-900 tracking-tight leading-[1.14] mb-4">
            Real Business Outcomes Powered by{" "}
            <span className="bg-gradient-to-r from-[#0066cc] to-[#00897b] bg-clip-text text-transparent">
              AI &amp; Automation
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Modern software development, cloud infrastructure, and intelligent automation systems
            tailored to how your business actually runs.
          </p>

          {/* ── Animated Category Filter Tabs ── */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? "text-white shadow-md shadow-blue-500/20"
                      : "bg-white/80 text-slate-600 border border-slate-200/80 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0066cc] to-blue-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Animated Cards Grid ── */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((item, idx) => (
              <ServiceCard key={item.id} item={item} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Bottom Interactive Discovery Bar ── */}
        <div className="mt-14 sm:mt-16 rounded-3xl border border-slate-200/90 bg-gradient-to-r from-blue-50/60 via-white to-emerald-50/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4 text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0066cc] text-white shadow-md shadow-blue-500/20">
              <Code2 size={24} />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                Need a Bespoke Architecture or Dedicated Pod?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500">
                Explore our certified technical collective, flexible engagement models, and 2-3 hour initial response SLA.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#0052a3] transition-all hover:scale-105 active:scale-95"
            >
              Discuss Your Requirement
              <ArrowUpRight size={15} />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all"
            >
              All 30+ Services
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
