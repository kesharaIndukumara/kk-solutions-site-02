import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ 
  label, 
  title, 
  description, 
  align = "center", 
  className,
  ...props 
}: SectionHeadingProps) {
  return (
    <div 
      className={cn(
        "flex flex-col gap-4 mb-16",
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left max-w-2xl",
        className
      )}
      {...props}
    >
      <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-tertiary">
        {label}
      </span>
      <h2 className="font-heading text-4xl md:text-5xl tracking-[-0.02em] text-primary">
        {title}
      </h2>
      {description && (
        <p className="text-secondary text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
