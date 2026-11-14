import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
  ],
  Services: [
    { label: "Web Development", href: "/services#web" },
    { label: "Mobile Apps", href: "/services#mobile" },
    { label: "UI/UX Design", href: "/services#design" },
    { label: "Cloud & DevOps", href: "/services#cloud" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const socials = [
  { icon: Twitter, href: SITE_CONFIG.social.twitter, label: "Twitter" },
  { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: "LinkedIn" },
  { icon: Github, href: SITE_CONFIG.social.github, label: "GitHub" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-base)]">
      <Container className="py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-xl font-bold text-[var(--text-primary)]"
            >
              <span className="text-[var(--accent)]">W</span>
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--text-secondary)]">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--text-muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-8 sm:flex-row">
          <p className="text-xs text-[var(--text-muted)]">
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Built with{" "}
            <span className="text-[var(--accent)]">Next.js</span> &{" "}
            <span className="text-[var(--accent)]">Tailwind CSS</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
