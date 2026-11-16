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
} from "lucide-react";

export type HeroVisualType =
  | "api-flow"
  | "sportsbook-engine"
  | "casino-crash"
  | "lighthouse-speed"
  | "mobile-showcase"
  | "ai-neural"
  | "cloud-cluster";

interface HeroVisualProps {
  type?: HeroVisualType;
  title?: string;
}

export function HeroVisualRenderer({ type = "api-flow", title }: HeroVisualProps) {
  switch (type) {
    case "api-flow":
      return <ApiFlowVisual />;
    case "sportsbook-engine":
      return <SportsbookEngineVisual />;
    case "casino-crash":
      return <CasinoCrashVisual />;
    case "lighthouse-speed":
      return <LighthouseSpeedVisual />;
    case "mobile-showcase":
      return <MobileShowcaseVisual />;
    case "ai-neural":
      return <AiNeuralVisual />;
    case "cloud-cluster":
      return <CloudClusterVisual />;
    default:
      return <ApiFlowVisual />;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. API FLOW / UNIFIED ARCHITECTURE VISUAL (Exact Match to User's Uploaded Screenshot)
// ─────────────────────────────────────────────────────────────────────────────
export function ApiFlowVisual() {
  return (
    <div className="relative w-full max-w-[560px] select-none">
      
      {/* Background container with subtle grid dots and soft glow */}
      <div className="relative rounded-3xl border border-slate-200/90 bg-white/95 p-6 sm:p-8 shadow-xl shadow-slate-200/50 overflow-hidden">
        
        {/* Soft emerald/teal gradient glow behind central node */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-56 h-56 rounded-full bg-emerald-500/10 blur-3xl animate-pulse-scale" />
        </div>

        {/* Top Header Tag */}
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

        {/* Main Diagram Area with SVG Curved Connectors */}
        <div className="relative z-10 grid grid-cols-12 items-center min-h-[300px]">
          
          {/* Left Side: Source Provider Pills */}
          <div className="col-span-4 space-y-2.5">
            {[
              "Pragmatic Play",
              "Evolution",
              "Playtech",
              "NetEnt",
              "Microgaming",
            ].map((provider, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-3 py-1.5 shadow-2xs hover:border-emerald-500 hover:shadow-xs transition-all"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span className="text-[11.5px] font-semibold text-slate-700 group-hover:text-emerald-700 transition-colors truncate">
                  {provider}
                </span>
              </div>
            ))}
          </div>

          {/* SVG Connector Lines Overlay */}
          <div className="col-span-4 relative h-[260px] flex items-center justify-center">
            
            {/* SVG Connecting Bezier Paths */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 160 260"
              fill="none"
            >
              {/* Left to Center Curves */}
              <path d="M 0 35 C 50 35, 50 130, 80 130" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.35" />
              <path d="M 0 85 C 45 85, 50 130, 80 130" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4" />
              <path d="M 0 130 L 80 130" stroke="#10b981" strokeWidth="1.8" strokeOpacity="0.6" strokeDasharray="3 3" />
              <path d="M 0 175 C 45 175, 50 130, 80 130" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4" />
              <path d="M 0 225 C 50 225, 50 130, 80 130" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.35" />

              {/* Center to Right Curves */}
              <path d="M 80 130 C 110 130, 115 45, 160 45" stroke="#0066cc" strokeWidth="1.5" strokeOpacity="0.35" />
              <path d="M 80 130 C 115 130, 120 100, 160 100" stroke="#0066cc" strokeWidth="1.5" strokeOpacity="0.4" />
              <path d="M 80 130 C 115 130, 120 160, 160 160" stroke="#0066cc" strokeWidth="1.5" strokeOpacity="0.4" />
              <path d="M 80 130 C 110 130, 115 215, 160 215" stroke="#0066cc" strokeWidth="1.5" strokeOpacity="0.35" />

              {/* Animated Data Packets Flowing */}
              <circle r="3" fill="#10b981">
                <animateMotion
                  path="M 0 85 C 45 85, 50 130, 80 130"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="3" fill="#0066cc">
                <animateMotion
                  path="M 80 130 C 115 130, 120 100, 160 100"
                  dur="1.9s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="2.5" fill="#10b981">
                <animateMotion
                  path="M 0 175 C 45 175, 50 130, 80 130"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="3" fill="#0066cc">
                <animateMotion
                  path="M 80 130 C 110 130, 115 215, 160 215"
                  dur="2.1s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>

            {/* Central Circular UNIFIED API Node */}
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
              {/* Outer Pulsing Radar Ring */}
              <div className="absolute inset-0 rounded-full border border-emerald-400/40 scale-125 animate-ping pointer-events-none" />
            </div>

          </div>

          {/* Right Side: Output Category Pills */}
          <div className="col-span-4 space-y-3 pl-2">
            {[
              { label: "Slots", icon: Sparkles },
              { label: "Live", icon: Radio },
              { label: "Table", icon: Sliders },
              { label: "Crash", icon: Zap },
            ].map((cat, idx) => (
              <div
                key={idx}
                className="group flex items-center justify-between rounded-xl border border-slate-200/90 bg-white px-3.5 py-2 shadow-2xs hover:border-[#0066cc] hover:shadow-xs transition-all"
              >
                <span className="text-xs font-bold text-slate-800 group-hover:text-[#0066cc] transition-colors">
                  {cat.label}
                </span>
                <cat.icon size={13} className="text-slate-400 group-hover:text-[#0066cc] transition-colors" />
              </div>
            ))}
          </div>

        </div>

        {/* Bottom 2 Floating Stat Badges (Connected / Library) */}
        <div className="relative z-10 grid grid-cols-2 gap-4 pt-4 mt-2 border-t border-slate-100">
          
          {/* Left Stat Badge */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5 space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600">
              CONNECTED
            </span>
            <div className="text-2xl font-black text-slate-900 tracking-tight">
              250+
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              Enterprise Providers
            </p>
          </div>

          {/* Right Stat Badge */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5 space-y-1 text-right">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0066cc]">
              LIBRARY
            </span>
            <div className="text-2xl font-black text-slate-900 tracking-tight">
              30K+
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              Production Modules
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. SPORTSBOOK ENGINE VISUAL (Live Odds, Real-Time Ticker, Bet Slip Simulation)
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
        
        {/* Glow */}
        <div className="pointer-events-none absolute -top-10 -right-10 w-44 h-44 rounded-full bg-emerald-500/20 blur-3xl" />

        {/* Live Match Top Banner */}
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

        {/* Match Score Display */}
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

        {/* Live Odds Chips (With Real-Time Ticking Animation) */}
        <div className="py-4 space-y-2">
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
            1X2 MATCH WINNER (REAL-TIME STREAM)
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            <div
              className={`rounded-xl border p-2.5 text-center transition-all ${
                oddsHighlight
                  ? "border-emerald-500 bg-emerald-950/40 text-emerald-300 scale-[1.02]"
                  : "border-slate-800 bg-slate-900/90 text-slate-200"
              }`}
            >
              <div className="text-[10px] text-slate-400">Home (1)</div>
              <div className="text-base font-black">1.75</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-2.5 text-center text-slate-200">
              <div className="text-[10px] text-slate-400">Draw (X)</div>
              <div className="text-base font-black">3.60</div>
            </div>
            <div
              className={`rounded-xl border p-2.5 text-center transition-all ${
                !oddsHighlight
                  ? "border-amber-500 bg-amber-950/40 text-amber-300 scale-[1.02]"
                  : "border-slate-800 bg-slate-900/90 text-slate-200"
              }`}
            >
              <div className="text-[10px] text-slate-400">Away (2)</div>
              <div className="text-base font-black">4.90</div>
            </div>
          </div>
        </div>

        {/* Bet Slip Simulation Footer */}
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
// 3. CASINO CRASH / MULTIPLIER ENGINE VISUAL (Ascending Curve & Provably Fair)
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
        
        {/* Glow */}
        <div className="pointer-events-none absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-purple-600/20 blur-3xl" />

        {/* Top Header */}
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

        {/* Rising Curve Area */}
        <div className="relative h-44 my-4 flex items-center justify-center overflow-hidden">
          
          {/* Animated Ascending Multiplier Curve SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 160" fill="none">
            <defs>
              <linearGradient id="crashGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <path
              d="M 10 150 Q 150 140, 270 25"
              stroke="#ec4899"
              strokeWidth="3.5"
              fill="none"
              strokeDasharray="4 2"
            />
            {/* Trailing shaded gradient under curve */}
            <path
              d="M 10 150 Q 150 140, 270 25 L 270 150 Z"
              fill="url(#crashGrad)"
            />
          </svg>

          {/* Big Live Multiplier Display */}
          <div className="relative z-10 text-center space-y-1">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-400 to-pink-500 tracking-tight">
              {multiplier}x
            </div>
            <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-0.5 text-[11px] font-bold text-emerald-400">
              <span>🚀 Trajectory Climbing</span>
            </div>
          </div>

        </div>

        {/* Game Stats Footer */}
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
// 4. LIGHTHOUSE SPEED / WEB SAAS VISUAL (100 Core Web Vitals & Next.js 16)
// ─────────────────────────────────────────────────────────────────────────────
export function LighthouseSpeedVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl overflow-hidden">
        
        {/* Top Browser Title Bar */}
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

        {/* Big Lighthouse 100 Score Cluster */}
        <div className="py-6 flex items-center justify-center gap-6 sm:gap-8">
          {[
            { label: "Performance", score: 100, color: "text-emerald-500 border-emerald-500" },
            { label: "Accessibility", score: 100, color: "text-emerald-500 border-emerald-500" },
            { label: "Best Practices", score: 100, color: "text-emerald-500 border-emerald-500" },
            { label: "SEO", score: 100, color: "text-emerald-500 border-emerald-500" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-1.5">
              <div className={`w-14 h-14 rounded-full border-4 ${item.color} bg-emerald-50/50 flex items-center justify-center font-black text-sm text-emerald-600 shadow-sm`}>
                {item.score}
              </div>
              <span className="text-[10px] font-bold text-slate-600 text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Speed Telemetry Grid */}
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
            <div className="text-[10px] text-slate-400">Cumulative Layout Shift</div>
            <div className="text-sm font-black text-slate-800">0.00</div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. MOBILE SHOWCASE VISUAL (iPhone / Android Device Frame & Sensor Sync)
// ─────────────────────────────────────────────────────────────────────────────
export function MobileShowcaseVisual() {
  return (
    <div className="relative w-full max-w-[500px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-slate-800 bg-[#090d18] p-6 shadow-2xl overflow-hidden flex items-center justify-between gap-6">
        
        {/* Left App Details */}
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

        {/* Right Phone Mockup */}
        <div className="w-36 h-64 rounded-3xl border-4 border-slate-700 bg-slate-900 p-2 shadow-xl flex flex-col justify-between shrink-0">
          <div className="w-12 h-3.5 rounded-full bg-slate-800 mx-auto" />
          <div className="space-y-2 my-auto">
            <div className="w-10 h-10 rounded-xl bg-blue-500 mx-auto flex items-center justify-center text-white">
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
// 6. AI & NEURAL STREAMING VISUAL (Token Generator & Synapse Graph)
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
        
        {/* Glow */}
        <div className="pointer-events-none absolute -top-10 -left-10 w-44 h-44 rounded-full bg-cyan-500/20 blur-3xl" />

        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-cyan-900/40">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-cyan-400" />
            <span className="text-xs font-mono font-bold text-cyan-400">
              AGENTIC AI RUNTIME
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">
            LATENCY: 42ms
          </span>
        </div>

        {/* Live Token Streaming Output */}
        <div className="my-5 rounded-2xl border border-cyan-900/40 bg-slate-950 p-4 font-mono text-xs space-y-2">
          <div className="text-slate-500 text-[10px]">// Streaming token pipeline:</div>
          <div className="text-cyan-300 font-semibold flex items-center gap-1.5">
            <span>&gt; {tokens}</span>
            <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse" />
          </div>
        </div>

        {/* Synapse Capabilities Footer */}
        <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-cyan-900/40 text-center">
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
// 7. CLOUD CLUSTER VISUAL (Kubernetes Mesh & Auto-Scaling)
// ─────────────────────────────────────────────────────────────────────────────
export function CloudClusterVisual() {
  return (
    <div className="relative w-full max-w-[540px] select-none animate-float-slow">
      <div className="relative rounded-3xl border border-blue-900/60 bg-[#08101e] p-6 shadow-2xl overflow-hidden">
        
        {/* Glow */}
        <div className="pointer-events-none absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-blue-500/20 blur-3xl" />

        {/* Top Header */}
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

        {/* Mesh Nodes Display */}
        <div className="grid grid-cols-3 gap-3 my-5">
          {[
            { name: "AWS us-east-1", status: "Primary Pods", color: "text-amber-400" },
            { name: "GCP europe-west", status: "Failover Pods", color: "text-blue-400" },
            { name: "Cloudflare Edge", status: "CDN & WAF", color: "text-orange-400" },
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

        {/* Metrics Bar */}
        <div className="pt-3 border-t border-blue-900/40 flex items-center justify-between text-xs text-slate-300 font-semibold">
          <span>Global Latency: &lt;25ms</span>
          <span className="text-emerald-400">Zero-Downtime CI/CD Active</span>
        </div>

      </div>
    </div>
  );
}
