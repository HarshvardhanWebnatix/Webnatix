import { Metadata } from "next";
import { InnerPageTemplate } from "@/components/templates/InnerPageTemplate";
import { getInnerPageData } from "@/data/inner-pages";

export const metadata: Metadata = {
  title: "Provably Fair Casino Game Development Studio | Webnatixx",
  description: "Certified RNG mathematics, 3D animations, and cross-platform HTML5 performance.",
};

export default function CasinoGameDevelopmentPage() {
  const data = getInnerPageData("casino-game-development");
  return <InnerPageTemplate data={data} />;
}
