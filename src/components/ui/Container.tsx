import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const sizeMap = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-[1440px]",
  "2xl": "max-w-[1780px]",
  full: "max-w-full",
};

export function Container({
  children,
  className,
  as: Tag = "div",
  size = "2xl",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-4 sm:px-8 lg:px-12 xl:px-16",
        sizeMap[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}
