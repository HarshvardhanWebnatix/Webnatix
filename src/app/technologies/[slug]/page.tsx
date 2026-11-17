import { Metadata } from "next";
import { InnerPageTemplate } from "@/components/templates/InnerPageTemplate";
import { getInnerPageData } from "@/data/inner-pages";

interface TechnologySlugPageProps {
  params: Promise<{ slug: string }>;
}

const ALL_TECH_SLUGS = [
  "ios",
  "android",
  "react-native",
  "flutter",
  "python",
  "mern",
  "java",
  "laravel",
  "nextjs",
  "shopify",
  "wordpress",
  "hubspot-cms",
  "salesforce",
  "zoho",
  "node",
  "php",
  "aws",
  "azure",
];

export async function generateStaticParams() {
  return ALL_TECH_SLUGS.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: TechnologySlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getInnerPageData(slug);
  return {
    title: `${data.title} | Webnatix Technologies`,
    description: data.description,
  };
}

export default async function TechnologySlugPage({ params }: TechnologySlugPageProps) {
  const { slug } = await params;
  const data = getInnerPageData(slug);
  return <InnerPageTemplate data={data} />;
}
