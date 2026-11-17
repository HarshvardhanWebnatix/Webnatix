const fs = require('fs');
const path = require('path');

function cleanHtml(html) {
  if (!html) return '';
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function parseRawFile(filename) {
  const filePath = path.join('raw_crawl', filename);
  if (!fs.existsSync(filePath)) return null;
  const html = fs.readFileSync(filePath, 'utf8');

  // Title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  let title = titleMatch ? cleanHtml(titleMatch[1]) : '';
  title = title.replace(/\s*\|\s*webnatix.*$/i, '').trim();

  // Meta description
  const metaMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i) ||
                    html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i);
  let description = metaMatch ? cleanHtml(metaMatch[1]) : '';

  // H1
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h1 = h1Match ? cleanHtml(h1Match[1]) : title;

  // Meaningful Paragraphs (exclude form text, footers)
  const pMatches = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map(m => cleanHtml(m[1]))
    .filter(p => p.length > 40 &&
      !p.includes('Fill Out the Form') &&
      !p.includes('By submitting') &&
      !p.includes('Privacy Policy') &&
      !p.includes('copyright') &&
      !p.includes('cookies') &&
      !p.includes('+44') &&
      !p.includes('+1 ') &&
      !p.includes('+91'));

  // H2s
  const h2Matches = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)]
    .map(m => cleanHtml(m[1]))
    .filter(t => t.length > 5 && t.length < 120 && !t.includes('Fill Out'));

  // H3s
  const h3Matches = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)]
    .map(m => cleanHtml(m[1]))
    .filter(t => t.length > 5 && t.length < 90 && !t.includes('UK') && !t.includes('USA'));

  // Bullet points
  const liMatches = [...html.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
    .map(m => cleanHtml(m[1]))
    .filter(li => li.length > 10 && li.length < 140 && !li.includes('+') && !li.includes('http') && !li.includes('Copyright'));

  return {
    h1,
    title,
    description: description || (pMatches[0] ? pMatches[0].slice(0, 220) + '...' : ''),
    paragraphs: pMatches.slice(0, 4),
    headings: h2Matches.slice(0, 8),
    features: h3Matches.slice(0, 8),
    bullets: liMatches.slice(0, 16)
  };
}

// Visual type mapping
const VISUAL_TYPE_MAP = {
  // Services
  'full-stack-development': 'api-flow',
  'website-development': 'lighthouse-speed',
  'mobile-app-development': 'mobile-showcase',
  'ecommerce-development': 'ecommerce-cart',
  'api-development': 'api-latency',
  'custom-ai': 'custom-ai-weights',
  'data-analytics': 'data-analytics',
  'data-strategy': 'data-strategy',
  'blockchain-development': 'blockchain-ledger',
  'custom-software-integration': 'software-integration',
  'cloud-solutions': 'cloud-cluster',
  'search-engine-optimization': 'seo-ranking',
  'salesforce-solutions': 'salesforce-cloud',
  'hubspot-solutions': 'hubspot-funnel',
  'zoho-solutions': 'zoho-suite',
  'agentic-ai': 'agentic-swarm',
  'ai-business-intelligence': 'ai-bi-matrix',
  'llm-solutions': 'llm-rag',
  'ai-machine-learning': 'ai-neural',
  'casino-game-development': 'interactive-3d-sim',
  'sportsbook-platform': 'realtime-telemetry',

  // Technologies
  'python': 'api-flow',
  'react-native': 'mobile-showcase',
  'flutter': 'mobile-showcase',
  'ios': 'mobile-showcase',
  'android': 'mobile-showcase',
  'laravel': 'api-latency',
  'nextjs': 'lighthouse-speed',
  'shopify': 'ecommerce-cart',
  'wordpress': 'lighthouse-speed',
  'hubspot-cms': 'hubspot-funnel',
  'salesforce': 'salesforce-cloud',
  'zoho': 'zoho-suite',
  'node': 'api-latency',
  'mern': 'api-flow',
  'java': 'api-latency',

  // Industries
  'banking-payment': 'api-latency',
  'healthcare': 'ai-neural',
  'retail-fmcg': 'ecommerce-cart',
  'logistics': 'cloud-cluster',
  'real-estate': 'interactive-3d-sim',
  'travel': 'realtime-telemetry',
  'education': 'llm-rag',
  'automotive': 'interactive-3d-sim',
  'media': 'data-analytics'
};

const rawFiles = fs.readdirSync('raw_crawl').filter(f => f.endsWith('.html'));
const crawledDatabase = {};

for (const file of rawFiles) {
  const slug = file.replace('.html', '');
  const parsed = parseRawFile(file);
  if (!parsed) continue;

  const visualType = VISUAL_TYPE_MAP[slug] || 'api-flow';
  const displayTitle = parsed.h1 || parsed.title || slug.toUpperCase();

  // Build structured feature cards from headings & bullets
  const cards = [];
  const cardTitles = parsed.features.length >= 4 ? parsed.features : parsed.headings;
  for (let i = 0; i < Math.min(6, cardTitles.length); i++) {
    const cardTitle = cardTitles[i];
    const bulletSlice = parsed.bullets.slice(i * 2, i * 2 + 3);
    cards.push({
      title: cardTitle,
      description: `Enterprise-grade ${cardTitle.toLowerCase()} services engineered with CMMI Level 3 maturity, rigorous security audits, and dedicated full-time architects.`,
      points: bulletSlice.length ? bulletSlice : ["Proven enterprise architecture", "Zero downtime deployments", "100% IP & code handover"]
    });
  }

  // If no cards were found, generate 4 default based on bullets
  if (cards.length === 0) {
    cards.push(
      { title: "Enterprise Architecture & Discovery", description: "In-depth technical consultation, requirement mapping, and scalable cloud topology blueprints.", points: ["CMMI Level 3 standards", "Security & compliance review", "Architecture roadmap"] },
      { title: "Custom Engineering & Implementation", description: "Full lifecycle agile software engineering with automated unit testing and peer code reviews.", points: ["Sprint-based velocity", "Automated regression testing", "Clean TypeScript & API standards"] },
      { title: "Integration & Cloud Modernization", description: "Seamless RESTful/GraphQL connectivity across enterprise legacy platforms, ERPs, and cloud backends.", points: ["Zero-downtime cutover", "Resilient microservices", "Sub-50ms latency SLAs"] },
      { title: "24/7 SLA Support & Optimization", description: "Round-the-clock proactive monitoring, telemetry analytics, and continuous performance tuning.", points: ["Proactive telemetry", "Automated failover", "Dedicated account lead"] }
    );
  }

  crawledDatabase[slug] = {
    slug,
    category: slug.includes('industr') || ['banking-payment', 'healthcare', 'retail-fmcg', 'logistics', 'real-estate', 'travel', 'education', 'automotive', 'media'].includes(slug) ? "INDUSTRY SOLUTIONS" : "OUR SERVICES & TECHNOLOGIES",
    visualType,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Capabilities", href: "/services" },
      { label: displayTitle }
    ],
    title: displayTitle,
    description: parsed.description || `Empowering global businesses with 24+ years of proven expertise in ${displayTitle}. Certified CMMI Level 3 engineering, dedicated in-house developers, and 100% IP ownership.`,
    badges: [
      "24+ Years Experience",
      "1,200+ In-House Engineers",
      "CMMI Level 3 Certified",
      "100% IP Ownership"
    ],
    heroVisual: {
      tag: "Enterprise Benchmark",
      sla: "99.99% Uptime SLA",
      centerIcon: "shield",
      centerTitle: `${slug.split('-')[0].toUpperCase()} Core`,
      accentColor: "blue",
      nodes: [
        { label: "Scalable Architecture", color: "blue" },
        { label: "ISO 27001 Security", color: "red" },
        { label: "CMMI Level 3 QA", color: "green" },
        { label: "Global Delivery GCC", color: "yellow" }
      ],
      bottomLeft: "Full-Time Technical Team",
      bottomRight: "Zero Vendor Lock-in"
    },
    overview: {
      heading: parsed.headings[0] || `Proven Excellence in ${displayTitle}`,
      paragraphs: parsed.paragraphs.length ? parsed.paragraphs : [
        `webnatix is widely recognized for its excellence in ${displayTitle}, serving as the go-to partner for Fortune 500 companies, SMEs, and high-growth enterprises worldwide. Our capabilities include developing scalable applications, crafting efficient architectures, and utilizing advanced frameworks to foster innovation.`,
        `With over 24+ years in business and 27,000+ completed projects, our dedicated full-time developers and technical architects ensure seamless delivery across all time zones with zero operational downtime.`
      ],
      keyTakeaway: `Key Takeaway: Leverage 24+ years of engineering maturity with full source code ownership, flexible engagement models, and dedicated technical architects.`
    },
    servicesGrid: {
      heading: parsed.headings[1] || `Key ${displayTitle} Capabilities`,
      items: cards
    },
    techStack: {
      heading: "Enterprise Technology Architecture & Standards",
      categories: [
        { name: "Frameworks & Core", tools: parsed.bullets.slice(0, 4).length ? parsed.bullets.slice(0, 4) : ["Modern Frameworks", "RESTful / GraphQL APIs", "Microservices", "Event-Driven Streams"] },
        { name: "Databases & Storage", tools: ["PostgreSQL", "Redis Enterprise", "MongoDB", "Snowflake / BigQuery"] },
        { name: "Cloud & Infrastructure", tools: ["AWS", "Microsoft Azure", "Google Cloud", "Docker & Kubernetes"] },
        { name: "Quality & Governance", tools: ["CMMI Level 3", "ISO 27001", "Cyber Essentials Plus", "SonarQube CI/CD"] }
      ]
    },
    process: {
      heading: "Agile Delivery Lifecycle & Milestones",
      steps: [
        { number: "01", title: "Discovery & Blueprint", desc: "Detailed requirements mapping, tech stack selection, schema design, and technical risk assessment." },
        { number: "02", title: "Architecture & UI/UX Design", desc: "User flows, component design systems, and high-fidelity interactive Figma prototypes." },
        { number: "03", title: "Sprint-Based Engineering", desc: "Bi-weekly sprint demos, test-driven development, continuous integration, and transparent status tracking." },
        { number: "04", title: "Security & QA Audits", desc: "Automated end-to-end testing, load testing, penetration audits, and compliance validation." },
        { number: "05", title: "Production Deployment & SLA", desc: "Zero-downtime deployment, infrastructure monitoring, 24/7 technical escalation, and dedicated SLA." }
      ]
    },
    whyChooseUs: {
      heading: "Why Global Enterprises Choose Us",
      items: [
        { title: "24+ Years of Proven Excellence", desc: "Founded in 2002, successfully delivering over 27,000 projects worldwide.", stat: "27K+ Projects" },
        { title: "1,200+ In-House Engineers", desc: "No unvetted third-party outsourcing. Dedicated full-time certified technical experts.", stat: "1,200+ Team" },
        { title: "100% IP & Code Ownership", desc: "All source code, repositories, and cloud assets belong strictly to you from day one.", stat: "100% IP" },
        { title: "Global Delivery Network", desc: "State-of-the-art GCC in Jaipur collaborating with hubs in London, Maryland, Melbourne, and Dubai.", stat: "24/7 SLA" }
      ]
    },
    faqs: [
      {
        question: `How do you guarantee code quality and security in ${displayTitle}?`,
        answer: "We adhere strictly to CMMI Level 3 agile processes, peer code reviews, SonarQube static code analysis, and ISO 27001 data protection protocols on every release."
      },
      {
        question: "Do I retain full intellectual property (IP) rights to the code?",
        answer: "Yes, 100%. All repository source code, deployment assets, documentation, and cloud access credentials belong exclusively to you."
      },
      {
        question: "Can your developers integrate with our existing internal team?",
        answer: "Yes. Our engineers operate seamlessly via dedicated development pods or staff augmentation, integrating directly into your Jira, Slack, and GitHub workflows."
      },
      {
        question: "What engagement models do you offer?",
        answer: "We offer flexible models including dedicated agile teams, fixed-price milestone delivery, and hourly time-and-materials to best fit your project scope and budget."
      }
    ]
  };
}

const outPath = path.join('src', 'data', 'webnatix-crawled-data.json');
fs.writeFileSync(outPath, JSON.stringify(crawledDatabase, null, 2), 'utf8');
console.log(`Successfully generated crawled data for ${Object.keys(crawledDatabase).length} pages into ${outPath}`);
