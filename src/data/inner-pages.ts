import { HeroVisualType } from "@/components/templates/HeroVisuals";

export interface InnerPageFeatureCard {
  title: string;
  description: string;
  points?: string[];
  badge?: string;
}

export interface InnerPageData {
  slug: string;
  category: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
  title: string;
  description: string;
  badges: string[];
  visualType?: HeroVisualType;
  
  heroVisual: {
    tag: string;
    sla: string;
    centerIcon: "shield" | "code" | "server" | "cpu" | "layers" | "trophy" | "gamepad" | "globe";
    centerTitle: string;
    accentColor: "red" | "blue" | "emerald" | "purple";
    nodes: Array<{
      label: string;
      color: "yellow" | "red" | "green" | "blue" | "purple";
    }>;
    bottomLeft: string;
    bottomRight: string;
  };

  overview: {
    heading: string;
    paragraphs: string[];
    keyTakeaway: string;
  };

  servicesGrid: {
    heading: string;
    items: InnerPageFeatureCard[];
  };

  techStack: {
    heading: string;
    categories: Array<{
      name: string;
      tools: string[];
    }>;
  };

  process: {
    heading: string;
    steps: Array<{
      number: string;
      title: string;
      desc: string;
    }>;
  };

  whyChooseUs: {
    heading: string;
    items: Array<{
      title: string;
      desc: string;
      stat?: string;
    }>;
  };

  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

// ─── DEFINED DATA FOR CORE SERVICES & PLATFORMS ───────────────────
export const INNER_PAGES_DATA: Record<string, InnerPageData> = {
  // ── 1. Full Stack Development Company (Matches Exact Screenshot) ──
  "full-stack-development": {
    slug: "full-stack-development",
    category: "OUR SERVICES",
    visualType: "api-flow",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Full Stack Development Company" },
    ],
    title: "Enterprise-Grade Full Stack Development Company",
    description:
      "We are a full stack development company that focuses on getting results. Dotsquares can help you produce better software and speed up every part of your projects. Our end-to-end full stack development services cover everything. Our services speed up delivery, make things less complicated, add more features, and make sure that products may be built to be scalable and high-performance.",
    badges: [
      "Secure & Private",
      "Production Ready",
      "Human-in-the-Loop",
      "Scalable Architecture",
    ],
    heroVisual: {
      tag: "Production Ready Engineering",
      sla: "SLA Guaranteed",
      centerIcon: "shield",
      centerTitle: "Enterprise Stack",
      accentColor: "red",
      nodes: [
        { label: "Architecture (Scalable)", color: "yellow" },
        { label: "Security (Enterprise)", color: "red" },
        { label: "Performance (Optimized)", color: "green" },
        { label: "Integration (Seamless)", color: "blue" },
      ],
      bottomLeft: "Enterprise Technical Stack",
      bottomRight: "Production Hardened",
    },
    overview: {
      heading: "End-To-End Full Stack Development Service Providers",
      paragraphs: [
        "Our custom software, website, and mobile app development have helped businesses in many different fields fulfill their requirements. With our full-stack development services, we make websites for a lot of different kinds of industries that are loaded with features and have a great user-interface. Most of them have been with us since we started our company.",
        "Our skilled full stack web developers can assist you with server-side development by leveraging the latest technologies and best practices for your back-end projects. From microservices to distributed database synchronization, we ensure non-blocking high throughput.",
      ],
      keyTakeaway:
        "Key Takeaway: Our custom software, website, and mobile app development have helped businesses in many different fields fulfill their requirements. With our full-stack development services, we make websites for a lot of different kinds of industries that are loaded with features and have a great user-interface.",
    },
    servicesGrid: {
      heading: "Our Enterprise-Grade Full Stack Development Services",
      items: [
        {
          title: "Full Stack Web Application Development",
          description:
            "Full stack development services are meant to help your business with everything from coming up with concepts to making sure they operate properly. These services are based on a thorough grasp of what clients want and what the market expects.",
          points: ["Responsive React & Next.js UI", "Modular backend architectures", "Real-time socket data streams"],
        },
        {
          title: "Robust API & Microservices Engineering",
          description:
            "Dotsquares is great at building powerful APIs that enable different software systems to communicate with one another. Our API development makes sure that data exchange is fast, scalable, and secure. This makes it simple to connect to services from other sectors.",
          points: ["RESTful & GraphQL interfaces", "Zero-trust token authentication", "Sub-50ms latency SLAs"],
        },
        {
          title: "Scalable Cloud Architecture & DevOps",
          description:
            "We design auto-scaling cloud topologies across AWS, GCP, and Azure that handle viral traffic surges with ease while maintaining low server overhead and automated CI/CD pipelines.",
          points: ["Docker containerization", "Kubernetes orchestration", "Multi-region redundancy"],
        },
        {
          title: "Database Architecture & Optimization",
          description:
            "High-concurrency PostgreSQL, MongoDB, Redis, and distributed SQL designs optimized for transactional consistency, query speeds, automated backups, and zero downtime.",
          points: ["ACID transaction guarantees", "Automated read-replicas", "Optimized index caching"],
        },
        {
          title: "Enterprise Custom CMS & SaaS Platforms",
          description:
            "Custom multi-tenant dashboards, subscription billing engines, and headless CMS implementations tailored to unique business logic and administrative workflows.",
          points: ["Stripe & LemonSqueezy integration", "Role-based access control (RBAC)", "Custom analytical reporting"],
        },
        {
          title: "Legacy Code Migration & Modernization",
          description:
            "Refactoring monolithic legacy applications into modern, decoupled full stack architectures without disrupting active user traffic or business operations.",
          points: ["Zero downtime database migrations", "Modern TypeScript refactoring", "Test-driven verification"],
        },
      ],
    },
    techStack: {
      heading: "Core Technology Architecture & Enterprise Stack",
      categories: [
        { name: "Frontend", tools: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Redux Toolkit"] },
        { name: "Backend", tools: ["Node.js", "Python Fast-API", "Go", "Express", "NestJS"] },
        { name: "Databases", tools: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma ORM"] },
        { name: "Cloud & DevOps", tools: ["AWS", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions"] },
      ],
    },
    process: {
      heading: "Agile Delivery Lifecycle & Milestones",
      steps: [
        { number: "01", title: "Discovery & Architecture Blueprint", desc: "Detailed requirements mapping, tech stack selection, schema design, and technical risk assessment." },
        { number: "02", title: "UI/UX & Interactive Prototyping", desc: "User journeys, wireframes, component design systems, and high-fidelity clickable Figma prototypes." },
        { number: "03", title: "Sprint-Based Engineering", desc: "Bi-weekly sprint demos, test-driven development, continuous integration, and transparent status tracking." },
        { number: "04", title: "Security Audit & Quality Assurance", desc: "End-to-end automated testing, load testing, penetration audits, and SOC2/HIPAA compliance validation." },
        { number: "05", title: "Production Deployment & SLA Support", desc: "Zero-downtime deployment, infrastructure monitoring, 24/7 technical escalation, and dedicated SLA." },
      ],
    },
    whyChooseUs: {
      heading: "Why Global Enterprises Choose Dotsquares",
      items: [
        { title: "100% IP Transfer & Source Ownership", desc: "All repository code, assets, and infrastructure belong 100% to you. No hidden licensing or vendor lock-in.", stat: "100%" },
        { title: "Senior Engineers & Dedicated Architects", desc: "Work directly with seasoned senior full-stack architects with extensive enterprise track records.", stat: "8+ Yrs Avg" },
        { title: "Speed-To-Market & Predictable Milestones", desc: "Fixed-price milestone schedules or agile dedicated pods that launch products on time.", stat: "2x Velocity" },
        { title: "Round-The-Clock Global Coverage", desc: "Seamless communication across US, European, and APAC timezones with dedicated account management.", stat: "24/7 SLA" },
      ],
    },
    faqs: [
      {
        question: "How do you ensure code quality and security in full stack projects?",
        answer: "We implement strict CI/CD pipelines with automated unit, integration, and end-to-end testing, static code analysis (SonarQube), dependency vulnerability scanning, and peer code reviews before any deployment.",
      },
      {
        question: "Do I retain full intellectual property (IP) rights to the code?",
        answer: "Yes, 100%. Upon milestone completion, full IP rights, Git repositories, documentation, and cloud credentials are transferred directly to your organization.",
      },
      {
        question: "Can your full stack team integrate with our existing in-house developers?",
        answer: "Absolutely. We routinely operate as dedicated pods or staff augmentation, integrating into your existing Jira, Slack, and GitHub workflows smoothly.",
      },
      {
        question: "What is your typical project delivery timeline?",
        answer: "MVPs and specialized full stack platforms typically range from 6 to 12 weeks, while large-scale enterprise microservice platforms are delivered in structured multi-month phased roadmaps.",
      },
    ],
  },

  // ── 2. Sportsbook Platform (Referenced by User) ──
  "sportsbook-platform": {
    slug: "sportsbook-platform",
    category: "IGAMING & SPORTSBOOK PLATFORMS",
    visualType: "sportsbook-engine",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "iGaming", href: "/services" },
      { label: "Sportsbook Platform" },
    ],
    title: "Next-Gen Turnkey Sportsbook Platform & Engine",
    description:
      "Engineered for high-frequency betting velocity, ultra-low latency odds delivery, and institutional compliance. Our turnkey sportsbook solution supports 70+ sports, 120,000+ monthly live events, dynamic risk management engines, and unified crypto/fiat payment gateways.",
    badges: [
      "Ultra-Low Latency",
      "70+ Global Sports",
      "Dynamic Risk Management",
      "Turnkey & White-Label",
    ],
    heroVisual: {
      tag: "High-Frequency Betting Engine",
      sla: "99.999% Uptime SLA",
      centerIcon: "trophy",
      centerTitle: "Sportsbook Core",
      accentColor: "emerald",
      nodes: [
        { label: "Real-Time Odds (Sub-10ms)", color: "green" },
        { label: "Risk Management (Auto-Hedging)", color: "red" },
        { label: "Live Video Streams & Cashout", color: "blue" },
        { label: "Multi-Currency & Crypto Rails", color: "purple" },
      ],
      bottomLeft: "Institutional Odds Feed",
      bottomRight: "Multi-Jurisdiction Compliant",
    },
    overview: {
      heading: "Enterprise Sportsbook Architecture Engineered for Maximum Margin",
      paragraphs: [
        "Modern sports betting demands milliseconds precision, real-time live trading, and impenetrable security. Dotsquares designs custom sportsbook engines capable of processing tens of thousands of concurrent bet placements during high-stakes championship finals.",
        "From personalized bet-builders and instant cashout mechanics to automated risk mitigation algorithms, our platform ensures operators maximize gross gaming revenue (GGR) while preventing fraudulent exploitation.",
      ],
      keyTakeaway:
        "Key Takeaway: Power your brand with a high-capacity sportsbook platform that combines real-time official odds aggregation, AI-driven risk management, automated player profiling, and seamless cross-platform wagering.",
    },
    servicesGrid: {
      heading: "Complete Sportsbook Infrastructure Capabilities",
      items: [
        {
          title: "Pre-Match & In-Play Live Betting Engine",
          description: "Over 120,000 monthly live events across 70+ sports with sub-second odds updates, live match trackers, and dynamic micro-markets.",
          points: ["Micro-betting & instant markets", "Native cashout & partial cashout", "Deep statistical match trackers"],
        },
        {
          title: "Omnichannel Odds Aggregation",
          description: "Unified ingestion from world-leading feeds (Betradar, Sportradar, BetGenius) with custom margin setting and override controls.",
          points: ["Automated latency arbitrage prevention", "Customizable margin matrices", "Failover feed switching"],
        },
        {
          title: "AI-Powered Risk & Liability Management",
          description: "Real-time exposure monitors, automated sharp bettor limiters, fraud detection, and instant liability balancing across bookmakers.",
          points: ["Real-time bet ticker monitoring", "Automated hedging triggers", "VIP profiling & bespoke limits"],
        },
        {
          title: "Custom Bet Builder & Same-Game Parlays",
          description: "Engaging player retention features allowing punters to construct interconnected parlays on single matches with correlated odds computing.",
          points: ["Single-game accumulator engine", "Algorithmic correlation pricing", "Boosted odds promotions"],
        },
        {
          title: "Multi-Currency & Web3 Crypto Integration",
          description: "Support for global fiat payment rails, localized payment methods (PIX, UPI, SEPA), and instant crypto wagering (BTC, ETH, USDT).",
          points: ["Instant withdrawal automation", "KYC & AML verification gates", "Multi-wallet player accounts"],
        },
        {
          title: "Cross-Platform Native & Web Apps",
          description: "Blazing fast Next.js PWA, iOS, and Android applications that deliver smooth 60fps live odds animations and biometric 1-tap betting.",
          points: ["Biometric 1-tap bet slip", "Push notifications for goal alerts", "Offline bet history sync"],
        },
      ],
    },
    techStack: {
      heading: "Low-Latency High-Throughput Engineering Stack",
      categories: [
        { name: "Betting Core", tools: ["Go (Golang)", "Rust", "Node.js High-Concurrency", "C++ Trading Modules"] },
        { name: "Frontend", tools: ["Next.js 16", "React Native", "Tailwind CSS", "WebSockets / SSE"] },
        { name: "Data & Caching", tools: ["Redis Enterprise Cluster", "Kafka Event Streams", "PostgreSQL", "ClickHouse"] },
        { name: "Compliance", tools: ["GLI-19 Standards", "UKGC / MGA Architecture", "Curacao & Anjouan Ready"] },
      ],
    },
    process: {
      heading: "Turnkey Sportsbook Launch Roadmap",
      steps: [
        { number: "01", title: "Licensing & Technical Scope", desc: "Jurisdiction assessment, odds feed provider selection, and custom platform branding wireframing." },
        { number: "02", title: "Custom UI/UX & Brand Skinning", desc: "High-conversion front-end design, bet slip UX optimization, and responsive mobile testing." },
        { number: "03", title: "Feed Integration & Risk Setup", desc: "Connecting official data providers, configuring liability rules, and payment gateway staging." },
        { number: "04", title: "Simulated Stress & Concurrency Testing", desc: "Benchmarking bet placement latency under 50,000+ simulated concurrent peak wagers." },
        { number: "05", title: "Go-Live & Dedicated Risk Monitoring", desc: "Production launch with 24/7 dedicated platform monitoring, incident response, and SLA coverage." },
      ],
    },
    whyChooseUs: {
      heading: "The Dotsquares Sportsbook Advantage",
      items: [
        { title: "Sub-10ms Live Placement Speed", desc: "No bet lag or rejected slips during volatile odds movements.", stat: "<10ms" },
        { title: "100% Platform Ownership", desc: "Own your platform IP, database, and player liquidity without recurring revenue penalties.", stat: "100% IP" },
        { title: "70+ Sports & Esports Markets", desc: "From Premier League and NBA to CS:GO and Valorant esports.", stat: "120K+ Live/Mo" },
        { title: "Institutional Reliability", desc: "Zero downtime during Super Bowl, FIFA World Cup, and Champions League traffic peaks.", stat: "99.999% SLA" },
      ],
    },
    faqs: [
      {
        question: "Can we integrate our own odds feed or existing provider contracts?",
        answer: "Yes. Our architecture is provider-agnostic. We can connect Betradar, Genius Sports, Kambi, or your bespoke proprietary feed with custom aggregation logic.",
      },
      {
        question: "Does the platform support crypto deposits and instant payouts?",
        answer: "Yes, our platform includes turnkey crypto gateway integrations supporting BTC, ETH, USDT, USDC, and multi-chain tokens alongside standard fiat payment processors.",
      },
      {
        question: "How does the automated risk management engine work?",
        answer: "The platform monitors incoming bets in real time, detecting sharp action, arbitrage anomalies, and syndicated betting patterns to dynamically adjust stakes or auto-hedge liabilities.",
      },
      {
        question: "How long does a turnkey sportsbook deployment take?",
        answer: "A standard white-label deployment takes 3 to 6 weeks. Bespoke platforms with custom features and proprietary odds integrations take 8 to 14 weeks.",
      },
    ],
  },

  // ── 3. Casino Game Development (Referenced by User) ──
  "casino-game-development": {
    slug: "casino-game-development",
    category: "IGAMING PLATFORMS & GAME STUDIOS",
    visualType: "casino-crash",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Casino Game Development" },
    ],
    title: "Provably Fair Casino Game Development Studio",
    description:
      "Crafting high-engagement, visually breathtaking casino games with certified RNG mathematics, 3D animations, and cross-platform HTML5 performance. From thrilling video slots and crash games (Aviator-style) to live dealer solutions and classic table poker.",
    badges: [
      "Certified RNG Math",
      "HTML5 Lightweight 60fps",
      "Provably Fair Web3",
      "Turnkey RGS Integration",
    ],
    heroVisual: {
      tag: "Certified iGaming Studio",
      sla: "GLI-19 Certified Math",
      centerIcon: "gamepad",
      centerTitle: "Casino Engine",
      accentColor: "purple",
      nodes: [
        { label: "Video Slots (3D & Classic)", color: "purple" },
        { label: "Crash & Multi-Player PvP", color: "red" },
        { label: "Live Dealer & Table Poker", color: "green" },
        { label: "Remote Game Server (RGS)", color: "blue" },
      ],
      bottomLeft: "Certified RNG Mathematics",
      bottomRight: "HTML5 Mobile-First Engine",
    },
    overview: {
      heading: "Custom Casino Games Engineered to Drive Retention and GGR",
      paragraphs: [
        "Dotsquares develops state-of-the-art casino games that captivate players and maximize retention. Using lightweight WebGL and HTML5 rendering frameworks, our games load in under 2 seconds even over slow cellular connections while delivering breathtaking 60fps particle physics and audio effects.",
        "Every game we build features certified Random Number Generator (RNG) mathematics, transparent Provably Fair cryptographic proofs, and seamless API connectivity to all major Remote Game Server (RGS) aggregators.",
      ],
      keyTakeaway:
        "Key Takeaway: From viral crash games with social live chats to multi-feature cascading video slots, we provide full intellectual property ownership, certified mathematics, and custom soundscapes that differentiate your brand.",
    },
    servicesGrid: {
      heading: "Full-Spectrum Casino Development Capabilities",
      items: [
        {
          title: "Custom 3D & 2D Video Slot Games",
          description: "Immersive multi-reel slots with cascading reels, expanding wilds, bonus mini-games, free spins, and cinematic audio production.",
          points: ["Custom math models (94% - 98% RTP)", "Volatile & low-variance designs", "Localized themes & seasonal reskins"],
        },
        {
          title: "Viral Crash & Multi-Player Games (Aviator/PvP)",
          description: "High-octane multiplier games featuring real-time multiplayer social betting, live community chat, auto-cashout, and Provably Fair hashing.",
          points: ["Sub-20ms WebSocket sync", "Interactive live leaderboards", "Custom themes (Rockets, Jets, Crypto)"],
        },
        {
          title: "Table Games: Blackjack, Roulette & Baccarat",
          description: "Classic European and American table games engineered with realistic 3D felt physics, crisp card deal animations, and side bets.",
          points: ["Multi-hand Blackjack options", "Zero-latency Roulette wheel physics", "Side bets (Perfect Pairs, 21+3)"],
        },
        {
          title: "Provably Fair Web3 Blockchain Games",
          description: "Next-gen crypto casino games utilizing SHA-256 client/server seeds that enable players to independently verify the fairness of every round.",
          points: ["Verifiable on-chain seeds", "Instant crypto micro-betting", "Meme-coin & multi-token support"],
        },
        {
          title: "Remote Game Server (RGS) Architecture",
          description: "Robust back-end RGS that allows you to distribute your proprietary games to 300+ third-party casino operators seamlessly.",
          points: ["Seamless & transfer wallet APIs", "Multi-currency & 40+ languages", "Back-office round replay telemetry"],
        },
        {
          title: "Live Dealer Studio Software",
          description: "High-definition WebRTC video streaming studio software with OCR card scanners, low-latency betting overlay, and dealer management.",
          points: ["Sub-300ms video streaming", "Automated optical card recognition", "Multi-table simultaneous wagering"],
        },
      ],
    },
    techStack: {
      heading: "Game Engine & Mathematics Technology Stack",
      categories: [
        { name: "Game Engine", tools: ["Phaser.js", "Pixi.js", "Three.js 3D", "HTML5 Canvas", "WebGL 2.0"] },
        { name: "Mathematics & RNG", tools: ["Certified RNG C++", "Python Math Simulators", "GLI-19 Compliant Algorithms"] },
        { name: "Backend & RGS", tools: ["Node.js High-Throughput", "Go (Golang)", "WebSockets", "Redis Cluster"] },
        { name: "Audio & Assets", tools: ["WebAudio API", "Spine 2D Animation", "Blender 3D", "Dolby Soundscapes"] },
      ],
    },
    process: {
      heading: "End-to-End Game Development Lifecycle",
      steps: [
        { number: "01", title: "Game Concept & Theme Design", desc: "Storyboards, gameplay mechanics, visual moodboards, and mathematical RTP modeling." },
        { number: "02", title: "Mathematics & RNG Certification", desc: "10,000,000+ round statistical simulations verifying hit frequency, volatility, and compliance." },
        { number: "03", title: "Art Assets, 3D & Sound Design", desc: "High-resolution animations, spine skeletal rigs, win animations, and custom audio effects." },
        { number: "04", title: "HTML5 Client & RGS Integration", desc: "Coding client mechanics, integrating WebSocket game states, and seamless wallet APIs." },
        { number: "05", title: "Testing, Certification & Launch", desc: "Cross-device browser benchmarking, iTech Labs / GLI readiness, and operator distribution." },
      ],
    },
    whyChooseUs: {
      heading: "Why Operators Choose Our Game Studio",
      items: [
        { title: "Ultra-Lightweight HTML5 Builds", desc: "Fast under-2s loading ensures zero drop-off on mobile networks worldwide.", stat: "<2s Load" },
        { title: "100% Bespoke IP & Math", desc: "You own the game source code, art assets, and mathematical equations with zero royalties.", stat: "100% IP" },
        { title: "Certified Fair Mathematics", desc: "Mathematical models audited for regulatory approval across Curacao, Malta, and Anjouan.", stat: "GLI Ready" },
        { title: "Turnkey RGS Distribution", desc: "Sell and distribute your exclusive games to thousands of global casino operators.", stat: "Global APIs" },
      ],
    },
    faqs: [
      {
        question: "Can we get custom mathematical models tailored to our target players?",
        answer: "Yes. We engineer bespoke mathematics ranging from high-volatility jackpot slots (appealing to VIP high-rollers) to high-hit-rate low-variance casual games.",
      },
      {
        question: "Do you provide Provably Fair verification for crypto casino games?",
        answer: "Yes, all our crypto and crash games feature transparent SHA-256 Provably Fair verification where players can verify the combined server seed and client seed for complete trust.",
      },
      {
        question: "How do your games integrate with our existing casino platform?",
        answer: "We support seamless wallet integration via standard REST / JSON APIs, as well as direct iframe launch URLs compatible with standard aggregators like SoftSwiss, EveryMatrix, and Slotegrator.",
      },
      {
        question: "What is the typical development timeline for a custom slot or crash game?",
        answer: "A turnkey crash game typically takes 3 to 5 weeks. A custom video slot with bespoke 3D art, bonus rounds, and certified math takes 6 to 10 weeks.",
      },
    ],
  },

  // ── 4. Website Development ──
  "website-development": {
    slug: "website-development",
    category: "OUR SERVICES",
    visualType: "lighthouse-speed",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Website Development" },
    ],
    title: "High-Performance Enterprise Website Development",
    description:
      "Transforming digital presence into a measurable revenue engine. Dotsquares engineers ultra-fast, search-engine dominant websites and web portals powered by Next.js 16, headless architectures, and enterprise design systems that convert visitors into qualified enterprise clients.",
    badges: [
      "99+ Google Lighthouse Score",
      "Next.js 16 & React 19",
      "Headless CMS Architecture",
      "Enterprise SEO Dominance",
    ],
    heroVisual: {
      tag: "Modern Web Engineering",
      sla: "Sub-Second Page Loads",
      centerIcon: "code",
      centerTitle: "Next.js Core",
      accentColor: "blue",
      nodes: [
        { label: "Next.js 16 SSR & Edge", color: "blue" },
        { label: "100% Core Web Vitals", color: "green" },
        { label: "Automated SEO & Schema", color: "yellow" },
        { label: "Enterprise Security", color: "red" },
      ],
      bottomLeft: "Next.js Server Components",
      bottomRight: "Global Edge CDN Cached",
    },
    overview: {
      heading: "Enterprise Web Applications Built for Velocity and Conversion",
      paragraphs: [
        "Your website is the primary commercial storefront of your business. Generic WordPress templates and bloated themes cost companies millions in lost search visibility, high bounce rates, and compromised security.",
        "At Dotsquares, we build custom web platforms using production-grade Next.js, TypeScript, and modern headless CMS platforms. We guarantee 90+ Core Web Vitals scores, sub-second global page loads, and seamless CRM integrations.",
      ],
      keyTakeaway:
        "Key Takeaway: Upgrade from slow, vulnerable legacy websites to a high-speed, headless digital ecosystem that ranks at the top of search results and scales effortlessly under enterprise traffic.",
    },
    servicesGrid: {
      heading: "Our Comprehensive Web Engineering Capabilities",
      items: [
        {
          title: "Custom Corporate & B2B Web Portals",
          description: "Architecting bespoke digital experiences for high-growth tech firms, SaaS companies, and enterprise consultancies.",
          points: ["Custom component design systems", "Interactive ROI calculators", "Multi-language & geo-routing"],
        },
        {
          title: "Headless CMS & Content Workflows",
          description: "Decoupling content management from the frontend using Sanity, Strapi, or Contentful so your marketing team can publish in seconds.",
          points: ["Zero developer dependency for blogs", "Instant preview environments", "Granular editor permission models"],
        },
        {
          title: "Technical SEO & Schema Optimization",
          description: "Engineered from the ground up to conquer Google search results with programmatic metadata, automated JSON-LD schema, and semantic HTML.",
          points: ["Automated XML sitemaps", "Canonical link handling", "OpenGraph dynamic image generation"],
        },
        {
          title: "Progressive Web Apps (PWA)",
          description: "Delivering mobile-app-like experiences directly inside the mobile browser with offline caching, push notifications, and home screen installability.",
          points: ["Service worker caching", "Instant offline viewability", "Native push alerts"],
        },
      ],
    },
    techStack: {
      heading: "Modern Frontend Engineering Ecosystem",
      categories: [
        { name: "Frameworks", tools: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4"] },
        { name: "Headless CMS", tools: ["Sanity.io", "Strapi", "Payload CMS", "Contentful"] },
        { name: "Deployment", tools: ["Vercel Enterprise", "Cloudflare Pages", "AWS Amplify"] },
      ],
    },
    process: {
      heading: "Structured 5-Stage Web Development Process",
      steps: [
        { number: "01", title: "Information Architecture & UX", desc: "Sitemap planning, competitor analysis, conversion funnel mapping, and interactive wireframes." },
        { number: "02", title: "Figma Visual Design", desc: "Pixel-perfect modern branding, component design libraries, and responsive mobile mockups." },
        { number: "03", title: "Next.js Frontend Engineering", desc: "Fast server-side rendering, semantic typography, Lenis smooth scrolling, and micro-animations." },
        { number: "04", title: "Speed & Accessibility Audits", desc: "Lighthouse optimization, WCAG 2.1 AA accessibility compliance, and cross-browser QA." },
        { number: "05", title: "Go-Live & DNS Cutover", desc: "Zero downtime domain migration, SSL provisioning, analytics tracking, and search console setup." },
      ],
    },
    whyChooseUs: {
      heading: "The Dotsquares Web Engineering Standard",
      items: [
        { title: "Sub-Second Load Times", desc: "Next.js edge caching ensures your pages load in under 800ms globally.", stat: "<800ms" },
        { title: "Flawless Core Web Vitals", desc: "All green Lighthouse scores across Performance, Accessibility, and SEO.", stat: "95+ Score" },
        { title: "Zero Vendor Lock-In", desc: "Clean, documented TypeScript code that any modern developer can maintain.", stat: "100% Clean" },
        { title: "Conversion-Focused UX", desc: "Strategically positioned CTAs and frictionless lead capture forms.", stat: "+45% Leads" },
      ],
    },
    faqs: [
      { question: "Why do you use Next.js instead of WordPress?", answer: "Next.js provides unrivaled speed, zero plugin vulnerabilities, automatic image optimization, and superior SEO performance compared to traditional bloated WordPress websites." },
      { question: "Can my team edit content easily without touching code?", answer: "Yes. We integrate modern headless CMS dashboards (Sanity, Strapi, or Payload) where non-technical team members can publish pages, edit text, and upload media effortlessly." },
      { question: "Do you handle domain migration and DNS setup?", answer: "Yes, we handle the entire launch process including DNS migration, SSL certificate setup, 301 redirects to preserve SEO rankings, and search console verification." },
    ],
  },

  // ── 5. Mobile App Development ──
  "mobile-app-development": {
    slug: "mobile-app-development",
    category: "OUR SERVICES",
    visualType: "mobile-showcase",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Mobile App Development" },
    ],
    title: "Native & Cross-Platform Mobile App Development",
    description:
      "Engineering intuitive, 60fps iOS and Android mobile applications that users love. Leveraging React Native and Flutter, Dotsquares builds scalable mobile ecosystems with offline sync, biometric security, and seamless cloud backends.",
    badges: [
      "iOS & Android Unified",
      "React Native & Flutter",
      "Biometric Security",
      "Offline-First Data Sync",
    ],
    heroVisual: {
      tag: "Mobile App Studio",
      sla: "60fps Smooth UI",
      centerIcon: "layers",
      centerTitle: "Mobile Core",
      accentColor: "blue",
      nodes: [
        { label: "iOS (Apple App Store)", color: "blue" },
        { label: "Android (Google Play)", color: "green" },
        { label: "Offline Sync Engine", color: "yellow" },
        { label: "Biometric Authentication", color: "red" },
      ],
      bottomLeft: "React Native & Flutter",
      bottomRight: "App Store Approved",
    },
    overview: {
      heading: "Enterprise Mobile Solutions That Delight Users and Drive Revenue",
      paragraphs: [
        "Mobile apps demand seamless performance, intuitive touch ergonomics, and offline resilience. Whether building a consumer fintech wallet, an enterprise field-service portal, or a social network, we craft cross-platform applications that look and feel completely native.",
        "By utilizing a unified codebase with React Native or Flutter, we cut development time and maintenance overhead in half without sacrificing native performance or platform-specific UI conventions.",
      ],
      keyTakeaway:
        "Key Takeaway: Build once, deploy across both iOS and Android with 95% shared code, native device sensor integration, and enterprise-grade backend synchronization.",
    },
    servicesGrid: {
      heading: "Full-Lifecycle Mobile App Services",
      items: [
        {
          title: "Cross-Platform React Native Apps",
          description: "High-performance applications leveraging native platform bridges for optimal speed, camera access, and Bluetooth hardware integrations.",
          points: ["Near-native 60fps performance", "Rapid code iteration with fast refresh", "Over-the-air (OTA) updates via Expo EAS"],
        },
        {
          title: "Flutter Multi-Platform Development",
          description: "Pixel-perfect bespoke UI components powered by Google's Skia rendering engine for complex visual animations and charts.",
          points: ["Identical visual fidelity across OS", "Rich desktop & web export capability", "Native compilation to ARM binary"],
        },
        {
          title: "Mobile Security & Biometric Auth",
          description: "Hardware-backed keychain storage, FaceID / fingerprint authentication, certificate pinning, and end-to-end payload encryption.",
          points: ["Secure Enclave credential storage", "Biometric 1-tap sign in", "Tamper & jailbreak detection"],
        },
        {
          title: "App Store Launch & ASO Optimization",
          description: "Full management of Apple App Store and Google Play submissions, compliance guidelines, privacy manifest declarations, and keyword ASO.",
          points: ["100% review approval guarantee", "Automated release pipelines via Fastlane", "App Store Search Optimization (ASO)"],
        },
      ],
    },
    techStack: {
      heading: "Mobile Development Stack",
      categories: [
        { name: "Frameworks", tools: ["React Native", "Expo", "Flutter", "Swift (iOS)", "Kotlin (Android)"] },
        { name: "State & Data", tools: ["Redux Toolkit", "Zustand", "WatermelonDB (Offline)", "React Query"] },
        { name: "Backend & Push", tools: ["Firebase FCM", "OneSignal", "Supabase", "Node.js WebSockets"] },
      ],
    },
    process: {
      heading: "Mobile App Development Lifecycle",
      steps: [
        { number: "01", title: "App Architecture & UX Wireframes", desc: "User flows, touch ergonomics, offline data synchronization planning, and edge cases." },
        { number: "02", title: "Interactive Mobile UI Design", desc: "Human Interface Guidelines (HIG) and Material 3 compliant Figma screens." },
        { number: "03", title: "Sprint Development & Device Testing", desc: "Continuous builds distributed to your test devices via TestFlight and Google Play Beta." },
        { number: "04", title: "Store Submission & Launch", desc: "Preparation of metadata, screenshots, privacy compliance, and store review management." },
        { number: "05", title: "Post-Launch Monitoring & Analytics", desc: "Crashlytics error tracking, performance metrics, and rapid version update iterations." },
      ],
    },
    whyChooseUs: {
      heading: "Why Build Your App With Dotsquares",
      items: [
        { title: "One Codebase for iOS & Android", desc: "Save up to 40% on engineering budget with unified cross-platform technology.", stat: "50% Savings" },
        { title: "100% App Store Acceptance", desc: "Strict adherence to Apple HIG and Google Play compliance standards.", stat: "100% Approval" },
        { title: "Native Sensor Integrations", desc: "Full access to GPS, camera, push notifications, Bluetooth, and biometrics.", stat: "Full Native" },
        { title: "Offline-First Reliability", desc: "Apps continue to work seamlessly even without an active internet connection.", stat: "Zero Lag" },
      ],
    },
    faqs: [
      { question: "Should we build cross-platform or native apps?", answer: "For 95% of businesses, modern React Native or Flutter is the superior choice — saving time and money while delivering indistinguishable native performance. Pure native Swift/Kotlin is only required for heavy 3D AR or hardware-level drivers." },
      { question: "How do you handle App Store submission and rejections?", answer: "We manage the entire submission process, including metadata, privacy manifests, and developer account configuration. If Apple requests any adjustments, we address them immediately until full approval." },
    ],
  },
};

// ─── SMART FALLBACK GENERATOR FOR ANY SERVICE SLUG ──────────────────
export function getInnerPageData(rawSlug: string): InnerPageData {
  const normalizedSlug = rawSlug
    .toLowerCase()
    .replace(/^\//, "")
    .replace(/^services\//, "")
    .replace(/^industries\//, "")
    .replace(/#.*$/, "")
    .trim();

  // If hardcoded data exists, return it
  if (INNER_PAGES_DATA[normalizedSlug]) {
    return INNER_PAGES_DATA[normalizedSlug];
  }

  // Check direct aliases
  if (normalizedSlug === "web") return INNER_PAGES_DATA["website-development"];
  if (normalizedSlug === "mobile") return INNER_PAGES_DATA["mobile-app-development"];
  if (normalizedSlug === "software") return INNER_PAGES_DATA["full-stack-development"];
  if (normalizedSlug === "game") return INNER_PAGES_DATA["casino-game-development"];

  // Dynamically construct professional enterprise page
  const formattedTitle = normalizedSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // 1-to-1 unique visual and animation mapping for every single service
  let dynamicVisualType: HeroVisualType = "api-flow";
  if (normalizedSlug.includes("ecommerce") || normalizedSlug.includes("shop")) {
    dynamicVisualType = "ecommerce-cart";
  } else if (normalizedSlug.includes("api") || normalizedSlug.includes("microservice")) {
    dynamicVisualType = "api-latency";
  } else if (normalizedSlug.includes("integration") || normalizedSlug.includes("software-integration")) {
    dynamicVisualType = "software-integration";
  } else if (normalizedSlug.includes("salesforce")) {
    dynamicVisualType = "salesforce-cloud";
  } else if (normalizedSlug.includes("hubspot")) {
    dynamicVisualType = "hubspot-funnel";
  } else if (normalizedSlug.includes("zoho")) {
    dynamicVisualType = "zoho-suite";
  } else if (normalizedSlug.includes("crm")) {
    dynamicVisualType = "crm-kanban";
  } else if (normalizedSlug.includes("cloud") || normalizedSlug.includes("devops")) {
    dynamicVisualType = "cloud-cluster";
  } else if (normalizedSlug.includes("seo") || normalizedSlug.includes("search-engine")) {
    dynamicVisualType = "seo-ranking";
  } else if (normalizedSlug.includes("smm") || normalizedSlug.includes("social-media")) {
    dynamicVisualType = "smm-feed";
  } else if (normalizedSlug.includes("ppc") || normalizedSlug.includes("pay-per-click")) {
    dynamicVisualType = "ppc-auction";
  } else if (normalizedSlug.includes("performance") || normalizedSlug.includes("speed")) {
    dynamicVisualType = "speed-benchmark";
  } else if (normalizedSlug.includes("data-strategy") || normalizedSlug.includes("data-governance")) {
    dynamicVisualType = "data-strategy";
  } else if (normalizedSlug.includes("data-processing") || normalizedSlug.includes("data-storage")) {
    dynamicVisualType = "data-processing";
  } else if (normalizedSlug.includes("data-analytics") || normalizedSlug.includes("visualization")) {
    dynamicVisualType = "data-analytics";
  } else if (normalizedSlug.includes("cloud-data") || normalizedSlug.includes("migration") || normalizedSlug.includes("power-bi")) {
    dynamicVisualType = "data-migration";
  } else if (normalizedSlug.includes("custom-ai") || normalizedSlug.includes("ai-consulting")) {
    dynamicVisualType = "custom-ai-weights";
  } else if (normalizedSlug.includes("ai-business") || normalizedSlug.includes("ai-bi")) {
    dynamicVisualType = "ai-bi-matrix";
  } else if (normalizedSlug.includes("llm") || normalizedSlug.includes("ai-customer") || normalizedSlug.includes("ai-cx")) {
    dynamicVisualType = "llm-rag";
  } else if (normalizedSlug.includes("agentic") || normalizedSlug.includes("agent")) {
    dynamicVisualType = "agentic-swarm";
  } else if (normalizedSlug.includes("blockchain")) {
    dynamicVisualType = "blockchain-ledger";
  } else if (normalizedSlug.includes("ai") || normalizedSlug.includes("machine-learning")) {
    dynamicVisualType = "ai-neural";
  } else if (normalizedSlug.includes("web") || normalizedSlug.includes("website")) {
    dynamicVisualType = "lighthouse-speed";
  } else if (normalizedSlug.includes("mobile") || normalizedSlug.includes("app")) {
    dynamicVisualType = "mobile-showcase";
  } else if (normalizedSlug.includes("casino") || normalizedSlug.includes("game")) {
    dynamicVisualType = "casino-crash";
  } else if (normalizedSlug.includes("sport") || normalizedSlug.includes("betting")) {
    dynamicVisualType = "sportsbook-engine";
  }

  return {
    slug: normalizedSlug,
    category: "OUR SERVICES & SOLUTIONS",
    visualType: dynamicVisualType,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: formattedTitle },
    ],
    title: `Enterprise ${formattedTitle} Solutions & Engineering`,
    description: `Accelerate your digital capabilities with our production-grade ${formattedTitle} services. Dotsquares delivers custom architectures, modern engineering stacks, and full intellectual property ownership for ambitious enterprises.`,
    badges: [
      "Enterprise Ready",
      "High Performance",
      "100% IP Transfer",
      "Dedicated Senior Team",
    ],
    heroVisual: {
      tag: "Production Ready Architecture",
      sla: "Guaranteed SLA & Uptime",
      centerIcon: "cpu",
      centerTitle: `${formattedTitle} Core`,
      accentColor: "blue",
      nodes: [
        { label: "Scalable Architecture", color: "blue" },
        { label: "Enterprise Security", color: "red" },
        { label: "High Availability", color: "green" },
        { label: "Cloud-Native Delivery", color: "yellow" },
      ],
      bottomLeft: "Modern Production Architecture",
      bottomRight: "Enterprise Tested",
    },
    overview: {
      heading: `End-To-End ${formattedTitle} Implementation & Strategy`,
      paragraphs: [
        `Our specialized engineering team builds high-velocity ${formattedTitle} solutions tailored to your operational requirements. From architectural discovery to production deployment, we ensure predictable milestone delivery.`,
        `By leveraging cloud-native best practices and automated CI/CD verification, we enable your organization to scale with confidence, high security, and zero vendor lock-in.`,
      ],
      keyTakeaway: `Key Takeaway: Dotsquares provides turn-key ${formattedTitle} with complete source code ownership, transparent milestone pricing, and dedicated senior engineering support.`,
    },
    servicesGrid: {
      heading: `Key ${formattedTitle} Engineering Services`,
      items: [
        {
          title: `Custom ${formattedTitle} Architecture`,
          description: `Bespoke technical designs engineered to support your unique business logic, high transaction volumes, and compliance mandates.`,
          points: ["Modular architecture", "Microservice topologies", "Zero-downtime scaling"],
        },
        {
          title: "Enterprise System Integration",
          description: "Connecting your existing tools, payment gateways, CRM systems, and cloud infrastructure seamlessly via resilient APIs.",
          points: ["REST & GraphQL connectivity", "Real-time event streaming", "Automated data sync"],
        },
        {
          title: "Cloud Infrastructure & Optimization",
          description: "Modern containerized deployments across AWS, GCP, and Azure designed for low operational latency and automated failover.",
          points: ["Kubernetes & Docker", "Automated CI/CD pipelines", "Cost-effective resource allocation"],
        },
        {
          title: "Continuous Maintenance & SLA Support",
          description: "Round-the-clock telemetry, automated uptime monitoring, and rapid emergency escalation to safeguard your business continuity.",
          points: ["24/7 incident response", "Proactive security patching", "Dedicated technical account lead"],
        },
      ],
    },
    techStack: {
      heading: "Production-Grade Engineering Stack",
      categories: [
        { name: "Frontend & Web", tools: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"] },
        { name: "Backend & APIs", tools: ["Node.js", "Python", "Go", "Docker", "Kubernetes"] },
        { name: "Databases", tools: ["PostgreSQL", "Redis", "MongoDB", "ClickHouse"] },
        { name: "Cloud & DevOps", tools: ["AWS", "Google Cloud", "Vercel", "GitHub Actions"] },
      ],
    },
    process: {
      heading: "Agile Delivery Lifecycle",
      steps: [
        { number: "01", title: "Discovery & Blueprint", desc: "Detailed requirements mapping, tech stack selection, and risk assessment." },
        { number: "02", title: "Architecture & Prototype", desc: "System design, database schemas, and clickable user flow prototypes." },
        { number: "03", title: "Sprint Engineering", desc: "Bi-weekly sprint demos with test-driven development and code audits." },
        { number: "04", title: "QA & Security Audit", desc: "Automated end-to-end testing, load tests, and security verification." },
        { number: "05", title: "Deployment & SLA", desc: "Zero downtime release, monitoring setup, and full IP transfer." },
      ],
    },
    whyChooseUs: {
      heading: "Why Choose Dotsquares",
      items: [
        { title: "100% IP Transfer", desc: "You own all code, repositories, and assets from day one.", stat: "100% IP" },
        { title: "Predictable Pricing", desc: "Fixed-price milestones with zero hidden fees or surprises.", stat: "Fixed Scope" },
        { title: "Senior Engineers", desc: "Direct collaboration with senior architects without junior handoffs.", stat: "Senior Only" },
        { title: "Global Delivery", desc: "Coverage across US, European, and APAC timezones.", stat: "24/7 SLA" },
      ],
    },
    faqs: [
      { question: `What is the delivery timeline for ${formattedTitle}?`, answer: "Typical projects range between 6 to 12 weeks based on complexity and scope." },
      { question: "Do you offer post-launch maintenance?", answer: "Yes, we offer ongoing SLA maintenance packages covering bug fixes, security updates, and performance tuning." },
    ],
  };
}
