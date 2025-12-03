import * as React from "react"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

// =====================
// 🔧 Base configuration
// =====================
const cardConfig = {
  variant: {
    neutral: "border-neutral-200",
    primary: "border-primary-500",
    success: "border-success-200",
    warning: "border-warning-200",
    critical: "border-critical-200",
    information: "border-information-200",
  },
} as const

// =====================
// 🎨 CVA definition
// =====================
export const cardVariants = cva(
  "inline-block box-border rounded-md border bg-card text-card-foreground shadow-sm",
  {
    variants: cardConfig,
    defaultVariants: {
      variant: "neutral",
    },
  }
)

// =====================
// 🧠 Auto-extracted types
// =====================
export type CardVariant = keyof typeof cardConfig.variant

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
}

// =====================
// ⚙️ Components
// =====================
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "neutral", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

// =====================
// 📦 Exports
// =====================
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
}
