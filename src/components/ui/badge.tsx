import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  pulsing?: boolean;
}

export function Badge({ className, pulsing = false, children, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-subtle bg-card px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-tertiary",
        className
      )}
      {...props}
    >
      {pulsing && (
        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
      )}
      {children}
    </div>
  )
}
