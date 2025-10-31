import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative inline-flex w-full items-start gap-2 p-2 box-border text-base rounded-sm",
  {
    variants: {
      variant: {
        critical: "bg-critical-75 text-critical-700",
        information: "bg-information-75 text-information-700",
        neutral: "bg-neutral-75 text-neutral-700",
        primary: "bg-primary-500 text-primary-0",
        success: "bg-success-75 text-success-700",
        warning: "bg-warning-75 text-warning-700",
      },
      mode: {
        default: "",
        light: "bg-white", // overrides background with light mode
      },
    },
    compoundVariants: [
      // Light variants (white background + colored text)
      { variant: "critical", mode: "light", class: "bg-neutral-0 text-critical-700" },
      { variant: "information", mode: "light", class: "bg-neutral-0 text-information-700" },
      { variant: "neutral", mode: "light", class: "bg-neutral-0 text-neutral-700" },
      { variant: "primary", mode: "light", class: "bg-neutral-0 text-primary-700" },
      { variant: "success", mode: "light", class: "bg-neutral-0 text-success-700" },
      { variant: "warning", mode: "light", class: "bg-neutral-0 text-warning-700" },
    ],
    defaultVariants: {
      variant: "neutral",
      mode: "default",
    },
  } as const
) 

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, mode, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant, mode }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("mb-1 font-medium text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-bases [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
