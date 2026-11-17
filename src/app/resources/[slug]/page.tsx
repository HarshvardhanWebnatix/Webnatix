import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, ArrowRight, Sparkles } from "lucide-react";

interface ResourcesSlugPageProps {
  params: Promise<{ slug: string }>;
}

const RESOURCE_SLUGS = ["blog", "news", "guides", "insights", "whitepapers"];

export async function generateStaticParams() {
  return RESOURCE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ResourcesSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.charAt(0).toUpperCase() + slug.slice(1);
  return {
    title: `${title} | Webnatix Technologies Knowledge Hub`,
    description: `Read the latest ${title} and technical publications from Webnatix Technologies.`,
  };
}

export default async function ResourcesSlugPage({ params }: ResourcesSlugPageProps) {
  const { slug } = await params;
  const title = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <div className="bg-white min-h-screen text-slate-800">
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 border-b border-slate-100 bg-gradient-to-b from-[#f8fafc] via-white to-white">
        <div className="relative mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0066cc] mb-6 hover:underline"
          >
            <ArrowLeft size={14} />
            <span>Back to All Resources</span>
          </Link>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] mb-4">
            {title} &amp; Publications
          </h1>

          <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
            Curated {slug} articles, practical engineering architectures, and strategic analysis from our senior technical team.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-[1780px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {[
            {
              title: "Generative AI & Private LLMs in Production",
              date: "NOV 14, 2024",
              desc: "Moving beyond basic prompt engineering to secure, local on-premise RAG vector pipelines.",
              href: "/services/ai-machine-learning",
            },
            {
              title: "Monolith to Microservices Migration Blueprint",
              date: "OCT 28, 2024",
              desc: "How our team decomposed a legacy enterprise backend into event-driven microservices with zero downtime.",
              href: "/services/full-stack-development",
            },
            {
              title: "Multi-Region Cloud Deployment & High Concurrency",
              date: "OCT 12, 2024",
              desc: "Architectural guidelines for AWS and Azure multi-region database sync and traffic routing.",
              href: "/services/cloud-solutions",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs hover:border-[#0066cc]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-blue-50 text-[#0066cc] font-extrabold text-[10px] uppercase px-3 py-1">
                    {slug}
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
                  <span>Explore Architecture</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
