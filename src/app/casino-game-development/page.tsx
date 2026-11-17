import { Metadata } from "next";
import { InnerPageTemplate } from "@/components/templates/InnerPageTemplate";
import { getInnerPageData } from "@/data/inner-pages";

export const metadata: Metadata = {
  title: "Interactive 3D WebGL & Simulation Development | Webnatix Technologies",
  description: "Cross-platform 3D web applications, digital twins, Three.js shaders, and interactive enterprise simulations.",
};

export default function CasinoGameDevelopmentPage() {
  const data = getInnerPageData("casino-game-development");
  return <InnerPageTemplate data={data} />;
}