import type { Metadata } from "next";
import { InnerPageTemplate } from "@/components/templates/InnerPageTemplate";
import { getInnerPageData } from "@/data/inner-pages";

export const metadata: Metadata = {
  title: "Industry Solutions & Vertical Engineering | Webnatixx Technologies",
  description:
    "Enterprise technology solutions for Finance, Manufacturing, Healthcare, Retail, and Global Supply Chains.",
};

export default function IndustriesPage() {
  const data = getInnerPageData("sportsbook-platform");
  return <InnerPageTemplate data={data} />;
}
