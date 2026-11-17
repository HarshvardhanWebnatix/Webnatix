"use client";

import Link from "next/link";
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
    image: "/images/services/servicehomenew10.png",
    href: "/services/ai-machine-learning",
    icon: Brain,
    isWide: true,
    description:
      "We build and deploy custom ML models, LLM-powered applications, and intelligent automation systems tailored to your data and business logic. From predictive analytics to production-grade MLOps.",
    points: [
      "Custom Fine-Tuned Large Language Models",
      "Enterprise Retrieval-Augmented Generation",
      "Predictive Analytics & Computer Vision",
      "Production-Grade MLOps Retraining",
    ],
    techStack: ["PyTorch", "OpenAI / Claude", "Pinecone", "LangChain", "MLflow"],
  },
  {
    id: "software",
    number: "02",
    title: "Custom Software Development",
    badge: "FULL LIFECYCLE ENGINEERING",
    slaBadge: "100% IP HANDOVER",
    image: "/images/services/servicehomenew1.png",
    href: "/services/full-stack-development",
    icon: Layers,
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
    image: "/images/services/servicehomenew2.png",
    href: "/services/mobile-app-development",
    icon: Smartphone,
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
    image: "/images/services/servicehomenew3.png",
    href: "/services/website-development",
    icon: Layout,
    description:
      "From headless CMS builds and Next.js SPAs to enterprise Drupal and .NET platforms. Clean, standards-compliant code with accessibility, sub-second latency, and Core Web Vitals baked in.",
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
    image: "/images/services/servicehomenew4.png",
    href: "/services/ecommerce-development",
    icon: ShoppingBag,
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
    image: "/images/services/servicehomenew5.png",
    href: "/services/cloud-solutions",
    icon: Cloud,
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
    image: "/images/services/servicehomenew6.png",
    href: "/services/crm-solutions",
    icon: Users,
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
    image: "/images/services/servicehomenew7.png",
    href: "/services/api-development",
    icon: Workflow,
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
    image: "/images/services/servicehomenew8.png",
    href: "/services/data-strategy",
    icon: Database,
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
    image: "/images/services/servicehomenew9.png",
    href: "/services/custom-software-integration",
    icon: ShieldCheck,
    isWide: true,
    description:
      "Web application penetration testing, API vulnerability assessments, IAM, end-to-end data encryption, and continuous 24/7 SIEM monitoring with strict compliance across ISO 27001, GDPR, and SOC 2 audits.",
    points: [
      "Web App & API Penetration Testing",
      "Zero-Trust Identity & Access Management",
      "ISO 27001, GDPR & SOC 2 Audit Readiness",
      "24/7 SIEM Threat Defense",
    ],
    techStack: ["Cloudflare", "HashiCorp Vault", "SonarQube", "WAF", "ISO 27001"],
  },
];

export function Services() {
  return (
    <section className="relative py-14 sm:py-20 bg-white overflow-hidden border-t border-slate-100">
      
      {/* Background Soft Ambient Light */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-[900px] h-[550px] rounded-full bg-blue-50/60 blur-3xl opacity-75" />
      </div>

      <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ── Section Header ── */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50/70 px-3.5 py-1 text-[11px] font-bold text-[#0066cc] uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles size={12} className="text-[#0066cc]" />
            <span>Enterprise Capability Stack</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-slate-900 tracking-tight leading-[1.18]">
            Real Business Outcomes Powered by Custom Engineering &amp; AI
          </h2>

          <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            From modern cloud architectures and intelligent automation to bespoke full-stack platforms. Explore our 10 core capability practices below.
          </p>
        </div>

        {/* ── 10-Service Bento Grid: Compact & Sleek Proportions ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES_DATA.map((service) => {
            const isWide = service.isWide;

            return (
              <div
                key={service.id}
                className={`group relative rounded-[22px] border border-slate-200/90 bg-white shadow-xs hover:shadow-[0_18px_45px_rgba(0,102,204,0.15)] hover:border-[#0066cc]/50 transition-all duration-400 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 ${
                  isWide ? "lg:col-span-2" : ""
                }`}
              >
                {/* ── IF WIDE SPOTLIGHT CARD (AI & ML or Cybersecurity) ── */}
                {isWide ? (
                  <div className="grid grid-cols-1 md:grid-cols-12 h-full">
                    
                    {/* LEFT IMAGE: BIG, FULL BLEED, CURVED, NO PADDING, NO MARGIN */}
                    <div className="md:col-span-5 relative min-h-[220px] md:min-h-full h-48 md:h-full overflow-hidden rounded-t-[21px] md:rounded-t-none md:rounded-l-[21px] bg-slate-900">
                      {/* Image with smooth hover scale */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover min-h-[220px] transition-transform duration-600 ease-out group-hover:scale-108"
                        loading="lazy"
                      />

                      {/* Animated Shimmer Light Sweep on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-900 ease-in-out pointer-events-none" />

                      {/* Dark Gradient Overlay for Contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                      {/* Floating Glass Number Badge */}
                      <div className="absolute top-3.5 left-3.5 flex items-center gap-1 rounded-full bg-black/45 backdrop-blur-md border border-white/25 px-2.5 py-0.5 text-xs font-mono font-black text-white shadow-sm">
                        <span>{service.number}</span>
                      </div>

                      {/* Floating Live SLA Badge */}
                      <div className="absolute top-3.5 right-3.5 inline-flex items-center gap-1.5 rounded-full bg-emerald-950/75 backdrop-blur-md border border-emerald-400/40 px-2.5 py-0.5 text-[9px] font-extrabold text-emerald-300 uppercase tracking-wider shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                        <span>{service.slaBadge}</span>
                      </div>

                      {/* Bottom Flagship Pill */}
                      <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-[10.5px] text-white/90 font-bold backdrop-blur-md bg-black/45 border border-white/20 rounded-lg px-2.5 py-1">
                        <span className="flex items-center gap-1">
                          <Sparkles size={11} className="text-amber-400" />
                          <span>Flagship Practice</span>
                        </span>
                        <span className="text-blue-300 text-[10px]">CMMI Level 3</span>
                      </div>
                    </div>

                    {/* RIGHT CONTENT: TIGHTER, SLEEKER PADDING */}
                    <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-3">
                      <div>
                        {/* Category Badge */}
                        <div className="inline-flex items-center gap-1 rounded-full border border-blue-200/80 bg-blue-50/80 px-2.5 py-0.5 text-[9.5px] font-extrabold text-[#0066cc] uppercase tracking-wider mb-1.5">
                          <Zap size={10} className="text-[#0066cc]" />
                          <span>{service.badge}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#0066cc] transition-colors leading-snug">
                          <Link href={service.href} className="hover:underline flex items-center justify-between">
                            <span>{service.title}</span>
                            <ArrowRight size={18} className="text-slate-400 group-hover:text-[#0066cc] group-hover:translate-x-1.5 transition-transform duration-250 shrink-0 ml-2" />
                          </Link>
                        </h3>

                        {/* Description */}
                        <p className="mt-1.5 text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
                          {service.description}
                        </p>
                      </div>

                      {/* 4 Deliverables Checkmarks */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-0.5">
                        {service.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                            <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-tight font-medium truncate">{pt}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {service.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-600 group-hover:border-blue-200 group-hover:bg-blue-50/40 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links Footer */}
                      <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-1.5 text-[#0066cc] hover:text-[#0052a3] transition-colors"
                        >
                          <span>Explore Full Architecture</span>
                          <ArrowRight size={13} />
                        </Link>

                        <Link
                          href="/contact"
                          className="text-slate-500 hover:text-slate-900 transition-colors text-[11px]"
                        >
                          Consult Architects
                        </Link>
                      </div>
                    </div>

                  </div>
                ) : (
                  /* ── STANDARD BENTO CARD (1 Column): FULL BLEED TOP IMAGE, COMPACT SIZES ── */
                  <div className="flex flex-col justify-between h-full">
                    
                    {/* TOP IMAGE: FULL BLEED, CURVED, SLEEK HEIGHT */}
                    <div className="relative w-full h-44 sm:h-48 overflow-hidden rounded-t-[21px] bg-slate-900">
                      {/* Image with smooth hover zoom */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-108"
                        loading="lazy"
                      />

                      {/* Animated Shimmer Light Sweep on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-900 ease-in-out pointer-events-none" />

                      {/* Dark Gradient Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

                      {/* Floating Glass Number Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-black/45 backdrop-blur-md border border-white/25 px-2.5 py-0.5 text-xs font-mono font-black text-white shadow-sm">
                        <span>{service.number}</span>
                      </div>

                      {/* Floating Live SLA Badge */}
                      <div className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-emerald-950/75 backdrop-blur-md border border-emerald-400/40 px-2 py-0.5 text-[9px] font-extrabold text-emerald-300 uppercase tracking-wider shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                        <span>{service.slaBadge}</span>
                      </div>

                      {/* Floating Category Pill on Image Bottom */}
                      <div className="absolute bottom-2.5 left-3 inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-md border border-white/80 px-2.5 py-0.5 text-[9px] font-extrabold uppercase text-[#0066cc] tracking-wider shadow-xs">
                        <span>{service.badge}</span>
                      </div>
                    </div>

                    {/* CONTENT BODY: SLEEK, CRISP PADDING */}
                    <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 space-y-3">
                      
                      <div className="space-y-1.5">
                        {/* Title */}
                        <h3 className="text-lg sm:text-[19px] font-black text-slate-900 group-hover:text-[#0066cc] transition-colors leading-snug">
                          <Link href={service.href} className="flex items-center justify-between hover:underline">
                            <span>{service.title}</span>
                            <ArrowRight size={15} className="text-slate-400 group-hover:text-[#0066cc] group-hover:translate-x-1.5 transition-transform duration-250 shrink-0 ml-1.5" />
                          </Link>
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
                          {service.description}
                        </p>
                      </div>

                      {/* Key Deliverables Checkmarks (2 key items) */}
                      <div className="space-y-1 pt-0.5">
                        {service.points.slice(0, 2).map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                            <CheckCircle2 size={12} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-tight font-medium truncate">{pt}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {service.techStack.slice(0, 4).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[9.5px] font-semibold text-slate-600 group-hover:border-blue-200 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Action Footer */}
                      <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-1 font-bold text-[#0066cc] hover:text-[#0052a3] transition-colors text-[11.5px]"
                        >
                          <span>Explore Practice</span>
                          <ArrowRight size={11} />
                        </Link>

                        <span className="text-[10px] font-semibold text-slate-400">
                          {service.slaBadge}
                        </span>
                      </div>

                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Bottom Callout Banner: Compact & Balanced ── */}
        <div className="mt-10 sm:mt-12 rounded-2xl border border-slate-200/90 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest">
              BESPOKE ARCHITECTURAL SCOPING
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Need a Custom Solution Built Around Your Specific Architecture?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-normal">
              Our principal engineering architects review requirements, evaluate legacy constraints, and deliver an SLA-backed technical blueprint within 48 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#e52320] px-5 py-3 text-xs font-bold text-white shadow-md shadow-red-500/25 hover:bg-[#c91c19] hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <span>Book Architecture Call</span>
              <ArrowRight size={14} />
            </Link>

            <a
              href="tel:+919252052623"
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-bold text-white hover:bg-white/20 transition-all"
            >
              <PhoneCall size={14} />
              <span>+91 9252052623</span>
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
