import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  HeartPulse,
  ShoppingBag,
  Truck,
  GraduationCap,
  Car,
  Plane,
  Coins,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Tv,
  UtensilsCrossed,
  Fuel,
  Home,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Vertical Solutions & Specialized Engineering | Webnatix Technologies",
  description:
    "Tailored enterprise software and digital transformation solutions across Banking, Healthcare, Retail & E-Commerce, Logistics, Real Estate, Travel, Education, Automotive, and Energy.",
};

const INDUSTRIES = [
  {
    id: "banking",
    slug: "banking-payment",
    name: "Banking & Financial Services",
    icon: Coins,
    desc: "Core banking modernization, biometric KYC verification, ISO 20022 compliance, and high-concurrency payment gateways.",
    bullets: ["Biometric KYC & AML Compliance", "Open Banking & PSD2 APIs", "Sub-10ms Payment Routing", "SOC-2 Certified Infrastructure"],
  },
  {
    id: "finance",
    slug: "banking-payment",
    name: "Finance & WealthTech",
    icon: Building2,
    desc: "Algorithmic portfolio management platforms, automated risk analytics, multi-asset trading engines, and tax reporting automation.",
    bullets: ["Algorithmic Asset Management", "Real-Time Telemetry & PnL", "Regulatory Audit Reporting", "Multi-Currency Custody"],
  },
  {
    id: "mortgage",
    slug: "banking-payment",
    name: "Mortgage & Lending Solutions",
    icon: Building2,
    desc: "Automated loan origination systems (LOS), digital mortgage underwriting, credit bureau APIs, and automated escrow workflows.",
    bullets: ["Automated Loan Origination", "Credit Bureau Ingestion", "Document AI & Verification", "E-Signature Compliance"],
  },
  {
    id: "insurance",
    slug: "banking-payment",
    name: "Insurance & InsurTech",
    icon: ShieldCheck,
    desc: "Policy administration platforms, AI-driven claims adjudication, telematics ingestion, and automated fraud surveillance.",
    bullets: ["AI Claims Processing", "Telematics Data Feeds", "Underwriting Risk Models", "Automated Settlement Rails"],
  },
  {
    id: "consulting",
    slug: "banking-payment",
    name: "Corporate Consulting & ERP",
    icon: Building2,
    desc: "Enterprise resource planning (ERP), multi-entity financial consolidation, custom workflow engines, and executive BI dashboards.",
    bullets: ["Multi-Entity Consolidation", "Custom Deluge & Apex Logic", "Executive Power BI Reports", "Zero Downtime Migrations"],
  },
  {
    id: "retail",
    slug: "retail-fmcg",
    name: "Retail & E-Commerce",
    icon: ShoppingBag,
    desc: "Omnichannel retail platforms, headless e-commerce architectures, automated inventory reconciliation, and personalized recommendation models.",
    bullets: ["Shopify Plus & Magento Scaling", "Real-Time Inventory Sync", "AI Personalized Upselling", "Global Payment Gateways"],
  },
  {
    id: "fmcg",
    slug: "retail-fmcg",
    name: "FMCG & Consumer Goods",
    icon: ShoppingBag,
    desc: "Direct-to-consumer (D2C) portals, distributor management systems, automated supply forecasts, and batch traceability tracking.",
    bullets: ["D2C Distribution Portals", "Batch Quality Traceability", "Demand Prediction ML", "Automated Reordering"],
  },
  {
    id: "food-beverage",
    slug: "retail-fmcg",
    name: "Food & Beverage Platforms",
    icon: UtensilsCrossed,
    desc: "Online ordering ecosystems, POS cloud synchronization, cold-chain temperature monitoring, and kitchen display systems.",
    bullets: ["Cloud POS Synchronization", "Fleet Delivery Tracking", "Cold-Chain IoT Telemetry", "Loyalty & Reward Engines"],
  },
  {
    id: "travel",
    slug: "travel",
    name: "Travel & Hospitality",
    icon: Plane,
    desc: "Global distribution system (GDS) integrations, dynamic booking engines, room allocation engines, and mobile guest concierge apps.",
    bullets: ["GDS & Amadeus API Connectors", "Real-Time Room Inventory", "Dynamic Pricing Algorithms", "Multi-Language Booking UX"],
  },
  {
    id: "media",
    slug: "media",
    name: "Media, Publishing & Streaming",
    icon: Tv,
    desc: "High-throughput content management systems, live video transcoding pipelines, digital rights management (DRM), and paywall subscriptions.",
    bullets: ["Low-Latency Video Streaming", "Headless CMS Publishing", "DRM & License Protection", "Subscription Billing Engines"],
  },
  {
    id: "sports",
    slug: "media",
    name: "Sports & Recreation",
    icon: Tv,
    desc: "Fan engagement apps, live match telemetry trackers, ticketing reservation engines, and digital community platforms.",
    bullets: ["Live Match Telemetry", "High-Volume Ticketing APIs", "Fan Community & Gamification", "Biometric Stadium Passes"],
  },
  {
    id: "healthcare",
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: HeartPulse,
    desc: "HIPAA-compliant telehealth platforms, electronic health record (EHR/EMR) integrations (HL7/FHIR), and remote patient monitoring portals.",
    bullets: ["HIPAA & GDPR Compliance", "FHIR & HL7 Interoperability", "Encrypted Video Consultations", "IoMT Sensor Ingestion"],
  },
  {
    id: "education",
    slug: "education",
    name: "E-Learning & EdTech",
    icon: GraduationCap,
    desc: "Learning Management Systems (LMS), interactive assessment engines, SCORM compliance, and AI-driven personalized tutoring agents.",
    bullets: ["SCORM & xAPI Compatibility", "Live Collaborative Classrooms", "Automated Grading Engines", "Mobile Offline Learning"],
  },
  {
    id: "real-estate",
    slug: "real-estate",
    name: "Real Estate & PropTech",
    icon: Home,
    desc: "Interactive 3D virtual tour platforms, MLS/IDX property listing syndication, tenant management portals, and automated digital lease signing.",
    bullets: ["3D Virtual Property Walkthroughs", "MLS / IDX Feed Syndication", "Tenant & Lease Management", "Automated Rent Escrow"],
  },
  {
    id: "logistics",
    slug: "logistics",
    name: "Logistics & Supply Chain",
    icon: Truck,
    desc: "Fleet management systems, GPS route optimization algorithms, warehouse management (WMS), and real-time cargo shipment tracking.",
    bullets: ["AI GPS Route Optimization", "Real-Time Fleet Telemetry", "Warehouse Barcode / RFID", "EDI Customs Integration"],
  },
  {
    id: "automotive",
    slug: "automotive",
    name: "Automotive & Connected Vehicles",
    icon: Car,
    desc: "Connected vehicle telematics, dealership CRM management, interactive 3D car configurators, and EV charging station network software.",
    bullets: ["CAN Bus & OBD Telematics", "Interactive 3D Car Visualizers", "Dealership Inventory Sync", "EV Charging Billing APIs"],
  },
  {
    id: "energy",
    slug: "logistics",
    name: "Energy, Utilities & Oil/Gas",
    icon: Fuel,
    desc: "SCADA telemetry dashboards, predictive pipeline maintenance algorithms, smart meter data ingestion, and sustainability carbon reporting.",
    bullets: ["SCADA & IoT Sensor Telemetry", "Predictive Equipment Maintenance", "Smart Grid Load Balancing", "Carbon Offset Accounting"],
  },
];

export default function IndustriesIndexPage() {
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
            <span>Vertical Domain Expertise · 27,000+ Projects</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto">
            Industry Solutions &amp; <span className="text-[#0066cc]">Vertical Engineering</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Tailored digital platforms and enterprise applications engineered to solve domain-specific regulatory, architectural, and operational challenges across 17+ core industries.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-700/20 hover:bg-[#0052a3] transition-all"
            >
              <span>Consult Industry Specialists</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Industries Grid ── */}
      <section className="py-20 max-w-[1780px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                id={ind.id}
                className="group rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs hover:border-[#0066cc]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066cc] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon size={24} />
                    </div>
                    <span className="rounded-full bg-blue-50 text-[#0066cc] font-extrabold text-[10px] uppercase px-3 py-1">
                      ISO &amp; CMMI Level 3
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors mb-2.5">
                    {ind.name}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6 font-normal">
                    {ind.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {ind.bullets.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 size={13} className="text-[#0066cc] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066cc] group-hover:translate-x-1 transition-all"
                  >
                    <span>View Industry Capabilities</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
