import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

export function GradientText({
  children,
  className,
  from = "var(--text-primary)",
  to = "var(--accent)",
}: GradientTextProps) {
  return (
    <span
      className={cn("text-gradient", className)}
      style={{
        background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold leading-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
