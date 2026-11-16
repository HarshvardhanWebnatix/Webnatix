import { Metadata } from "next";
import { InnerPageTemplate } from "@/components/templates/InnerPageTemplate";
import { getInnerPageData, INNER_PAGES_DATA } from "@/data/inner-pages";

interface IndustrySlugPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(INNER_PAGES_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: IndustrySlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getInnerPageData(slug);
  return {
    title: `${data.title} | Webnatixx Technologies`,
    description: data.description,
  };
}

export default async function IndustrySlugPage({ params }: IndustrySlugPageProps) {
  const { slug } = await params;
  const data = getInnerPageData(slug);
  return <InnerPageTemplate data={data} />;
}
