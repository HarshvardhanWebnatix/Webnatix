"use client";

import { useState, useEffect } from "react";
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
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortLabel: string;
  badge: string;
  image: string;
  href: string;
  icon: any;
  description: string;
  points: string[];
  techStack: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ai",
    number: "01",
    title: "AI & Machine Learning",
    shortLabel: "AI & Machine Learning",
    badge: "CUSTOM LLMS & MLOPS",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew10.png",
    href: "/services/ai-machine-learning",
    icon: Brain,
    description:
      "We build and deploy custom ML models, LLM-powered applications, and intelligent automation systems tailored to your data and business logic. From predictive analytics and NLP pipelines to computer vision and recommendation engines, we take AI beyond proof-of-concept into production, with the MLOps infrastructure to keep it running reliably.",
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
    shortLabel: "Software Development",
    badge: "FULL LIFECYCLE ENGINEERING",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew1.png",
    href: "/services/full-stack-development",
    icon: Layers,
    description:
      "We build custom software from the ground up, tailored to how your business actually runs, not the other way around. Whether it's a standalone tool or an end-to-end platform, our teams handle the full build cycle, from scoping and architecture through to deployment and long-term support.",
    points: [
      "Event-Driven Microservices Architecture",
      "High-Throughput Distributed Cloud Backends",
      "Automated CI/CD Pipelines & Quality Assurance",
      "100% IP & Source Code Handover on Delivery",
    ],
    techStack: ["Node.js", "Go", "Python", "Docker", "Kubernetes", "PostgreSQL"],
  },
  {
    id: "mobile",
    number: "03",
    title: "Mobile App Development",
    shortLabel: "Mobile Apps",
    badge: "NATIVE & CROSS-PLATFORM",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew2.png",
    href: "/services/mobile-app-development",
    icon: Smartphone,
    description:
      "Native iOS and Android or cross-platform using React Native and Flutter, whichever fits your product and timeline. We handle UX architecture, back-end API integration, device testing, and store submission, building for performance and long-term maintainability, not just the launch date.",
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
    shortLabel: "Web Development",
    badge: "SUB-SECOND EDGE DELIVERY",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew3.png",
    href: "/services/website-development",
    icon: Layout,
    description:
      "From headless CMS builds and React SPAs to enterprise Drupal and .NET platforms, we write clean, standards-compliant code with accessibility and Core Web Vitals baked in. Whether it's a CMS your marketing team can actually use or a high-traffic web app, we've built both.",
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
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew4.png",
    href: "/services/ecommerce-development",
    icon: ShoppingBag,
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
    shortLabel: "Cloud Solutions",
    badge: "MULTI-CLOUD RESILIENCE",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew5.png",
    href: "/services/cloud-solutions",
    icon: Cloud,
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
    shortLabel: "CRM Solutions",
    badge: "WORKFLOW AUTOMATION",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew6.png",
    href: "/services/crm-solutions",
    icon: Users,
    description:
      "We implement and customise Salesforce, Zoho, and HubSpot, and build bespoke CRM systems where packaged solutions don't match the complexity of your operations. Our engagements cover custom module development, workflow automation, third-party integrations, and data migration from legacy systems.",
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
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew7.png",
    href: "/services/api-development",
    icon: Workflow,
    description:
      "We develop and integrate APIs that connect the systems you rely on so data moves freely between them. Whether it's a public-facing API or a complex web of internal integrations, we make sure the plumbing works properly.",
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
    shortLabel: "Data Engineering",
    badge: "MODERN DATA STACK",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew8.png",
    href: "/services/data-strategy",
    icon: Database,
    description:
      "We build ETL/ELT pipelines, data warehouses on Snowflake, BigQuery, or Redshift, and real-time streaming architectures using Kafka and Spark. If your reporting is slow, inconsistent, or dependent on manual exports, we fix the underlying data infrastructure, not just the symptoms.",
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
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew9.png",
    href: "/services/custom-software-integration",
    icon: ShieldCheck,
    description:
      "We run penetration testing across web applications, APIs, and network infrastructure, and deliver remediation that's actionable, not just a report to file. We also implement IAM, data encryption, vulnerability management, and SIEM monitoring, with compliance support across ISO 27001, GDPR, and SOC 2.",
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
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = SERVICES_DATA.length;
  const current = SERVICES_DATA[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + total) % total);
  };

  // Auto-advance tabs smoothly every 7 seconds, pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden border-t border-slate-100">
      
      {/* Background Soft Ambient Light */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-[800px] h-[500px] rounded-full bg-blue-50/60 blur-3xl opacity-80" />
      </div>

      <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <div className="inline-block mb-3">
            <span className="text-xs font-bold text-[#0066cc] tracking-[0.25em] uppercase">
              SERVICES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-slate-900 tracking-tight leading-[1.14] mb-4">
            Bridging Innovation &amp; Excellence With{" "}
            <span className="text-[#0066cc]">Modern Tech Solutions</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We design and develop scalable digital solutions tailored to your business needs,
            helping you improve performance, streamline operations, and support long-term growth.
          </p>
        </div>

        {/* ── Top Horizontal Services Navigation Tabs Bar ── */}
        <div className="relative mb-10 sm:mb-12">
          {/* Scrollable Tabs Row */}
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-3 pt-1 px-1 scrollbar-none no-scrollbar">
            {SERVICES_DATA.map((item, idx) => {
              const isActive = idx === activeIdx;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveIdx(idx);
                    setIsPaused(true);
                  }}
                  className={`group relative flex items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer shrink-0 border ${
                    isActive
                      ? "bg-[#0066cc] text-white border-[#0066cc] shadow-md shadow-blue-500/25 scale-[1.02]"
                      : "bg-slate-50/80 text-slate-600 border-slate-200/80 hover:bg-white hover:text-slate-900 hover:border-slate-300"
                  }`}
                >
                  <Icon
                    size={16}
                    className={`transition-colors duration-200 ${
                      isActive ? "text-white" : "text-slate-400 group-hover:text-[#0066cc]"
                    }`}
                  />
                  <span>{item.shortLabel}</span>

                  {/* Active highlight pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeServiceTabPill"
                      className="absolute inset-0 rounded-full bg-[#0066cc] -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Active Service Showcase Card (Two-Column Split Stage) ── */}
        <div
          className="relative mx-auto max-w-[1400px] rounded-3xl sm:rounded-[36px] border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-14 shadow-xl shadow-slate-200/50 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Top Subtle Progress Indicator */}
          {!isPaused && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 overflow-hidden">
              <motion.div
                key={activeIdx}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 7, ease: "linear" }}
                className="h-full bg-gradient-to-r from-[#0066cc] to-[#00897b]"
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              
              {/* ── Left Column: Rich 3D Showcase Graphic (6 Cols) ── */}
              <div className="lg:col-span-6 flex items-center justify-center order-2 lg:order-1">
                <div className="relative w-full max-w-[500px] rounded-2xl bg-gradient-to-b from-slate-50 to-blue-50/30 p-4 sm:p-8 flex items-center justify-center border border-slate-100/90">
                  {/* Gentle Floating Motion */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                    className="w-full flex items-center justify-center"
                  >
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full max-h-[380px] sm:max-h-[420px] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </motion.div>
                </div>
              </div>

              {/* ── Right Column: Rich Human Agency Copy & Deliverables (6 Cols) ── */}
              <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
                
                {/* Badge Tag */}
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-[11px] font-bold text-[#0066cc] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc]" />
                  <span>
                    SERVICE {current.number} · {current.badge}
                  </span>
                </div>

                {/* Main Service Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {current.title}
                </h3>

                {/* Service Agency Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {current.description}
                </p>

                {/* Key Deliverables Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {current.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={17} className="text-[#00897b] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-[13px] font-medium text-slate-700 leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Technologies &amp; Frameworks
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {current.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-md bg-slate-100 border border-slate-200/80 px-2.5 py-1 text-xs font-semibold text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                  <Link
                    href={current.href}
                    className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] hover:bg-[#0052a3] text-white px-7 py-3 text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={15} />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 rounded-full border-2 border-slate-200 hover:border-[#0066cc] hover:text-[#0066cc] bg-white px-6 py-2.5 text-xs sm:text-sm font-bold text-slate-700 transition-all cursor-pointer"
                  >
                    <span>Contact Us</span>
                  </Link>

                  {/* Previous / Next Mini Control Arrows */}
                  <div className="flex items-center gap-1.5 ml-auto">
                    <button
                      onClick={handlePrev}
                      className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#0066cc] hover:text-[#0066cc] flex items-center justify-center text-slate-600 transition-colors cursor-pointer bg-white"
                      aria-label="Previous service"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#0066cc] hover:text-[#0066cc] flex items-center justify-center text-slate-600 transition-colors cursor-pointer bg-white"
                      aria-label="Next service"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
