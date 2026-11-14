import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center">
      <Container size="sm">
        <p className="mb-4 text-7xl font-bold text-[var(--border-default)]">404</p>
        <h1 className="mb-4 text-3xl font-bold text-[var(--text-primary)]">
          Page <GradientText>Not Found</GradientText>
        </h1>
        <p className="mb-8 text-[var(--text-secondary)]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button variant="primary" href="/">
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
