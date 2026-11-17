import { HeroVisualType } from "@/components/templates/HeroVisuals";
import crawledDataJson from "./dotsquares-crawled-data.json";

const CRAWLED_PAGES_DATABASE = crawledDataJson as Record<string, InnerPageData>;

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
      "We are a full stack development company that focuses on getting results. Webnatix can help you produce better software and speed up every part of your projects. Our end-to-end full stack development services cover everything. Our services speed up delivery, make things less complicated, add more features, and make sure that products may be built to be scalable and high-performance.",
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
            "Webnatix is great at building powerful APIs that enable different software systems to communicate with one another. Our API development makes sure that data exchange is fast, scalable, and secure. This makes it simple to connect to services from other sectors.",
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
      heading: "Why Global Enterprises Choose Webnatix",
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

  // ── 2. Real-Time Streaming Platforms ──
  "sportsbook-platform": {
    slug: "sportsbook-platform",
    category: "ENTERPRISE PLATFORMS & ARCHITECTURE",
    visualType: "realtime-telemetry",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Real-Time Streaming Platforms" },
    ],
    title: "Enterprise High-Throughput Real-Time Streaming Platforms",
    description:
      "Engineered for high-frequency data ingestion, sub-10ms event processing, and institutional reliability. We architect event-driven microservices, Apache Kafka clusters, WebSocket pipelines, and distributed cloud backends for global enterprises.",
    badges: [
      "Sub-5ms Latency",
      "Kafka & Event Streams",
      "Zero-Downtime Architecture",
      "High Concurrency",
    ],
    heroVisual: {
      tag: "High-Throughput Streaming Engine",
      sla: "99.999% Uptime SLA",
      centerIcon: "server",
      centerTitle: "Streaming Core",
      accentColor: "blue",
      nodes: [
        { label: "Kafka Broker Partition", color: "blue" },
        { label: "gRPC & WebSocket Stream", color: "green" },
        { label: "Redis Enterprise Cache", color: "red" },
        { label: "Distributed Event Mesh", color: "purple" },
      ],
      bottomLeft: "Sub-5ms Event Delivery",
      bottomRight: "Zero Packet Loss",
    },
    overview: {
      heading: "Low-Latency Event-Driven Architecture Engineered for Millions of Events",
      paragraphs: [
        "Modern digital enterprises demand millisecond precision, real-time telemetry processing, and impenetrable operational security. Webnatix designs custom streaming engines capable of processing hundreds of thousands of concurrent event payloads per second with sub-5ms latencies.",
        "From financial transaction routing and IoT telemetry ingestion to live collaborative workflows, our platform architectures guarantee zero packet loss, automated failover, and strict data consistency.",
      ],
      keyTakeaway:
        "Key Takeaway: Power your mission-critical applications with a resilient event-driven architecture that combines real-time data ingestion, automated backpressure handling, and horizontal cloud scalability.",
    },
    servicesGrid: {
      heading: "Real-Time Streaming & High-Throughput Infrastructure",
      items: [
        {
          title: "Event-Driven Microservices & Message Queues",
          description: "High-throughput messaging clusters on Apache Kafka, RabbitMQ, and AWS SQS designed for asynchronous decoupled processing.",
          points: ["Sub-5ms message ingestion", "Idempotent consumer handlers", "Dead-letter queue isolation"],
        },
        {
          title: "Real-Time WebSocket & gRPC Gateways",
          description: "Bi-directional streaming protocols connecting mobile, web, and IoT endpoints with instant state synchronization.",
          points: ["Sub-10ms duplex latency", "Automatic heartbeat reconnection", "Token-based zero-trust auth"],
        },
        {
          title: "Distributed In-Memory Caching Tiers",
          description: "Multi-region Redis Enterprise clusters and distributed memory tiers ensuring microsecond read latencies under peak traffic.",
          points: ["Cluster replication with failover", "Intelligent TTL invalidation", "Consistent hashing distribution"],
        },
        {
          title: "Complex Event Processing (CEP) Engines",
          description: "Real-time anomaly detection, telemetry aggregations, and rule-based stream processing using Apache Flink and Spark Streaming.",
          points: ["Tumbling & sliding window analytics", "Fraud & anomaly detection", "Immediate reactive webhooks"],
        },
        {
          title: "Multi-Cloud Horizontal Auto-Scaling",
          description: "Elastic Kubernetes (EKS/GKE) topologies that dynamically spawn consumer pods based on queue depth and CPU utilization.",
          points: ["Zero downtime rolling updates", "Cross-region active-active mesh", "Automated chaos engineering tests"],
        },
        {
          title: "Telemetry & APM Observability Stacks",
          description: "End-to-end distributed tracing with OpenTelemetry, Prometheus, and Grafana for full visibility across message lifecycles.",
          points: ["Distributed trace IDs", "Real-time latency histograms", "Predictive alert escalations"],
        },
      ],
    },
    techStack: {
      heading: "Low-Latency High-Throughput Engineering Stack",
      categories: [
        { name: "Streaming Core", tools: ["Apache Kafka", "RabbitMQ", "Apache Flink", "Go (Golang)", "Rust"] },
        { name: "Protocols", tools: ["gRPC", "WebSockets / SSE", "MQTT", "HTTP/3"] },
        { name: "Data & Caching", tools: ["Redis Enterprise Cluster", "PostgreSQL", "ClickHouse", "TimescaleDB"] },
        { name: "Orchestration", tools: ["Kubernetes", "Docker", "Terraform", "OpenTelemetry"] },
      ],
    },
    process: {
      heading: "High-Throughput Architecture Delivery Roadmap",
      steps: [
        { number: "01", title: "Throughput & Latency Audits", desc: "Assessing message throughput, concurrency peaks, and network topology requirements." },
        { number: "02", title: "Event Schema & Topology Design", desc: "Avro/Protobuf schema design, partition strategy, and consumer group mapping." },
        { number: "03", title: "Core Streaming Engine Build", desc: "Deploying high-availability brokers, producer/consumer pipelines, and caching tiers." },
        { number: "04", title: "Simulated Stress & Concurrency Testing", desc: "Benchmarking message delivery latency under 200,000+ simulated concurrent events/sec." },
        { number: "05", title: "Go-Live & 24/7 SLA Telemetry", desc: "Production rollout with zero downtime, live telemetry dashboards, and 24/7 SLA coverage." },
      ],
    },
    whyChooseUs: {
      heading: "The Webnatix Streaming Platform Advantage",
      items: [
        { title: "Sub-5ms Event Delivery", desc: "Ultra-low latency message transport without backpressure bottlenecks.", stat: "<5ms" },
        { title: "100% Platform Ownership", desc: "Own all infrastructure-as-code, Docker images, and source code directly.", stat: "100% IP" },
        { title: "Elastic Horizontal Scaling", desc: "Effortlessly handle traffic surges from 1,000 to 500,000+ events/sec.", stat: "500K/sec" },
        { title: "Enterprise High Availability", desc: "Multi-zone replication with automated failover and zero data loss.", stat: "99.999% SLA" },
      ],
    },
    faqs: [
      {
        question: "How do you guarantee zero message loss during hardware or network failures?",
        answer: "We configure multi-broker replication with acknowledged writes (acks=all), distributed partition replicas, and dead-letter queues to ensure strict at-least-once or exactly-once delivery semantics.",
      },
      {
        question: "Can your streaming engine integrate with our existing databases and microservices?",
        answer: "Yes. Using Kafka Connect, Debezium change data capture (CDC), and gRPC connectors, we integrate seamlessly with existing SQL/NoSQL databases without requiring refactoring of core applications.",
      },
      {
        question: "What protocols are supported for real-time mobile and web clients?",
        answer: "We support bi-directional WebSockets, Server-Sent Events (SSE), and gRPC-web with automated fallback to HTTP long-polling when needed.",
      },
      {
        question: "What is the typical deployment timeline for a high-throughput streaming cluster?",
        answer: "Standard production clusters take 4 to 8 weeks to design, benchmark, and deploy, including stress testing and automated CI/CD configurations.",
      },
    ],
  },

  // ── 3. Interactive 3D WebGL & Simulation Development ──
  "casino-game-development": {
    slug: "casino-game-development",
    category: "EMERGING TECH & INTERACTIVE 3D",
    visualType: "interactive-3d-sim",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Interactive 3D WebGL & Simulations" },
    ],
    title: "Interactive 3D WebGL & Enterprise Simulation Development",
    description:
      "Crafting visually breathtaking 3D web experiences, digital twins, and interactive WebGL simulations with 60fps performance and cross-platform fidelity across mobile, desktop, and modern browsers.",
    badges: [
      "WebGL 2.0 & Three.js",
      "60fps Lightweight Engine",
      "Digital Twins & Simulators",
      "Cross-Platform Fidelity",
    ],
    heroVisual: {
      tag: "Interactive 3D Graphics Studio",
      sla: "60fps Sub-Second Load",
      centerIcon: "cpu",
      centerTitle: "Graphics Engine",
      accentColor: "blue",
      nodes: [
        { label: "Three.js & WebGL 2.0", color: "blue" },
        { label: "GLSL Shader Pipelines", color: "purple" },
        { label: "Physics & Collision Engines", color: "red" },
        { label: "WebXR & AR/VR Ready", color: "green" },
      ],
      bottomLeft: "Real-Time 3D Rendering",
      bottomRight: "Hardware Accelerated",
    },
    overview: {
      heading: "Enterprise 3D Web Applications Built to Engage, Train, and Convert",
      paragraphs: [
        "Webnatix develops state-of-the-art interactive 3D web experiences, product configurators, and digital twin simulations that captivate audiences and elevate enterprise software. Using lightweight WebGL 2.0, Three.js, and WebGPU frameworks, our 3D apps load in under 2 seconds even over mobile networks while delivering smooth 60fps rendering.",
        "From architectural walkthroughs and industrial equipment simulators to interactive web-based gamified applications, we provide complete engineering excellence and custom shader pipelines.",
      ],
      keyTakeaway:
        "Key Takeaway: Upgrade static web pages with hardware-accelerated 3D graphics, interactive product configurators, and real-time simulations that deliver measurable engagement and conversion gains.",
    },
    servicesGrid: {
      heading: "Full-Spectrum 3D WebGL & Simulation Capabilities",
      items: [
        {
          title: "Custom 3D Product Configurators",
          description: "High-fidelity interactive 3D product viewports enabling customers to customize materials, colors, components, and textures in real time.",
          points: ["PBR material rendering", "Dynamic pricing calculations", "Instant AR mobile preview"],
        },
        {
          title: "Industrial Digital Twins & IoT Telemetry",
          description: "3D virtual replicas of manufacturing floors, energy facilities, and warehouse systems with live telemetry overlays.",
          points: ["Sub-second sensor data binding", "Heatmap & stress visualizers", "Interactive component diagnostics"],
        },
        {
          title: "Interactive Web-Based Gamification & Training",
          description: "Engaging interactive 3D modules for employee onboarding, compliance simulations, and educational web experiences.",
          points: ["Physics engine integration", "Cross-platform mobile touch support", "Progressive Web App installability"],
        },
        {
          title: "WebGL 2.0 & WebGPU Shader Engineering",
          description: "Custom GLSL/WGSL shaders, particle emitters, volumetric lighting, and post-processing passes optimized for low memory footprints.",
          points: ["Custom vertex & fragment shaders", "Bloom, SSR & ambient occlusion", "Sub-30MB asset footprints"],
        },
        {
          title: "WebXR, AR & VR Spatial Experiences",
          description: "Browser-based augmented and virtual reality experiences that run directly on smartphones, Apple Vision Pro, and Meta Quest headsets.",
          points: ["Zero app store download required", "Surface tracking & spatial anchoring", "WebXR device API standard"],
        },
        {
          title: "Architectural & Real Estate Walkthroughs",
          description: "Photorealistic 3D virtual tours with floorplan navigation, daytime/nighttime lighting switches, and high-resolution texture streaming.",
          points: ["BIM model optimization", "Smooth first-person navigation", "Interactive annotation hotspots"],
        },
      ],
    },
    techStack: {
      heading: "3D Engine & Graphics Engineering Stack",
      categories: [
        { name: "3D & WebGL", tools: ["Three.js", "WebGL 2.0", "WebGPU", "Babylon.js", "GLSL Shaders"] },
        { name: "Physics & Engine", tools: ["Cannon.js", "Rapier Physics", "Unity WebGL Export", "Unreal Engine Pixel Streaming"] },
        { name: "Asset Pipelines", tools: ["Blender 3D", "Draco Compression", "glTF / GLB", "Substance Painter"] },
        { name: "Frontend", tools: ["Next.js 16", "React Three Fiber", "TypeScript", "Tailwind CSS"] },
      ],
    },
    process: {
      heading: "Interactive 3D Development Lifecycle",
      steps: [
        { number: "01", title: "Concept & Technical Feasibility", desc: "Asset optimization review, polygon budget calculation, and interactive UX wireframes." },
        { number: "02", title: "3D Modeling & Shader Creation", desc: "Low-poly mesh modeling, PBR texture baking, and custom GLSL shader scripting." },
        { number: "03", title: "WebGL Scene Assembly", desc: "Lighting setup, camera orbit controls, physics bindings, and UI overlay integration." },
        { number: "04", title: "Performance & FPS Benchmarking", desc: "Memory leak audits, draw call batching, and cross-device 60fps verification." },
        { number: "05", title: "Deployment & CDN Optimization", desc: "Draco mesh compression, edge caching, and seamless web embedding." },
      ],
    },
    whyChooseUs: {
      heading: "Why Global Brands Choose Our 3D Studio",
      items: [
        { title: "Sub-2s Lightweight Loads", desc: "Advanced Draco compression ensures zero drop-off on mobile devices.", stat: "<2s Load" },
        { title: "100% Bespoke 3D Assets & IP", desc: "You own all 3D models, shader code, and interactive logic outright.", stat: "100% IP" },
        { title: "60 FPS Smooth Performance", desc: "Optimized draw calls and batching guarantee stutter-free rendering.", stat: "60 FPS" },
        { title: "Browser-Native & App-Free", desc: "Runs directly in Safari, Chrome, and Edge without installing plugins.", stat: "100% Web" },
      ],
    },
    faqs: [
      {
        question: "Do users need to install special software or plugins to view 3D apps?",
        answer: "No. All our 3D experiences run natively inside standard mobile and desktop web browsers using hardware-accelerated WebGL 2.0 and HTML5 Canvas.",
      },
      {
        question: "How do you ensure 3D web applications load quickly over mobile networks?",
        answer: "We apply aggressive polygon reduction, Draco geometric compression, texture mipmapping, and lazy-loading of 3D assets to keep file sizes well under 15MB.",
      },
      {
        question: "Can 3D configurators connect with our existing e-commerce or ERP systems?",
        answer: "Yes. Our 3D viewports expose clean JavaScript and REST APIs to dynamically synchronize selected configurations, SKU codes, and pricing directly with Shopify, Magento, or custom backends.",
      },
      {
        question: "What is the typical development timeline for a custom 3D web app?",
        answer: "A standard 3D product configurator takes 4 to 6 weeks. Complex digital twins or industrial simulation platforms take 8 to 12 weeks.",
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
      "Transforming digital presence into a measurable revenue engine. Webnatix engineers ultra-fast, search-engine dominant websites and web portals powered by Next.js 16, headless architectures, and enterprise design systems that convert visitors into qualified enterprise clients.",
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
        "At Webnatix, we build custom web platforms using production-grade Next.js, TypeScript, and modern headless CMS platforms. We guarantee 90+ Core Web Vitals scores, sub-second global page loads, and seamless CRM integrations.",
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
      heading: "The Webnatix Web Engineering Standard",
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
      "Engineering intuitive, 60fps iOS and Android mobile applications that users love. Leveraging React Native and Flutter, Webnatix builds scalable mobile ecosystems with offline sync, biometric security, and seamless cloud backends.",
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
      heading: "Why Build Your App With Webnatix",
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

  // 1. If hardcoded data exists, return it
  if (INNER_PAGES_DATA[normalizedSlug]) {
    return INNER_PAGES_DATA[normalizedSlug];
  }

  // 2. Check direct aliases
  if (normalizedSlug === "web") return INNER_PAGES_DATA["website-development"];
  if (normalizedSlug === "mobile") return INNER_PAGES_DATA["mobile-app-development"];
  if (normalizedSlug === "software") return INNER_PAGES_DATA["full-stack-development"];
  if (normalizedSlug === "game") return INNER_PAGES_DATA["casino-game-development"];

  // 3. Check Crawled Dotsquares Database directly
  if (CRAWLED_PAGES_DATABASE[normalizedSlug]) {
    return CRAWLED_PAGES_DATABASE[normalizedSlug];
  }

  // 4. Check fuzzy slug matches in crawled data (e.g. python-development -> python)
  const baseSlug = normalizedSlug
    .replace(/-development$/, "")
    .replace(/-solutions$/, "")
    .replace(/-consulting$/, "")
    .replace(/-services$/, "");
  if (CRAWLED_PAGES_DATABASE[baseSlug]) {
    return CRAWLED_PAGES_DATABASE[baseSlug];
  }

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
  } else if (normalizedSlug.includes("casino") || normalizedSlug.includes("game") || normalizedSlug.includes("3d") || normalizedSlug.includes("simulation")) {
    dynamicVisualType = "interactive-3d-sim";
  } else if (normalizedSlug.includes("sport") || normalizedSlug.includes("streaming") || normalizedSlug.includes("telemetry")) {
    dynamicVisualType = "realtime-telemetry";
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
    description: `Accelerate your digital capabilities with our production-grade ${formattedTitle} services. Webnatix delivers custom architectures, modern engineering stacks, and full intellectual property ownership for ambitious enterprises.`,
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
      keyTakeaway: `Key Takeaway: Webnatix provides turn-key ${formattedTitle} with complete source code ownership, transparent milestone pricing, and dedicated senior engineering support.`,
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
      heading: "Why Choose Webnatix",
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
