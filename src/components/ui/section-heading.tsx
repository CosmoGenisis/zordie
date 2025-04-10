
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3 mb-10",
        centered && "text-center mx-auto max-w-3xl",
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-display">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
