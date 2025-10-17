import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

export const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1 rounded-sm font-base box-border transition-colors focus:outline-none",
  {
    variants: {
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
    },
    defaultVariants: {
      variant: "neutral",
      size: "md",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size, className }))} {...props} />
  )
}
