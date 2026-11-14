import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingMap = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className,
  hover = false,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]",
        hover &&
          "transition-all duration-300 hover:border-[var(--border-default)] hover:bg-[var(--bg-elevated)] hover:-translate-y-0.5",
        paddingMap[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
