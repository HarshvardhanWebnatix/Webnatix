"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  Sparkles,
  PhoneCall,
  Zap,
  Lock,
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  badge: string;
  slaBadge: string;
  image: string;
  href: string;
  icon: any;
  glowColor: string;
  isWide?: boolean;
  description: string;
  points: string[];
  techStack: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ai",
    number: "01",
    title: "AI & Machine Learning",
    badge: "CUSTOM LLMS & MLOPS",
    slaBadge: "ENTERPRISE RAG READY",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew10.png",
    href: "/services/ai-machine-learning",
    icon: Brain,
    glowColor: "rgba(59, 130, 246, 0.35)",
    isWide: true,
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
    badge: "FULL LIFECYCLE ENGINEERING",
    slaBadge: "100% IP HANDOVER",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew1.png",
    href: "/services/full-stack-development",
    icon: Layers,
    glowColor: "rgba(99, 102, 241, 0.35)",
    description:
      "Custom software built from the ground up, tailored to how your business actually runs. End-to-end full build cycle from architecture to deployment and long-term SLA support.",
    points: [
      "Event-Driven Microservices",
      "Distributed Cloud Backends",
      "Automated CI/CD Pipelines",
      "CMMI Level 3 Maturity",
    ],
    techStack: ["Node.js", "Go", "Python", "Docker", "Kubernetes", "PostgreSQL"],
  },
  {
    id: "mobile",
    number: "03",
    title: "Mobile App Development",
    badge: "NATIVE & CROSS-PLATFORM",
    slaBadge: "60FPS NATIVE FEEL",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew2.png",
    href: "/services/mobile-app-development",
    icon: Smartphone,
    glowColor: "rgba(14, 165, 233, 0.35)",
    description:
      "Native iOS and Android or cross-platform using React Native and Flutter. We build for retention, speed, biometric security, and maintainability.",
    points: [
      "React Native & Flutter",
      "Native Swift & Kotlin",
      "Offline Data Sync",
      "App Store Submissions",
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    id: "web",
    number: "04",
    title: "Web & Headless CMS",
    badge: "SUB-SECOND EDGE DELIVERY",
    slaBadge: "95+ CORE WEB VITALS",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew3.png",
    href: "/services/website-development",
    icon: Layout,
    glowColor: "rgba(2, 132, 199, 0.35)",
    description:
      "From headless CMS builds and Next.js SPAs to enterprise Drupal and .NET platforms. Clean, accessible code with sub-second Core Web Vitals baked in.",
    points: [
      "Next.js 16 SSR & Edge",
      "Headless CMS (Sanity, Strapi)",
      "95+ Google Web Vitals",
      "Accessible Design Systems",
    ],
    techStack: ["Next.js", "React 19", "Tailwind CSS", "TypeScript", ".NET"],
  },
  {
    id: "ecommerce",
    number: "05",
    title: "E-Commerce Solutions",
    badge: "HIGH-CONVERSION COMMERCE",
    slaBadge: "MULTI-CURRENCY",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew4.png",
    href: "/services/ecommerce-development",
    icon: ShoppingBag,
    glowColor: "rgba(16, 185, 129, 0.35)",
    description:
      "High-converting ecommerce on Shopify Plus, Magento, WooCommerce, or bespoke. Frictionless checkout, real-time ERP inventory sync, and multi-currency payment rails.",
    points: [
      "Shopify Plus Custom Themes",
      "Enterprise Magento Scaling",
      "Automated Payment Gateways",
      "Warehouse Inventory Sync",
    ],
    techStack: ["Shopify Plus", "Magento", "WooCommerce", "BigCommerce", "Stripe"],
  },
  {
    id: "cloud",
    number: "06",
    title: "Cloud Solutions & DevOps",
    badge: "MULTI-CLOUD RESILIENCE",
    slaBadge: "99.99% CLOUD UPTIME",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew5.png",
    href: "/services/cloud-solutions",
    icon: Cloud,
    glowColor: "rgba(59, 130, 246, 0.35)",
    description:
      "Migrate, scale, and optimize infrastructure across AWS, Azure, and Google Cloud. Resilient, auto-scaling environments that keep operational costs under control.",
    points: [
      "AWS & Azure Architecture",
      "Kubernetes & Docker Clusters",
      "Terraform IaC Automation",
      "24/7 Cloud Telemetry",
    ],
    techStack: ["AWS", "Azure", "Google Cloud", "Terraform", "Kubernetes"],
  },
  {
    id: "crm",
    number: "07",
    title: "CRM Solutions",
    badge: "WORKFLOW AUTOMATION",
    slaBadge: "SEAMLESS DATA SYNC",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew6.png",
    href: "/services/crm-solutions",
    icon: Users,
    glowColor: "rgba(139, 92, 246, 0.35)",
    description:
      "Salesforce, Zoho, and HubSpot implementations and bespoke CRM systems. Custom modules, automated pipelines, and seamless data cleansing from legacy platforms.",
    points: [
      "Salesforce Apex & Lightning",
      "Zoho Partner Integrations",
      "HubSpot Funnel Alignment",
      "Legacy CRM Data Cleansing",
    ],
    techStack: ["Salesforce", "Zoho CRM", "HubSpot", "Zapier", "REST APIs"],
  },
  {
    id: "api",
    number: "08",
    title: "API Dev & Integration",
    badge: "SEAMLESS CONNECTIVITY",
    slaBadge: "SUB-50MS LATENCY",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew7.png",
    href: "/services/api-development",
    icon: Workflow,
    glowColor: "rgba(6, 182, 212, 0.35)",
    description:
      "High-throughput RESTful and GraphQL APIs connecting disparate enterprise systems. Microservices token handshakes, zero-trust security, and sub-50ms latency.",
    points: [
      "RESTful & GraphQL Endpoints",
      "Legacy System Connectors",
      "Zero-Trust Token Auth",
      "Sub-50ms Response SLAs",
    ],
    techStack: ["GraphQL", "REST", "gRPC", "Postman", "Swagger", "OAuth2"],
  },
  {
    id: "dataeng",
    number: "09",
    title: "Data Engineering",
    badge: "MODERN DATA STACK",
    slaBadge: "REAL-TIME STREAMING",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew8.png",
    href: "/services/data-strategy",
    icon: Database,
    glowColor: "rgba(14, 165, 233, 0.35)",
    description:
      "ETL/ELT pipelines, data warehouses on Snowflake, BigQuery, or Redshift, and real-time Kafka streaming architectures to make your reporting instant and reliable.",
    points: [
      "Automated ETL/ELT Pipelines",
      "Snowflake & BigQuery Stack",
      "Apache Kafka Event Streams",
      "Power BI Executive Dashboards",
    ],
    techStack: ["Snowflake", "BigQuery", "Apache Kafka", "Spark", "Power BI"],
  },
  {
    id: "cybersecurity",
    number: "10",
    title: "Cybersecurity & Governance",
    badge: "ENTERPRISE SECURITY",
    slaBadge: "SOC 2 & ISO 27001",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew9.png",
    href: "/services/custom-software-integration",
    icon: ShieldCheck,
    glowColor: "rgba(16, 185, 129, 0.35)",
    isWide: true,
    description:
      "Web application penetration testing, API vulnerability assessments, IAM, end-to-end data encryption, and continuous 24/7 SIEM monitoring with strict compliance across ISO 27001, GDPR, and SOC 2 audits.",
    points: [
      "Comprehensive Web App & API Penetration Testing",
      "Zero-Trust Identity & Access Management (IAM)",
      "ISO 27001, GDPR, & SOC 2 Audit Readiness",
      "24/7 SIEM Infrastructure Monitoring & Defense",
    ],
    techStack: ["Cloudflare", "HashiCorp Vault", "SonarQube", "WAF", "ISO 27001"],
  },
];

export function Services() {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden border-t border-slate-100">
      
      {/* Background Soft Architectural Aura */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-[1100px] h-[700px] rounded-full bg-blue-50/60 blur-3xl opacity-75" />
      </div>

      <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ── Section Header ── */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-4 py-1.5 text-xs font-bold text-[#0066cc] uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles size={13} className="text-[#0066cc]" />
            <span>Enterprise Capability Stack</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-slate-900 tracking-tight leading-[1.15]">
            Real Business Outcomes Powered by Custom Engineering &amp; AI
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            From modern cloud architectures and intelligent automation to bespoke full-stack platforms. Explore our 10 core capability practices below.
          </p>
        </div>

        {/* ── 10-Service Bento Grid (Cool, Attractive & High-Converting) ── */}
        {/* 3 Columns Grid with 2 Flagship Spotlight Cards (Row 1 & Row 4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = service.icon;
            const isWide = service.isWide;

            return (
              <div
                key={service.id}
                className={`group relative rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm hover:shadow-2xl hover:border-[#0066cc]/40 transition-all duration-500 flex flex-col justify-between overflow-hidden ${
                  isWide ? "lg:col-span-2 bg-gradient-to-br from-white via-blue-50/20 to-white" : ""
                }`}
              >
                {/* ── IF WIDE SPOTLIGHT CARD (AI & ML or Cybersecurity) ── */}
                {isWide ? (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center h-full">
                    {/* Left: 3D Visual Stage with ambient colored radial glow */}
                    <div className="md:col-span-5 relative h-[230px] sm:h-[260px] rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-100/70 border border-slate-100 flex items-center justify-center p-6 overflow-hidden">
                      {/* Number Watermark */}
                      <span className="absolute top-3.5 left-4 text-xs font-mono font-black text-slate-400">
                        {service.number}
                      </span>

                      {/* SLA Live Badge */}
                      <div className="absolute top-3.5 right-4 inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[9.5px] font-extrabold text-emerald-700 uppercase tracking-wider">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                        <span>{service.slaBadge}</span>
                      </div>

                      {/* Radial Colored Aura behind 3D render */}
                      <div
                        className="absolute w-36 h-36 rounded-full blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"
                        style={{ backgroundColor: service.glowColor }}
                      />

                      {/* Continuous Gentle Floating 3D Artwork */}
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        animate={{
                          y: [0, -7, 0],
                        }}
                        transition={{
                          duration: 4.2 + (idx % 3) * 0.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="max-h-[175px] sm:max-h-[195px] w-auto object-contain drop-shadow-xl select-none group-hover:scale-108 group-hover:-translate-y-2 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Bottom Micro Tag */}
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] text-slate-400 font-semibold border-t border-slate-200/60 pt-2">
                        <span>Flagship Architecture</span>
                        <span className="text-[#0066cc] font-bold">CMMI Level 3</span>
                      </div>
                    </div>

                    {/* Right: Rich Agency Data */}
                    <div className="md:col-span-7 space-y-3.5 flex flex-col justify-between">
                      <div>
                        {/* Category Badge */}
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50/80 px-3 py-1 text-[10.5px] font-extrabold text-[#0066cc] uppercase tracking-wider mb-2">
                          <Zap size={11} className="text-[#0066cc]" />
                          <span>{service.badge}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-[26px] font-black text-slate-900 group-hover:text-[#0066cc] transition-colors leading-tight">
                          <Link href={service.href} className="hover:underline flex items-center justify-between">
                            <span>{service.title}</span>
                            <ArrowRight size={18} className="text-slate-400 group-hover:text-[#0066cc] group-hover:translate-x-1.5 transition-all shrink-0 ml-2" />
                          </Link>
                        </h3>

                        {/* Description */}
                        <p className="mt-2 text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                          {service.description}
                        </p>
                      </div>

                      {/* 4 Deliverables Checkmarks */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {service.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-tight font-medium line-clamp-1">{pt}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {service.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[10.5px] font-semibold text-slate-600 group-hover:border-blue-200 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="pt-2 flex items-center gap-4 text-xs font-bold">
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-1.5 text-[#0066cc] hover:text-[#0052a3] transition-colors"
                        >
                          <span>Explore Architecture</span>
                          <ArrowRight size={13} />
                        </Link>
                        <span className="text-slate-300">•</span>
                        <Link
                          href="/contact"
                          className="text-slate-500 hover:text-slate-900 transition-colors"
                        >
                          Consult Architects
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ── STANDARD BENTO CARD (1 Column) ── */
                  <div className="flex flex-col justify-between h-full space-y-5">
                    {/* Top 3D Art Stage */}
                    <div className="relative h-[190px] rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-100/60 border border-slate-100 flex items-center justify-center p-4 overflow-hidden">
                      {/* Number Watermark */}
                      <span className="absolute top-3 left-3 text-xs font-mono font-black text-slate-400">
                        {service.number}
                      </span>

                      {/* Icon Badge */}
                      <div className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-white/90 border border-slate-200/60 shadow-2xs flex items-center justify-center text-[#0066cc]">
                        <Icon size={14} />
                      </div>

                      {/* Ambient Glow */}
                      <div
                        className="absolute w-28 h-28 rounded-full blur-2xl opacity-35 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none"
                        style={{ backgroundColor: service.glowColor }}
                      />

                      {/* Continuous Gentle Floating 3D Artwork */}
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        animate={{
                          y: [0, -6, 0],
                        }}
                        transition={{
                          duration: 4.0 + (idx % 3) * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="max-h-[145px] w-auto object-contain drop-shadow-md select-none group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Middle: Content & Deliverables */}
                    <div className="space-y-3">
                      {/* Category Badge */}
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50/70 px-2.5 py-0.5 text-[9.5px] font-bold text-[#0066cc] uppercase tracking-wider">
                        <span>{service.badge}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-black text-slate-900 group-hover:text-[#0066cc] transition-colors leading-snug">
                        <Link href={service.href} className="flex items-center justify-between hover:underline">
                          <span>{service.title}</span>
                          <ArrowRight size={16} className="text-slate-400 group-hover:text-[#0066cc] group-hover:translate-x-1 transition-all shrink-0 ml-1.5" />
                        </Link>
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
                        {service.description}
                      </p>

                      {/* Key Deliverables Checkmarks (2 key items) */}
                      <div className="space-y-1.5 pt-1">
                        {service.points.slice(0, 2).map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-1.5 text-[11.5px] text-slate-700">
                            <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-tight font-medium truncate">{pt}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {service.techStack.slice(0, 4).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1 font-bold text-[#0066cc] hover:text-[#0052a3] transition-colors"
                      >
                        <span>Explore Practice</span>
                        <ArrowRight size={12} />
                      </Link>

                      <span className="text-[11px] font-semibold text-slate-400">
                        {service.slaBadge}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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
