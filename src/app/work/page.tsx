import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Trophy, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Case Studies & Proven Track Record | Webnatix Technologies",
  description: "Explore real-world case studies and enterprise digital transformations delivered across 24+ years by Webnatix Technologies.",
};

const CASE_STUDIES = [
  {
    title: "17-Portal Enterprise Migration to Drupal 10",
    client: "Global Industrial Manufacturer",
    stat: "17 Web Portals Unified",
    desc: "Migrated 17 disparate corporate websites into a centralized, mobile-responsive, and multilingual Drupal 10 architecture with zero downtime.",
    tags: ["Drupal 10", "Multilingual CMS", "Cloud Hosting"],
    href: "/services/website-development",
  },
  {
    title: "Multi-Brand Travel Booking Platform Modernization",
    client: "UK Travel Conglomerate",
    stat: "3.2x Booking Velocity",
    desc: "Engineered a high-concurrency booking engine handling live flight, hotel, and transfer API aggregators with sub-50ms search latency.",
    tags: ["Microservices", "Next.js", "Redis Enterprise"],
    href: "/services/full-stack-development",
  },
  {
    title: "FinTech Digital Banking & KYC Automation Dashboard",
    client: "European Digital Neo-Bank",
    stat: "99.999% Availability",
    desc: "Architected a compliant, high-security banking portal with biometric authentication, automated credit scoring, and ISO 20022 message routing.",
    tags: ["FinTech", "Biometric Auth", "ISO 20022"],
    href: "/services/full-stack-development",
  },
  {
    title: "Cloud Data Warehouse & Power BI Analytics Hub",
    client: "Multinational Retail & Supply Chain",
    stat: "12 Countries Unified",
    desc: "Unified disparate ERP, CRM, and POS data streams into Microsoft Azure and Power BI, delivering real-time executive visibility.",
    tags: ["Power BI", "Microsoft Azure", "ETL Pipelines"],
    href: "/services/data-strategy",
  },
];

export default function WorkPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800">
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 border-b border-slate-100 bg-gradient-to-b from-[#f8fafc] via-white to-white">
        <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-1.5 text-xs font-bold text-[#0066cc] uppercase tracking-wider mb-5">
            <Trophy size={14} className="text-[#0066cc]" />
            <span>27,000+ Delivered Projects Worldwide</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto">
            Featured <span className="text-[#0066cc]">Case Studies</span> &amp; Digital Work
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore how our 1,200+ in-house engineers and CMMI Level 3 maturity deliver measurable business value and high-velocity digital solutions.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-[1780px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={idx}
              className="group rounded-3xl border border-slate-200/90 bg-white p-8 shadow-xs hover:border-[#0066cc]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{study.client}</span>
                  <span className="rounded-full bg-blue-50 text-[#0066cc] font-extrabold text-[11px] px-3 py-1">
                    {study.stat}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors mb-3 leading-snug">
                  {study.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {study.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="rounded-lg bg-slate-100 text-slate-700 px-2.5 py-1 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={study.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066cc] group-hover:translate-x-1 transition-all"
                >
                  <span>Explore Technical Solution</span>
                  <ArrowRight size={14} />
                </Link>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0066cc] flex items-center justify-center group-hover:bg-[#0066cc] group-hover:text-white transition-colors">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
