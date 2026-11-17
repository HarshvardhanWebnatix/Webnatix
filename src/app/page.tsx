import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { CircularArchitecture } from "@/components/sections/CircularArchitecture";
import { Features } from "@/components/sections/Features";
import { KnowledgeHub } from "@/components/sections/KnowledgeHub";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <GlobalPresence />
      <CircularArchitecture />
      <Features />
      <KnowledgeHub />
      <Stats />
      <Testimonials />
      <CTABanner />
    </>
  );
}
