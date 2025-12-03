import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeConfig = {
  variant: {
    alpha: "bg-alpha text-primary-900",
    beta: "bg-beta text-primary-900",
    critical: "bg-critical-100 text-critical-900",
    information: "bg-information-100 text-information-900",
    neutral: "bg-neutral-100 text-neutral-700",
    new: "bg-new text-primary-900",
    primary: "bg-primary-500 text-neutral-0",
    promotion: "bg-promotion text-neutral-0",
    success: "bg-success-100 text-success-900",
    warning: "bg-warning-100 text-warning-900",
    outline: "border border-border text-foreground bg-transparent",
  },
  size: {
    sm: "px-[6px] py-[2px] h-[19px] text-[0.75rem]",
    md: "px-[8px] py-[4px] h-[26px] text-[0.875rem]",
    lg: "px-[10px] py-[4px] h-[28px] text-[1rem]",
  },
} as const;
const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1 rounded-sm font-base box-border transition-colors focus:outline-none",
  {
    variants: badgeConfig,
    defaultVariants: {
      variant: "neutral",
      size: "md",
    },
  }
)

export type BadgeVariant = keyof typeof badgeConfig.variant
export type BadgeSize = keyof typeof badgeConfig.size

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  asChild?: boolean
}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }