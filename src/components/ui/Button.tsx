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
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none";

const variantStyles = {
  primary:
    "bg-[var(--accent)] text-[#080808] hover:bg-[var(--accent-light)] active:scale-[0.98]",
  secondary:
    "bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-default)] hover:border-[var(--accent)] hover:bg-[var(--bg-hover)] active:scale-[0.98]",
  ghost:
    "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] active:scale-[0.98]",
  outline:
    "border border-[var(--border-default)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-[0.98]",
};

const sizeStyles = {
  sm: "text-sm px-4 py-2 rounded-lg",
  md: "text-sm px-5 py-2.5 rounded-lg",
  lg: "text-base px-7 py-3.5 rounded-xl",
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
