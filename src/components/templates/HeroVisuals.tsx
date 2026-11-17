"use client";

import { useEffect, useState } from "react";
import {
  Zap,
  ShieldCheck,
  CheckCircle2,
  Server,
  Layers,
  Cpu,
  Trophy,
  Smartphone,
  Gauge,
  Sparkles,
  Lock,
  ArrowUpRight,
  TrendingUp,
  Activity,
  Flame,
  Radio,
  Sliders,
  Terminal,
  Database,
  Cloud,
  ShoppingCart,
  CreditCard,
  Search,
  Share2,
  DollarSign,
  BarChart3,
  Bot,
  BrainCircuit,
  Boxes,
  Workflow,
  Eye,
  RefreshCw,
  GitBranch,
  Network,
  Binary,
  Check,
} from "lucide-react";

export type HeroVisualType =
  | "api-flow"
  | "unified-api"
  | "betadrix-shield"
  | "lighthouse-speed"
  | "mobile-showcase"
  | "ecommerce-cart"
  | "casino-crash"
  | "sportsbook-engine"
  | "api-latency"
  | "software-integration"
  | "crm-kanban"
  | "cloud-cluster"
  | "ai-neural"
  | "salesforce-cloud"
  | "hubspot-funnel"
  | "zoho-suite"
  | "seo-ranking"
  | "smm-feed"
  | "ppc-auction"
  | "speed-benchmark"
  | "data-strategy"
  | "data-processing"
  | "data-analytics"
  | "data-migration"
  | "custom-ai-weights"
  | "ai-bi-matrix"
  | "llm-rag"
  | "agentic-swarm"
  | "blockchain-ledger";

interface HeroVisualProps {
  type?: HeroVisualType;
  title?: string;
}

export function HeroVisualRenderer({ type = "api-flow", title }: HeroVisualProps) {
  switch (type) {
    case "api-flow":
    case "betadrix-shield":
      return <BetadrixShieldVisual />;
    case "unified-api":
      return <ApiFlowVisual />;
    case "lighthouse-speed":
      return <LighthouseSpeedVisual />;
    case "mobile-showcase":
      return <MobileShowcaseVisual />;
    case "ecommerce-cart":
      return <EcommerceCartVisual />;
    case "casino-crash":
      return <CasinoCrashVisual />;
    case "sportsbook-engine":
      return <SportsbookEngineVisual />;
    case "api-latency":
      return <ApiLatencyVisual />;
    case "software-integration":
      return <SoftwareIntegrationVisual />;
    case "crm-kanban":
      return <CrmKanbanVisual />;
    case "cloud-cluster":
      return <CloudClusterVisual />;
    case "ai-neural":
      return <AiNeuralVisual />;
    case "salesforce-cloud":
      return <SalesforceCloudVisual />;
    case "hubspot-funnel":
      return <HubspotFunnelVisual />;
    case "zoho-suite":
      return <ZohoSuiteVisual />;
    case "seo-ranking":
      return <SeoRankingVisual />;
    case "smm-feed":
      return <SmmFeedVisual />;
    case "ppc-auction":
      return <PpcAuctionVisual />;
    case "speed-benchmark":
      return <SpeedBenchmarkVisual />;
    case "data-strategy":
      return <DataStrategyVisual />;
    case "data-processing":
      return <DataProcessingVisual />;
    case "data-analytics":
      return <DataAnalyticsVisual />;
    case "data-migration":
      return <DataMigrationVisual />;
    case "custom-ai-weights":
      return <CustomAiWeightsVisual />;
    case "ai-bi-matrix":
      return <AiBiMatrixVisual />;
    case "llm-rag":
      return <LlmRagVisual />;
    case "agentic-swarm":
      return <AgenticSwarmVisual />;
    case "blockchain-ledger":
      return <BlockchainLedgerVisual />;
    default:
      return <ApiFlowVisual />;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. FULL STACK: PRODUCTION-READY ENGINEERING SHIELD (Exact Match to Betadrix Reference)
// ─────────────────────────────────────────────────────────────────────────────
export function BetadrixShieldVisual() {
  return (
    <div className="relative w-full max-w-[520px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-white/10 bg-[#0d0e14] p-6 sm:p-7 shadow-2xl overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/5">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-red-500/40 bg-red-950/40 px-3 py-1 text-[11px] font-bold text-red-400">
            <Zap size={11} className="text-[#e52320]" />
            <span>Production Ready Engineering</span>
          </div>
          <span className="text-[11px] font-semibold text-slate-400">SLA Guaranteed</span>
        </div>

        {/* Center Stage with Glowing Hub & 4 Connected Nodes */}
        <div className="relative h-[250px] my-4 flex items-center justify-center">
          {/* Radial Red Glow */}
          <div className="absolute w-48 h-48 rounded-full bg-red-600/30 blur-2xl pointer-events-none animate-pulse" />

          {/* SVG Connecting Lines with glowing signal pulses */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 460 250" fill="none">
            {/* Top-Left Line */}
            <path d="M 120 48 L 195 105" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
            {/* Top-Right Line */}
            <path d="M 340 48 L 265 105" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
            {/* Bottom-Left Line */}
            <path d="M 120 200 L 195 145" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
            {/* Bottom-Right Line */}
            <path d="M 340 200 L 265 145" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />

            {/* Moving Pulses */}
            <circle r="3" fill="#f59e0b">
              <animateMotion path="M 120 48 L 195 105" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle r="3" fill="#ef4444">
              <animateMotion path="M 265 105 L 340 48" dur="2.1s" repeatCount="indefinite" />
            </circle>
            <circle r="3" fill="#10b981">
              <animateMotion path="M 120 200 L 195 145" dur="2.6s" repeatCount="indefinite" />
            </circle>
            <circle r="3" fill="#06b6d4">
              <animateMotion path="M 265 145 L 340 200" dur="2.3s" repeatCount="indefinite" />
            </circle>
          </svg>

          {/* Central Shield Box */}
          <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-b from-[#1e1013] to-[#12080a] border-2 border-red-500/70 shadow-[0_0_35px_rgba(229,35,32,0.55)] flex items-center justify-center transition-transform hover:scale-105 cursor-pointer">
            <ShieldCheck size={36} className="text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]" />
          </div>

          {/* 4 Corner Nodes */}
          {/* Top-Left: Architecture (Scalable) */}
          <div className="absolute top-2 left-2 flex items-center gap-1.5 rounded-full border border-white/10 bg-[#161822]/90 px-3 py-1.5 shadow-lg backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            <span className="text-xs font-bold text-white">Architecture</span>
            <span className="text-[10px] text-slate-400 font-medium">(Scalable)</span>
          </div>

          {/* Top-Right: Security (Enterprise) */}
          <div className="absolute top-2 right-2 flex items-center gap-1.5 rounded-full border border-white/10 bg-[#161822]/90 px-3 py-1.5 shadow-lg backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
            <span className="text-xs font-bold text-white">Security</span>
            <span className="text-[10px] text-slate-400 font-medium">(Enterprise)</span>
          </div>

          {/* Bottom-Left: Performance (Optimized) */}
          <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded-full border border-white/10 bg-[#161822]/90 px-3 py-1.5 shadow-lg backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-bold text-white">Performance</span>
            <span className="text-[10px] text-slate-400 font-medium">(Optimized)</span>
          </div>

          {/* Bottom-Right: Integration (Seamless) */}
          <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full border border-white/10 bg-[#161822]/90 px-3 py-1.5 shadow-lg backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-bold text-white">Integration</span>
            <span className="text-[10px] text-slate-400 font-medium">(Seamless)</span>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex items-center justify-between pt-3.5 border-t border-white/5 text-xs">
          <div className="flex items-center gap-1.5 text-slate-300 font-medium">
            <CheckCircle2 size={13} className="text-[#e52320]" />
            <span>Enterprise Technical Stack</span>
          </div>
          <span className="text-red-400 font-bold tracking-wide">Production Hardened</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 1B. UNIFIED API AGGREGATION
// ─────────────────────────────────────────────────────────────────────────────
export function ApiFlowVisual() {
  return (
    <div className="relative w-full max-w-[560px] select-none">
      <div className="relative rounded-3xl border border-slate-200/90 bg-white/95 p-6 sm:p-8 shadow-xl shadow-slate-200/50 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-56 h-56 rounded-full bg-emerald-500/10 blur-3xl animate-pulse-scale" />
        </div>
        <div className="relative z-10 flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-600">
              UNIFIED AGGREGATION &amp; API LAYER
            </span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            99.99% UPTIME SLA
          </span>
        </div>
        <div className="relative z-10 grid grid-cols-12 items-center min-h-[300px]">
          <div className="col-span-4 space-y-2.5">
            {["Next.js 16 Edge", "Node.js Core", "PostgreSQL DB", "Redis Cluster", "AWS Cloud"].map((provider, idx) => (
              <div key={idx} className="group flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-3 py-1.5 shadow-2xs hover:border-emerald-500 hover:shadow-xs transition-all">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span className="text-[11.5px] font-semibold text-slate-700 group-hover:text-emerald-700 transition-colors truncate">
                  {provider}
                </span>
              </div>
            ))}
          </div>
          <div className="col-span-4 relative h-[260px] flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 160 260" fill="none">
              <path d="M 0 35 C 50 35, 50 130, 80 130" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.35" />
              <path d="M 0 85 C 45 85, 50 130, 80 130" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4" />
              <path d="M 0 130 L 80 130" stroke="#10b981" strokeWidth="1.8" strokeOpacity="0.6" strokeDasharray="3 3" />
              <path d="M 0 175 C 45 175, 50 130, 80 130" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4" />
              <path d="M 0 225 C 50 225, 50 130, 80 130" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.35" />
              <path d="M 80 130 C 110 130, 115 45, 160 45" stroke="#0066cc" strokeWidth="1.5" strokeOpacity="0.35" />
              <path d="M 80 130 C 115 130, 120 100, 160 100" stroke="#0066cc" strokeWidth="1.5" strokeOpacity="0.4" />
              <path d="M 80 130 C 115 130, 120 160, 160 160" stroke="#0066cc" strokeWidth="1.5" strokeOpacity="0.4" />
              <path d="M 80 130 C 110 130, 115 215, 160 215" stroke="#0066cc" strokeWidth="1.5" strokeOpacity="0.35" />
              <circle r="3" fill="#10b981">
                <animateMotion path="M 0 85 C 45 85, 50 130, 80 130" dur="2.2s" repeatCount="indefinite" />
              </circle>
              <circle r="3" fill="#0066cc">
                <animateMotion path="M 80 130 C 115 130, 120 100, 160 100" dur="1.9s" repeatCount="indefinite" />
              </circle>
            </svg>
            <div className="relative z-20 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-emerald-500 bg-white shadow-[0_0_25px_rgba(16,185,129,0.25)] flex flex-col items-center justify-center p-2 text-center transition-transform hover:scale-105">
                <Zap size={20} className="text-emerald-600 mb-0.5" />
                <span className="text-[9.5px] font-extrabold uppercase tracking-tight text-slate-800 leading-none">
                  UNIFIED
                </span>
                <span className="text-[8.5px] font-bold uppercase tracking-wider text-emerald-600 leading-none mt-0.5">
                  API
                </span>
              </div>
              <div className="absolute inset-0 rounded-full border border-emerald-400/40 scale-125 animate-ping pointer-events-none" />
            </div>
          </div>
          <div className="col-span-4 space-y-3 pl-2">
            {[
              { label: "Web Apps", icon: Sparkles },
              { label: "Mobile Apps", icon: Smartphone },
              { label: "Cloud SaaS", icon: Server },
              { label: "AI Engines", icon: Cpu },
            ].map((cat, idx) => (
              <div key={idx} className="group flex items-center justify-between rounded-xl border border-slate-200/90 bg-white px-3.5 py-2 shadow-2xs hover:border-[#0066cc] hover:shadow-xs transition-all">
                <span className="text-xs font-bold text-slate-800 group-hover:text-[#0066cc] transition-colors">{cat.label}</span>
                <cat.icon size={13} className="text-slate-400 group-hover:text-[#0066cc] transition-colors" />
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10 grid grid-cols-2 gap-4 pt-4 mt-2 border-t border-slate-100">
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5 space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600">CONNECTED</span>
            <div className="text-2xl font-black text-slate-900 tracking-tight">250+</div>
            <p className="text-[11px] text-slate-500 font-medium">Enterprise Endpoints</p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5 space-y-1 text-right">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0066cc]">LIBRARY</span>
            <div className="text-2xl font-black text-slate-900 tracking-tight">30K+</div>
            <p className="text-[11px] text-slate-500 font-medium">Production Modules</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. WEBSITE DEVELOPMENT: 100/100 LIGHTHOUSE CORE WEB VITALS
// ─────────────────────────────────────────────────────────────────────────────
export function LighthouseSpeedVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          <div className="rounded-lg bg-slate-100 px-3 py-1 text-[11px] font-mono text-slate-500">
            https://webnatix.com/production
          </div>
        </div>
        <div className="py-6 flex items-center justify-center gap-6 sm:gap-8">
          {[
            { label: "Performance", score: 100 },
            { label: "Accessibility", score: 100 },
            { label: "Best Practices", score: 100 },
            { label: "SEO", score: 100 },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-1.5">
              <div className="w-14 h-14 rounded-full border-4 border-emerald-500 bg-emerald-50/50 flex items-center justify-center font-black text-sm text-emerald-600 shadow-sm animate-pulse-scale">
                {item.score}
              </div>
              <span className="text-[10px] font-bold text-slate-600 text-center">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-100">
          <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-2.5 text-center">
            <div className="text-[10px] text-slate-400">First Contentful Paint</div>
            <div className="text-sm font-black text-slate-800">0.3s</div>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-2.5 text-center">
            <div className="text-[10px] text-slate-400">Time to First Byte</div>
            <div className="text-sm font-black text-emerald-600">38ms</div>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-2.5 text-center">
            <div className="text-[10px] text-slate-400">Layout Shift</div>
            <div className="text-sm font-black text-slate-800">0.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. MOBILE APP DEVELOPMENT: 3D DUAL-OS SMARTPHONE & BIOMETRICS
// ─────────────────────────────────────────────────────────────────────────────
export function MobileShowcaseVisual() {
  return (
    <div className="relative w-full max-w-[500px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-slate-800 bg-[#090d18] p-6 shadow-2xl overflow-hidden flex items-center justify-between gap-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 px-3 py-1 text-[11px] font-bold text-blue-400">
            <Smartphone size={12} />
            <span>CROSS-PLATFORM ENGINE</span>
          </div>
          <div className="space-y-1">
            <h4 className="text-lg font-black text-white">60fps Fluid UI</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Unified React Native &amp; Flutter codebase for iOS and Android.
            </p>
          </div>
          <div className="space-y-1.5">
            {["Biometric 1-Tap Auth", "Offline WatermelonDB Sync", "Instant Push Notifications"].map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[11px] font-semibold text-slate-300">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-36 h-64 rounded-3xl border-4 border-slate-700 bg-slate-900 p-2 shadow-xl flex flex-col justify-between shrink-0">
          <div className="w-12 h-3.5 rounded-full bg-slate-800 mx-auto" />
          <div className="space-y-2 my-auto">
            <div className="w-10 h-10 rounded-xl bg-blue-500 mx-auto flex items-center justify-center text-white animate-pulse">
              <Zap size={20} />
            </div>
            <div className="h-2 w-16 bg-slate-700 rounded mx-auto" />
            <div className="h-1.5 w-10 bg-slate-800 rounded mx-auto" />
          </div>
          <div className="w-16 h-1 rounded-full bg-slate-600 mx-auto" />
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. E-COMMERCE DEVELOPMENT: LIVE CHECKOUT & REVENUE VELOCITY
// ─────────────────────────────────────────────────────────────────────────────
export function EcommerceCartVisual() {
  const [orderCount, setOrderCount] = useState(1284);

  useEffect(() => {
    const timer = setInterval(() => {
      setOrderCount((prev) => prev + 1);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-emerald-900/60 bg-[#071318] p-6 shadow-2xl overflow-hidden">
        <div className="pointer-events-none absolute -top-10 -right-10 w-44 h-44 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="flex items-center justify-between pb-3 border-b border-emerald-900/40">
          <div className="flex items-center gap-2">
            <ShoppingCart size={14} className="text-emerald-400" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
              SUB-SECOND CHECKOUT CONVERSION
            </span>
          </div>
          <span className="text-[10px] font-mono text-emerald-300">
            ORDERS TODAY: {orderCount}
          </span>
        </div>
        <div className="my-5 rounded-2xl border border-emerald-900/40 bg-slate-950 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-300 font-semibold">1-Click Apple Pay / Stripe Engine</span>
            <span className="rounded bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 text-[11px]">+38.4% Conversion</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CreditCard size={22} />
            </div>
            <div className="space-y-1">
              <div className="text-sm font-bold text-white">Instant Frictionless Auth</div>
              <div className="text-[11px] text-slate-400">Cart Abandonment Reduced by 42%</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-emerald-900/40 text-center">
          <div className="rounded-xl bg-emerald-950/30 border border-emerald-900/40 p-2">
            <div className="text-[10px] text-slate-400">Checkout Speed</div>
            <div className="text-xs font-bold text-emerald-400">&lt;650ms</div>
          </div>
          <div className="rounded-xl bg-emerald-950/30 border border-emerald-900/40 p-2">
            <div className="text-[10px] text-slate-400">Security</div>
            <div className="text-xs font-bold text-white">PCI-DSS Level 1</div>
          </div>
          <div className="rounded-xl bg-emerald-950/30 border border-emerald-900/40 p-2">
            <div className="text-[10px] text-slate-400">Global Gateways</div>
            <div className="text-xs font-bold text-white">135+ Currencies</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. GAME DEVELOPMENT / CASINO: AVIATOR CRASH MULTIPLIER & CERTIFIED MATH
// ─────────────────────────────────────────────────────────────────────────────
export function CasinoCrashVisual() {
  const [multiplier, setMultiplier] = useState(2.45);

  useEffect(() => {
    const interval = setInterval(() => {
      setMultiplier((prev) => (prev > 6.5 ? 1.25 : parseFloat((prev + 0.12).toFixed(2))));
    }, 180);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-purple-900/60 bg-[#0d0a1a] p-6 shadow-2xl overflow-hidden">
        <div className="pointer-events-none absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="flex items-center justify-between pb-3 border-b border-purple-900/40">
          <div className="flex items-center gap-2">
            <Flame size={14} className="text-rose-400 animate-pulse" />
            <span className="text-xs font-extrabold uppercase tracking-wide text-rose-400">
              AVIATOR CRASH ENGINE
            </span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            PROVABLY FAIR · SHA-256
          </span>
        </div>
        <div className="relative h-44 my-4 flex items-center justify-center overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 160" fill="none">
            <defs>
              <linearGradient id="crashGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <path d="M 10 150 Q 150 140, 270 25" stroke="#ec4899" strokeWidth="3.5" fill="none" strokeDasharray="4 2" />
            <path d="M 10 150 Q 150 140, 270 25 L 270 150 Z" fill="url(#crashGrad)" />
          </svg>
          <div className="relative z-10 text-center space-y-1">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-400 to-pink-500 tracking-tight">
              {multiplier}x
            </div>
            <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-0.5 text-[11px] font-bold text-emerald-400">
              <span>🚀 Trajectory Climbing</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-purple-900/40 text-center">
          <div className="rounded-xl bg-purple-950/40 border border-purple-900/50 p-2">
            <div className="text-[10px] text-slate-400">Certified RTP</div>
            <div className="text-xs font-bold text-white">97.5%</div>
          </div>
          <div className="rounded-xl bg-purple-950/40 border border-purple-900/50 p-2">
            <div className="text-[10px] text-slate-400">WebSocket Ping</div>
            <div className="text-xs font-bold text-emerald-400">&lt;15ms</div>
          </div>
          <div className="rounded-xl bg-purple-950/40 border border-purple-900/50 p-2">
            <div className="text-[10px] text-slate-400">Certified RNG</div>
            <div className="text-xs font-bold text-white">GLI-19</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. SPORTSBOOK PLATFORM: LIVE IN-PLAY BETTING ODDS & SCORE TICKER
// ─────────────────────────────────────────────────────────────────────────────
export function SportsbookEngineVisual() {
  const [oddsHighlight, setOddsHighlight] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setOddsHighlight((prev) => !prev);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-slate-800 bg-[#0c1220] p-6 shadow-2xl overflow-hidden">
        <div className="pointer-events-none absolute -top-10 -right-10 w-44 h-44 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold text-emerald-400 tracking-wide uppercase">
              LIVE IN-PLAY · 78&apos;
            </span>
          </div>
          <span className="text-[11px] font-semibold text-slate-400">
            UEFA Champions League
          </span>
        </div>
        <div className="py-5 flex items-center justify-between border-b border-slate-800/80">
          <div className="space-y-1 text-left">
            <div className="text-base font-extrabold text-white">Manchester City</div>
            <div className="text-xs text-slate-400">Home · Attack: 68%</div>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-800/80 px-4 py-2 text-xl font-black text-emerald-400 tracking-wider">
            2 - 1
          </div>
          <div className="space-y-1 text-right">
            <div className="text-base font-extrabold text-white">Real Madrid</div>
            <div className="text-xs text-slate-400">Away · Corners: 5</div>
          </div>
        </div>
        <div className="py-4 space-y-2">
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
            1X2 MATCH WINNER (REAL-TIME STREAM)
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            <div className={`rounded-xl border p-2.5 text-center transition-all ${oddsHighlight ? "border-emerald-500 bg-emerald-950/40 text-emerald-300 scale-[1.02]" : "border-slate-800 bg-slate-900/90 text-slate-200"}`}>
              <div className="text-[10px] text-slate-400">Home (1)</div>
              <div className="text-base font-black">1.75</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-2.5 text-center text-slate-200">
              <div className="text-[10px] text-slate-400">Draw (X)</div>
              <div className="text-base font-black">3.60</div>
            </div>
            <div className={`rounded-xl border p-2.5 text-center transition-all ${!oddsHighlight ? "border-amber-500 bg-amber-950/40 text-amber-300 scale-[1.02]" : "border-slate-800 bg-slate-900/90 text-slate-200"}`}>
              <div className="text-[10px] text-slate-400">Away (2)</div>
              <div className="text-base font-black">4.90</div>
            </div>
          </div>
        </div>
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Trophy size={14} className="text-amber-400" />
            <span>Slip Velocity: &lt;10ms</span>
          </div>
          <div className="rounded-lg bg-emerald-500 text-slate-950 font-bold px-3 py-1 text-xs shadow-md">
            1-Tap Cashout Active
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. API DEVELOPMENT: LIVE REST / GRAPHQL ENDPOINT TERMINAL & LATENCY
// ─────────────────────────────────────────────────────────────────────────────
export function ApiLatencyVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-slate-800 bg-[#090d18] p-6 shadow-2xl overflow-hidden font-mono">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-cyan-400" />
            <span className="text-xs font-bold text-cyan-400">DISTRIBUTED API GATEWAY</span>
          </div>
          <span className="text-[10px] text-emerald-400">P99 LATENCY: 12ms</span>
        </div>
        <div className="my-4 space-y-2 text-xs">
          <div className="flex items-center justify-between rounded-xl bg-slate-900/90 border border-slate-800 p-2.5">
            <span className="text-emerald-400 font-bold">POST /v1/auth/token</span>
            <span className="text-slate-400 text-[11px]">200 OK · 8ms</span>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-slate-900/90 border border-slate-800 p-2.5">
            <span className="text-blue-400 font-bold">GET /v2/orders/stream</span>
            <span className="text-slate-400 text-[11px]">101 Switching Protocol · 4ms</span>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-slate-900/90 border border-slate-800 p-2.5">
            <span className="text-purple-400 font-bold">POST /graphql/query</span>
            <span className="text-slate-400 text-[11px]">200 OK · 14ms</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-slate-800 text-center font-sans">
          <div className="rounded-xl bg-slate-900 border border-slate-800 p-2">
            <div className="text-[10px] text-slate-400">Throughput</div>
            <div className="text-xs font-bold text-white">1.2M Req/min</div>
          </div>
          <div className="rounded-xl bg-slate-900 border border-slate-800 p-2">
            <div className="text-[10px] text-slate-400">Zero-Trust</div>
            <div className="text-xs font-bold text-cyan-400">mTLS Verified</div>
          </div>
          <div className="rounded-xl bg-slate-900 border border-slate-800 p-2">
            <div className="text-[10px] text-slate-400">Uptime</div>
            <div className="text-xs font-bold text-emerald-400">99.999%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. CUSTOM SOFTWARE INTEGRATION: ENTERPRISE EVENT MESH & BRIDGE
// ─────────────────────────────────────────────────────────────────────────────
export function SoftwareIntegrationVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-indigo-900/60 bg-[#090b1c] p-6 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-indigo-900/40">
          <div className="flex items-center gap-2">
            <Network size={14} className="text-indigo-400" />
            <span className="text-xs font-bold text-indigo-400 uppercase">EVENT-DRIVEN WEBHOOK MESH</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-400">ZERO PACKET LOSS</span>
        </div>
        <div className="my-5 grid grid-cols-3 gap-3 items-center text-center">
          <div className="rounded-2xl border border-indigo-900/50 bg-slate-900/80 p-3 space-y-1">
            <div className="text-xs font-bold text-white">Legacy ERP</div>
            <div className="text-[10px] text-slate-400">SAP / Oracle</div>
          </div>
          <div className="rounded-full bg-indigo-500/20 border-2 border-indigo-500 p-3 mx-auto flex flex-col items-center justify-center text-indigo-300 animate-pulse">
            <RefreshCw size={20} className="animate-spin" style={{ animationDuration: "6s" }} />
          </div>
          <div className="rounded-2xl border border-indigo-900/50 bg-slate-900/80 p-3 space-y-1">
            <div className="text-xs font-bold text-white">Cloud Next.js</div>
            <div className="text-[10px] text-emerald-400">Modern Portal</div>
          </div>
        </div>
        <div className="pt-2 border-t border-indigo-900/40 flex items-center justify-between text-xs text-slate-300">
          <span>Bi-directional Real-Time Kafka Stream</span>
          <span className="text-indigo-400 font-bold">&lt;18ms Sync Delay</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 9. CRM SOLUTIONS: SALES PIPELINE KANBAN & LEAD VELOCITY
// ─────────────────────────────────────────────────────────────────────────────
export function CrmKanbanVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <span className="text-xs font-bold uppercase tracking-wide text-[#0066cc]">PIPELINE VELOCITY</span>
          <span className="text-xs font-bold text-emerald-600">WIN RATE: 42.8%</span>
        </div>
        <div className="grid grid-cols-3 gap-2.5 my-4">
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 space-y-2">
            <div className="text-[10px] font-bold text-slate-400 uppercase">LEADS (8)</div>
            <div className="rounded-lg bg-white p-2 border border-slate-200/80 text-xs font-bold text-slate-800 shadow-2xs">
              Fintech SaaS ($85K)
            </div>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 space-y-2">
            <div className="text-[10px] font-bold text-[#0066cc] uppercase">PROPOSAL (4)</div>
            <div className="rounded-lg bg-white p-2 border border-blue-200 text-xs font-bold text-[#0066cc] shadow-2xs animate-pulse-scale">
              Global Portal ($140K)
            </div>
          </div>
          <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-2.5 space-y-2">
            <div className="text-[10px] font-bold text-emerald-600 uppercase">WON (12)</div>
            <div className="rounded-lg bg-emerald-500 text-white p-2 text-xs font-bold shadow-2xs">
              Enterprise Closed!
            </div>
          </div>
        </div>
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-semibold">
          <span>Automated Deal Workflows Active</span>
          <span className="text-slate-900 font-bold">$1.84M Pipeline Value</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 10. CLOUD SOLUTIONS: MULTI-CLOUD KUBERNETES TOPOLOGY
// ─────────────────────────────────────────────────────────────────────────────
export function CloudClusterVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-blue-900/60 bg-[#08101e] p-6 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-blue-900/40">
          <div className="flex items-center gap-2">
            <Cloud size={14} className="text-blue-400" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">
              MULTI-CLOUD K8S TOPOLOGY
            </span>
          </div>
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
            ALL NODES HEALTHY
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3 my-5">
          {[
            { name: "AWS us-east-1", status: "Primary Pods" },
            { name: "GCP europe-west", status: "Failover Pods" },
            { name: "Cloudflare Edge", status: "CDN & WAF" },
          ].map((node, idx) => (
            <div key={idx} className="rounded-2xl border border-blue-900/40 bg-slate-900/90 p-3 space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-white">{node.name}</span>
              </div>
              <p className="text-[10.5px] text-slate-400">{node.status}</p>
            </div>
          ))}
        </div>
        <div className="pt-3 border-t border-blue-900/40 flex items-center justify-between text-xs text-slate-300 font-semibold">
          <span>Global Latency: &lt;25ms</span>
          <span className="text-emerald-400">Zero-Downtime CI/CD Active</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 11. AI & MACHINE LEARNING: NEURAL SYNAPSE GRAPH & TOKEN STREAM
// ─────────────────────────────────────────────────────────────────────────────
export function AiNeuralVisual() {
  const [tokens, setTokens] = useState("Analyzing enterprise code topology...");

  useEffect(() => {
    const states = [
      "Vector embeddings indexed in Pinecone...",
      "Generating sub-50ms LLM inferences...",
      "Executing Autonomous Agentic reasoning...",
      "Autonomous workflow completed successfully.",
    ];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % states.length;
      setTokens(states[idx]);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-cyan-900/60 bg-[#070e18] p-6 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-cyan-900/40">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-cyan-400" />
            <span className="text-xs font-mono font-bold text-cyan-400">AGENTIC AI RUNTIME</span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">LATENCY: 42ms</span>
        </div>
        <div className="my-5 rounded-2xl border border-cyan-900/40 bg-slate-950 p-4 font-mono text-xs space-y-2">
          <div className="text-slate-500 text-[10px]">// Streaming token pipeline:</div>
          <div className="text-cyan-300 font-semibold flex items-center gap-1.5">
            <span>&gt; {tokens}</span>
            <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-cyan-900/40 text-center font-sans">
          <div className="rounded-xl bg-cyan-950/30 border border-cyan-900/40 p-2">
            <div className="text-[10px] text-slate-400">Context Window</div>
            <div className="text-xs font-bold text-white">2 Million</div>
          </div>
          <div className="rounded-xl bg-cyan-950/30 border border-cyan-900/40 p-2">
            <div className="text-[10px] text-slate-400">Inference Speed</div>
            <div className="text-xs font-bold text-cyan-400">120 Tok/s</div>
          </div>
          <div className="rounded-xl bg-cyan-950/30 border border-cyan-900/40 p-2">
            <div className="text-[10px] text-slate-400">Privacy</div>
            <div className="text-xs font-bold text-white">Zero Data Retention</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 12. SALESFORCE SOLUTIONS: APEX & LIGHTNING CLOUD AUTOMATION
// ─────────────────────────────────────────────────────────────────────────────
export function SalesforceCloudVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-sky-200 bg-sky-50/40 p-6 shadow-xl overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-sky-100">
          <span className="text-xs font-extrabold uppercase tracking-wide text-sky-700">SALESFORCE LIGHTNING ECOSYSTEM</span>
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-2.5 py-0.5 rounded-full">CERTIFIED PARTNER</span>
        </div>
        <div className="my-5 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-2xl bg-white border border-sky-100 p-3 shadow-2xs space-y-1">
            <div className="text-xs font-bold text-slate-800">Sales Cloud</div>
            <div className="text-[10px] text-sky-600 font-semibold">Lead Scoring</div>
          </div>
          <div className="rounded-2xl bg-white border border-sky-200 p-3 shadow-md space-y-1 animate-pulse-scale">
            <div className="text-xs font-bold text-sky-700">Apex Triggers</div>
            <div className="text-[10px] text-emerald-600 font-semibold">Auto-Sync</div>
          </div>
          <div className="rounded-2xl bg-white border border-sky-100 p-3 shadow-2xs space-y-1">
            <div className="text-xs font-bold text-slate-800">Service Cloud</div>
            <div className="text-[10px] text-sky-600 font-semibold">Omni-Channel</div>
          </div>
        </div>
        <div className="pt-2 border-t border-sky-100 flex items-center justify-between text-xs text-slate-600">
          <span>99.9% Sync Accuracy Across Enterprise ERP</span>
          <span className="text-sky-700 font-bold">SOQL Optimized</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 13. HUBSPOT SOLUTIONS: MARKETING AUTOMATION FUNNEL
// ─────────────────────────────────────────────────────────────────────────────
export function HubspotFunnelVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-orange-200 bg-orange-50/30 p-6 shadow-xl overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-orange-100">
          <span className="text-xs font-bold text-orange-600 uppercase">INBOUND LEAD AUTOMATION</span>
          <span className="text-xs font-bold text-slate-700">PIPELINE: ACTIVE</span>
        </div>
        <div className="my-4 space-y-2">
          {["Form Submission Triggered", "Score Evaluated (+50 Points)", "Automated Email Sequence Dispatched", "Deal Created & Assigned to Rep"].map((step, idx) => (
            <div key={idx} className="flex items-center gap-2.5 rounded-xl bg-white border border-orange-100 p-2 text-xs font-semibold text-slate-800 shadow-2xs">
              <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px] font-bold">{idx + 1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
        <div className="pt-2 border-t border-orange-100 flex items-center justify-between text-xs text-slate-600 font-bold">
          <span>Conversion Lift: +45%</span>
          <span className="text-orange-600">Zero Manual Lead Leakage</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 14. ZOHO SOLUTIONS: ZOHO ONE UNIFIED SUITE
// ─────────────────────────────────────────────────────────────────────────────
export function ZohoSuiteVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-red-200 bg-red-50/20 p-6 shadow-xl overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-red-100">
          <span className="text-xs font-bold text-red-600 uppercase">ZOHO ONE INTEGRATED APPS</span>
          <span className="text-xs font-bold text-emerald-600">UNIFIED DATABASE</span>
        </div>
        <div className="grid grid-cols-4 gap-2 my-5 text-center">
          {["Zoho CRM", "Zoho Books", "Zoho Desk", "Analytics"].map((app, idx) => (
            <div key={idx} className="rounded-xl bg-white border border-red-100 p-2.5 shadow-2xs space-y-1">
              <span className="w-2 h-2 rounded-full bg-red-500 mx-auto block" />
              <div className="text-[11px] font-bold text-slate-800">{app}</div>
            </div>
          ))}
        </div>
        <div className="pt-2 border-t border-red-100 flex items-center justify-between text-xs text-slate-600 font-semibold">
          <span>Single Sign-On Across 45+ Business Apps</span>
          <span className="text-red-600 font-bold">Automated Deluge Scripts</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 15. SEO: GOOGLE SERP RANK #1 & ORGANIC TRAJECTORY
// ─────────────────────────────────────────────────────────────────────────────
export function SeoRankingVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <span className="text-xs font-bold text-blue-600 uppercase">GOOGLE SERP DOMINANCE</span>
          <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">RANK #1</span>
        </div>
        <div className="my-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 space-y-1.5">
          <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>https://webnatix.com &gt; services &gt; enterprise-engineering</span>
          </div>
          <div className="text-sm font-bold text-[#0066cc]">Enterprise Software Engineering &amp; Platform Studio</div>
          <div className="text-xs text-slate-500 leading-snug">Global B2B digital engineering studio delivering secure, scalable, and compliance-ready software architectures...</div>
        </div>
        <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-slate-100 text-center">
          <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-2">
            <div className="text-[10px] text-slate-400">Organic Growth</div>
            <div className="text-xs font-black text-emerald-600">+340%</div>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-100 p-2">
            <div className="text-[10px] text-slate-400">Indexed Pages</div>
            <div className="text-xs font-black text-slate-800">100% Valid</div>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-100 p-2">
            <div className="text-[10px] text-slate-400">Domain Authority</div>
            <div className="text-xs font-black text-blue-600">Top 1%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 16. SMM: VIRAL MULTI-CHANNEL ENGAGEMENT FEED
// ─────────────────────────────────────────────────────────────────────────────
export function SmmFeedVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-pink-900/60 bg-[#120818] p-6 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-pink-900/40">
          <span className="text-xs font-bold text-pink-400 uppercase">VIRAL ENGAGEMENT ENGINE</span>
          <span className="text-[10px] font-bold text-emerald-400">4.8x ROAS AVERAGE</span>
        </div>
        <div className="my-5 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-2xl bg-slate-900/90 border border-pink-900/40 p-3 space-y-1">
            <div className="text-lg font-black text-white">4.2M</div>
            <div className="text-[10px] text-slate-400">Impressions</div>
          </div>
          <div className="rounded-2xl bg-slate-900/90 border border-pink-900/40 p-3 space-y-1 animate-pulse-scale">
            <div className="text-lg font-black text-pink-400">+128K</div>
            <div className="text-[10px] text-slate-400">Engagements</div>
          </div>
          <div className="rounded-2xl bg-slate-900/90 border border-pink-900/40 p-3 space-y-1">
            <div className="text-lg font-black text-emerald-400">18.4%</div>
            <div className="text-[10px] text-slate-400">Click Rate</div>
          </div>
        </div>
        <div className="pt-2 border-t border-pink-900/40 flex items-center justify-between text-xs text-slate-300">
          <span>Active Ad Campaigns Across LinkedIn, Meta &amp; X</span>
          <span className="text-pink-400 font-bold">Sub-Cent Cost Per Click</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 17. PPC ADVERTISING: REAL-TIME AUCTION & CPA REDUCTION
// ─────────────────────────────────────────────────────────────────────────────
export function PpcAuctionVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-slate-800 bg-[#071318] p-6 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <span className="text-xs font-bold text-emerald-400 uppercase">REAL-TIME PPC BIDDING</span>
          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full">-42% CPA</span>
        </div>
        <div className="my-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 space-y-1">
            <div className="text-[10px] text-slate-400">Cost Per Acquisition (CPA)</div>
            <div className="text-2xl font-black text-white">$14.20</div>
            <div className="text-[10px] text-emerald-400 font-bold">Decreased from $48.00</div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 space-y-1 text-right">
            <div className="text-[10px] text-slate-400">ROAS Multiplier</div>
            <div className="text-2xl font-black text-emerald-400">5.8x</div>
            <div className="text-[10px] text-slate-400">Verified Revenue Return</div>
          </div>
        </div>
        <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Negative Keyword Shields Active</span>
          <span className="text-white font-bold">100% Quality Score</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 18. PERFORMANCE OPTIMIZATION: BUNDLE SIZE & LOAD COMPARISON SLIDER
// ─────────────────────────────────────────────────────────────────────────────
export function SpeedBenchmarkVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <span className="text-xs font-bold text-slate-800 uppercase">BEFORE VS AFTER SPEED OPTIMIZATION</span>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">10x FASTER</span>
        </div>
        <div className="my-5 space-y-3">
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold text-red-500">
              <span>Legacy Monolith Load Time</span>
              <span>4.8s (Slow)</span>
            </div>
            <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
              <div className="w-[85%] h-full bg-red-400 rounded-full" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold text-emerald-600">
              <span>Webnatixx Next.js Edge Load Time</span>
              <span>0.38s (Instant)</span>
            </div>
            <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
              <div className="w-[12%] h-full bg-emerald-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-semibold">
          <span>78% JavaScript Bundle Size Reduction</span>
          <span className="text-emerald-600 font-bold">Sub-Second Delivery</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 19. DATA STRATEGY CONSULTING: ENTERPRISE DATA MATURITY PYRAMID
// ─────────────────────────────────────────────────────────────────────────────
export function DataStrategyVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-slate-800 bg-[#0a0f1d] p-6 shadow-2xl overflow-hidden text-center">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <span className="text-xs font-bold text-blue-400 uppercase">DATA GOVERNANCE MATURITY</span>
          <span className="text-[10px] font-bold text-emerald-400">SOC2 &amp; GDPR READY</span>
        </div>
        <div className="my-5 space-y-2 max-w-xs mx-auto">
          <div className="rounded-xl bg-blue-500 text-white font-bold text-xs py-2 shadow-md">
            Executive AI &amp; Predictive BI
          </div>
          <div className="rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs py-2">
            Silver / Gold Lakehouse Storage
          </div>
          <div className="rounded-xl bg-slate-900 border border-slate-800 text-slate-400 font-medium text-xs py-2">
            Raw Ingestion &amp; Automated Cleansing
          </div>
        </div>
        <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Unified Master Data Management</span>
          <span className="text-white font-bold">100% Data Lineage</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 20. DATA PROCESSING: APACHE KAFKA & HIGH-THROUGHPUT PIPELINE
// ─────────────────────────────────────────────────────────────────────────────
export function DataProcessingVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-emerald-900/60 bg-[#071318] p-6 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-emerald-900/40">
          <span className="text-xs font-bold text-emerald-400 uppercase">HIGH-THROUGHPUT EVENT STREAM</span>
          <span className="text-[10px] font-mono text-emerald-300">5M+ EVENTS / SEC</span>
        </div>
        <div className="my-5 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-2xl border border-emerald-900/40 bg-slate-900/80 p-3 space-y-1">
            <div className="text-xs font-bold text-white">Event Producers</div>
            <div className="text-[10px] text-slate-400">IoT &amp; Webhooks</div>
          </div>
          <div className="rounded-2xl border border-emerald-500 bg-emerald-950/60 p-3 space-y-1 animate-pulse-scale">
            <div className="text-xs font-bold text-emerald-300">Kafka Cluster</div>
            <div className="text-[10px] text-emerald-400">Partitioned Queue</div>
          </div>
          <div className="rounded-2xl border border-emerald-900/40 bg-slate-900/80 p-3 space-y-1">
            <div className="text-xs font-bold text-white">ClickHouse DB</div>
            <div className="text-[10px] text-slate-400">Sub-Second Analytics</div>
          </div>
        </div>
        <div className="pt-2 border-t border-emerald-900/40 flex items-center justify-between text-xs text-slate-300">
          <span>Exactly-Once Processing Semantics</span>
          <span className="text-emerald-400 font-bold">Zero Dropped Records</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 21. DATA ANALYTICS: INTERACTIVE EXECUTIVE KPI DASHBOARD
// ─────────────────────────────────────────────────────────────────────────────
export function DataAnalyticsVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <span className="text-xs font-bold uppercase tracking-wide text-slate-800">REAL-TIME EXECUTIVE METRICS</span>
          <span className="text-xs font-bold text-[#0066cc]">LIVE TELEMETRY</span>
        </div>
        <div className="my-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-3.5 space-y-1">
            <div className="text-[10px] text-slate-400 uppercase">MONTHLY REVENUE</div>
            <div className="text-2xl font-black text-slate-900">$482,900</div>
            <div className="text-[10px] text-emerald-600 font-bold">+28.4% MoM Growth</div>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-3.5 space-y-1">
            <div className="text-[10px] text-slate-400 uppercase">ACTIVE USERS</div>
            <div className="text-2xl font-black text-[#0066cc]">142.8K</div>
            <div className="text-[10px] text-slate-500 font-semibold">99.98% Retention</div>
          </div>
        </div>
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
          <span>Automated Daily Digest Reports</span>
          <span className="text-slate-900 font-bold">1-Click PDF Export</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 22. DATA MIGRATION: ZERO-DOWNTIME DATA LAKE CUTOVER
// ─────────────────────────────────────────────────────────────────────────────
export function DataMigrationVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-slate-800 bg-[#090e1a] p-6 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <span className="text-xs font-bold text-blue-400 uppercase">CLOUD DATA MIGRATION</span>
          <span className="text-[10px] font-bold text-emerald-400">ZERO DOWNTIME GUARANTEED</span>
        </div>
        <div className="my-5 space-y-2">
          <div className="flex justify-between text-xs text-slate-300">
            <span>Snowflake / BigQuery Sync Progress</span>
            <span className="text-emerald-400 font-bold">100% Completed</span>
          </div>
          <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-slate-800 text-center text-xs">
          <div className="text-slate-400">12TB Migrated</div>
          <div className="text-emerald-400 font-bold">0 Checksum Errors</div>
          <div className="text-slate-400">Instant Failback</div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 23. CUSTOM AI DEVELOPMENT: PROPRIETARY FINE-TUNED WEIGHTS & SANDBOX
// ─────────────────────────────────────────────────────────────────────────────
export function CustomAiWeightsVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-purple-900/60 bg-[#0a0718] p-6 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-purple-900/40">
          <span className="text-xs font-mono font-bold text-purple-400">CUSTOM LLM WEIGHTS · 70B</span>
          <span className="text-[10px] font-bold text-emerald-400">ON-PREM &amp; PRIVATE VPC</span>
        </div>
        <div className="my-5 rounded-2xl border border-purple-900/40 bg-slate-950 p-4 font-mono text-xs space-y-2">
          <div className="text-slate-400 text-[11px]">// Enterprise Fine-Tuned LLaMA-3 LoRA:</div>
          <div className="text-purple-300 font-bold">Loss: 0.042 · Accuracy: 99.4%</div>
          <div className="text-emerald-400 text-[10px]">Zero Third-Party API Leakage · HIPAA Compliant</div>
        </div>
        <div className="pt-2 border-t border-purple-900/40 flex items-center justify-between text-xs text-slate-300">
          <span>Dedicated H100 GPU Cluster</span>
          <span className="text-purple-400 font-bold">Exclusive IP Ownership</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 24. AI BUSINESS INTELLIGENCE: PREDICTIVE FORECASTING MATRIX
// ─────────────────────────────────────────────────────────────────────────────
export function AiBiMatrixVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <span className="text-xs font-bold text-slate-800 uppercase">AI REVENUE PREDICTION MATRIX</span>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">CONFIDENCE: 94.2%</span>
        </div>
        <div className="my-5 flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
          <div className="space-y-1">
            <div className="text-[10px] text-slate-400 uppercase">Projected Q4 Demand</div>
            <div className="text-2xl font-black text-slate-900">+48.2% Surge</div>
          </div>
          <div className="rounded-xl bg-[#0066cc] text-white p-3 font-bold text-xs shadow-md">
            AI Automated Strategy Triggered
          </div>
        </div>
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-semibold">
          <span>Continuous Machine Learning Retraining</span>
          <span className="text-[#0066cc] font-bold">Anomaly Detector Active</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 25. LLM SOLUTIONS: RETRIEVAL-AUGMENTED GENERATION (RAG) PIPELINE
// ─────────────────────────────────────────────────────────────────────────────
export function LlmRagVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-cyan-900/60 bg-[#06111a] p-6 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-cyan-900/40">
          <span className="text-xs font-bold text-cyan-400 uppercase font-mono">ENTERPRISE RAG ARCHITECTURE</span>
          <span className="text-[10px] font-bold text-emerald-400">HALLUCINATION FREE</span>
        </div>
        <div className="my-4 grid grid-cols-3 gap-2.5 text-center text-xs">
          <div className="rounded-xl border border-cyan-900/40 bg-slate-900 p-2.5 space-y-1">
            <div className="text-white font-bold">Vector DB</div>
            <div className="text-[10px] text-slate-400">Pinecone / Milvus</div>
          </div>
          <div className="rounded-xl border border-cyan-500 bg-cyan-950/60 p-2.5 space-y-1 animate-pulse-scale">
            <div className="text-cyan-300 font-bold">Hybrid Reranker</div>
            <div className="text-[10px] text-cyan-400">Top-K Context</div>
          </div>
          <div className="rounded-xl border border-cyan-900/40 bg-slate-900 p-2.5 space-y-1">
            <div className="text-white font-bold">Private LLM</div>
            <div className="text-[10px] text-slate-400">Verified Answer</div>
          </div>
        </div>
        <div className="pt-2 border-t border-cyan-900/40 flex items-center justify-between text-xs text-slate-300">
          <span>Automated Semantic Chunking</span>
          <span className="text-cyan-400 font-bold">Direct Source Document Citations</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 26. AGENTIC AI SOLUTIONS: AUTONOMOUS MULTI-AGENT SWARM
// ─────────────────────────────────────────────────────────────────────────────
export function AgenticSwarmVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-violet-900/60 bg-[#0d091e] p-6 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-violet-900/40">
          <span className="text-xs font-bold text-violet-400 uppercase">AUTONOMOUS MULTI-AGENT SWARM</span>
          <span className="text-[10px] font-bold text-emerald-400">ACTIVE COLLABORATION</span>
        </div>
        <div className="my-5 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-2xl border border-violet-900/40 bg-slate-900/90 p-3 space-y-1">
            <span className="w-2 h-2 rounded-full bg-violet-400 mx-auto block animate-ping" />
            <div className="text-xs font-bold text-white">Planner Agent</div>
            <div className="text-[10px] text-slate-400">Decomposing Goal</div>
          </div>
          <div className="rounded-2xl border border-violet-500 bg-violet-950/80 p-3 space-y-1 animate-pulse-scale">
            <span className="w-2 h-2 rounded-full bg-emerald-400 mx-auto block" />
            <div className="text-xs font-bold text-violet-300">Coder Agent</div>
            <div className="text-[10px] text-emerald-400">Writing Unit Tests</div>
          </div>
          <div className="rounded-2xl border border-violet-900/40 bg-slate-900/90 p-3 space-y-1">
            <span className="w-2 h-2 rounded-full bg-amber-400 mx-auto block" />
            <div className="text-xs font-bold text-white">Verifier Agent</div>
            <div className="text-[10px] text-slate-400">Security Audit</div>
          </div>
        </div>
        <div className="pt-2 border-t border-violet-900/40 flex items-center justify-between text-xs text-slate-300">
          <span>Zero Human Overhead Required</span>
          <span className="text-violet-400 font-bold">Self-Healing Execution Loops</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 27. BLOCKCHAIN DEVELOPMENT: CRYPTOGRAPHIC LEDGER & SMART CONTRACTS
// ─────────────────────────────────────────────────────────────────────────────
export function BlockchainLedgerVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-amber-900/60 bg-[#140f06] p-6 shadow-2xl overflow-hidden font-mono">
        <div className="flex items-center justify-between pb-3 border-b border-amber-900/40">
          <span className="text-xs font-bold text-amber-400 uppercase">SMART CONTRACT AUDITED</span>
          <span className="text-[10px] text-emerald-400">EVM COMPATIBLE</span>
        </div>
        <div className="my-5 space-y-2 text-xs">
          <div className="rounded-xl border border-amber-900/40 bg-slate-950 p-2.5 flex items-center justify-between">
            <span className="text-slate-400">Block #19,842,912</span>
            <span className="text-amber-400 font-bold">0x8f2a...c391</span>
          </div>
          <div className="rounded-xl border border-amber-500/50 bg-amber-950/40 p-2.5 flex items-center justify-between text-amber-300">
            <span>Gas Optimization: -35%</span>
            <span className="text-emerald-400 font-bold">Zero Re-entrancy Bugs</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-amber-900/40 text-center font-sans">
          <div className="text-slate-400 text-xs">Ethereum / Polygon</div>
          <div className="text-amber-400 font-bold text-xs">CertiK Audited</div>
          <div className="text-slate-400 text-xs">Solidity / Rust</div>
        </div>
      </div>
    </div>
  );
}
