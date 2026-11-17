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
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
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
    badge: "CUSTOM LLMS & MLOPS",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew10.png",
    href: "/services/ai-machine-learning",
    icon: Brain,
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
    badge: "NATIVE & CROSS-PLATFORM",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew2.png",
    href: "/services/mobile-app-development",
    icon: Smartphone,
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
    badge: "SUB-SECOND EDGE DELIVERY",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew3.png",
    href: "/services/website-development",
    icon: Layout,
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
    badge: "WORKFLOW AUTOMATION",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew6.png",
    href: "/services/crm-solutions",
    icon: Users,
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
    badge: "SEAMLESS CONNECTIVITY",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew7.png",
    href: "/services/api-development",
    icon: Workflow,
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
    badge: "MODERN DATA STACK",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew8.png",
    href: "/services/data-strategy",
    icon: Database,
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
    badge: "ENTERPRISE SECURITY",
    image: "https://cdn.dotsquares.com/assets/home-new/servicehomenew9.png",
    href: "/services/custom-software-integration",
    icon: ShieldCheck,
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
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden border-t border-slate-100">
      
      {/* Background Soft Ambient Light */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-[900px] h-[600px] rounded-full bg-blue-50/60 blur-3xl opacity-80" />
      </div>

      <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ── Section Header ── */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-3.5 py-1 text-xs font-bold text-[#0066cc] uppercase tracking-wider mb-4">
            <Sparkles size={13} className="text-[#0066cc]" />
            <span>Comprehensive IT &amp; Engineering Practices</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-slate-900 tracking-tight leading-[1.15]">
            Real Business Outcomes Powered by Custom Engineering &amp; AI
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Modern software engineering, cloud architecture, and intelligent automation systems tailored to how your business actually runs. Explore our 10 core capability practices below.
          </p>
        </div>

        {/* ── All 10 Services in a Modern 2-Column Split Cards Grid ── */}
        {/* (No category tabs hiding content: each service is immediately visible with image & full data) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-9">
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#0066cc]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top/Side Split: Left 3D Visual Stage | Right Data */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  
                  {/* Left Column (5 cols): 3D Product Visual Stage */}
                  <div className="sm:col-span-5 relative h-[220px] rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100/70 border border-slate-100 flex items-center justify-center p-4 overflow-hidden group-hover:bg-gradient-to-br group-hover:from-blue-50/50 group-hover:via-slate-50 group-hover:to-blue-50/30 transition-all">
                    {/* Watermark Number */}
                    <span className="absolute top-3 left-3 text-xs font-black text-slate-400/80 tracking-wider">
                      {service.number}
                    </span>

                    {/* Icon Badge */}
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-white/90 border border-slate-200/60 shadow-2xs flex items-center justify-center text-[#0066cc]">
                      <Icon size={14} />
                    </div>

                    {/* High-Definition 3D Illustration */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="max-h-[160px] w-auto object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1.5 select-none"
                      loading="lazy"
                    />
                  </div>

                  {/* Right Column (7 cols): Rich Data & Deliverables */}
                  <div className="sm:col-span-7 space-y-3">
                    
                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50/70 px-2.5 py-0.5 text-[10px] font-bold text-[#0066cc] uppercase tracking-wider">
                      <span>{service.badge}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-[22px] font-black text-slate-900 group-hover:text-[#0066cc] transition-colors leading-snug">
                      <Link href={service.href} className="flex items-center justify-between hover:underline">
                        <span>{service.title}</span>
                        <ArrowRight size={17} className="text-slate-400 group-hover:text-[#0066cc] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                      </Link>
                    </h3>

                    {/* Description Paragraph */}
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal line-clamp-3">
                      {service.description}
                    </p>

                    {/* Key Deliverables Checkmarks */}
                    <div className="space-y-1.5 pt-1">
                      {service.points.slice(0, 3).map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-tight font-medium line-clamp-1">{pt}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1.5">
                      {service.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[10.5px] font-semibold text-slate-600 group-hover:border-blue-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>

                {/* Card Bottom Bar */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 font-bold text-[#0066cc] hover:text-[#0052a3] transition-colors"
                  >
                    <span>Explore Full Architecture</span>
                    <ArrowRight size={13} />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-900 font-semibold transition-colors"
                  >
                    <span>Consult Architects</span>
                  </Link>
                </div>

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
