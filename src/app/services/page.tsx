import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Services as ServicesSection } from "@/components/sections/Services";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack web and mobile development, UI/UX design, cloud infrastructure, and AI integration.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <section className="section-py pb-0">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              Services
            </p>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-[var(--text-primary)] sm:text-6xl">
              Everything You Need
              <br />
              <GradientText>Under One Roof</GradientText>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]">
              We're not a generalist agency. We're a focused team that does web,
              mobile, design, and cloud at a very high level.
            </p>
          </div>
        </Container>
      </section>

      <ServicesSection />
      <CTABanner />
    </div>
  );
}
