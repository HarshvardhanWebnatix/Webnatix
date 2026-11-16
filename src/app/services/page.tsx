import type { Metadata } from "next";
import { InnerPageTemplate } from "@/components/templates/InnerPageTemplate";
import { getInnerPageData } from "@/data/inner-pages";

export const metadata: Metadata = {
  title: "Enterprise Full Stack Development Services | Webnatixx Technologies",
  description:
    "Enterprise-grade full-stack web, mobile, and cloud software engineering studio delivering scalable digital architectures with 100% IP ownership.",
};

export default function ServicesPage() {
  const data = getInnerPageData("full-stack-development");
  return <InnerPageTemplate data={data} />;
}
