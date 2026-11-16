import { Metadata } from "next";
import { InnerPageTemplate } from "@/components/templates/InnerPageTemplate";
import { getInnerPageData } from "@/data/inner-pages";

export const metadata: Metadata = {
  title: "Next-Gen Turnkey Sportsbook Platform & Engine | Webnatixx",
  description: "High-frequency betting velocity, ultra-low latency odds delivery, and institutional compliance.",
};

export default function SportsbookPlatformPage() {
  const data = getInnerPageData("sportsbook-platform");
  return <InnerPageTemplate data={data} />;
}
