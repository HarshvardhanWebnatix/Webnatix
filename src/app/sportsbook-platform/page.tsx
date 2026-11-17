import { Metadata } from "next";
import { InnerPageTemplate } from "@/components/templates/InnerPageTemplate";
import { getInnerPageData } from "@/data/inner-pages";

export const metadata: Metadata = {
  title: "High-Throughput Real-Time Streaming Platforms | Webnatix Technologies",
  description: "Enterprise event-driven architecture, Kafka streaming, ultra-low latency telemetry, and microservices.",
};

export default function SportsbookPlatformPage() {
  const data = getInnerPageData("sportsbook-platform");
  return <InnerPageTemplate data={data} />;
}
