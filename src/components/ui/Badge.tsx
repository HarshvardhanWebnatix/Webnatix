import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "outline";
}

const variantStyles = {
  default: "bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]",
  accent: "bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20",
  outline: "border border-[var(--border-default)] text-[var(--text-muted)]",
};

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
