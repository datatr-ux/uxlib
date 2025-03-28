import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        neutral: "bg-neutral-100 text-neutral-700 hover:bg-neutral-100/80",
        primary: "bg-primary text-primary-foreground hover:bg-primary/80",
        info: "bg-primary-100 text-primary-900 hover:bg-primary-100/80",
        success: "bg-success-100 text-success-900 hover:bg-success-100/80",
        warning: "bg-warning-100 text-warning-900 hover:bg-warning-100/80",
        destructive: "bg-critical-100 text-critical-900 hover:bg-critical-100/80",
        alpha: "bg-alpha text-primary-700 hover:bg-alpha/80",
        beta: "bg-beta text-primary-900 hover:bg-beta/80",
        new: "bg-new text-primary-900 hover:bg-new/80",
        promotion: "bg-promotion text-white hover:bg-promotion-100/80",
        outline: "text-foreground border-border"
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, className }))} {...props} />
  )
}

export { Badge, badgeVariants }
