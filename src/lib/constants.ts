export const SITE_CONFIG = {
  name: "Webnatix Technologies",
  shortName: "Webnatix",
  tagline: "We Build Digital Products That Move Businesses Forward",
  description:
    "Global software engineering studio designing and building high-performance websites, SaaS platforms, portals, dashboards, mobile apps, and AI platforms for ambitious businesses worldwide.",
  email: "info@webnatix.com",
  phone: "+91 9252052623",
  whatsapp: "https://wa.me/919252052623",
  telegram: "https://t.me/webnatix",
  meetingUrl: "/contact",
  address: "Global Studio · US · APAC · Europe",
  social: {
    twitter: "https://twitter.com/webnatix",
    linkedin: "https://linkedin.com/company/webnatix",
    github: "https://github.com/webnatix",
  },
};

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Selected Work", href: "/work" },
  { label: "Why Webnatix", href: "/about" },
  { label: "Our Process", href: "/about#process" },
  { label: "Engineering Stack", href: "/services#stack" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "web-platforms",
    icon: "Layout",
    title: "High-Performance Web Platforms",
    description:
      "Ultra-fast platforms engineered with modern stacks like Next.js and Astro, featuring custom headless CMS architectures and Core Web Vitals optimization.",
    tags: ["Next.js", "Astro", "Headless CMS", "Tailwind CSS"],
  },
  {
    id: "saas-products",
    icon: "Layers",
    title: "SaaS Platforms & Products",
    description:
      "Scalable multi-tenant SaaS applications equipped with role-based auth, automated Stripe subscription billing, and real-time interactive user dashboards.",
    tags: ["Multi-Tenant", "Stripe Billing", "RBAC Auth", "PostgreSQL"],
  },
  {
    id: "portals-dashboards",
    icon: "Gauge",
    title: "Enterprise Portals & Dashboards",
    description:
      "Custom business management consoles, analytics reporting dashboards, client portals, and internal workflows engineered for enterprise clarity.",
    tags: ["Real-time Analytics", "Data Viz", "Audit Logging", "APIs"],
  },
  {
    id: "mobile-apps",
    icon: "Smartphone",
    title: "Mobile App Development",
    description:
      "High-performance native and cross-platform mobile apps for iOS and Android, built with React Native and smooth 60fps gesture-driven interfaces.",
    tags: ["React Native", "iOS & Android", "Offline Sync", "Push Notifs"],
  },
  {
    id: "ai-solutions",
    icon: "Brain",
    title: "AI & Autonomous Workflows",
    description:
      "Custom RAG vector databases, enterprise LLM integrations, intelligent conversational agents, and multi-agent workflow systems engineered for automation.",
    tags: ["Custom RAG", "Vector DBs", "OpenAI / Claude", "Agents"],
  },
  {
    id: "legacy-modernization",
    icon: "Workflow",
    title: "Cloud & Legacy Modernization",
    description:
      "Auditing, refactoring, and migrating complex legacy web infrastructure into modern Docker/Kubernetes cloud microservices with 99.99% uptime.",
    tags: ["AWS / GCP", "Docker", "Kubernetes", "Zero Downtime"],
  },
];

export const STATS = [
  { value: "100%", label: "Source Code & IP Ownership" },
  { value: "4-8 wks", label: "Average MVP Launch Velocity" },
  { value: "24/7", label: "Global Dedicated Tech Coverage" },
  { value: "99.99%", label: "Uptime SLA Guarantee" },
];

export const TESTIMONIALS = [
  {
    name: "Alex V.",
    role: "Founder, Fintech SaaS",
    content:
      "Webnatix delivered our complete multi-tenant platform 2 weeks ahead of schedule. The code quality, speed, and architectural clarity were exceptional.",
  },
  {
    name: "David K.",
    role: "VP of Engineering, Logistics Network",
    content:
      "Working with Webnatix felt like having a senior Principal Engineering collective embedded right inside our company. Clean code, 100% IP handed over.",
  },
  {
    name: "Elena R.",
    role: "Co-Founder, AI Productivity Suite",
    content:
      "From database schema to real-time agent workflows, they architected everything flawlessly. Highly recommend Webnatix for any ambitious founder.",
  },
];
