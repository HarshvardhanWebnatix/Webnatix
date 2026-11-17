import { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone,
  Globe,
  Server,
  Database,
  Layers,
  Cpu,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Technology Architecture & Modern Stacks | Webnatix Technologies",
  description:
    "Explore our full-spectrum technology capabilities across Mobile (iOS, Android, React Native, Flutter), Backend (Python, Node, Java, Laravel), Frontend (Next.js, React), CMS & CRM (Shopify, WordPress, Salesforce, Zoho).",
};

const TECH_CATEGORIES = [
  {
    category: "Mobile App Technologies",
    icon: Smartphone,
    items: [
      {
        id: "ios",
        name: "iOS Development (Swift)",
        slug: "ios",
        desc: "Native iOS applications built with Swift and SwiftUI, taking full advantage of Apple Hardware, Secure Enclave, and Human Interface Guidelines.",
        highlights: ["Swift & SwiftUI", "FaceID / TouchID Biometrics", "WidgetKit & Live Activities", "Apple Pay Integration"],
      },
      {
        id: "android",
        name: "Android Development (Kotlin)",
        slug: "android",
        desc: "Robust, high-performance native Android apps built with Kotlin, Jetpack Compose, and Material 3 design for global device ecosystems.",
        highlights: ["Kotlin & Jetpack Compose", "Coroutines & Flow", "Hardware Sensor Access", "Google Play Billing"],
      },
      {
        id: "react-native",
        name: "React Native Cross-Platform",
        slug: "react-native",
        desc: "Build once, deploy everywhere. 95% shared TypeScript codebase across iOS and Android with near-native 60fps execution and Expo EAS.",
        highlights: ["Native Bridge & TurboModules", "Over-The-Air (OTA) Updates", "Hermes Engine Optimization", "Shared UI Systems"],
      },
      {
        id: "flutter",
        name: "Flutter Multi-Platform",
        slug: "flutter",
        desc: "Pixel-perfect bespoke UI powered by Google's Skia and Impeller rendering engines for unified mobile, web, and desktop releases.",
        highlights: ["Dart & Skia Engine", "Identical UI across platforms", "Hardware Accelerated", "Rich Desktop Support"],
      },
    ],
  },
  {
    category: "Backend & Cloud Frameworks",
    icon: Server,
    items: [
      {
        id: "python",
        name: "Python Enterprise Development",
        slug: "python",
        desc: "Powering AI pipelines, microservices, and enterprise automation with Python 3.12, FastAPI, Django, and PyTorch for high-throughput scaling.",
        highlights: ["FastAPI & AsyncIO", "AI & ML Model Deployment", "Django Enterprise ORM", "Microservices Architecture"],
      },
      {
        id: "mern",
        name: "MERN & Node.js Stack",
        slug: "mern",
        desc: "End-to-end JavaScript/TypeScript engineering. Event-driven non-blocking I/O architectures designed for real-time web applications.",
        highlights: ["Node.js & NestJS", "MongoDB & Redis Cluster", "WebSockets & Event Loops", "Sub-50ms API Latency"],
      },
      {
        id: "java",
        name: "Java & Enterprise Spring Boot",
        slug: "java",
        desc: "Mission-critical enterprise backends, distributed banking rails, and fault-tolerant cloud services with Spring Boot and Quarkus.",
        highlights: ["Spring Boot Microservices", "Zero-Loss Transactions", "Docker & Kubernetes Ready", "ISO 20022 Compliance"],
      },
      {
        id: "laravel",
        name: "Laravel & Modern PHP",
        slug: "laravel",
        desc: "Rapid application development with PHP 8.3+, Laravel 11, Livewire, and queue workers for clean, maintainable web applications.",
        highlights: ["Eloquent ORM & Migrations", "Horizon Queue Workers", "Bespoke SaaS Architecture", "Automated PHPUnit Tests"],
      },
    ],
  },
  {
    category: "Frontend & Web Architecture",
    icon: Globe,
    items: [
      {
        id: "nextjs",
        name: "Next.js 16 & React 19",
        slug: "nextjs",
        desc: "Modern React with Server Components, Edge Caching, streaming SSR, and 100/100 Core Web Vitals performance.",
        highlights: ["Server Components & SSR", "Sub-Second Global Loads", "Automated SEO & OpenGraph", "Tailwind CSS Design Systems"],
      },
    ],
  },
  {
    category: "E-Commerce, CMS & Enterprise CRM",
    icon: Database,
    items: [
      {
        id: "shopify",
        name: "Shopify & Shopify Plus",
        slug: "shopify",
        desc: "High-volume e-commerce storefronts, custom checkout extensions, Liquid theme customization, and bespoke Shopify Apps.",
        highlights: ["Shopify Plus Checkout Extensibility", "Custom Liquid & Headless Hydrogen", "ERP & Inventory Sync", "Conversion Rate Optimization"],
      },
      {
        id: "wordpress",
        name: "WordPress & WooCommerce",
        slug: "wordpress",
        desc: "Custom block-based themes, headless WordPress REST API integrations, and enterprise WooCommerce scaling.",
        highlights: ["Custom Gutenberg Blocks", "Headless GraphQL Endpoints", "Advanced Security Hardening", "Sub-Second Caching"],
      },
      {
        id: "hubspot-cms",
        name: "HubSpot CRM & Marketing Suite",
        slug: "hubspot-cms",
        desc: "HubSpot CRM onboarding, automated lead scoring workflows, custom CMS hub themes, and bi-directional API synchronizations.",
        highlights: ["Inbound Marketing Automation", "Custom HubL Templates", "Sales Pipeline Optimization", "Full Lifecycle Tracking"],
      },
      {
        id: "salesforce",
        name: "Salesforce Cloud Solutions",
        slug: "salesforce",
        desc: "Sales Cloud, Service Cloud, Lightning Web Components (LWC), and custom Apex triggers engineered for enterprise efficiency.",
        highlights: ["Salesforce Lightning Components", "Custom Apex Triggers", "Third-Party ERP Connectors", "Multi-Org Data Migrations"],
      },
      {
        id: "zoho",
        name: "Zoho Enterprise Suite",
        slug: "zoho",
        desc: "Custom Zoho One implementations, Deluge scripting, automated CRM workflows, and seamless accounting integration.",
        highlights: ["Zoho One Deployment", "Deluge Workflow Scripting", "Zoho Books & Inventory", "Real-Time BI Dashboards"],
      },
    ],
  },
];

export default function TechnologiesIndexPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800">
      
      {/* ── Hero Header ── */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 border-b border-slate-100 overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0066cc 1px, transparent 1px), linear-gradient(to right, #0066cc 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-1.5 text-xs font-bold text-[#0066cc] uppercase tracking-wider mb-5">
            <Sparkles size={14} className="text-[#0066cc]" />
            <span>24+ Years of Engineering Maturity · CMMI Level 3</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto">
            Full-Spectrum <span className="text-[#0066cc]">Technology Architecture</span> &amp; Modern Stacks
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            From modern mobile frameworks and distributed Python/Node backends to enterprise Salesforce and Next.js platforms, Webnatix provides certified full-time developers and 100% intellectual property ownership.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-700/20 hover:bg-[#0052a3] transition-all"
            >
              <span>Consult Technology Architects</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Technologies Directory by Category ── */}
      <section className="py-20 max-w-[1780px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-20">
        {TECH_CATEGORIES.map((cat, catIdx) => {
          const Icon = cat.icon;
          return (
            <div key={catIdx} className="space-y-8">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066cc] flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900">{cat.category}</h2>
                  <p className="text-xs text-slate-500 font-medium">Production-grade engineering &amp; dedicated developer pods</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cat.items.map((tech) => (
                  <div
                    key={tech.id}
                    id={tech.id}
                    className="group rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-[#0066cc]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="rounded-full bg-blue-50 text-[#0066cc] font-extrabold text-[10px] uppercase px-3 py-1">
                          Enterprise Ready
                        </span>
                        <span className="text-[11px] font-bold text-slate-400">100% IP</span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors mb-2">
                        {tech.name}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                        {tech.desc}
                      </p>

                      <div className="space-y-2 mb-6">
                        {tech.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                            <CheckCircle2 size={13} className="text-[#0066cc] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={`/technologies/${tech.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066cc] group-hover:translate-x-1 transition-all"
                      >
                        <span>Explore Capabilities</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
}
