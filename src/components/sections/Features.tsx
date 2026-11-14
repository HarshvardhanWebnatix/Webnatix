"use client";

import { CheckCircle2, ShieldCheck, Zap, Bot, Code2, Server } from "lucide-react";

const featureBlocks = [
  {
    tag: "Enterprise Engineering",
    title: "High-Throughput Cloud & Microservices Architecture",
    description: "Architected from day one for seamless multi-tenant scaling, resilient failovers, and sub-50ms global API responses without vendor lock-in.",
    items: [
      "100% client source code & intellectual property transfer upon delivery",
      "Auto-scaling Docker & Kubernetes cloud infrastructure on AWS/GCP",
      "Automated CI/CD release pipelines with comprehensive test suites",
      "Next.js App Router & serverless edge deployments worldwide",
    ],
  },
  {
    tag: "Autonomous Intelligence",
    title: "Enterprise AI & Multi-Agent Workflow Automation",
    description: "Embed autonomous capabilities directly into your software. We build production-ready RAG pipelines and custom vector search engines.",
    items: [
      "Custom vector databases (Pinecone, pgvector) with semantic search",
      "Multi-agent autonomous systems for business workflow execution",
      "Enterprise security safeguards with zero data leakage guarantees",
      "Custom fine-tuned LLM models tailored to your industry data",
    ],
  },
];

export function Features() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16 space-y-20">
        
        {featureBlocks.map((block, idx) => (
          <div 
            key={idx}
            className={`grid items-center gap-12 lg:grid-cols-12 ${
              idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Text side (6 cols) */}
            <div className="lg:col-span-6">
              <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-[11px] font-bold uppercase text-[#0066cc] mb-3">
                {block.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                {block.title}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                {block.description}
              </p>
              <div className="space-y-3">
                {block.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#0066cc] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Card side (6 cols) */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg shadow-slate-200/50">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-blue-50 text-[#0066cc] flex items-center justify-center font-bold">
                      {idx === 0 ? <Server size={18} /> : <Bot size={18} />}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        {idx === 0 ? "Production Cluster Telemetry" : "Agentic AI Orchestrator"}
                      </div>
                      <div className="text-[10px] text-slate-400">Live Infrastructure Health</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    99.99% Operational
                  </span>
                </div>

                {idx === 0 ? (
                  <div className="space-y-4">
                    {[
                      { label: "Global Edge Latency", val: "22 ms", pct: "96%" },
                      { label: "Throughput Concurrency", val: "50,000+ req/s", pct: "94%" },
                      { label: "Deployment Pipeline Velocity", val: "Zero Downtime", pct: "100%" },
                    ].map((stat, sIdx) => (
                      <div key={sIdx}>
                        <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                          <span>{stat.label}</span>
                          <span className="font-mono text-[#0066cc]">{stat.val}</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-[#0066cc]"
                            style={{ width: stat.pct }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    {[
                      { title: "RAG Embeddings", desc: "Sub-10ms Vector Search", ok: true },
                      { title: "Zero Data Leakage", desc: "Private VPC Isolation", ok: true },
                      { title: "Multi-Agent Queue", desc: "Asynchronous Workflows", ok: true },
                      { title: "Model Orchestration", desc: "Claude / GPT-4o / Local", ok: true },
                    ].map((c, cIdx) => (
                      <div key={cIdx} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                        <div className="font-bold text-slate-900 mb-0.5">{c.title}</div>
                        <div className="text-[11px] text-slate-500 mb-2">{c.desc}</div>
                        <div className="flex items-center gap-1 text-[10px] font-bold text-[#0066cc]">
                          <CheckCircle2 size={12} /> Production
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
