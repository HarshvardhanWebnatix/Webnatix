"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Layers,
  Smartphone,
  Layout,
  ShoppingBag,
  Cloud,
  Users,
  Workflow,
  Database,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  PhoneCall,
  Zap,
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortLabel: string;
  badge: string;
  slaBadge: string;
  image: string;
  href: string;
  icon: any;
  accentColor: string;
  description: string;
  points: string[];
  techStack: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ai",
    number: "01",
    title: "AI & Machine Learning",
    shortLabel: "AI & ML",
    badge: "CUSTOM LLMS & MLOPS",
    slaBadge: "ENTERPRISE RAG READY",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew10.png",
    href: "/services/ai-machine-learning",
    icon: Brain,
    accentColor: "from-blue-600 to-indigo-600",
    description:
      "We build and deploy custom ML models, LLM-powered applications, and intelligent automation systems tailored to your data and business logic. From predictive analytics and NLP pipelines to computer vision and recommendation engines, we take AI beyond proof-of-concept into production.",
    points: [
      "Custom Fine-Tuned Large Language Models (LLMs)",
      "Enterprise Retrieval-Augmented Generation (RAG)",
      "Predictive Analytics & Computer Vision Pipelines",
      "Production-Grade MLOps & Continuous Retraining",
    ],
    techStack: ["PyTorch", "OpenAI / Claude", "Pinecone", "LangChain", "MLflow"],
  },
  {
    id: "software",
    number: "02",
    title: "Custom Software Development",
    shortLabel: "Software",
    badge: "FULL LIFECYCLE ENGINEERING",
    slaBadge: "100% IP & CODE HANDOVER",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew1.png",
    href: "/services/full-stack-development",
    icon: Layers,
    accentColor: "from-indigo-600 to-cyan-600",
    description:
      "We build custom software from the ground up, tailored to how your business actually runs, not the other way around. Whether it's a standalone tool or an end-to-end platform, our teams handle the full build cycle, from scoping and architecture through to deployment and long-term support.",
    points: [
      "Event-Driven Microservices Architecture",
      "High-Throughput Distributed Cloud Backends",
      "Automated CI/CD Pipelines & Quality Assurance",
      "CMMI Level 3 Maturity & SLA Guarantee",
    ],
    techStack: ["Node.js", "Go", "Python", "Docker", "Kubernetes", "PostgreSQL"],
  },
  {
    id: "mobile",
    number: "03",
    title: "Mobile App Development",
    shortLabel: "Mobile Apps",
    badge: "NATIVE & CROSS-PLATFORM",
    slaBadge: "60FPS NATIVE FEEL",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew2.png",
    href: "/services/mobile-app-development",
    icon: Smartphone,
    accentColor: "from-sky-600 to-blue-600",
    description:
      "Native iOS and Android or cross-platform using React Native and Flutter, whichever fits your product and timeline. We handle UX architecture, back-end API integration, device testing, and store submission, building for performance and long-term maintainability.",
    points: [
      "Cross-Platform React Native & Flutter Engineering",
      "Native Swift (iOS) & Kotlin (Android) Modules",
      "Offline-First Data Sync & Biometric Security",
      "App Store & Google Play Submission Support",
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    id: "web",
    number: "04",
    title: "Web Development & Headless CMS",
    shortLabel: "Web & CMS",
    badge: "SUB-SECOND EDGE DELIVERY",
    slaBadge: "95+ CORE WEB VITALS",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew3.png",
    href: "/services/website-development",
    icon: Layout,
    accentColor: "from-blue-600 to-teal-600",
    description:
      "From headless CMS builds and React SPAs to enterprise Drupal and .NET platforms, we write clean, standards-compliant code with accessibility and Core Web Vitals baked in. Whether it's a CMS your marketing team can actually use or a high-traffic web app, we deliver reliability.",
    points: [
      "Next.js 16 Server-Side Rendering (SSR) & Edge API",
      "Headless CMS Architectures (Sanity, Strapi, Contentful)",
      "95+ Google Core Web Vitals Performance",
      "Responsive, Accessible Component Design Systems",
    ],
    techStack: ["Next.js", "React 19", "Tailwind CSS", "TypeScript", "Drupal", ".NET"],
  },
  {
    id: "ecommerce",
    number: "05",
    title: "E-Commerce Solutions",
    shortLabel: "E-Commerce",
    badge: "HIGH-CONVERSION COMMERCE",
    slaBadge: "MULTI-CURRENCY GATEWAYS",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew4.png",
    href: "/services/ecommerce-development",
    icon: ShoppingBag,
    accentColor: "from-emerald-600 to-teal-600",
    description:
      "We build ecommerce platforms that convert, on Magento, BigCommerce, WooCommerce, Shopify Plus, or fully bespoke. From product catalogue structure and checkout flow to payment integration and post-purchase experience, we focus on the details that turn browsers into buyers.",
    points: [
      "Shopify Plus Custom App & Theme Development",
      "Enterprise Magento & BigCommerce Topologies",
      "Automated Multi-Currency & Payment Gateways",
      "Real-Time ERP & Warehouse Inventory Sync",
    ],
    techStack: ["Shopify Plus", "Magento", "BigCommerce", "WooCommerce", "Stripe"],
  },
  {
    id: "cloud",
    number: "06",
    title: "Cloud Solutions & DevOps",
    shortLabel: "Cloud & DevOps",
    badge: "MULTI-CLOUD RESILIENCE",
    slaBadge: "99.99% CLOUD UPTIME",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew5.png",
    href: "/services/cloud-solutions",
    icon: Cloud,
    accentColor: "from-blue-600 to-indigo-600",
    description:
      "Moving to the cloud, scaling infrastructure, or getting more from what you already have, we handle the full picture. Our teams work across AWS, Azure, and Google Cloud to plan, migrate, and manage environments that stay stable, secure, and cost-effective as your business grows.",
    points: [
      "AWS Select Tier & Microsoft Azure Architecture",
      "Auto-Scaling Kubernetes Clusters & Dockerization",
      "Terraform Infrastructure-as-Code (IaC)",
      "24/7 Cloud Telemetry & Automated Backups",
    ],
    techStack: ["AWS", "Azure", "Google Cloud", "Terraform", "Kubernetes"],
  },
  {
    id: "crm",
    number: "07",
    title: "CRM Solutions",
    shortLabel: "CRM Systems",
    badge: "WORKFLOW AUTOMATION",
    slaBadge: "SEAMLESS DATA SYNC",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew6.png",
    href: "/services/crm-solutions",
    icon: Users,
    accentColor: "from-violet-600 to-purple-600",
    description:
      "We implement and customise Salesforce, Zoho, and HubSpot, and build bespoke CRM systems where packaged solutions don't match the complexity of your operations. Our engagements cover custom module development, workflow automation, and third-party integrations.",
    points: [
      "Salesforce Custom Apex & Lightning Development",
      "Zoho Authorized Partner Integration & Automation",
      "HubSpot Marketing & Sales Hub Alignment",
      "Legacy CRM Data Cleansing & Smooth Migration",
    ],
    techStack: ["Salesforce", "Zoho CRM", "HubSpot", "Zapier", "REST APIs"],
  },
  {
    id: "api",
    number: "08",
    title: "API Dev & Integration",
    shortLabel: "API Integration",
    badge: "SEAMLESS CONNECTIVITY",
    slaBadge: "SUB-50MS LATENCY",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew7.png",
    href: "/services/api-development",
    icon: Workflow,
    accentColor: "from-cyan-600 to-blue-600",
    description:
      "We develop and integrate APIs that connect the systems you rely on so data moves freely between them. Whether it's a public-facing API or a complex web of internal integrations, we make sure the plumbing works reliably with sub-50ms latency.",
    points: [
      "High-Throughput RESTful & GraphQL APIs",
      "Enterprise ERP & Legacy System Connectors",
      "Microservices Token Handshakes & Zero-Trust Auth",
      "Sub-50ms Global Response Latency SLA",
    ],
    techStack: ["GraphQL", "REST", "gRPC", "Postman", "Swagger", "OAuth2"],
  },
  {
    id: "dataeng",
    number: "09",
    title: "Data Engineering",
    shortLabel: "Data Stack",
    badge: "MODERN DATA STACK",
    slaBadge: "REAL-TIME STREAMING",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew8.png",
    href: "/services/data-strategy",
    icon: Database,
    accentColor: "from-blue-600 to-cyan-600",
    description:
      "We build ETL/ELT pipelines, data warehouses on Snowflake, BigQuery, or Redshift, and real-time streaming architectures using Kafka and Spark. If your reporting is slow or inconsistent, we fix the underlying data infrastructure, not just the symptoms.",
    points: [
      "Automated ETL/ELT Pipelines & Orchestration",
      "Snowflake & Google BigQuery Data Warehousing",
      "Real-Time Event Streaming with Apache Kafka",
      "Interactive Power BI & Tableau Executive Dashboards",
    ],
    techStack: ["Snowflake", "BigQuery", "Apache Kafka", "Spark", "Power BI"],
  },
  {
    id: "cybersecurity",
    number: "10",
    title: "Cybersecurity & Governance",
    shortLabel: "Cybersecurity",
    badge: "ENTERPRISE SECURITY",
    slaBadge: "SOC 2 & ISO 27001",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew9.png",
    href: "/services/custom-software-integration",
    icon: ShieldCheck,
    accentColor: "from-emerald-600 to-blue-600",
    description:
      "We run penetration testing across web applications, APIs, and network infrastructure, and deliver remediation that's actionable. We also implement IAM, data encryption, vulnerability management, and SIEM monitoring with compliance across ISO 27001, GDPR, and SOC 2.",
    points: [
      "Comprehensive Web App & API Penetration Testing",
      "Zero-Trust Identity & Access Management (IAM)",
      "ISO 27001, GDPR, & SOC 2 Audit Readiness",
      "24/7 SIEM Infrastructure Monitoring & Defense",
    ],
    techStack: ["Cloudflare", "Vault", "SonarQube", "WAF", "ISO 27001"],
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = SERVICES_DATA.length;
  const current = SERVICES_DATA[activeIndex];

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Smooth automation: auto-advance every 6 seconds, pausing on hover/interaction
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Relative diff calculation for smooth 3D stage sliding
  const getDiff = (idx: number) => {
    let diff = idx - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden border-t border-slate-100">
      
      {/* Background Soft Ambient Light */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-[1000px] h-[650px] rounded-full bg-blue-50/70 blur-3xl opacity-80" />
      </div>

      <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ── Top Header ── */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-4 py-1.5 text-xs font-bold text-[#0066cc] uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles size={13} className="text-[#0066cc]" />
            <span>Enterprise Engineering Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-[1.16]">
            Real Business Outcomes Powered by Custom Engineering &amp; AI
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Explore our 10 core capability practices below. Hover to pause or slide through the architecture deck.
          </p>
        </div>

        {/* ── Smooth Horizontal Scrubber / Progress Rails ── */}
        {/* Sleek numbered timeline scrubber: shows real-time progress and allows 1-click jumps */}
        <div className="mb-10 sm:mb-14 overflow-x-auto scrollbar-none pb-2">
          <div className="flex items-center justify-center min-w-max mx-auto gap-2 sm:gap-3 p-1 rounded-2xl bg-slate-100/70 border border-slate-200/80 backdrop-blur-sm">
            {SERVICES_DATA.map((service, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-white text-slate-900 shadow-sm shadow-slate-200/80"
                      : "text-slate-500 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] transition-colors ${
                      isActive ? "text-[#0066cc] font-black" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {service.number}
                  </span>
                  <span>{service.shortLabel}</span>

                  {/* Animated Progress Bar under active scrubber button */}
                  {isActive && (
                    <motion.div
                      layoutId="activeScrubberIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#0066cc] rounded-full overflow-hidden"
                    >
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: isPaused ? "100%" : "100%" }}
                        transition={{
                          duration: isPaused ? 0 : 6,
                          ease: "linear",
                        }}
                        className="h-full bg-blue-400"
                      />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 3D Interactive Animated Showcase Stage (Automated Carousel) ── */}
        <div
          className="relative mx-auto w-full max-w-[1240px] h-[520px] sm:h-[480px] lg:h-[450px] flex items-center justify-center overflow-hidden select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {SERVICES_DATA.map((service, idx) => {
            const diff = getDiff(idx);
            const isCenter = diff === 0;
            const isVisible = Math.abs(diff) <= 1;

            return (
              <motion.div
                key={service.id}
                animate={{
                  x: `${diff * 105}%`,
                  scale: isCenter ? 1 : 0.9,
                  opacity: isCenter ? 1 : Math.abs(diff) === 1 ? 0.4 : 0,
                  zIndex: isCenter ? 30 : Math.abs(diff) === 1 ? 15 : 0,
                  rotateY: diff * -6,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1], // silky-smooth exponential easing
                }}
                onClick={() => {
                  if (diff === -1) handlePrev();
                  if (diff === 1) handleNext();
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -40) handleNext();
                  else if (info.offset.x > 40) handlePrev();
                }}
                className={`absolute w-[94vw] max-w-[960px] rounded-3xl bg-white p-6 sm:p-8 lg:p-9 border border-slate-200/90 transition-shadow duration-300 ${
                  isCenter
                    ? "shadow-[0_25px_70px_rgba(0,102,204,0.12)] border-[#0066cc]/30 cursor-grab active:cursor-grabbing"
                    : isVisible
                    ? "shadow-md cursor-pointer hover:opacity-65"
                    : "pointer-events-none"
                }`}
              >
                {/* Inside the Active Card: Split 3D Visual Stage (Left) & Rich Agency Content (Right) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                  
                  {/* Left Column (5 cols): 3D Artwork Showcase Bay */}
                  <div className="md:col-span-5 relative h-[220px] sm:h-[260px] rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-100/70 border border-slate-100 flex items-center justify-center p-6 overflow-hidden">
                    {/* Corner Number */}
                    <div className="absolute top-3.5 left-4 flex items-center gap-1.5 text-xs font-mono font-black text-slate-400">
                      <span>{service.number}</span>
                      <span className="text-slate-300">/</span>
                      <span className="text-slate-300">10</span>
                    </div>

                    {/* SLA Badge */}
                    <div className="absolute top-3.5 right-4 inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[9.5px] font-extrabold text-emerald-700 uppercase tracking-wider">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                      <span>{service.slaBadge}</span>
                    </div>

                    {/* Floating 3D Product Visual with gentle floating motion */}
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="max-h-[175px] sm:max-h-[200px] w-auto object-contain drop-shadow-xl select-none"
                      loading="lazy"
                    />

                    {/* Bottom Micro Tag */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] text-slate-400 font-semibold border-t border-slate-200/60 pt-2">
                      <span>Webnatix Engineering</span>
                      <span className="text-[#0066cc] font-bold">CMMI Level 3</span>
                    </div>
                  </div>

                  {/* Right Column (7 cols): Data, Deliverables, Tech Stack & CTAs */}
                  <div className="md:col-span-7 space-y-3.5">
                    
                    {/* Category Pill */}
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50/80 px-3 py-1 text-[10.5px] font-extrabold text-[#0066cc] uppercase tracking-wider">
                      <Zap size={11} className="text-[#0066cc]" />
                      <span>{service.badge}</span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                      <Link href={service.href} className="hover:text-[#0066cc] transition-colors">
                        {service.title}
                      </Link>
                    </h3>

                    {/* Description Paragraph */}
                    <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* 4 Deliverables with Green Checkmarks */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {service.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-tight font-medium">{pt}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {service.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[11px] font-semibold text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action CTAs */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 rounded-xl bg-[#0066cc] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#0052a3] hover:shadow-lg transition-all"
                      >
                        <span>Explore Full Architecture</span>
                        <ArrowRight size={14} />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:border-[#0066cc] hover:text-[#0066cc] transition-all"
                      >
                        <span>Schedule Scoping Call</span>
                      </Link>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Carousel Bottom Controls ── */}
        <div className="mt-8 flex items-center justify-center gap-5 select-none">
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous service"
            className="w-11 h-11 rounded-full border border-slate-200/90 bg-white text-slate-700 flex items-center justify-center shadow-xs hover:border-[#0066cc] hover:text-[#0066cc] hover:shadow-md transition-all cursor-pointer"
          >
            <ChevronLeft size={19} />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {SERVICES_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to service ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === activeIndex
                    ? "w-8 h-2 bg-[#0066cc]"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next service"
            className="w-11 h-11 rounded-full border border-slate-200/90 bg-white text-slate-700 flex items-center justify-center shadow-xs hover:border-[#0066cc] hover:text-[#0066cc] hover:shadow-md transition-all cursor-pointer"
          >
            <ChevronRight size={19} />
          </button>
        </div>

        {/* ── Bottom Callout Banner ── */}
        <div className="mt-16 sm:mt-20 rounded-3xl border border-slate-200/90 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
              BESPOKE ARCHITECTURAL SCOPING
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Need a Custom Solution Built Around Your Specific Architecture?
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl font-normal">
              Our principal engineering architects review requirements, evaluate legacy constraints, and deliver an SLA-backed technical blueprint within 48 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#e52320] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/25 hover:bg-[#c91c19] hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <span>Book Architecture Call</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href="tel:+919252052623"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-all"
            >
              <PhoneCall size={15} />
              <span>+91 9252052623</span>
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
