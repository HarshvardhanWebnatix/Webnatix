import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Newspaper, FileText, Sparkles, ArrowRight, Clock, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Insights, Technical Whitepapers & Engineering Blogs | Webnatix Technologies",
  description: "Stay ahead with expert technical research, cloud architecture whitepapers, digital transformation case studies, and engineering blogs from Webnatix Technologies.",
};

const RESOURCES = [
  {
    type: "blog",
    title: "Generative AI & LLMs in Enterprise Workflows",
    date: "NOV 14, 2024",
    desc: "How Fortune 500 enterprises are moving from AI proof-of-concepts to secure, private on-premise RAG architectures.",
    href: "/services/ai-machine-learning",
  },
  {
    type: "blog",
    title: "Monolith to Microservices: A 2025 Modern Roadmap",
    date: "OCT 28, 2024",
    desc: "Practical architectural strategies for breaking legacy enterprise monoliths into resilient, event-driven cloud services.",
    href: "/services/full-stack-development",
  },
  {
    type: "whitepapers",
    title: "CMMI Level 3 & ISO 27001 Engineering Maturity Standard",
    date: "NOV 02, 2024",
    desc: "A comprehensive audit guide on peer code reviews, continuous regression pipelines, and military-grade data encryption.",
    href: "/about",
  },
  {
    type: "insights",
    title: "Scalable Cloud Architecture for High-Traffic SaaS",
    date: "OCT 24, 2024",
    desc: "A technical guide on Redis caching tiers, multi-region database replication, and sub-50ms latency SLAs.",
    href: "/services/cloud-solutions",
  },
  {
    type: "guides",
    title: "Enterprise Cloud Migration: The Step-by-Step Playbook",
    date: "OCT 30, 2024",
    desc: "Master the 6 R's of cloud modernization, cost optimization frameworks, and zero-downtime workload cutover methodologies.",
    href: "/services/cloud-solutions",
  },
  {
    type: "news",
    title: "Global Capability Centre (GCC) Expansion in Jaipur",
    date: "OCT 16, 2024",
    desc: "Unveiling our upgraded tech campus housing 1,200+ full-time engineers and specialized AI innovation labs.",
    href: "/about",
  },
];

export default function ResourcesIndexPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800">
      
      {/* ── Hero Header ── */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 border-b border-slate-100 overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-white">
        <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-1.5 text-xs font-bold text-[#0066cc] uppercase tracking-wider mb-5">
            <Sparkles size={14} className="text-[#0066cc]" />
            <span>Research &amp; Executive Perspectives</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto">
            Industry Insights, Whitepapers &amp; <span className="text-[#0066cc]">Knowledge Hub</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Access deep technical guides, architecture playbooks, and industry market analysis authored by seasoned software architects and CTOs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { label: "All Insights", href: "/resources" },
              { label: "Blogs", href: "/resources/blog" },
              { label: "News & Events", href: "/resources/news" },
              { label: "Technical Guides", href: "/resources/guides" },
              { label: "Whitepapers", href: "/resources/whitepapers" },
            ].map((tab, i) => (
              <Link
                key={i}
                href={tab.href}
                className="rounded-full border border-slate-200 bg-white px-5 py-2 text-xs font-bold text-slate-700 hover:border-[#0066cc] hover:text-[#0066cc] transition-all shadow-2xs"
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cards Grid ── */}
      <section className="py-20 max-w-[1780px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {RESOURCES.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs hover:border-[#0066cc]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-blue-50 text-[#0066cc] font-extrabold text-[10px] uppercase px-3 py-1">
                    {item.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                    <Clock size={12} />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6 font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066cc] group-hover:translate-x-1 transition-all"
                >
                  <span>Read Full Article</span>
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
