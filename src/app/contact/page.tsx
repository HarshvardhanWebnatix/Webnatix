import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Webnatix or just say hello.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <section className="section-py">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left — info */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                Get In Touch
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-[var(--text-primary)] sm:text-5xl">
                Let's Build
                <br />
                <GradientText>Something Great</GradientText>
              </h1>
              <p className="mb-10 leading-relaxed text-[var(--text-secondary)]">
                Whether you have a detailed spec or a rough idea, we'd love to
                hear from you. Tell us about your project and we'll get back to
                you within one business day.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: SITE_CONFIG.email },
                  { icon: Phone, label: "Phone", value: SITE_CONFIG.phone },
                  { icon: MapPin, label: "Location", value: SITE_CONFIG.address },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--accent)]">
                      <Icon size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-muted)]">{label}</div>
                      <div className="text-sm font-medium text-[var(--text-primary)]">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8">
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {["First name", "Last name"].map((label) => (
                    <div key={label}>
                      <label className="mb-1.5 block text-xs font-medium text-[var(--text-secondary)]">
                        {label}
                      </label>
                      <input
                        type="text"
                        placeholder={label}
                        className="w-full rounded-lg border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition-colors focus:border-[var(--accent)]"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[var(--text-secondary)]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition-colors focus:border-[var(--accent)]"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[var(--text-secondary)]">
                    What are you building?
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-lg border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition-colors focus:border-[var(--accent)]"
                  />
                </div>
                <Button variant="primary" size="lg" className="w-full justify-center">
                  Send Message <ArrowRight size={16} />
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
