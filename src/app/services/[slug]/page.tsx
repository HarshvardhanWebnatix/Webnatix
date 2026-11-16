import { Metadata } from "next";
import { InnerPageTemplate } from "@/components/templates/InnerPageTemplate";
import { getInnerPageData, INNER_PAGES_DATA } from "@/data/inner-pages";

interface ServiceSlugPageProps {
  params: Promise<{ slug: string }>;
}

const ALL_SERVICE_SLUGS = [
  "full-stack-development",
  "website-development",
  "mobile-app-development",
  "ecommerce-development",
  "game-development",
  "api-development",
  "custom-software-integration",
  "crm-solutions",
  "cloud-solutions",
  "ai-machine-learning",
  "salesforce-solutions",
  "hubspot-solutions",
  "zoho-solutions",
  "search-engine-optimization",
  "social-media-marketing",
  "pay-per-click",
  "performance-optimization",
  "data-strategy",
  "data-processing",
  "data-governance",
  "data-storage",
  "data-analytics",
  "cloud-data-migration",
  "custom-ai",
  "ai-consulting",
  "ai-business-intelligence",
  "llm-solutions",
  "ai-customer-experience",
  "agentic-ai",
  "blockchain-development",
];

export async function generateStaticParams() {
  return ALL_SERVICE_SLUGS.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ServiceSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getInnerPageData(slug);
  return {
    title: `${data.title} | Webnatixx Technologies`,
    description: data.description,
  };
}

export default async function ServiceSlugPage({ params }: ServiceSlugPageProps) {
  const { slug } = await params;
  const data = getInnerPageData(slug);
  return <InnerPageTemplate data={data} />;
}
