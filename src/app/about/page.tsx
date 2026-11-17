import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Webnatix — Software, AI & Digital Transformation",
  description:
    "Learn about Webnatix Technologies — global software engineering studio delivering scalable cloud platforms, mobile apps, and custom AI systems.",
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-py">
        <Container size="lg">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              Who We Are · Engineering Excellence
            </p>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-[var(--text-primary)] sm:text-6xl">
              Your Trusted Global
              <br />
              <GradientText>Technology Partner</GradientText>
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]">
              Webnatix works with ambitious businesses across the globe to design, develop, and scale high-quality digital solutions. With certified engineers and proven delivery capabilities, we help you build systems that are efficient, scalable, and ready for future growth.
            </p>
            <Button variant="primary" href="/contact">
              Work With Us <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-py border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <Container>
          <h2 className="mb-12 text-2xl font-bold text-[var(--text-primary)]">
            Our Values
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Quality over quantity",
                desc: "We take on fewer projects so we can deliver exceptional work on each one.",
              },
              {
                title: "Radical transparency",
                desc: "No surprises. You always know where your project stands.",
              },
              {
                title: "Long-term thinking",
                desc: "We build systems that are easy to extend, not just fast to ship.",
              },
              {
                title: "Craft that shows",
                desc: "The details matter. Users notice when care goes into every interaction.",
              },
              {
                title: "Partnership, not service",
                desc: "We act like a co-founder on your engineering team, not an order-taker.",
              },
              {
                title: "Continuous improvement",
                desc: "We retrospect on every project and get better with each one.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6"
              >
                <h3 className="mb-2 font-semibold text-[var(--text-primary)]">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
