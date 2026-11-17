import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { Mail, Phone, Globe, ShieldCheck } from "lucide-react";

// Clean brand SVG icons
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const footerSections = [
  {
    title: "Core Services",
    links: [
      { label: "AI & Machine Learning", href: "/services/ai-machine-learning" },
      { label: "Custom Software Development", href: "/services/full-stack-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "Web & Headless CMS", href: "/services/website-development" },
      { label: "E-Commerce Solutions", href: "/services/ecommerce-development" },
      { label: "Cloud & DevOps", href: "/services/cloud-solutions" },
    ],
  },
  {
    title: "Enterprise Solutions",
    links: [
      { label: "CRM (Salesforce, Zoho, HubSpot)", href: "/services/crm-solutions" },
      { label: "API Dev & Integration", href: "/services/api-development" },
      { label: "Data Engineering & Snowflake", href: "/services/data-strategy" },
      { label: "Cybersecurity & Compliance", href: "/services/custom-software-integration" },
      { label: "CMMI Level 3 Quality", href: "/about" },
    ],
  },
  {
    title: "Global Hubs",
    links: [
      { label: "United Kingdom (Brighton/London)", href: "/contact" },
      { label: "United States (Maryland/Texas)", href: "/contact" },
      { label: "Australia (Melbourne/Sydney)", href: "/contact" },
      { label: "UAE (Dubai Silicon Oasis)", href: "/contact" },
      { label: "India (Global Capability Center)", href: "/contact" },
    ],
  },
  {
    title: "Connect & Inquire",
    links: [
      { label: "office@dotsquares.com", href: "mailto:office@dotsquares.com" },
      { label: "UK: +44 1273 575190", href: "tel:+441273575190" },
      { label: "US: +1 866 978 2220", href: "tel:+18669782220" },
      { label: "AU: +61 3 9013 4567", href: "tel:+61390134567" },
      { label: "Schedule Consultation", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#071322] text-slate-300 border-t border-[#0e223d]">
      <div className="mx-auto max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16 py-16">

        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-[#0e223d]">

          {/* Brand info (2 cols) */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/assets/navbar/webnatix-logo.png"
                alt="Webnatix Technologies"
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight">
                  Dotsquares <span className="text-[#38bdf8]">Technologies</span>
                </span>
                <span className="text-[10px] text-blue-300 uppercase tracking-widest font-semibold">
                  Software, AI &amp; Digital Transformation
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-sm">
              Modern software development with AI, cloud, and data expertise. 24+ years of proven delivery, 1,200+ certified engineers, and 27,000+ completed projects worldwide.
            </p>

            <div className="flex items-center gap-3">
              {[
                { icon: TwitterIcon, href: SITE_CONFIG.social.twitter },
                { icon: LinkedinIcon, href: SITE_CONFIG.social.linkedin },
                { icon: GithubIcon, href: SITE_CONFIG.social.github },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0f2238] text-slate-400 hover:bg-[#0066cc] hover:text-white transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns (4 cols) */}
          {footerSections.map((sec, i) => (
            <div key={i} className="lg:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                {sec.title}
              </h4>
              <ul className="space-y-2 text-xs">
                {sec.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-[#38bdf8] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <p>© 2026 Webnatix Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-blue-300 flex items-center gap-1">
              <ShieldCheck size={12} /> Custom-built &amp; yours to own 100% IP.
            </span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="flex items-center gap-1 text-[#38bdf8]">
              <Globe size={11} /> Global Engineering SLA Active
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
