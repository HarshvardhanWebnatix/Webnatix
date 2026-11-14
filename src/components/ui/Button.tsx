import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none no-underline";

const variantStyles: Record<string, string> = {
  primary:
    "bg-[var(--accent)] text-[#080808] border border-[var(--accent)] hover:bg-[var(--accent-light)] hover:border-[var(--accent-light)] active:scale-[0.97]",
  secondary:
    "bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-default)] hover:border-[var(--accent)]/60 hover:bg-[var(--bg-hover)] active:scale-[0.97]",
  ghost:
    "bg-transparent text-[var(--text-secondary)] border border-transparent hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] active:scale-[0.97]",
  outline:
    "bg-transparent text-[var(--text-primary)] border border-[var(--border-default)] hover:border-[var(--accent)]/60 hover:text-[var(--accent)] active:scale-[0.97]",
};

const sizeStyles: Record<string, string> = {
  sm: "text-xs px-4 py-2",
  md: "text-sm px-5 py-2.5",
  lg: "text-sm px-7 py-3.5",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  external,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
